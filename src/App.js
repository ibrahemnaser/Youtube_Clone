import { useState, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageContext, ModeContext } from "./contexts/contexts";

// dark mode mui
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getDesignTokens } from "./utils/theme";

import { Box } from "@mui/material";

// import all components from single file
import {
  Navbar,
  Feed,
  VideoDetails,
  ChannelDetails,
  SearchFeed,
} from "./components";

import Cookies from "js-cookie";

const App = () => {
  const [languageDetected, setLanguageDetected] = useState(
    Cookies.get("i18next")
  );
  const [mode, setMode] = useState("dark");

  // Update the theme only if the mode changes
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Box sx={{ backgroundColor: "primary.dark" }}>
            <LanguageContext.Provider
              value={{ languageDetected, setLanguageDetected }}
            >
              <Navbar />
              <Routes>
                <Route path="/" exact element={<Feed />} />
                <Route path="/video/:id" element={<VideoDetails />} />
                <Route path="/channel/:id" element={<ChannelDetails />} />
                <Route path="/search/:searchTerm" element={<SearchFeed />} />
              </Routes>
            </LanguageContext.Provider>
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </ModeContext.Provider>
  );
};

export default App;

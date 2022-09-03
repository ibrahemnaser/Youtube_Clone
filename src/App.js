import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Box } from "@mui/material";

// import all components from single file
import {
  Navbar,
  Feed,
  VideoDetails,
  ChannelDetails,
  SearchFeed,
} from "./components";

// context
import { LanguageContext } from "./contexts/languageContext";

import Cookies from "js-cookie";

// language package
// import i18n from "i18next";

const App = () => {
  const [languageDetected, setLanguageDetected] = useState(
    Cookies.get("i18next")
  );

  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
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
  );
};

export default App;

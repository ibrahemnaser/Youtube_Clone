import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import { Language, DarkMode, Brightness5 } from "@mui/icons-material";
import ReactCountryFlag from "react-country-flag";
import { LanguageContext, ModeContext } from "../contexts/contexts";
import { logo } from "../utils/constants";
import { SearchBar } from "./";

// language translator
import i18n from "i18next";

const Navbar = () => {
  const { languageDetected: lang, setLanguageDetected } =
    useContext(LanguageContext);

  const { mode, setMode } = useContext(ModeContext);

  const [pageDirection, setPageDirection] = useState(
    lang === "ar" ? "rtl" : "ltr"
  );
  const [showLang, setShowLang] = useState(false);

  function changeDirection(selectedLang) {
    const direction = selectedLang === "ar" ? "rtl" : "ltr";
    setPageDirection(direction);
    i18n.changeLanguage(selectedLang);
    setLanguageDetected(selectedLang);
  }

  function changeMode() {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    document.documentElement.dir = pageDirection || "ltr";
  }, [pageDirection]);

  return (
    <Stack
      p={2}
      sx={{
        position: "sticky",
        backgroundColor: "primary.main",
        top: 0,
        zIndex: "99",
      }}
    >
      <Box
        sx={{
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          rowGap: "15px",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        <Box
          sx={{
            flexGrow: "1",
            width: { xs: "100%", sm: "unset" },
            maxWidth: { sm: "200px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link to="/">
            <img src={logo} alt="logo" height={45} />
          </Link>
        </Box>
        <SearchBar
          pageDir={pageDirection}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: { xs: "100%", sm: "unset" },
          }}
        />
        <Box
          sx={{
            display: "flex",
            flex: "1 1",
            justifyContent: "space-evenly",
            color: "primary.contrastText",
            maxWidth: "250px",
            minWidth: "100px",
          }}
        >
          <Box sx={{ position: "relative" }}>
            <Language
              style={{ cursor: "pointer" }}
              onClick={() => {
                setShowLang(!showLang);
              }}
            />
            <Box
              sx={{
                position: "absolute",
                backgroundColor: "primary.contrastText",
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                rowGap: "10px",
                transform: showLang ? "scaleY(1)" : "scaleY(0)",
                transformOrigin: "top",
                transition: "all 0.3s",
              }}
            >
              <Box
                component="span"
                sx={{
                  cursor: lang === "en" ? "pointer" : "not-allowed",
                  opacity: lang === "ar" ? "0.7" : "1",
                }}
                onClick={() => {
                  changeDirection("ar");
                }}
              >
                <ReactCountryFlag countryCode="EG" />
              </Box>
              <Box
                component="span"
                sx={{
                  cursor: lang === "ar" ? "pointer" : "not-allowed",
                  opacity: lang === "en" ? "0.7" : "1",
                }}
                onClick={() => {
                  changeDirection("en");
                }}
              >
                <ReactCountryFlag countryCode="US" />
              </Box>
            </Box>
          </Box>
          {mode === "light" ? (
            <DarkMode style={{ cursor: "pointer" }} onClick={changeMode} />
          ) : (
            <Brightness5 style={{ cursor: "pointer" }} onClick={changeMode} />
          )}
        </Box>
      </Box>
    </Stack>
  );
};

export default Navbar;

import { Box, Button, Stack } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import { LanguageContext, ModeContext } from "../contexts/contexts";
import { Link } from "react-router-dom";
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

  function changeDirection() {
    if (pageDirection === "ltr") {
      setPageDirection("rtl");
      i18n.changeLanguage("ar");
      setLanguageDetected("ar");
    } else {
      setPageDirection("ltr");
      i18n.changeLanguage("en");
      setLanguageDetected("en");
    }
  }

  function changeMode() {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    document.documentElement.dir = pageDirection || "ltr";
  }, [pageDirection]);

  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        backgroundColor: "primary.main",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar pageDir={pageDirection} />
      {/* Language && Dark mode */}
      <Box
        className={pageDirection === "ltr" ? "lang-btn" : "lang-btn_ar"}
        sx={{
          position: "fixed",
          top: "200px",
          zIndex: 99,
          backgroundColor: "secondary.dark",
        }}
      >
        <Button
          className={pageDirection === "ltr" ? "lang-btn" : "lang-btn_ar"}
          onClick={changeDirection}
          sx={{ color: "white" }}
        >
          {lang === "ar" ? "En" : "Ar"}
        </Button>
        <Button
          className={pageDirection === "ltr" ? "lang-btn" : "lang-btn_ar"}
          sx={{ color: "white" }}
          onClick={changeMode}
        >
          {mode === "light" ? "Dark" : "Light"}
        </Button>
      </Box>
    </Stack>
  );
};

export default Navbar;

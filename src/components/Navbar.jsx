import { Box, Button, Stack } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../contexts/languageContext";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { SearchBar } from "./";

// language translator
import i18n from "i18next";

const Navbar = () => {
  const { languageDetected: lang, setLanguageDetected } =
    useContext(LanguageContext);

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
        backgroundColor: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar pageDir={pageDirection} />
      <Box
        className={pageDirection === "ltr" ? "lang-btn" : "lang-btn_ar"}
        sx={{
          position: "fixed",
          top: "200px",
          zIndex: 99,
          backgroundColor: "red",
        }}
      >
        <Button
          className={pageDirection === "ltr" ? "lang-btn" : "lang-btn_ar"}
          onClick={changeDirection}
          sx={{ color: "white" }}
        >
          {lang === "ar" ? "En" : "Ar"}
        </Button>
      </Box>
    </Stack>
  );
};

export default Navbar;

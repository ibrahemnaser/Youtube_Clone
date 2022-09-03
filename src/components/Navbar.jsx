import { Box, Button, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { logo } from "../utils/constants";
import { SearchBar } from "./";

// language translator
import i18n from "i18next";

const Navbar = () => {
  const lang = Cookies.get("i18next");

  const [pageDirection, setPageDirection] = useState(
    lang === "ar" ? "rtl" : "ltr"
  );

  function changeDirection() {
    if (pageDirection === "ltr") {
      setPageDirection("rtl");
      i18n.changeLanguage("ar");
    } else {
      setPageDirection("ltr");
      i18n.changeLanguage("en");
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
          {pageDirection === "rtl" ? "En" : "Ar"}
        </Button>
      </Box>
    </Stack>
  );
};

export default Navbar;

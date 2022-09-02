import { Box, Button, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
import Cookies from "js-cookie";

// language translator
import i18n from "i18next";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
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
      <SearchBar />
      <Box
        sx={{
          position: "fixed",
          top: "200px",
          zIndex: 99,
          backgroundColor: "red",
          right: pageDirection === "ltr" ? 0 : "unset",
          left: pageDirection === "rtl" ? 0 : "unset",
        }}
      >
        <Button onClick={changeDirection} sx={{ color: "white" }}>
          {pageDirection === "rtl" ? "En" : "Ar"}
        </Button>
        <p>{t("welcome")}</p>
      </Box>
    </Stack>
  );
};

export default Navbar;

import { useState, useEffect, useContext } from "react";
// import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import Cookies from "js-cookie";
import { ModeContext } from "../contexts/contexts";

const SearchBar = ({ pageDir }) => {
  const [lang, setLang] = useState(Cookies.get("i18next"));
  const { mode } = useContext(ModeContext);

  useEffect(() => {
    setLang(Cookies.get("i18next"));
  }, [pageDir]);

  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        backgroundColor: mode === "light" ? "white" : "primary.main",
        borderRadius: 20,
        px: 2,
        boxShadow: "none",
      }}
    >
      <input
        type="text"
        className="search-bar"
        style={{
          backgroundColor: "transparent",
          color: mode === "light" ? "black" : "white",
        }}
        placeholder={lang === "ar" ? "بحث..." : "Search..."}
        onChange={() => {}}
      />
      <IconButton type="submit" sx={{ px: "0px", py: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;

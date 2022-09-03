import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import Cookies from "js-cookie";

const SearchBar = ({ pageDir }) => {
  const [lang, setLang] = useState(Cookies.get("i18next"));

  useEffect(() => {
    setLang(Cookies.get("i18next"));
  }, [pageDir]);

  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        px: 2,
        boxShadow: "none",
      }}
    >
      <input
        type="text"
        className="search-bar"
        placeholder={lang === "ar" ? "بحث..." : "Search..."}
        value=""
        onChange={() => {}}
      />
      <IconButton type="submit" sx={{ px: "0px", py: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;

import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import Cookies from "js-cookie";
import { ModeContext } from "../contexts/contexts";

const SearchBar = ({ pageDir }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [lang, setLang] = useState(Cookies.get("i18next"));
  const { mode } = useContext(ModeContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };

  useEffect(() => {
    setLang(Cookies.get("i18next"));
  }, [pageDir]);

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
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
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <IconButton type="submit" sx={{ px: "0px", py: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;

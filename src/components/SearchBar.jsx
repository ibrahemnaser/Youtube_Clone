// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
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
        placeholder="بحث..."
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

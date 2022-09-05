import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { LanguageContext } from "../contexts/contexts";
import { Videos, Loader } from "./";

// fetch data
import { getDataFromAPI } from "../utils/rapidAPIData";

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const { languageDetected: lang } = useContext(LanguageContext);
  const [videos, setVideos] = useState([]);

  const handleFetch = (pageToken = null, search = searchTerm) => {
    getDataFromAPI(
      `search?part=snippet&q=${search}${
        pageToken ? `&pageToken=${pageToken}` : ""
      }`
    ).then((data) => setVideos(data));
  };

  useEffect(() => {
    handleFetch(null, searchTerm);
  }, [searchTerm]);

  if (!videos) return <Loader />;
  const { items, nextPageToken, prevPageToken } = videos;

  return (
    <Box
      sx={{
        overflowY: "auto",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flex: "1",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          p: 2,
          color: "primary.contrastText",
          fontWeight: "bold",
          display: "flex",
        }}
      >
        <span>{lang === "en" ? " Search Results: " : "نتائج بحث: "} </span>
        <span style={{ color: "red", margin: "0 7px" }}>{searchTerm}</span>
      </Typography>
      <Videos
        justifyContent="center"
        videos={items}
        handleFetch={handleFetch}
        nextPage={nextPageToken}
        prevPage={prevPageToken}
      />
    </Box>
  );
};

export default SearchFeed;

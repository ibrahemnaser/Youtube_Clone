import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";

// language
import { useTranslation } from "react-i18next";

// fetch data
import { getDataFromAPI } from "../utils/rapidAPIData";

const Feed = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  useEffect(() => {
    getDataFromAPI(``);
  }, []);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "90vh" },
          borderRight: "1px solid #3d3d3d",
          borderLeft: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          {`Copyrights reserved ${year} Mytube`}
        </Typography>
      </Box>
      <Box
        sx={{
          overflowY: "auto",
          height: "90vh",
        }}
      >
        <Typography
          variant="h4"
          sx={{ p: 2, color: "white", fontWeight: "bold" }}
        >
          {t("categories.New")}
          <span style={{ color: "red" }}> Videos</span>
        </Typography>
        <Videos videos={[]} />
      </Box>
    </Stack>
  );
};

export default Feed;

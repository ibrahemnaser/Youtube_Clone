import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../contexts/contexts";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";

// language translator
import { useTranslation } from "react-i18next";

// fetch data
import { getDataFromAPI } from "../utils/rapidAPIData";

const Feed = () => {
  const year = new Date().getFullYear();
  const { t } = useTranslation();
  const { languageDetected: lang } = useContext(LanguageContext);
  const [selectedCategory, setSelectedCategory] = useState("Ahly");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getDataFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" }, columnGap: 4 }}>
      <Box
        sx={{
          height: { sx: "auto", md: "90vh" },
          backgroundColor: "primary.main",
          borderColor: "primary.light",
          borderStyle: "solid",
          borderWidth: "0 1px",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "primary.contrastText" }}
        >
          {lang === "en" ? `Copyrights ${year} ` : `حقوق الملكية  ${year} `}
          <span style={{ color: "red", fontWeight: "bold" }}>MyTube</span>
        </Typography>
      </Box>
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
            flexDirection: `${lang === "en" ? "row" : "row-reverse"}`,
          }}
        >
          <span>{t(`categories.${selectedCategory}`)}</span>
          <span style={{ color: "red", margin: "0 7px" }}>
            {lang === "en" ? " Videos" : " فيديوهات"}
          </span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;

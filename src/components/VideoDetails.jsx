import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Box, Stack, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Videos, Loader } from "./";
// fetch data
import { getDataFromAPI } from "../utils/rapidAPIData";

const VideoDetails = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const { id } = useParams();

  const handleFetch = (pageToken = null, relatedVideoId = id) => {
    getDataFromAPI(
      `search?part=snippet&type=video&relatedToVideoId=${id}${
        pageToken ? `&pageToken=${pageToken}` : ""
      }`
    ).then((data) => setRelatedVideos(data));
  };

  useEffect(() => {
    getDataFromAPI(`videos?part=snippet,statistce&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
    handleFetch(null, id);
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  if (!relatedVideos) return <Loader />;
  const { items, nextPageToken, prevPageToken } = relatedVideos;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography
              color="primary.contrastText"
              variant="h5"
              fontWeight="bold"
              p={2}
            >
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography variant="subtitle1" color="primary.secContrast">
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography
                  color="primary.secContrast"
                  variant="body1"
                  sx={{ opacity: 0.7 }}
                >
                  {parseInt(viewCount).toLocaleString()}{" "}
                  <span style={{ fontWeight: "bold", color: "red" }}>
                    views
                  </span>
                </Typography>
                <Typography
                  color="primary.secContrast"
                  variant="body1"
                  sx={{ opacity: 0.7 }}
                >
                  {parseInt(likeCount).toLocaleString()}{" "}
                  <span style={{ fontWeight: "bold", color: "red" }}>
                    likes{" "}
                  </span>
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos
            videos={items}
            handleFetch={handleFetch}
            nextPage={nextPageToken}
            prevPage={prevPageToken}
            direction="column"
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetails;

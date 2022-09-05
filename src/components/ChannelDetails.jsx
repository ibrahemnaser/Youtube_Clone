import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { getDataFromAPI } from "../utils/rapidAPIData";
import { ChannelCard, Videos, Loader } from "./";

const ChannelDetails = () => {
  const [channel, setChannel] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  const handleFetch = (pageToken = null, channelId = id) => {
    getDataFromAPI(
      `search?part=snippet&order=date&channelId=${channelId}${
        pageToken ? `&pageToken=${pageToken}` : ""
      }`
    ).then((data) => setVideos(data));
  };

  useEffect(() => {
    getDataFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannel(data.items[0])
    );
    handleFetch(null, id);
  }, [id]);

  if (!videos) return <Loader />;
  const { items, nextPageToken, prevPageToken } = videos;
  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box sx={{ height: "25vh", width: "100%" }}>
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={channel?.brandingSettings?.image?.bannerExternalUrl}
          alt="Channel banner"
        />
      </Box>
      <ChannelCard marginTop="-100px" channelDetail={channel} />
      <Box sx={{ mt: 2 }}>
        <Videos
          justifyContent="center"
          videos={items}
          handleFetch={handleFetch}
          nextPage={nextPageToken}
          prevPage={prevPageToken}
        />
      </Box>
    </Box>
  );
};

export default ChannelDetails;

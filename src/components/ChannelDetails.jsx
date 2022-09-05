import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { getDataFromAPI } from "../utils/rapidAPIData";
import { ChannelCard, Videos } from "./";

const ChannelDetails = () => {
  const [channel, setChannel] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  console.log(channel);
  console.log(videos);
  useEffect(() => {
    getDataFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannel(data.items[0])
    );
    getDataFromAPI(`search?part=snippet&channelId=${id}&order=date`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);
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
        <Videos justifyContent="center" videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetails;

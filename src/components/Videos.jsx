import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, justifyContent }) => {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent={justifyContent || "start"}
      gap={2}
    >
      {videos.map((item, indx) => {
        return (
          <Box
            key={indx}
            sx={{ width: { xs: "100%", sm: "358px", md: "320px" } }}
          >
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;

import { Stack, Box, Button } from "@mui/material";
import { VideoCard, ChannelCard, Loader } from "./";

const Videos = ({
  videos,
  nextPage,
  prevPage,
  handleFetch,
  justifyContent,
  direction,
}) => {
  if (!videos) return <Loader />;
  return (
    <Box>
      <Stack
        direction={direction || "row"}
        flexWrap="wrap"
        justifyContent={justifyContent || "start"}
        gap={2}
      >
        {videos.map((item, indx) => {
          if (!item.id.playlistId) {
            return (
              <Box
                key={indx}
                sx={{ width: { xs: "100%", sm: "358px", md: "320px" } }}
              >
                {item.id.videoId && <VideoCard video={item} />}
                {item.id.channelId && <ChannelCard channelDetail={item} />}
              </Box>
            );
          }
          return null;
        })}
      </Stack>
      <Stack
        dir="ltr"
        direction={"row"}
        justifyContent={"center"}
        mt={2}
        gap={2}
      >
        <Button
          sx={
            prevPage
              ? { color: "red" }
              : {
                  color: "gray",
                  textDecoration: "line-through",
                  pointerEvents: "none",
                }
          }
          onClick={() => {
            handleFetch(prevPage);
          }}
        >
          <span>Prev</span>
        </Button>
        <Button
          sx={
            nextPage
              ? { color: "red" }
              : {
                  color: "gray",
                  textDecoration: "line-through",
                  cursor: "not-allowed",
                  pointerEvents: "none",
                }
          }
          onClick={() => {
            handleFetch(nextPage);
          }}
        >
          <span>Next</span>
        </Button>
      </Stack>
    </Box>
  );
};

export default Videos;

import { useContext } from "react";
import { Link } from "react-router-dom";
import { Typography, Box, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { demoProfilePicture } from "../utils/constants";
import { LanguageContext } from "../contexts/contexts";

const ChannelCard = ({ channelDetail, marginTop }) => {
  const { languageDetected: lang } = useContext(LanguageContext);
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop,
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              border: "1px solid #dedede",
              mb: 2,
            }}
          />
          <Typography
            dir="ltr"
            variant="h6"
            sx={{ color: "primary.contrastText" }}
          >
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: "14px", color: "gray", mx: 1 }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <>
              <Typography
                dir="ltr"
                sx={{
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "primary.secContrast",
                }}
              >
                {parseInt(
                  channelDetail?.statistics?.subscriberCount
                ).toLocaleString("en-US")}{" "}
                {lang === "ar" ? "مشترك" : "Subscribers"}
              </Typography>
              <Typography
                dir="ltr"
                sx={{
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "primary.secContrast",
                }}
              >
                {parseInt(channelDetail?.statistics?.viewCount).toLocaleString(
                  "en-US"
                )}{" "}
                {lang === "ar" ? "مشاهدة" : "Views"}
              </Typography>
            </>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;

import React, { Component } from "react";
import GoogleFontLoader from "react-google-font-loader";
import NoSsr from "@material-ui/core/NoSsr";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import PropTypes from "prop-types";
import {
  Info,
  InfoCaption,
  InfoSubtitle,
  InfoTitle,
} from "@mui-treasury/components/info";
import { useGalaxyInfoStyles } from "@mui-treasury/styles/info/galaxy";
import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover";
import { ThumbUp } from "@material-ui/icons";
import { CardActions, Typography } from "@material-ui/core";

//styling the component using the hook makeStyles
const useStyles = makeStyles(() => ({
  card: {
    position: "relative",
    borderRadius: "1rem",
    cursor: "pointer",
    boxShadow: "1px 2px 9px #000",
    position: "relative",
    minWidth: 200,
    minHeight: 360,
    "&:after": {
      content: '""',
      display: "block",
      position: "absolute",
      width: "100%",
      height: "64%",
      bottom: 0,
      zIndex: 1,
      background: "linear-gradient(to top, #22254b, rgba(0,0,0,0))",
    },
    "&:hover": {
      "& $showover": {
        transform: "translateY(0%)",
      },
      "& $content": {
        visibility: "hidden",
      },
      "& $overview": {
        visibility: "hidden",
      },
    },
  },
  content: {
    position: "absolute",
    zIndex: 2,
    bottom: 0,
    width: "100%",
  },
  overview: {
    padding: "5%",
    overflow: "hidden",
    "text-overflow": "ellipsis",
    "white-space": "nowrap",
    "max-width": "28rem",
    "margin-bottom": "3px",
  },
  parentFlexRight: {
    display: "flex",
    justifyContent: "flex-end",
  },
  leftAlignItem: {
    marginRight: "auto",
  },
  rightAlignItem: {
    marginLeft: "auto",
  },
  showover: {
    "backdrop-filter": " blur(10px)",
    overflow: "hidden",
    maxHeight: "100%",
    scrollbarWidth: "none",
    zIndex: 3,
    color: "#fff",
    padding: "1rem",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    transform: "translateY(100%)",
    transition: "transform 0.3s ease-in-out",
  },
}));

const getPosterPath = (posterPath) => {
  return `https://www.themoviedb.org/t/p/original${posterPath}`;
};

const ShowCard = ({
  poster_path,
  name,
  first_air_date,
  overview,
  original_name,
  vote_average,
}) => {
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: "top" });
  const styles = useStyles();
  return (
    <>
      <NoSsr>
        <GoogleFontLoader
          fonts={[
            { font: "Spartan", weights: [300] },
            { font: "Montserrat", weights: [200, 400, 700] },
          ]}
        />
      </NoSsr>
      <Card className={styles.card}>
        <CardMedia classes={mediaStyles} image={getPosterPath(poster_path)} />
        <Box py={3} px={2} className={styles.content}>
          <Info useStyles={useGalaxyInfoStyles}>
            <InfoTitle>{name || original_name}</InfoTitle>
            <InfoSubtitle className={styles.overview}>{overview}</InfoSubtitle>

            <InfoCaption>
              <CardActions>
                <ThumbUp />
                <Typography
                  className={styles.leftAlignItem}
                  level="body3"
                  sx={{ fontWeight: "md", color: "text.secondary" }}
                >
                  {vote_average}/10
                </Typography>

                <Typography
                  className={styles.rightAlignItem}
                  level="body3"
                  sx={{ fontWeight: "md", color: "text.secondary" }}
                >
                  {first_air_date}
                </Typography>
              </CardActions>
            </InfoCaption>
          </Info>
        </Box>

        <div className={styles.showover}>
          <h2>Overview:</h2>
          <p>{overview}</p>
        </div>
      </Card>
    </>
  );
};

//PropTypes
Component.propTypes = {
  poster_path: PropTypes.string,
  name: PropTypes.string,
  first_air_date: PropTypes.string,
  overview: PropTypes.string,
  original_name: PropTypes.string,
  vote_average: PropTypes.number,
};
export default ShowCard;

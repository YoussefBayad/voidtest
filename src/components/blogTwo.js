import React, { useRef } from "react";
import { Box, Container, Grid, Heading } from "theme-ui";
import BlockTitle from "components/block-title";

import FeatureCardTwo from "components/feature-card-two";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import featureImage1 from "assets/images/blog1-1.png";
import featureImage2 from "assets/images/blog1-2.png";
import featureImage3 from "assets/images/blog1-3.png";

const FeatureData = [
  {
    image: featureImage1,
    title: "27 février 2024",
    title: "Journée des maladies rares 2024 : L'équité en action",
    comments: "22 Comments",
    path: "/",
  },
  {
    image: featureImage2,
    title: "#NoJargon: Plongez dans le monde de la science",
    text: "7 février 2024",
    comments: "15 Comments",
    path: "/",
  },
  {
    image: featureImage3,
    title: "Cancer et travail : Agir ensemble",
    text: "5 février 2024",
    comments: "12 Comments",
    path: "/",
  },
];

const BlogTwo = () => {
  return (
    <Box sx={styles.features} id="news">
      <Container>
        <Box>
          <Heading>Entreprise Today</Heading>
          <Heading>Lisez nos derniers articles</Heading>
        </Box>
        <Grid sx={styles.grid}>
          {FeatureData.map((feature, index) => (
            <div className="swiper-slider" key={`feature-card-key${index}`}>
              <FeatureCardTwo
                image={feature.image}
                title={feature.title}
                text={feature.text}
                commentCount={feature.comments}
                path={feature.path}
              />
            </div>
          ))}
        </Grid>
        {/* <Box sx={styles.carouselBtns}>
          <button aria-label="left btn" onClick={goPrev}>
            <FaLongArrowAltLeft />
          </button>
          <button onClick={goNext} aria-label="right btn">
            <FaLongArrowAltRight />
          </button>
        </Box> */}
      </Container>
    </Box>
  );
};

export default BlogTwo;

const styles = {
  blockTitle: {
    textAlign: "center",
  },
  features: {
    pt: ["80px", null, null, null, null, null, "120px"],
    pb: ["80px", null, null, null, "170px"],
    ".swiper-slider": {
      overflowY: "visible",
      overflowX: "hidden",
    },
  },
  grid: {
    gridGap: ["35px 0", null, "20px 20px"],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)",
    ],
  },
  carouselBtns: {
    display: ["flex", null, null, null, null, "none"],
    justifyContent: "center",
    alignItems: "center",
    button: {
      border: "none",
      outline: "none",
      backgroundColor: "transparent",
      fontSize: [2, null, 4, null, 5],
      color: "#BBC7D7",
      width: "auto",
      padding: [0],
      margin: "0 5px",
      mt: "15px",
      transition: "500ms",
      "&:hover, &:active, &:focus": {
        color: "primary",
      },
    },
  },
};

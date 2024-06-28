import React, { useRef } from "react";
import { Box, Container, Grid, Heading } from "theme-ui";
import BlockTitle from "components/block-title";

import FeatureCardTwo from "components/feature-card-two";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import featureImage1 from "assets/images/blog3-1.png";
import featureImage2 from "assets/images/blog3-2.png";
import featureImage3 from "assets/images/blog3-3.png";
import Play from "components/play";
import FeatureCard from "components/feature-card";

const FeatureData = [
  {
    image: featureImage1,
    text: "Au cours de la première année complète de notre nouvelle stratégie People & Culture, les enjeux de Diversité, Équité et Inclusion (DE&I) ont occupé le devant de la scène. Ce rapport célèbre les progrès concrets que nous avons réalisés pour refléter la diversité dans nos équipes dirigeantes, libérer tout le potentiel de nos collaborateurs et collaboratrices et avoir un impact sur l’environnement de travail mais aussi au-delà.",
    title: "Rapport diversité, équité et inclusion",
    comments: "22 Comments",
    path: "/",
  },
  {
    image: featureImage2,
    title: "Notre héritage",
    text: "Notre societé d’aujourd’hui s’appuie sur un héritage qui consiste à transformer l’impossible en possible.",
    comments: "15 Comments",
    path: "/",
  },
  {
    image: featureImage3,
    title: "Notre rapport intégré 2022",
    text: "Découvrez comment nous rendons possible l'impossible pour améliorer la vie des gens dans le monde.",
    comments: "12 Comments",
    path: "/",
  },
];

const BlogThree = () => {
  return (
    <Box sx={styles.features} id="news">
      <Container>
        <Heading
          sx={{ fontSize: "35px", fontWeight: "bold", marginBottom: "80px" }}
        >
          Découvrir plus
        </Heading>

        <Grid sx={styles.grid}>
          {FeatureData.map((feature, index) => (
            <div className="swiper-slider" key={`feature-card-key${index}`}>
              <FeatureCard
                image={feature.image}
                title={feature.title}
                text={feature.text}
                commentCount={feature.comments}
                path={feature.path}
              />
            </div>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogThree;

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

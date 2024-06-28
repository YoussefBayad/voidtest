import React, { useRef } from "react";
import { Box, Container, Grid } from "theme-ui";
import BlockTitle from "components/block-title";

import FeatureCard from "components/feature-card";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import featureImage1 from "assets/images/blog1-1.png";
import featureImage2 from "assets/images/blog1-2.png";
import featureImage3 from "assets/images/blog1-3.png";

const FeatureData = [
  {
    image: featureImage1,
    title: "Virus VS Bacteria",
    text: "Ils font partie de votre vie, mais les connaissez-vous vraiment ? Nos scientifiques vous expliquent les principales différences entre un virus et une bactérie.",
    comments: "22 Comments",
    path: "/",
  },
  {
    image: featureImage2,
    title: "Le parcours B Corp de Notre Santé Grand Public",
    text: "En obtenant la certification B Corp pour Entreprise Santé Grand Public en Amérique du Nord, en Allemagne, en Italie et en Amérique latine, nous faisons partie d'une communauté mondiale qui transforme le monde des affaires en une force pour le bien.",
    comments: "15 Comments",
    path: "/",
  },
  {
    image: featureImage3,
    title: "Maladie du sommeil : Ne laisser personne de côté",
    text: "Maladie tropicale négligée, la maladie du sommeil est généralement mortelle en l'absence de traitement. Les patients infectés par la variante la plus aiguë de la maladie, le T.b rhodesiense, n'ont malheureusement bénéficié que de peu d'innovations en matière de traitement. Mais l'espoir pointe à l'horizon. Pour ces patients, nous voyons le potentiel du premier traitement oral pour cette variante de la maladie, soutenant ainsi l'objectif d'élimination de la maladie du sommeil chez l’humain d'ici 2030.",
    comments: "12 Comments",
    path: "/",
  },
];

const Blog = () => {
  return (
    <Box sx={styles.features} id="news">
      <Container>
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

export default Blog;

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

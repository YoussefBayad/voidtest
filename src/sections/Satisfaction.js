/** @jsxRuntime classic */
/** @jsx jsx */ import {
  jsx,
  Container,
  Box,
  Grid,
  Text,
  Heading,
  Flex,
} from "theme-ui";
import TextFeature from "components/text-feature";
import Image from "components/image";

import satisfaction from "assets/images/satisfaction.png";
import { LearnMore, Link as NavLink } from "components/link";
import Button from "components/form/button";

const data = {
  subTitle: "",
  title: "Le drapeau de la lutte contre les méningites",
  description: (
    <div>
      Créé en collaboration avec trois para-athlètes, Ellie Challis, Théo Curin,
      Davide Morana et plusieurs membres de la Meningitis Research Foundation /
      Confederation of Meningitis Organisations, le drapeau de la lutte contre
      les méningites vise à sensibiliser le public à une maladie qui reste
      encore, à ce jour, un problème majeur de santé publique à l’échelle
      mondiale.
    </div>
  ),
};

export default function WhoWeAre() {
  return (
    <section sx={styles.coreFeature}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <Box sx={styles.headingTop}>
            <TextFeature subTitle={data.subTitle} title={data.title} />
            <Text>{data.description}</Text>{" "}
            <Flex sx={styles.buttonGroup}>
              <LearnMore path="solutions" label={"En savoir plus"} />{" "}
            </Flex>
          </Box>
        </Box>
        <Box sx={styles.thumbnail}>
          <Image src={satisfaction} alt="Thumbnail" />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  coreFeature: {
    py: [1, 2, 2, 2, 6, 7],
    position: "relative",
    mb: ["100px", "100px", "auto"],
  },
  buttonGroup: {
    alignItems: "start",
    justifyContent: ["center", "center", "center", "start"],
    marginTop: [4, 4, 4, 6],
  },
  btnPrimary: {
    width: ["100px", "auto"],
    fontSize: [1, null],
    display: "block",
    height: "35px",
    marginRight: "20px",
  },
  ouMission: {},
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: ["column", null, null, "row"],
  },
  thumbnail: {
    img: {
      borderRadius: "10px",
    },
  },
  contentBox: {
    width: ["100%", 450, 550, 350, 500, 570],
    pr: [0, null, "auto", null, null, 80],
    pl: "auto",
    flexShrink: 0,
  },
  headingTop: {
    pl: [0, null, null, null, "35px", null, "55px", 6],
    mb: [3, null, null, null, 1],
    textAlign: ["center", null, null, "left"],
  },
  grid: {
    p: ["0 0px 35px", null, null, null, "0 20px 40px", null, "0 40px 40px", 0],
  },
  card: {
    display: "flex",
    alignItems: "flex-start",
    p: [
      "0 17px 20px",
      null,
      null,
      "0 0 20px",
      "20px 15px 17px",
      null,
      null,
      "25px 30px 23px",
    ],
    backgroundColor: "white",
    borderRadius: "10px",
    transition: "all 0.3s",
    width: ["100%", "85%", null, "100%"],
    mx: "auto",
    "&:hover": {
      boxShadow: [
        "0px 0px 0px rgba(0, 0, 0, 0)",
        null,
        null,
        null,
        "0px 8px 24px rgba(69, 88, 157, 0.07)",
      ],
    },
  },

  img: {
    width: ["50px", null, "55px"],
    height: "auto",
    flexShrink: 0,
    mr: [3, 4],
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    mt: "-5px",
    title: {
      fontSize: 3,
      color: "heading_secondary",
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, null, null, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, 2],
    },
  },
};

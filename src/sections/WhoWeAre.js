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

import whoWeAre from "assets/images/whoWeAre.png";
import { LearnMore, Link as NavLink } from "components/link";
import Button from "components/form/button";

const data = {
  // subTitle: "Who We Are",
  title: "Les femmes au sein de Entreprise - Cristina",
  description: (
    <div>
      Rencontrez Cristina Zamora, notre cheffe de projet pour les opérations de
      R&D en Amérique du Nord et l'une des nombreuses scientifiques inspirantes
      qui contribuent à renforcer la prochaine génération de femmes leaders dans
      le domaine de la santé et au-delà.
    </div>
  ),
};

export default function WhoWeAre() {
  return (
    <section sx={styles.coreFeature}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.thumbnail}>
          <Image src={whoWeAre} alt="Thumbnail" />
        </Box>
        <Box sx={styles.contentBox}>
          <Box sx={styles.headingTop}>
            <TextFeature subTitle={data.subTitle} title={data.title} />
            <Text>{data.description}</Text>
            <Flex sx={styles.buttonGroup}>
              <LearnMore />
            </Flex>
          </Box>
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

    "&::before": {
      position: "absolute",
      content: '""',
      top: ["auto", null, null, "50%"],
      bottom: ["100px", 0, null, "auto"],
      left: 0,
      background: "linear-gradient(-157deg, #F6FAFD, #F9FCFC, #FCFDFC)",
      height: [350, 550, "60%"],
      width: "50%",
      zIndex: -1,
      borderTopRightRadius: "50%",
      borderBottomRightRadius: "50%",
      transform: ["translateY(0)", null, null, "translateY(-50%)"],
    },
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

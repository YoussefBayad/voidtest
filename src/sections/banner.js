/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Container, Heading, Text, Button, Box } from "theme-ui";
import Image from "components/image";
import mesh from "assets/images/mesh.png";

import banner from "assets/images/banner.png";
import { NavLink } from "components/link";
import { keyframes } from "@emotion/react";
import { backgrounds, borderRadius, padding, position } from "polished";

const Banner = () => {
  return (
    <section id="home" sx={styles.section}>
      <Container sx={styles.container}>
        <div sx={styles.content}>
          <Heading sx={{ fontSize: ["28px", "32px", "44.44px"] }} as="h1">
            Journée des maladies rares 2024 : L'équité en action{" "}
          </Heading>
          <Text style={{ fontSize: "14.5px" }} as="p">
            À l'occasion de la Journée des maladies rares, il est plus important
            que jamais de continuer à rechercher un diagnostic, une innovation,
            un soutien et un accès équitables pour les personnes atteintes de
            maladies rares.
          </Text>
          <Flex sx={styles.buttonGroup}>
            <NavLink
              path="join-us"
              label={
                <Button variant="primary" sx={styles.btnPrimary}>
                  Nous contacter
                </Button>
              }
            />
          </Flex>
        </div>
        <Box sx={styles.illustration}></Box>
      </Container>
      {/* <Box sx={styles.fader}></Box> */}
    </section>
  );
};

export default Banner;

const styles = {
  section: {
    pt: [8, null, null, null, 10, 14],
    pb: [140, null, null, null, 140, 140],
    // animation: `${bg} ease-out infinite  6000ms `,
    height: "100vh",
    background: `url(${mesh})`,
    backgroundSize: ["cover", "cover", "cover"],
    position: "relative",
    backgroundPosition: "center",
    mb: ["150px", "150px", "150px", 0],
  },

  container: {
    display: "flex",
    alignItems: ["center", "center", "center", "flex-start"],
    justifyContent: "space-between",
    flexDirection: ["column", "column", "column", "row", "row"],
    py: ["20px", "30px", "30px", "50px", "140px"],
  },
  content: {
    maxWidth: ["80%", "80%", "80%", "60%", "100%", 510],
    textAlign: "center",
    py: ["0px", "16px"],
    mr: [0, 0, 0, 0, 0, "100px"],
    mb: ["20px", "20px", "50px", "0"],
    textAlign: ["center", "center", "center", "left"],
    zIndex: "10",
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "40px",
    position: ["absolute", "absolute", "static"],
    top: "300px",
    boxShadow: [
      "0px 15px 50px rgba(69, 88, 157, 0.1)",
      "0px 15px 50px rgba(69, 88, 157, 0.1)",
      "0px 15px 50px rgba(69, 88, 157, 0.1)",
      "none",
    ],

    h1: {
      fontSize: [4, 5, 5, 6, 6],
      lineHeight: [1.1, 1.35],
      fontWeight: "bold",
      mb: ["20px", "20px", "20px", "20px"],
    },
    p: {
      fontSize: [1, null, null, 2],
      marginTop: [3, null, null, 5],
      fontWeight: "500",
    },
  },
  buttonGroup: {
    alignItems: "start",
    justifyContent: ["center", "center", "center", "start"],
    marginTop: [4, 4, 4, 6],
  },
  btnPrimary: {
    width: ["auto", "auto"],
    fontSize: [1, null],
    display: "block",
    height: "35px",
    marginRight: "20px",
  },
  outline: {
    // width: ["100px", "auto"],
    fontSize: [1, null],
    display: "block",
    height: "35px",
  },

  illustration: {
    height: ["100%", "60vh", "65vh", "70vh"],
    width: "100%",
    zIndex: "10",
    objectFit: "contain",
  },
};

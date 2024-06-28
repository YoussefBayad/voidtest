/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx, Box, Flex, Text, Container } from "theme-ui";
import { Link as NavLink } from "components/link";
import Logo from "components/logo";
import Script from "next/script";
import PatternBG from "assets/images/meshsubbanner.png";
import logo from "assets/images/logofooter.png";
import Image from "./image";

const navItems = [
  {
    path: "/",
    label: "Notre Entreprise",
  },

  {
    path: "#",
    label: "Notre science",
  },
  {
    path: "#",
    label: "Votre Santé",
  },
  {
    path: "#",
    label: "Partenariat",
  },
];

export default function Footer() {
  return (
    <Box sx={styles.footerWrapper}>
      <Box sx={styles.fader}></Box>
      <Box as="footer" sx={styles.footer}>
        <Container sx={styles.container}>
          <Flex sx={styles.content}>
            <Flex sx={styles.copyright}>
              <Box sx={styles.logo}>
                <Image width={100} height={100} src={logo} alt="void logo" />
              </Box>
              <Text as="span">
                All right reserved - Copyright by {new Date().getFullYear()}{" "}
                void
              </Text>
            </Flex>

            <Flex as="ul" sx={styles.nav}>
              {navItems?.map(({ label, path }, i) => (
                <li key={i}>
                  <NavLink key={i} path={path} label={label} />
                </li>
              ))}
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}

const styles = {
  footerWrapper: {
    // pb: ["50px", "50px", "60px", "60px"],
    // pt: ["50px", "50px", "60px", "60px"],
    backgroundColor: " #000000",
    // backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "center top",
    backgroundSize: "cover",
    color: "white",
  },
  logo: {
    alignItems: "center",
    cursor: "pointer",
    display: "inline-flex",
    width: "100px",

    img: {
      width: "100px",
      height: "80px",
      objectFit: "contain",
    },
  },
  footer: {
    // backgroundColor: "background",
    position: "relative",
  },
  content: {
    zIndex: "10",
    alignItems: "center",
    display: ["block", null, null, null, "flex"],
    justifyContent: "space-between",
    paddingTop: "20px",
    paddingBottom: "20px",
    textAlign: ["center", null, null, null],
    zIndex: "10",
    position: "relative",
    "@media only screen and (max-width: 400px)": {
      // pb: 50,
    },
  },
  copyright: {
    display: ["block", "flex"],
    alignItems: "center",
    justifyContent: ["center", null, null, null],
    span: {
      zIndex: "10",

      fontSize: "14px",
      lineHeight: [1.8, null, null, 1.29],
      marginTop: 1,
      display: "inline-flex",
      ml: "20px",
    },
  },
  nav: {
    listStyle: "none",
    alignItems: "center",
    padding: 0,
    zIndex: "10",

    // display: ['flex'],
    flexWrap: ["wrap", null, null, "unset"],
    justifyContent: ["center", null, null, null],
    mt: [5, 5, null, null, 0],
    li: {
      "+ li": {
        marginLeft: [4],
      },
      "@media only screen and (max-width: 400px)": {
        mb: 4,
      },
      a: {
        display: "inline-flex",
        cursor: "pointer",
        textAlign: "right",
        textDecoration: "none",
      },
    },
  },
};

import React from "react";
import { Box, Heading, Text } from "theme-ui";
import Image from "components/image";
import { LearnMore, Link } from "components/link";

import donwload from "assets/images/download.png";
import { margin, position } from "polished";
import image from "next/image";

const Info = (props) => {
  return (
    <Box sx={styles.fevCard}>
      <Box sx={styles.content}>
        <Heading sx={{ fontSize: "13px", fontWeight: "bold" }} as="p">
          {props.date}
        </Heading>
        <Text
          sx={{
            fontSize: "22px",
            fontWeight: "bold",
            marginBottom: "10px",
            marginTop: "10px",
          }}
          as="h3"
        >
          {props.text}
        </Text>{" "}
        <LearnMore
          sx={{ position: "absolute", bottom: "10px", left: "30px" }}
        />
      </Box>
      <Box className="image" sx={styles.image}>
        <Image src={donwload} alt="donwload" />
      </Box>
    </Box>
  );
};

export default Info;

const styles = {
  fevCard: {
    position: "relative",
    transition: "500ms",
    borderRadius: "8px",
    padding: [20, null, null, "30px"],
    marginBottom: "10px",
    border: "#C9C9C9 solid 1px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0px 15px 50px rgba(69, 88, 157, 0.1)",
    },
  },
  image: {
    height: "90px",
    width: "90px",
    display: ["none", "none", "none", "block"],
    img: {
      height: "90px",
      width: "90px",
      objectFit: "contain",
    },
  },
};

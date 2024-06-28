import React from "react";
import { Box, Heading, Text } from "theme-ui";
import Image from "components/image";
import { LearnMore, Link } from "components/link";

import CommentIcon from "assets/images/comment-1.svg";
import { margin, position } from "polished";

const FeatureCard = (props) => {
  return (
    <Box sx={styles.fevCard}>
      <Box className="image" sx={styles.image}>
        <Image src={props.image} alt="" />
      </Box>
      <Box sx={styles.content}>
        <Heading sx={{ fontSize: "22px" }} as="h3">
          {props.title}
        </Heading>
        <Text sx={{ fontSize: "15px" }} as="p">
          {props.text}
        </Text>
        <LearnMore
          sx={{ position: "absolute", bottom: "10px", left: "30px" }}
        />
      </Box>
    </Box>
  );
};

export default FeatureCard;

const styles = {
  fevCard: {
    position: "relative",
    transition: "500ms",
    borderRadius: "8px",
    // margin: "0 10px",
    border: "#C9C9C9 solid 1px",
    minHeight: ["700px", "700px", "750px", "800px"],
    "&:hover": {
      boxShadow: "0px 15px 50px rgba(69, 88, 157, 0.1)",
    },
  },
  image: {
    overflow: "hidden",
    borderTopLeftRadius: ["5px"],
    borderTopRightRadius: ["5px"],
    img: {
      display: "block",
      width: "100%",
    },
  },
  content: {
    backgroundColor: "#fff",
    paddingLeft: [20, null, null, "30px"],
    paddingRight: [20, null, null, "30px"],
    paddingTop: ["15px", null, null, "25px"],
    borderBottomLeftRadius: ["5px"],
    borderBottomRightRadius: ["5px"],
    pb: ["10px", null, null, null, "30px"],
    borderTop: "0",
    h3: {
      fontWeight: "bold",
      fontSize: ["18px", null, "17px", null, "22px"],
      lineHeight: [1.55],
      a: {
        transition: "500ms",
        "&:hover": {
          color: "primary",
        },
      },
    },
    p: {
      display: "flex",
      alignItems: "center",
      fontSize: [1, null, 2],
      lineHeight: [2],
      color: "text",
      opacity: 0.8,
      mt: ["4px"],
      img: {
        width: ["16px", null, "auto"],
        mr: ["8px"],
      },
    },
  },
};

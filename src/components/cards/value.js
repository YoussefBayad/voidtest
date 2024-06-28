/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Heading, Text, Image } from "theme-ui";
import Tilt from "react-parallax-tilt";
import { useEffect, useState } from "react";

export default function Value({ src, altText = "3d icon", title, text }) {
  const [hideTilt, setHideTilt] = useState(true);
  useEffect(() => {
    if (
      [
        "iPad Simulator",
        "iPhone Simulator",
        "iPod Simulator",
        "iPad",
        "iPhone",
        "iPod",
      ].includes(navigator.platform) ||
      // iPad on iOS 13 detection
      (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    ) {
      setHideTilt(false);
    }
  }, []);

  return (
    <Tilt
      tiltEnable={hideTilt}
      glareEnable={true}
      glareMaxOpacity={0.2}
      glareColor="#9a05da"
      glarePosition="all"
      glareBorderRadius="15px"
    >
      <Box sx={styles.card}>
        <Image src={src} alt={altText} sx={styles.img} />

        <Box sx={styles.wrapper}>
          <Heading sx={styles.wrapper.title}>{title}</Heading>
          <Text sx={styles.wrapper.subTitle}>{text}</Text>
        </Box>
      </Box>
    </Tilt>
  );
}

const styles = {
  card: {
    zIndex: 3,

    display: "flex",
    alignItems: "flex-start",
    textAlign: "center",
    flexDirection: "column",
    backdropFilter: "blur(16px) saturate(180%)",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderRadius: "12px",
    border: "1px solid rgba(209, 213, 219, 0.3)",
    borderRadius: "15px",
    p: ["20px !important ", "30px"],
    boxShadow: " 0px 4px 10px rgba(0, 0, 0, 0.25)",
    //make this one responsive
    minHeight: ["auto", "auto", "370px"],
  },

  img: {
    mx: "auto",
    mb: [3, null, 4, null, null, 5],
    width: ["90px", "110px", null, null, null, "130px"],
    zIndex: 10,
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    title: {
      fontSize: [3, null, null, null, null, 4],
      color: "heading",
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, null, null, null, 3],
      zIndex: 10,
    },

    subTitle: {
      fontSize: 1,
      color: "textSecondary",
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      zIndex: 10,
    },
  },
};

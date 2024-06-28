/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Heading, Box } from "theme-ui";
import PatternBG from "assets/images/meshsubbanner.png";
import SectionHeading from "./section-heading";

export default function SubBanner({
  title = " ",
  accent = " ",
  hide,
  rest = "",
  slogan,
}) {
  return (
    <section sx={styles.banner}>
      <Container sx={styles.container}>
        <Box sx={styles.contentWrapper}>
          <SectionHeading title={title} slogan={slogan} />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    position: "relative",
    zIndex: -1,
    // pb: [2, null, 0, null, 2, 0, null, 5],
    pb: ["60px", "60px", "70px", "70px"],
    pt: ["100px", "120px", "140px", "140px"],
    backgroundColor: "#1e4c61",
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "center top",
    backgroundSize: "cover",
    // mt: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "350px",
    // "&:after": {
    //   content: "''",
    //   position: "absolute",
    //   top: "0; bottom: 0; left: 0; right: 0",
    //   background: " rgba(0,0,0,0.5)",
    //   pointerEvents: "none",
    //   zIndex: 0,
    //   "@media screen and (max-width:760px)": {
    //     // display: " none",*
    //     zIndex: -1,
    //   },
    // },

    "@media screen and (max-width:760px)": {
      // backgroundImage: "none",
      backgroundPosition: "center",
    },
  },
  contentWrapper: {
    // background: "rgba(255, 255, 255, 0.52)",
    // borderRadius: "16px",
    // boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    // backdropFilter: "blur(6px)",
    width: ["100%", "100%"],
    maxWidth: "500px",
    minHeight: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    p: ["10px", "20px", "30px"],
    mx: "auto",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media screen and (max-width:760px)": {
      display: "block",
      textAlign: "center",
    },
  },

  title: {
    zIndex: 5,
    // filter: "brightness(1.3)",
    textAlign: "center",
    // textShadow: [
    //   "-1px 0px 0px #343D48,2px 2px 0px #343D48,3px 3px 0px black",
    //   "-1px -1px 0px #343D48,3px 3px 0px #343D48,6px 6px 0px black",
    // ],
    fontSize: ["20px", "22px", "24px", "26px", "32px", null, "34px"],
    color: "#0e192a",
    lineHeight: [1.3, null, null, null, 1.2],
    fontWeight: "700",
    letterSpacing: "-.5px",
    // pb: 8,
    "@media screen and (max-width:760px)": {
      // color: "heading",
      // textShadow: "none",
    },
    accent: {
      mt: "20px",

      color: "accent",
      display: "inherit",
    },
  },
};

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Container, Image, Grid } from "theme-ui";
import SectionHeading from "components/section-heading";
import ValuesCardColumn from "components/cards/value.js";
import one from "assets/images/services/1.svg";
import two from "assets/images/services/2.svg";
import three from "assets/images/services/3.svg";
import four from "assets/images/services/4.svg";
import logo from "assets/images/logo.png";
import orange from "assets/images/orange.png";
import { keyframes } from "@emotion/react";

// import waves from "assets/images/pattern/layered-waves.svg";

const data = [
  {
    id: 1,
    imgSrc: one,
    altText: "Forfaits mobiles et tablettes dédiés aux professionnels.",
    title: "Téléphonie mobile",
  },
  {
    id: 2,
    imgSrc: two,
    title: "Téléphonie fixe",
    altText: "Solutions et forfaits de téléphonie fixe pour entreprises.",
  },
  {
    id: 3,
    imgSrc: three,
    altText:
      "Offres et solutions ADSL, SDSL et Fibre Optique (FTTH/FTTO) dédiées aux entreprises.",
    title: "Internet",
  },
  {
    id: 4,
    imgSrc: four,
    altText:
      "Fourniture et installation de PABX et de téléphones d'entreprise.",
    title: "Standards ",
  },
];

const Services = () => {
  return (
    <section sx={styles.section} id="Services">
      <Container>
        <Box sx={styles.grid}>
          <Image src={logo} sx={styles.img} />

          <Box>
            <SectionHeading
              sx={styles.heading}
              // slogan="Telecom"
              title="CERTIFIED EXPERT"
              // description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus mattis nunc aliquam tincidunt est non. Viverra nec eu."
            />
          </Box>
          <Image src={orange} sx={styles.img} />
        </Box>
        <Grid sx={styles.valuesGrid}>
          {data.map((item) => (
            <ValuesCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.altText}
            />
          ))}
        </Grid>
        <ul sx={styles.boxArea}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </Container>
    </section>
  );
};

export default Services;

const animate = keyframes`
0% {
  transform: translateY(0) rotate(0deg);
  opacity: 1;
}
100% {
  transform: translateY(-1000px) rotate(360deg);
  opacity: 0;
}
`;
const styles = {
  section: {
    pt: [120, null, null, null, 160, 160],
    pb: [120, null, null, null, 160, 160],
    position: "relative",
    background:
      "linear-gradient(109.02deg, #E7E9FF 0%, rgba(231, 233, 255, 0.56) 118.35%)",
    "&:after": {
      content: '""',
      position: "relative",
      //   backgroundImage: `url(${waves})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      opacity: "0.6",
      backgroundRepeat: "no-repeat",
      top: "0px",
      left: "0",
      width: "100%",
      height: "100%",
      zIndex: "-1",
      "@media only screen and (max-width: 768px)": {
        // display: "none",
      },
    },
  },
  img: {
    mx: "auto",
    mb: [3, null, 4, null, null, 5],
    // width: ["90px", "110px", null, null, null, "130px"],
    zIndex: 10,
  },
  grid: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: ["column", "column", "row"],
  },
  valuesGrid: {
    mt: ["20px", "40px", "40px"],
    px: ["20px", "20px", "20px"],
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ["35px 0", null, "20px 20px"],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
    width: ["100%", "100%", "100%"],
    mx: "auto",
  },
  illustration: {
    alignItems: "center",
    img: {
      borderRadius: "10px",
    },
  },
  heading: {
    // textAlign: ["center", "center", "center", "center", "left"],
    h3: {
      // fontSize: [3, null, null, 6, 10, 11],
      lineHeight: 1.53,
    },
  },
  buttonGroup: {
    alignItems: "center",
    justifyContent: ["center", null, null, "unset"],
    mt: [4, null, null, 10],
    img: {
      maxWidth: ["120px", null, null, "none"],
      width: ["120px", "120px", "200px"],
      transition: "all 0.3s ease-in-out 0s",
      cursor: "pointer",
      "&:hover": {
        filter: "brightness(0.8)",
        transform: "scale(1.1)",
      },
    },
    appStore: {
      transform: "scale(0.9)",
      "&:hover": {
        transform: "scale(1) !important",
      },
    },
  },
  boxArea: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    margin: "0",
    padding: "0",
    overflow: "hidden",
    zIndex: -1,
    li: {
      position: " absolute",
      display: " block",
      listStyle: " none",
      width: "25px",
      height: "25px",
      background: "#7e03f4",
      animation: `${animate} 20s linear infinite`,
      bottom: "-150px",
      borderRadius: "10px",

      "&:nth-child(1)": {
        left: "86%",
        backgroundColor: "transparent",
        animationDelay: "0s",
        width: "100px",
        height: "90px",

        "&:after": {
          position: "absolute",
          content: '""',
          left: "50px",
          top: "0",
          width: "50px",
          height: "80px",
          background: "#1f76a8",
          borderRadius: "50px 50px 0 0",
          transform: "rotate(-45deg)",
          transformOrigin: "0 100%",
        },
        "&:before": {
          position: "absolute",
          content: '""',
          left: "50px",
          top: "0",
          width: "50px",
          height: "80px",
          background: "#1f76a8",
          borderRadius: "50px 50px 0 0",
          transform: "rotate(-45deg)",
          transformOrigin: "0 100%",
        },
        "&:after": {
          left: "0",
          transform: "rotate(45deg)",
          transformOrigin: "100% 100%",
        },
      },
      "&:nth-child(2)": {
        left: " 12%",
        width: " 30px",
        height: " 30px",
        animationDelay: " 1.5s",
        animationDuration: " 10s",
      },
      "&:nth-child(3)": {
        left: " 50%",
        width: " 100px",
        height: " 100px",
        animationDelay: " 5.5s",
        borderRadius: "50%",
      },
      "&:nth-child(4)": {
        right: "82%",
        animationDelay: "8.50s",
        animationDuration: " 15s",
        backgroundColor: "transparent",
        width: "0px",
        height: "0px",
        borderRight: "60px solid transparent",
        borderTop: "60px solid #0379f4",
        borderLeft: "60px solid #0379f4",
        borderBottom: "60px solid #0379f4",
        borderTopLeftRadius: "60px",
        borderTopRightRadius: "60px",
        borderBottomLeftRadius: "60px",
        borderBottomRightRadius: "60px",
      },
      "&:nth-child(5)": {
        left: "95%",
        width: " 40px",
        height: " 40px",
        animationDelay: " 0s",
      },
      "&:nth-child(6)": {
        right: "55%",
        width: "0",
        height: "0",
        animationDelay: " 13.5s",
        background: "transparent",
        borderLeft: "50px solid transparent",
        borderRight: "50px solid transparent",
        borderBottom: "50px solid #f403a9",
        margin: "2rem",
        borderRadius: "0",
      },
      "&:nth-child(7)": {
        right: "90%",
        width: "0",
        height: "0",
        animationDelay: " 9.5s",
        background: "transparent",
        borderLeft: "100px solid transparent",
        borderRight: "100px solid transparent",
        borderBottom: "100px solid #f403a9",
        margin: "2rem",
        borderRadius: "0",
      },
      "&:nth-child(8)": {
        left: "25%",
        animationDelay: "2.5s",
        background: "transparent",
        display: "block",
        color: "#f44e03",
        width: "0px",
        height: "0px",
        borderRight: "100px solid transparent",
        borderBottom: "70px solid #f44e03",
        borderLeft: "100px solid transparent",
        transform: "rotate(35deg)",

        "&:before": {
          borderBottom: "80px solid #f44e03",
          borderLeft: "30px solid transparent",
          borderRight: "30px solid transparent",
          position: "absolute",
          height: "0",
          width: "0",
          top: "-45px",
          left: "-65px",
          display: "block",
          content: `""`,
          transform: "rotate(-35deg)",
        },
        "&:after": {
          position: "absolute",
          display: "block",
          color: "#f44e03",
          top: "3px",
          left: "-105px",
          width: "0px",
          height: "0px",
          borderRight: "100px solid transparent",
          borderBottom: "70px solid #f44e03",
          borderLeft: "100px solid transparent",
          transform: "rotate(-70deg)",
          content: `""`,
        },
      },
      "&:nth-child(9)": {
        right: "22%",
        animationDelay: " 1.5s",
        animationDuration: " 15s",
        backgroundColor: "transparent",
        width: "0px",
        height: "0px",
        borderRight: "60px solid transparent",
        borderTop: "60px solid #98cdf9",
        borderLeft: "60px solid #98cdf9",
        borderBottom: "60px solid #98cdf9",
        borderTopLeftRadius: "60px",
        borderTopRightRadius: "60px",
        borderBottomLeftRadius: "60px",
        borderBottomRightRadius: "60px",
      },
      "&:nth-child(10)": {
        right: "15%",
        animationDelay: "16.5s",
        background: "transparent",
        display: "block",
        color: "#03f4df",
        width: "0px",
        height: "0px",
        borderRight: "100px solid transparent",
        borderBottom: "70px solid #03f4df",
        borderLeft: "100px solid transparent",
        transform: "rotate(35deg)",

        "&:before": {
          borderBottom: "80px solid #03f4df",
          borderLeft: "30px solid transparent",
          borderRight: "30px solid transparent",
          position: "absolute",
          height: "0",
          width: "0",
          top: "-45px",
          left: "-65px",
          display: "block",
          content: `""`,
          transform: "rotate(-35deg)",
        },
        "&:after": {
          position: "absolute",
          display: "block",
          color: "#03f4df",
          top: "3px",
          left: "-105px",
          width: "0px",
          height: "0px",
          borderRight: "100px solid transparent",
          borderBottom: "70px solid #03f4df",
          borderLeft: "100px solid transparent",
          transform: "rotate(-70deg)",
          content: `""`,
        },
      },
    },
  },
};

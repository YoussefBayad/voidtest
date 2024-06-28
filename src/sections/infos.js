/** @jsxRuntime classic */
/** @jsx jsx */
import { useState, useRef, useEffect } from "react";
import { jsx, Box, Container, Heading, Text } from "theme-ui";
import SectionHeading from "components/section-heading";
import Info from "components/info";
import Play from "components/play";

const data = [
  {
    text: "Communiqué : Résultats de phase II montrent que le rilzabrutinib permet de réduire rapidement la sévérité des démangeaisons causées par l’urticaire chronique spontanée et d’améliorer significativement l’activité de la maladie chez l’adulte",
    date: "24 février 2024",
  },
  {
    text: "Communiqué : Résultats de phase II montrent que le rilzabrutinib permet de réduire rapidement la sévérité des démangeaisons causées par l’urticaire chronique spontanée et d’améliorer significativement l’activité de la maladie chez l’adulte",
    date: "24 février 2024",
  },
  {
    text: "Communiqué : Résultats de phase II montrent que le rilzabrutinib permet de réduire rapidement la sévérité des démangeaisons causées par l’urticaire chronique spontanée et d’améliorer significativement l’activité de la maladie chez l’adulte",
    date: "24 février 2024",
  },
  {
    text: "Communiqué : Résultats de phase II montrent que le rilzabrutinib permet de réduire rapidement la sévérité des démangeaisons causées par l’urticaire chronique spontanée et d’améliorer significativement l’activité de la maladie chez l’adulte",
    date: "24 février 2024",
  },
  {
    text: "Communiqué : Résultats de phase II montrent que le rilzabrutinib permet de réduire rapidement la sévérité des démangeaisons causées par l’urticaire chronique spontanée et d’améliorer significativement l’activité de la maladie chez l’adulte",
    date: "24 février 2024",
  },
];

const infos = () => {
  return (
    <Box id="infos" as="section" sx={styles.infos}>
      <Container>
        <Heading
          sx={{ fontSize: "35px", fontWeight: "bold", marginBottom: "80px" }}
        >
          Nos dernières informations
        </Heading>
        {data.map((info, index) => (
          <Info text={info.text} date={info.date} />
        ))}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "80px",
          }}
        >
          <Heading sx={{ fontSize: "35px", fontWeight: "bold" }}>
            <br></br>
          </Heading>
          <Heading
            sx={{ fontSize: "22px", fontWeight: "bold", cursor: "pointer" }}
          >
            Voir tous les communiqués de presse
            <span style={{ marginLeft: "10px" }}>
              <Play />
            </span>
          </Heading>
        </Box>
      </Container>
    </Box>
  );
};

export default infos;

const styles = {
  infos: {
    pt: [80, null, null, null, 120, 140],
    // pb: [80, null, null, null, 120, 140],
  },
  contentWrapper: {
    iframe: {
      borderRadius: "10px",
      border: "none",
    },
  },

  heading: {
    h3: {
      color: "primary",
    },
  },
};

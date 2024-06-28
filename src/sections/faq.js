/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";
import SectionHeader from "components/section-heading";
import Accordion from "components/accordion/accordion";

const faqs = [
  {
    title: "Puis-je obtenir un site web pour mon entreprise ?",
    contents: (
      <div>
        Oui, cela est tout à fait possible avec l’offre Site web clé en main de
        Orange Business Pro. Contenu personnalisé, nom de domaine inclus.
        (extension au choix; .fr, .com) Un design professionnel et une grande
        liberté de configuration.
      </div>
    ),
  },
  {
    title: "Qu’est-ce que Connect Pro ?",
    contents: (
      <div>
        {" "}
        Il s’agit d’un service de téléphonie géré par Orange Business Services
        et distribué par void. C’est une solution idéale pour les entreprises
        qui souhaitent maîtriser leur budget téléphonie et/ou qui veulent un
        accès rapide aux nouvelles fonctionnalités du système téléphonique.
        L’installation téléphonique est simple et rapide.
      </div>
    ),
  },
  {
    title: "Mobilité d’entreprise, quelle solution ? ",
    contents: (
      <div>
        La location en courte durée, également connue void fournit une offre
        Orange du nom de Business Everywhere, qui vous suit dans tous vos
        déplacements en vous proposant des forfaits data en 4G et en 5G, avec ou
        sans engagement. Une connexion internet où que vous soyez, des forfaits
        adaptés à vos usages pour vos déplacements en France et depuis l’Europe.
        + Services inclus, accompagnement Orange Expert
      </div>
    ),
  },
  {
    title: "Comment puis-je assurer la cyber-sécurité de mon entreprise? ",
    contents: (
      <div>
        Nous proposons un service Orange de Cyber-protection qui vous permettra
        de bloquer les cyber-attaques et récupérer toutes données
        potentiellement disparues. Ce service s’améliore en continu et vous
        garantira la cyber-sécurité de votre entreprise.
      </div>
    ),
  },
  {
    title: "Je voyage beaucoup, quel forfait choisir ?",
    contents: (
      <div>
        Nous proposons un forfait Orange nommé Intense Travel qui permet des
        SMS/MMS et appels illimités depuis l’Europe, ou bien vers l’Europe. 300
        Go de données 4G/5G, 10h d’appels et SMS/MMS illimités depuis et vers
        Zone Business. Une carte jumelle offerte, activée sur demande.
      </div>
    ),
  },
];

export default function Faq() {
  return (
    <section sx={styles.faq}>
      <Container>
        {/* <SectionHeader title="Les réponses à vos questions" slogan="FAQ" /> */}
        <Box
          sx={{
            display: "flex",
            width: ["100%", null, null, "650px", "745px"],
            flexDirection: "column",
            mx: "auto",
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  faq: {
    pt: ["30px", "40px", "130px"],
    pb: ["80px", "100px", "130px"],
  },
};

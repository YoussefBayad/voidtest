import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import WhoWeAre from "sections/WhoWeAre";
import Satisfaction from "sections/Satisfaction";

import Right from "sections/right";
import Blog from "sections/blog";
import BlogTwo from "sections/blogTwo";
import BlogThree from "sections/blogThree";
import Infos from "sections/infos";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="void" description="Orange service provider" />
        <Banner />
        <Satisfaction />
        <WhoWeAre />
        <Right />
        <Blog />
        <BlogTwo />
        <Infos />
        <BlogThree />
      </Layout>
    </ThemeProvider>
  );
}

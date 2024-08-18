import React from "react";
import FeaturedArticleList from "../component/Homepage/FeaturedArticleList";
import Layout from "../component/layout/Layout";

function Home() {
  return (
    <Layout>
      <main>
        <FeaturedArticleList />
      </main>
    </Layout>
  );
}

export default Home;

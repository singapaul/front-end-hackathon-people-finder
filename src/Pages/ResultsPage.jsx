import React from "react";
import Layout from "../Components/Layout/Layout";
import ProfileCard from "../Components/ProfileCard/ProfileCard";
import lizard from "../../src/Assets/images/lizard.jpeg";
import Grid from "../Components/Grid/Grid";
import mockProfiles from "../../src/Assets/mockProfiles"

const ResultsPage = () => {
  return (
    <Layout>
      <Grid profiles={mockProfiles} />
    </Layout>
  );
};

export default ResultsPage;

import Layout from "../Components/Layout/Layout";
import Grid from "../Components/Grid/Grid";
import mockProfiles from "../../src/Assets/mockProfiles"

const ResultsPage = () => {
  return (
    <Layout>
      <Grid cards={mockProfiles} />
    </Layout>
  );
};

export default ResultsPage;

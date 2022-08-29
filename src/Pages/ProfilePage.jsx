import React from "react";
import Layout from "../Components/Layout/Layout";
import mockEngaements from "../Assets/mockEngaements";
import EngagementGrid from "../Components/EngagementGrid/EngagementGrid";

const ProfilePage = () => {
  return (
    <Layout>
      <EngagementGrid cards={mockEngaements} />
    </Layout>
  );
};

export default ProfilePage;

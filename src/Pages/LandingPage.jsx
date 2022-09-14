import { Search } from "@mui/icons-material";
import React from "react";
import Layout from "../Components/Layout/Layout";
import Hero from "../Components/Hero/Hero";
import SearchComponent from "../Components/Search/Search";


const LandingPage = () => {  
  return <Layout><Hero/><SearchComponent/></Layout>;
};

export default LandingPage;

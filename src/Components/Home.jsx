import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import InfoSection from "./InfoSection";
import BenefitSection from "./BenefitSection";
import HomeSection from "./HomeSection";

const Home = () => {
  const urll =
    "https://images.unsplash.com/photo-1707623988408-ab88c9981730?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <>
    <HomeSection /> 
    <BenefitSection />
    <InfoSection />
    <Footer />
    </>
  );
};

export default Home;

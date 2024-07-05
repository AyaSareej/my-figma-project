import React from "react";
import Hero from "../components/Hero";
import ThirdPart from "../components/ThirdPart";

const HomePage = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <>
        <Hero />
        <ThirdPart />
    </>
  );
};

export default HomePage;

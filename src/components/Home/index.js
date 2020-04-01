import React from "react";
import Header from "../Home/Header/index";
import ThreeCols from "../Home/ThreeCols/index";
import SimpleSteps from "../Home/SimpleSteps/index";
import AboutUs from "../Home/AboutUs/index";

export default function Home() {
  return (
    <>
      <Header />
      <ThreeCols />
      <SimpleSteps />
      <AboutUs />
    </>
  );
}

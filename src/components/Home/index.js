import React from "react";
import Header from "../Home/1_Header/index";
import Info from "../Home/2_Info/index";
import SimpleSteps from "../Home/3_SimpleSteps/index";
import AboutUs from "../Home/4_AboutUs/index";
import Organizations from "../Home/5_Organizations/index";
import Contact from "../Home/6_Contact/index";

export default function Home() {
  return (
    <>
      <Header />
      <Info />
      <SimpleSteps />
      <AboutUs />
      <Organizations />
      <Contact />
    </>
  );
}

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "./Hero";
import ButtonWtsp from "@/components/ButtonWtsp";
import Content from "./Content";

const Container = () => {
  return (
    <div className="relative">
      <Navbar path={"/rural-hotel"} change={true} />
      <Hero />
      <Content />
      <Footer />
      <div className="fixed bottom-7 right-6 z-50">
        <ButtonWtsp />
      </div>
    </div>
  );
};

export default Container;

import Footer from "@/app/fr/components/Footer";
import Navbar from "@/app/fr/components/Navbar";
import React from "react";
import Hero from "./Hero";
import BlogList from "./BlogList";
import ButtonWtsp from "@/components/ButtonWtsp";

const Loader = () => {
  return (
    <div className="relative bg-casa-background min-h-screen">
      <Navbar path={"/blog/"} />
      <Hero />
      <BlogList />
      <Footer />
      <div className="fixed bottom-7 right-6 text-casa-scarlet z-50">
        <ButtonWtsp />
      </div>
    </div>
  );
};

export default Loader;

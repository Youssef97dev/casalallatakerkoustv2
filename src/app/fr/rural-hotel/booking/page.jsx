import React from "react";
import FormBooking from "./components/FormBooking";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const page = () => {
  return (
    <div className="relative">
      <Navbar path={"/rural-hotel/booking"} change={true} />
      <FormBooking />
      <Footer />
    </div>
  );
};

export default page;

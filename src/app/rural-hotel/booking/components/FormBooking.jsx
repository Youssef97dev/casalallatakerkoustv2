"use client";
import React, { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import Link from "next/link";
import { ClockLoader } from "react-spinners";
import PhoneInput from "react-phone-input-2";
import DatePicker from "rsuite/DatePicker";
import "rsuite/DatePicker/styles/index.css";
import "react-phone-input-2/lib/style.css";

const Booking = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [roomType, setRoomType] = useState("");
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());

  const [messageSent, setMessageSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const notify = () =>
    toast.warn("All fields required.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  const notifySent = () =>
    toast.success("Thank you for your request, we will back to you soon.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  const handleSubmit = async () => {
    const formDataToSend = new FormData();

    formDataToSend.append("name", name);
    formDataToSend.append("email", email);
    formDataToSend.append("phone", phone);
    formDataToSend.append("room_type", roomType);
    formDataToSend.append(
      "check_in",
      new Intl.DateTimeFormat("en-En", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(checkIn)
    );
    formDataToSend.append(
      "check_out",
      new Intl.DateTimeFormat("en-En", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(checkOut)
    );
    formDataToSend.append("message", message);

    if (name && email && phone && roomType && checkIn && checkOut) {
      try {
        setLoading(true);
        const res = await fetch(
          "https://purehouseonthelake.com/api/hotel-booking.php",
          {
            method: "POST",
            body: formDataToSend,
          }
        );
        if (res.status === 200) {
          notifySent();
          setMessageSent(true);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    } else {
      notify();
    }
  };

  return (
    <section className="w-full flex flex-col justify-center px-4 md:px-20 lg:px-28 pb-12 pt-32">
      <ToastContainer
        position="top-center"
        style={{ zIndex: 999999 }}
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      {!messageSent ? (
        <div className="w-full bg-[#DED9D3] p-8">
          <h2 className="uppercase text-center text-[22px] lg:text-[28px] leading-[30.8px] font-thin tracking-widest text-white mb-8">
            Booking Request
          </h2>

          <div className="space-y-6">
            {/* Name */}
            <div className="font-lora">
              <label className="block text-[13.8px] leading-[17.94px] text-white mb-2">
                Name *
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-white px-3 py-2 focus:outline-none text-[12px]"
              />
            </div>

            {/* Email */}
            <div className="font-lora">
              <label className="block text-[13.8px] leading-[17.94px] text-white mb-2">
                Email *
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white px-3 py-2 focus:outline-none text-[12px]"
              />
            </div>

            {/* Phone / Room Type */}
            <div className="flex flex-col md:flex-row gap-6 font-lora">
              <div className="">
                <label className="block text-[13.8px] leading-[17.94px] text-white mb-2">
                  Phone *
                </label>
                <PhoneInput
                  id="phone"
                  country={"ma"}
                  //value={this.state.phone}
                  onChange={(phone) => setPhone(phone)}
                />
              </div>
              <div className="flex-1">
                <label className="block text-[13.8px] leading-[17.94px] text-white mb-2">
                  Select Accommodation *
                </label>
                <select
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  required
                  className="w-full bg-white px-3 py-2 focus:outline-none text-[12px]"
                >
                  <option value="">-- Please choose an option --</option>
                  <option value="Standard">Standard</option>
                  <option value="Standard - Lake view">
                    Standard - Lake view
                  </option>
                </select>
              </div>
            </div>

            {/* Check-in / Check-out */}
            <div className="flex flex-col md:flex-row gap-6 font-lora">
              <div className="flex-1">
                <label className="block text-[13.8px] leading-[17.94px] text-white mb-2">
                  Check-in Date *
                </label>
                <DatePicker
                  oneTap
                  placeholder="Select Check-in"
                  className="w-full   focus:outline-none text-[12px]"
                  value={checkIn}
                  onChange={setCheckIn}
                />
              </div>

              <div className="flex-1">
                <label className="block text-[13.8px] leading-[17.94px] text-white mb-2">
                  Check-out Date *
                </label>
                <DatePicker
                  oneTap
                  placeholder="Select Check-out"
                  className="w-full   focus:outline-none text-[12px]"
                  value={checkOut}
                  onChange={setCheckOut}
                />
              </div>
            </div>

            {/* Message */}
            <div className="font-lora">
              <label className="block text-[13.8px] leading-[17.94px] text-white mb-2">
                Message *
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full bg-white px-3 py-2 focus:outline-none text-[12px]"
              />
            </div>

            {/* Button */}
            <button
              onClick={() => handleSubmit()}
              className="w-32 bg-[#a89986] text-white uppercase tracking-widest py-2 px-4 hover:bg-[#8c7c68] transition text-[12px] lg:text-[15px] flex justify-center items-center"
            >
              {loading ? <ClockLoader size={20} color="#000000" /> : "Submit"}
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full flex items-center p-3.5 rounded text-[#00AB55] bg-[#DDF5F0] mt-3">
          <span className="pr-2">
            <strong className="mr-1">Success!</strong>Thank you for your
            request, we will get back to you as soon as possible
          </span>
          <Link
            href="/"
            className="ml-auto bg-[#00AB55] text-[#DDF5F0] rounded hover:opacity-80 px-3 py-1"
          >
            Home
          </Link>
        </div>
      )}
    </section>
  );
};

export default Booking;

import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "./../assets/assets"; // Ensure this path is correct

function Banner() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/login");
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex bg-primary rounded-lg px-6 sm:px-10 md:px-12 my-20 md:mx-10">
      {/* Left side - text section */}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
          <p>Book Appointment</p>
          <p className="mt-4">With 200+ Trusted Doctors</p>
        </div>
        <button
          onClick={handleNavigation}
          className="bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all"
        >
          Create account
        </button>
      </div>

      {/* Right side - image section */}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
        <img
          className="w-full absolute bottom-0 right-0 max-w-md"
          src={assets.appointment_img}
          alt="Appointment"
        />
      </div>
    </div>
  );
}

export default Banner;

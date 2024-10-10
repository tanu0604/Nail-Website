import React from "react";
import extension from "../../assets/Nails/extension.jpeg";
import gel from "../../assets/Nails/gel.jpeg"; // Uncomment if needed
import NailArt from "../../assets/Nails/NailArt.jpeg"; // Uncomment if needed
import Acrylic from "../../assets/Nails/Acrylic.jpeg"; // Uncomment if needed

const nailServices = [
  {
    title: "Nail Extension",
    image: extension,
    description:
      "Beautiful and elegant nail extensions that add length and style.",
    price: "$50",
  },
  {
    title: "Gel Manicure",
    image: gel,
    description: "Long-lasting gel manicure for a shiny and durable finish.",
    price: "$40",
  },
  {
    title: "Acrylic Nails",
    image: Acrylic,
    description:
      "Stunning acrylic nails available in various designs and colors.",
    price: "$55",
  },
  {
    title: "Nail Art",
    image: NailArt,
    description: "Customized nail art to express your unique style.",
    price: "$30",
  },
];

const Nails = () => {
  const handleBooking = () => {
    console.log("Booking appointment");
  };

  

  return (
    <div className="Nails-section flex flex-col justify-center items-center min-h-screen px-4 py-10 bg-customLight w-screen">
      {/* Nail Services Heading */}
      <h1
        className="text-3xl text-customRed font-bold mb-6 px-2"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        Nail Services
      </h1>
      <div className="nails-list flex flex-wrap gap-6 justify-center items-center p-4 h-">
        {/* Service Cards */}
        {nailServices.map((service, index) => (
          <div
            key={index}
            className="service-card flex flex-col items-center border-black shadow-lg p-4 rounded-md w-80 h-[400px]"
            data-aos="zoom-in"
            data-aos-delay="index*100"
            data-aos-duration="800"
          >
            {/* Image section */}
            <img
              src={service.image}
              alt={service.title}
              className="img object-cover w-48 h-48 mb-4 rounded-full"
            />
            {/* Service Title */}
            <h2 className="text-2xl font-bold">{service.title}</h2>
            {/* Description */}
            <p className="text-lg text-center mb-2 " style={{ color: "#36454F" }}>{service.description}</p>
            {/* Pricing */}
            <button
              className="booking bg-customRed p-2 rounded-xl text-customLight font-bold focus:scale-105 mb-2 w-20"
              onClick={handleBooking}
            >
              <span className="text-lg mb-2 font-semibold ">{service.price}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nails;

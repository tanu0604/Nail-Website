import React from "react";
import AboutImg from "../../assets/About/AboutImg.jpeg";

const About = () => {
  return (
    // About us section
    <div className="About-section flex flex-col justify-center items-center px-4 py-10 bg-customLight h-screen  w-screen">
      <div className="container flex flex-col lg:flex-row-reverse justify-evenly items-center gap-10">
        {/* Image container */}
        <div>
          <img
            src={AboutImg}
            alt="About"
            className="h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px] object-cover rounded-lg"
            data-aos="zoom-in"
            data-aos-delay="description* 100s"
            data-aos-duration="500s"
          />
        </div>

        {/* Description container */}
        <div className="descriptions flex flex-col gap-4 justify-center items-center text-center lg:text-left">
          <h1
            className="heading font-bold text-3xl sm:text-4xl lg:text-5xl text-customRed"
            data-aos="fade-down"
            data-aos-duration="500s"
          >
            About Us
          </h1>
          <p
            className="para max-w-[350px] sm:max-w-[500px] text-lg sm:text-xl"
            data-aos="fade-up"
            data-aos-delay="description* 50s"
            data-aos-duration="500s"
            style={{ color: "#36454F" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo unde
            quasi quae ducimus nihil. Quod corrupti, maiores rem laborum
            nesciunt accusantium tenetur sit perspiciatis. Sunt officiis dolore
            nulla iste culpa eligendi quasi atque! Cumque corrupti animi nulla
            velit aspernatur non, omnis in, vel consectetur qui atque voluptates
            officia, illum eaque?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

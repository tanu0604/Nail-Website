import React from "react";
import Testimonials from "../Testimonials/Testimonials.jsx"
import Work1 from "../../assets/Work/Work1.jpeg";
import Work2 from "../../assets/Work/Work2.jpeg";
import Work3 from "../../assets/Work/Work3.jpeg";
import Work4 from "../../assets/Work/Work4.jpeg";
import Work5 from "../../assets/Work/Work5.jpeg";
import Work6 from "../../assets/Work/Work6.jpeg";
import Work7 from "../../assets/Work/Work7.jpeg";
import Work8 from "../../assets/Work/Work8.jpeg";
import Work9 from "../../assets/Work/Work9.jpeg";
import Work10 from "../../assets/Work/Work10.jpeg";
import Work11 from "../../assets/Work/Work11.jpeg";
import "./Work.css";

const projects = [
  { title: "Project 1", image: Work1, link: "#" },
  { title: "Project 2", image: Work2, link: "#" },
  { title: "Project 3", image: Work3, link: "#" },
  { title: "Project 4", image: Work4, link: "#" },
  { title: "Project 5", image: Work5, link: "#" },
  { title: "Project 6", image: Work6, link: "#" },
  { title: "Project 7", image: Work7, link: "#" },
  { title: "Project 8", image: Work8, link: "#" },
  { title: "Project 9", image: Work9, link: "#" },
  { title: "Project 10", image: Work10, link: "#" },
  { title: "Project 11", image: Work11, link: "#" },
];

const Work = () => {
  return (
    <>
    <div className="work-section py-10 bg-customLight w-screen">
      <h2 className="text-3xl font-bold text-center mb-8 text-customRed">My Work</h2>
      <div className="work-carousel flex items-center">
        <div className="carousel-track">
          {projects.concat(projects).map((project, index) => (
            <div
              key={index}
              className="project-item"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-duration="800s">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-40 rounded-md shadow-lg"
                />
                <h3 className="text-center mt-2 font-semibold">{project.title}</h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>


    <Testimonials></Testimonials>
    </>
  );
};

export default Work;

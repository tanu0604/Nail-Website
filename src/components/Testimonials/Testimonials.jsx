import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./Testimonials.css"; // Create a separate CSS file for styles

const testimonials = [
  {
    name: "Ananya Sharma",
    feedback:
      "Amazing service! The staff was extremely professional, and the results exceeded my expectations.",
  },
  {
    name: "Rahul Verma",
    feedback:
      "Great experience. The attention to detail was impressive, and the ambiance was very relaxing.",
  },
  {
    name: "Sneha Mukherjee",
    feedback:
      "I absolutely love how my nails turned out! They really listened to what I wanted.",
  },
  {
    name: "Aditya Patel",
    feedback:
      "Very happy with the service! The quality was top-notch, and I will definitely return.",
  },
  {
    name: "Ritika Desai",
    feedback:
      "A wonderful experience. The team is very talented, and the place is very well-maintained.",
  },
  {
    name: "Rohit Malhotra",
    feedback:
      "I had an amazing time. The service was swift, and the staff was really polite.",
  },
  {
    name: "Ishita Singh",
    feedback:
      "Loved the service! The environment was calming, and the outcome was perfect!",
  },
  {
    name: "Aman Gupta",
    feedback:
      "Highly recommended! A friendly staff and a clean environment made my visit enjoyable.",
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (1 second)
      once: true, // Whether the animation should happen only once
    });
  }, []);

  return (
    <div className="testimonial-section py-10 bg-customLight  w-screen text-customRed">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
      <div className="testimonials-container flex flex-wrap justify-center gap-6 px-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial-card p-6 border rounded-lg shadow-lg"
            data-aos="fade-up" data-aos-duration="800s" // AOS fade-up animation
          >
            <h3 className="font-semibold text-xl mb-2">{testimonial.name}</h3>
            <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

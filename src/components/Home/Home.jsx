import React from "react";
import HomePage from "../../assets/HomePage/HomePage.png";
import offer from "../../assets/HomePage/offer.png";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; // Import slick carousel styles
// import "slick-carousel/slick/slick-theme.css"; // Import slick theme styles

const Home = () => {
  const ImageList = [
    {
      id: 1,
      img: HomePage,
      title: "Your nails are jewels, not tools.",
      description:
        "Welcome to NailsByNavi—where your nails become a stunning reflection of your style!",
    },
    // {
    //   id: 2,
    //   img: offer,
    //   title: "Navratri Special: 20% off spooky nail art!",
    //   description:
    //     "Get ready for the spookiest season with our exclusive Halloween nail designs!",
    // },
  ];

  // Slider settings
  // const settings = {
  //   dots: true, // Show dots for navigation
  //   arrows: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  // };

  return (
    <div className="home-section flex flex-col justify-center items-center max-h-screen px-4 bg-customLight  w-screen">
      {/* <Slider {...settings}> */}
      {ImageList.map((data) => (
        <div
          key={data.id}
          className="image-container flex flex-col md:flex-row items-center mb-8 "
        >
          {/* Image */}
          <div
            className="image mb-4 md:mb-0 md:mr-5 flex-shrink-0"
            data-aos="fade-right"
          >
            <img
              src={data.img}
              alt={data.title}
              className="object-cover w-full h-1/2 max-w-xs md:max-w-md rounded "
            />
          </div>

          {/* Content */}
          <div
            className="content flex flex-col gap-3 text-center md:text-left"
            data-aos="fade-left"
          >
            <h1 className="titles font-bold text-2xl md:text-4xl text-customRed">
              {data.title}
            </h1>
            <p
              className="description font-semibold"
              style={{ color: "#36454F" }}
            >
              <em>{data.description}</em>
            </p>
          </div>
        </div>
      ))}
      {/* </Slider> */}
    </div>
  );
};

export default Home;

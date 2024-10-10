import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Logo from '../../assets/Website/logo.jpg';

function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Nails", path: "/nails" },
    { name: "Work", path: "/work" },
    // { name: "Contact", path: "/contact" },
  ];

  const handleBooking = () => {
    console.log("Booking");
  };

  return (
    <>
      <nav className="navbar bg-customRed  w-screen">
        <div className="navi flex flex-col justify-evenly items-center md:flex-row space-y-2">

          {/* Logo in the navigation bar */}
          <div className="image h-20 w-20" data-aos="zoom-in" data-aos-duration="200s">
            <img src={Logo} alt="NailsByNavi" className="rounded-full p-3" />
          </div>

          {/* Nav Items in the navigation bar */}
          <div className="navItems flex space-x-6 list-none text-white font-semibold md:space-x-6 lg:space-x-10">
            {navItems.map((item, key) => (
              <li key={key} className="hover:scale-150 duration-200 translate-x-3 hover:underline text-xl "
              data-aos="fade-up" 
              data-aos-duration="400s"
              data-aos-delay="image*200"
              >
                <Link to={item.path}>{item.name}</Link> {/* Link to respective path */}
              </li>
            ))}
          </div>

          {/* Appointment Button */}
          <div>
            <button
              className="booking bg-customLight p-2 rounded-xl text-customRed font-bold focus:scale-100 mb-2"
              onClick={handleBooking}
              data-aos="zoom-in" 
              data-aos-duration="400s"
              data-aos-delay="image*400"
            >
              Appointment
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

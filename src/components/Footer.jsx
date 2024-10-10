import React from 'react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa'; // Importing icons for Instagram and Facebook
import { FiPhoneCall, FiMail } from 'react-icons/fi'; // Importing icons for phone and email
import { Link } from 'react-router-dom'; // Importing Link for navigation

function Footer() {
  return (
    <footer className="footer bg-customRed text-customLight  py-8  w-screen">
      <div className="container mx-auto px-4">
        {/* Main Footer Grid */}
        <div className="footer-content grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Navigation Links Section */}
          <div className="footer-nav">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:scale-150">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:scale-150">About</Link>
              </li>
              <li>
                <Link to="/nails" className="hover:scale-150">Nails</Link>
              </li>
              <li>
                <Link to="/work" className=" hover:scale-150">Work</Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:scale-150">Testimonials</Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-contact">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FiPhoneCall className="mr-2" />
                <span>+123-456-7890</span>
              </li>
              <li className="flex items-center">
                <FiMail className="mr-2" />
                <span>info@nailsbyname.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="footer-social">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-customLight hover:scale-150 "
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-customLight hover:scale-150"
              >
                <FaFacebookF size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom text-center mt-8 border-t border-gray-600 pt-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Nails By Name. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

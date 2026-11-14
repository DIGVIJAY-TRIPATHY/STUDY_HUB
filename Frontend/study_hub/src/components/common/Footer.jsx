
import { Link } from "react-router-dom";

import {
  FaGraduationCap,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* About StudyHub */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-blue-600 p-3 rounded-xl">
                <FaGraduationCap className="text-white text-2xl" />
              </div>

              <h2 className="text-2xl font-bold text-white">
                Study<span className="text-blue-500">Hub</span>
              </h2>
            </div>

            <p className="text-gray-400 leading-7 text-sm">
              StudyHub is a learning management platform designed
              to make education easier, smarter and more accessible.
              Learn, explore and grow with quality learning resources.
            </p>

            {/* Social Media - No GitHub */}
            <div className="flex items-center gap-4 mt-6">

              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center
                rounded-full bg-gray-800 hover:bg-blue-600
                hover:text-white transition duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center
                rounded-full bg-gray-800 hover:bg-pink-600
                hover:text-white transition duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center
                rounded-full bg-gray-800 hover:bg-blue-500
                hover:text-white transition duration-300"
              >
                <FaLinkedinIn />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-sm">

              <li>
                <Link to="/" className="hover:text-blue-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-blue-400 transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/courses" className="hover:text-blue-400 transition">
                  Courses
                </Link>
              </li>

              <li>
                <Link to="/faculty" className="hover:text-blue-400 transition">
                  Faculty
                </Link>
              </li>

              <li>
                <Link to="/notices" className="hover:text-blue-400 transition">
                  Notices
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-blue-400 transition">
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Learning Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Learning Resources
            </h3>

            <ul className="space-y-4 text-sm">

              <li>
                <Link to="/courses" className="hover:text-blue-400 transition">
                  Online Courses
                </Link>
              </li>

              <li>
                <Link to="/notes" className="hover:text-blue-400 transition">
                  Study Notes
                </Link>
              </li>

              <li>
                <Link to="/notices" className="hover:text-blue-400 transition">
                  Academic Notices
                </Link>
              </li>

              <li>
                <Link to="/faculty" className="hover:text-blue-400 transition">
                  Faculty Information
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Contact Information
            </h3>

            <ul className="space-y-5 text-sm">

              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-500 mt-1 shrink-0" />
                <span className="text-gray-400">
                  Your College Address, Bhubaneswar, Odisha
                </span>
              </li>

              <li className="flex items-center gap-3">
                <FaEnvelope className="text-blue-500 shrink-0" />
                <a
                  href="mailto:yourcollege@example.com"
                  className="hover:text-blue-400 transition break-all"
                >
                  yourcollege@example.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-500 shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-blue-400 transition"
                >
                  +91 9876543210
                </a>
              </li>

            </ul>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-7
              bg-blue-600 hover:bg-blue-700 text-white
              px-5 py-3 rounded-lg text-sm font-medium
              transition duration-300"
            >
              Contact Us
              <FaArrowRight />
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6
        flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} StudyHub. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6 text-sm">

            <Link
              to="/privacy"
              className="text-gray-500 hover:text-blue-400 transition"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-gray-500 hover:text-blue-400 transition"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;

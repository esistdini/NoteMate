import Logo from "../assets/Logo.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";


import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__brand">
        <img src={Logo} alt="NoteMate Logo" className="header__logo" />
        <div>
          <h1>NoteMate</h1>
        </div>
      </div>

      <div className="socialLinks">
            <a 
                href="https://github.com/esistdini"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
                >
                <FaGithub />
            </a>
            
            <a 
                href="https://instagram.com/dineshaswin.s"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                >
                <FaInstagram />
            </a>
            
            <a 
                href="https://linkedin.com/in/dinesh-aswin-s"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                >
                <FaLinkedin />
            </a>
        </div>
    </header>
  );
};
import "./Footer.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="footer">

            <p>
                Designed and Developed by <strong>Dinesh Aswin S</strong>
            </p>

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

        </footer>
    );
};
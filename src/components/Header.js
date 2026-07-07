import Logo from "../assets/Logo.png";
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

      <div className="header__actions">
        <button className="theme light" aria-label="Light Mode"></button>
        <button className="theme dark" aria-label="Dark Mode"></button>
      </div>
    </header>
  );
};
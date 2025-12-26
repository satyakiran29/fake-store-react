import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} FakeStore | Developed by{" "}
        <strong>Satyakiran</strong>
      </p>
    </footer>
  );
};

export default Footer;

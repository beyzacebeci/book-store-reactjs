import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Footer.css";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon />
        <LinkedInIcon />
      </div>
      <div>
        <span className="text-xs">© Copyright 2025 Beyza Cebeci</span>
      </div>
    </div>
  );
};

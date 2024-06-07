import React from "react";
import "../styles/index.css";
import "../styles/Footer.css";

interface FooterProps {
  text: string;
  backgroundColor?: string;
  textColor?: string;
}

const Footer: React.FC<FooterProps> = ({
  text,
  backgroundColor,
  textColor,
}) => {
  const footerStyle = {
    backgroundColor: backgroundColor || "var(--bgColor)",
    color: textColor || "var(--textColor)",
    padding: "10px",
    textAlign: "center" as const,
  };

  return (
    <footer style={footerStyle} className="flex col">
      <div className="max-width">
        <p>{text}</p>
      </div>
    </footer>
  );
};

export default Footer;

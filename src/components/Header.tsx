import React from "react";
import "../styles/index.css";
import "../styles/Header.css";

interface HeaderProps {
  logo: string; // URL to the logo image
  navItems: { text: string; href: string }[];
  backgroundColor?: string;
  textColor?: string;
}

const Header: React.FC<HeaderProps> = ({
  logo,
  navItems,
  backgroundColor,
  textColor,
}) => {
  const headerStyle = {
    backgroundColor: backgroundColor || "var(--bgColor)",
    color: textColor || "var(--textColor)",
  };

  return (
    <header style={headerStyle}>
      <div className="max-width flex">
        <img src={logo} alt="Logo" className="logo" />
        <nav>
          <ul className="nav-menu">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  style={{ color: textColor || "var(--textColor)" }}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

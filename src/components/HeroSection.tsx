import React from "react";
import "../styles/HeroSection.css";

interface HeroSectionProps {
  tagline: string;
  mainTitle: string;
  subtitle: string;
  additionalInfo: string;
  cta1: { text: string; onClick: () => void };
  cta2: { text: string; onClick: () => void };
  image: string; // Assuming image is a URL. For Lottie, you might need a different type.
  layout: "left" | "center";
}

const HeroSection: React.FC<HeroSectionProps> = ({
  tagline,
  mainTitle,
  subtitle,
  additionalInfo,
  cta1,
  cta2,
  image,
  layout,
}) => {
  const isCenterAligned = layout === "center";

  return (
    <section id="home-hero">
      <div
        className={`hero-section max-width ${
          isCenterAligned ? "center" : "left"
        }`}
      >
        <div className="hero-content">
          <p className="tagline">{tagline}</p>
          <h1 className="main-title">{mainTitle}</h1>
          <p className="subtitle">{subtitle}</p>
          <p className="additional-info">{additionalInfo}</p>
          <div className="cta-buttons">
            <button className="cta-button" onClick={cta1.onClick}>
              {cta1.text}
            </button>
            <button className="cta-button" onClick={cta2.onClick}>
              {cta2.text}
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src={image} alt="Hero" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

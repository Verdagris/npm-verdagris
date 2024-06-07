import React from "react";
import "../styles/Banner.css";

interface BannerProps {
  title: string;
  tagline: string;
  cta: { text: string; onClick: () => void };
  layout: "left" | "center";
  backgroundColor?: string;
  textColor?: string;
}

const Banner: React.FC<BannerProps> = ({
  title,
  tagline,
  cta,
  layout,
  backgroundColor,
  textColor,
}) => {
  const bannerStyle = {
    backgroundColor: backgroundColor || "var(--bgColor)",
    color: textColor || "var(--textColor)",
    width: "100%",
  };

  const isCenterAligned = layout === "center";

  return (
    <div style={bannerStyle} className="flex">
      <div
        className={`max-width banner ${isCenterAligned ? "center" : "left"}`}
      >
        <h1 className="banner-title w-full">{title}</h1>
        <div className="flex col w-full">
          <p className="banner-tagline">{tagline}</p>
          <button className="banner-cta" onClick={cta.onClick}>
            {cta.text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

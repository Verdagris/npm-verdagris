import React from "react";
import "../styles/SectionA.css";

interface SectionAProps {
  headline: string;
  paragraph: string;
  cta: { text: string; onClick: () => void };
  image: string; // Assuming image is a URL
  mirrorLayout?: boolean;
  bgColor?: string;
}

const SectionA: React.FC<SectionAProps> = ({
  headline,
  paragraph,
  cta,
  image,
  mirrorLayout = false,
  bgColor,
}) => {
  return (
    <section
      id={"section-a"}
      className="half"
      style={bgColor ? { backgroundColor: bgColor } : {}}
    >
      <div className="max-width section-a">
        <div className={`section-content ${mirrorLayout ? "mirror" : ""}`}>
          <div className="section-image">
            <img src={image} alt="Section" />
          </div>
          <div className="section-text">
            <h2 className="section-headline">{headline}</h2>
            <p className="section-paragraph">{paragraph}</p>
            <button className="section-cta" onClick={cta.onClick}>
              {cta.text}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionA;

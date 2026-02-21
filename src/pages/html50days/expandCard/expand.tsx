import { useState } from "react";
import "./ExpandingCard.css";

import nature1 from "../../assets/nature1.jpg";
import nature7 from "../../assets/nature7.jpg";
import nature4 from "../../assets/nature4.jpg";
import nature5 from "../../assets/nature5.jpg";
import nature6 from "../../assets/nature6.jpg";

const ExpandingCard = () => {
  const images = [
    { src: nature1, title: "Mountain View" },
    { src: nature7, title: "Forest Life" },
    { src: nature4, title: "Sunset Beach" },
    { src: nature5, title: "City Lights" },
    { src: nature6, title: "Mountain Lake" },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="container">
      {images.map((item, index) => (
        <div
          key={index}
          className={`card ${activeIndex === index ? "active" : ""}`}
          onClick={() => setActiveIndex(index)}
        >
          <img src={item.src} alt="Nature" />

          {/* <div className="overlay"></div> */}

          <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default ExpandingCard;
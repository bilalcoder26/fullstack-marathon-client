import { useState } from "react";
import nature1 from "../assets/nature1.jpg";
import nature7 from "../assets/nature7.jpg";
import nature4 from "../assets/nature4.jpg";
import nature5 from "../assets/nature5.jpg";
import nature6 from "../assets/nature6.jpg";


const ExpandingCard = () => {
  const images = [
    { src: nature1, title: "Mountain View" },
    { src: nature7, title: "Forest Life" },
    { src: nature4, title: "Sunset Beach" },
    { src: nature6, title: "Mountain Lake" },
    { src: nature5, title: "City Lights" },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col md:flex-row h-screen items-center justify-center gap-4 px-6">
      {images.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`
              relative
              h-[650px]
              overflow-hidden
              cursor-pointer
              transition-all
              duration-500
              ease-in-out
              ${isActive ? "w-[600px]" : "w-[70px]"}
              ${isActive ? "rounded-2xl" : "rounded-full"}
            `}
          >
            {/* Image */}
            <img
              src={item.src}
              alt="Nature"
              className={`
                w-full h-full object-cover
                transition-transform duration-700
                ${isActive ? "scale-110" : "scale-100"}
              `}
            />
            {/* Sliding Text */}
            <h2
              className={`
                absolute bottom-6 left-6
                text-white text-2xl font-semibold
                transform transition-all duration-500
                ${
                  isActive
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }
              `}
            >
              {item.title}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default ExpandingCard;



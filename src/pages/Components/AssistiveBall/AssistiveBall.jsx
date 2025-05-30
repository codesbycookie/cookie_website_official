import { useState } from "react";
import { FaInstagram, FaLinkedin, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function AssistiveBall() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const icons = [
    {
      icon: <FaInstagram size={30} />, link: "https://instagram.com"
    },
    {
      icon: <FaLinkedin size={30} />, link: "https://linkedin.com"
    },
    {
      icon: <FaWhatsapp size={30} />, link: "https://wa.me/1234567890"
    },
    {
      icon: <FaPhoneAlt size={30} />, link: "tel:+1234567890"
    }
  ];

  // Determine if we're on the left or right side based on position class
  const isRightSide = true; // Change this to false if placing on left side

  return (
    <div className={`fixed bottom-6 ${isRightSide ? "right-6" : "left-6"} z-50 max-w-full max-h-full`}>
      <div className="relative w-16 h-16">
        {/* Semi-Circular Menu Items (Left or Right arc depending on position) */}
        {icons.map((item, index) => {
          const angle = (90 / (icons.length - 1)) * index;
          const radius = open ? 120 : 0;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          const translateX = isRightSide ? -Math.abs(x) : Math.abs(x);

          return (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`absolute w-10 h-10 flex items-center justify-center bg-white text-black rounded-full shadow transition-all duration-300`}
              style={{
                transform: `translate(${translateX}px, ${-y}px)`,
                opacity: open ? 1 : 0
              }}
            >
              {item.icon}
            </a>
          );
        })}

        {/* Main Ball Button */}
        <button
          onClick={toggleMenu}
          className={`w-12 h-12 bg-blue-600 rounded-full shadow-xl flex items-center justify-center text-white transition-transform duration-500 ${open ? "rotate-360" : "rotate-0"}`}
        >
          <img src="/imgs/cookie-hd.png" alt="" />
        </button>
      </div>
    </div>
  );
}
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);


  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  if (!showButton) {
    return null;
  }


  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center shadow-lg shadow-purple-500/20 transition duration-300 hover:-translate-y-1"
    >

      <FaArrowUp />

    </button>
  );
}

export default BackToTop;
import { useEffect, useState } from "react";
import { TfiArrowCircleUp } from "react-icons/tfi";

const BackToTop = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {backToTop && (
        <button
          onClick={scrollUp}
          className="fixed z-10 right-4 bottom-4 lg:right-14 lg:bottom-12 w-14 h-14"
        >
          <TfiArrowCircleUp className="text-2xl hover:text-3xl duration-200" />
        </button>
      )}
    </div>
  );
};

export default BackToTop;

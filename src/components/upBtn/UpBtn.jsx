import { useEffect, useState } from "react";
import "./UpBtn.css";
import { AiOutlineArrowUp } from "react-icons/ai";
const UpBtn = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Check if the user has scrolled beyond a certain threshold
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Attach the event listener to the scroll event
    window.addEventListener("scroll", toggleVisibility);

    // Clean up the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Handle the click event when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`upBtn ${isVisible && "showUpBtn"}`}
    >
      <AiOutlineArrowUp />
    </button>
  );
};

export default UpBtn;

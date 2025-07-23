import { useEffect } from "react";

const SmoothScroll = () => {
  useEffect(() => {
    const handleAnchorClick = (event) => {
      const target = event.target;
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        event.preventDefault();
        const id = target.getAttribute("href").substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return null;
};

export default SmoothScroll;

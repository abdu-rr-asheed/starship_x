import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import { AiOutlineVerticalAlignTop } from "react-icons/ai";

const ScrollToTop = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisiblity] = useState(false);

  useEffect(() => {
    if (pageYOffset > 400) {
      setVisiblity(true);
    } else {
      setVisiblity(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) {
    return false;
  }

  return (
    <div
      className="fixed sm:right-20 right-5 sm:bottom-10 bottom-5 z-50"
      onClick={scrollToTop}>
      <div className="relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto shadow-lg bg-yellow-600 text-white hover:bg-gray-800 hover:text-yellow-600 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer">
        <AiOutlineVerticalAlignTop fontSize={24} />
      </div>
    </div>
  );
};

export default ScrollToTop;

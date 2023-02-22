import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function Combo() {
  const imgCombo = [
    {
      url: "https://http2.mlstatic.com/D_NQ_NP_2X_659520-MLM51338788281_082022-F.webp",
    },
    {
      url: "https://http2.mlstatic.com/D_NQ_NP_2X_678868-MLA47073899757_082021-F.webp",
    },
    {
      url: "https://http2.mlstatic.com/D_NQ_NP_2X_751760-MLA31065397561_062019-F.webp",
    },
    {
      url: "https://http2.mlstatic.com/D_NQ_NP_2X_914690-MLA48636149731_122021-F.webp",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImg = () => {
    const isFirsImg = currentIndex === 0;
    const newIndex = isFirsImg ? imgCombo.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextImg = () => {
    const isLastImg = currentIndex === imgCombo.length - 1;
    const newIndex = isLastImg ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToImg = (imgIndex) => {
    setCurrentIndex(imgIndex);
  };

  return (
    <div className="max-w-[400px] h-full w-full m-0 py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${imgCombo[currentIndex].url})` }}
        className="w-full duration-700 bg-center bg-no-repeat bg-contain h-[350px] rounded-2xl"
      ></div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl p-2 bg-transparent text-black cursor-pointer">
        <BsChevronCompactLeft onClick={prevImg} size={20} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xlp-2 bg-transparent text-black cursor-pointer">
        <BsChevronCompactRight onClick={nextImg} size={20} />
      </div>
      <div className="flex justify-center py-2">
        {imgCombo.map((i, imgIndex) => (
          <div
            key={imgIndex}
            onClick={() => goToImg(imgIndex)}
            className="text-2xl cursor-pointer hover:text-fuchsia-icon"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Combo;

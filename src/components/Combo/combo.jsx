import React, { useContext, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { CartContext } from "../../contexts/CartProvider";

function Combo() {
  const [state, dispatch, actions] = useContext(CartContext);
  const { products, cart, total } = state;

  let imgCombo = [
    // {
    //   url: "https://http2.mlstatic.com/D_NQ_NP_2X_659520-MLM51338788281_082022-F.webp",
    // },
    // {
    //   url: "https://http2.mlstatic.com/D_NQ_NP_2X_678868-MLA47073899757_082021-F.webp",
    // },
    // {
    //   url: "https://http2.mlstatic.com/D_NQ_NP_2X_751760-MLA31065397561_062019-F.webp",
    // },
    // {
    //   url: "https://http2.mlstatic.com/D_NQ_NP_2X_914690-MLA48636149731_122021-F.webp",
    // },
  ];

  const imgComboFinder = (id) => {
    id.map((imgId) => {
      let newImg = products.find((product) => product.id === imgId)
      imgCombo = [...imgCombo, { url: newImg.img }]
    })
  };

  imgComboFinder([15, 44, 42, 60, 30, 58])

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
    <div className="relative flex items-center justify-center px-0 group">
      <div
        style={{ backgroundImage: `url(${imgCombo[currentIndex].url})` }}
        className="shadow-xl shadow-[rgb(196,36,255,0.25)] duration-300 bg-white bg-center bg-no-repeat bg-contain rounded-md min-h-[200px] sm:min-h-[400px] min-w-[200px] sm:min-w-[400px]"
      ></div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl p-2 active:bg-transparent bg-[rgb(0,0,0,0.2)] rounded-full active:!scale-110 lg:hover:scale-125 duration-100 text-[rgb(196,36,255,0.50)] active:text-fuchsia-icon cursor-pointer">
        <BsChevronCompactLeft onClick={prevImg} size={25} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl p-2 active:bg-transparent bg-[rgb(0,0,0,0.2)] rounded-full active:!scale-110 lg:hover:scale-125 duration-100 text-[rgb(196,36,255,0.50)] active:text-fuchsia-icon cursor-pointer">
        <BsChevronCompactRight onClick={nextImg} size={25} />
      </div>
      <div className="hidden group-hover:flex absolute bottom-0 hover:rounded-2xl text-[rgb(196,36,255,0.50)] justify-center p-0.5 my-2">
        {imgCombo.map((i, imgIndex) => (
          <div
            key={imgIndex}
            onClick={() => goToImg(imgIndex)}
            className="w-full h-auto text-2xl cursor-pointer m-[1px] rounded-2xl duration-100 active:scale-125 active:text-fuchsia-icon lg:hover:scale-125 lg:hover:text-fuchsia-icon"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Combo;

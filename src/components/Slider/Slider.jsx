import React, { Component } from "react";
import { SliderData } from "./SliderData.jsx";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      paused: false,
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.paused === false) {
        let newSlide =
          this.state.currentSlide === SliderData.length - 1
            ? 0
            : this.state.currentSlide + 1;
        this.setState({ currentSlide: newSlide });
      }
    }, 9000);
  }

  nextSlide = () => {
    let newSlide =
      this.state.currentSlide === SliderData.length - 1
        ? 0
        : this.state.currentSlide + 1;
    this.setState({ currentSlide: newSlide });
  };

  prevSlide = () => {
    let newSlide =
      this.state.currentSlide === 0
        ? SliderData.length - 1
        : this.state.currentSlide - 1;
    this.setState({ currentSlide: newSlide });
  };

  setCurrentSlide = (index) => {
    this.setState({ currentSlide: index });
  };

  render() {
    return (
      <div className="flex justify-center pb-10 group">
        <div className="max-w-[90w] max-h-[500px] items-center justify-center flex overflow-hidden relative">
          <AiOutlineLeft
            onClick={this.prevSlide}
            className="absolute hidden text-3xl text-purple-700 duration-100 opacity-50 cursor-pointer group-hover:block hover:scale-150 hover:opacity-100 left-5 inset-y-1/2"
          />

          <Swipe onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
            {SliderData.map((slide, index) => {
              return (
                <img
                  src={slide.image}
                  alt="This is a carousel slide"
                  key={index}
                  className={
                    index === this.state.currentSlide
                      ? "block w-[full] h-[auto] object-fill"
                      : "hidden"
                  }
                  onMouseEnter={() => {
                    this.setState({ paused: true });
                  }}
                  onMouseLeave={() => {
                    this.setState({ paused: false });
                  }}
                />
              );
            })}
          </Swipe>

          <div className="absolute bottom-0 flex justify-center w-full">
            {SliderData.map((element, index) => {
              return (
                <div
                  className={
                    index === this.state.currentSlide
                      ? "h-2 w-2 bg-purple-700 rounded-full duration-100 scale-125 hover:scale-150 hidden hover:bg-fuchsia-icon group-hover:block mx-2 mb-2 cursor-pointer"
                      : "h-2 w-2 bg-white rounded-full duration-100 hover:scale-150 mx-2 hidden hover:bg-fuchsia-icon bg-[rgb(196,36,255,0.50)] group-hover:block mb-2 cursor-pointer"
                  }
                  key={index}
                  onClick={() => {
                    this.setCurrentSlide(index);
                  }}
                ></div>
              );
            })}
          </div>

          <AiOutlineRight
            onClick={this.nextSlide}
            className="absolute hidden text-3xl text-purple-700 duration-100 opacity-50 cursor-pointer group-hover:block hover:scale-150 hover:opacity-100 hover:drop-shadow-2xl right-5 inset-y-1/2"
          />
        </div>
      </div>
    );
  }
}

export default Carousel;

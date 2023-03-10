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
      <div className="flex justify-center pb-4 group">
        <div className="max-w-[90w] max-h-[500px] items-center justify-center flex overflow-hidden relative">
          <AiOutlineLeft
            onClick={this.prevSlide}
            className="absolute hidden text-3xl text-purple-700 duration-100 opacity-50 cursor-pointer group-hover:block active:scale-150 active:opacity-100 lg:hover:scale-150 lg:hover:opacity-100 lg:active:scale-125 left-5 inset-y-1/2"
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
                  className={`${index === this.state.currentSlide
                    ? " bg-purple-700 scale-125 "
                    : " bg-[rgb(126,34,206,0.50)] lg:hover:bg-[rgb(126,34,206,0.70)] "
                    } h-2 w-2 rounded-full duration-100 active:scale-150 lg:hover:scale-150  hidden group-hover:block mx-2 mb-2 cursor-pointer `}
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
            className="absolute hidden text-3xl text-purple-700 duration-100 opacity-50 cursor-pointer group-hover:block active:scale-150 active:opacity-100 lg:hover:scale-150 lg:hover:opacity-100 lg:active:scale-125 hover:drop-shadow-2xl right-5 inset-y-1/2"
          />
        </div>
      </div>
    );
  }
}

export default Carousel;

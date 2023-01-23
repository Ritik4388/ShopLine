import React from "react";
import electronicsSrc from "../../assets/electronics.jpg";
import jewelerySrc from "../../assets/jewelery.jpg";
import menSrc from "../../assets/men.jpg";
import womenSrc from "../../assets/women.jpg";
import "./carousel.css";
const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner" data-bs-interval="4000">
          <div className="carousel-item active">
            <img src={menSrc} className="d-block w-100" alt="menImage" />
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <img src={womenSrc} className="d-block w-100" alt="womenImage" />
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <img
              src={electronicsSrc}
              className="d-block w-100"
              alt="elctronicsImage"
            />
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <img
              src={jewelerySrc}
              className="d-block w-100"
              alt="jeweleryImage"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;

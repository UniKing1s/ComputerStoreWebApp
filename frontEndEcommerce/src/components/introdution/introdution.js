import React, { Component } from "react";
import "./introdution.scss";
class Introdution extends Component {
  render() {
    return (
      <div
        id="carouselExampleIndicators"
        className="carousel slide w-100 mb-3"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        <div
          className="carousel-inner m-l-r"
          id="carousel-iner"
          style={{
            maxHeight: "500px",
            margin: "auto",
            width: "100%",
            objectFit: "cover",
          }}
        >
          <div className="carousel-item active">
            <img
              src="banner1.png"
              className="d-block w-100"
              alt="..."
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="banner2.png"
              className="d-block w-100"
              alt="..."
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="banner3.png"
              className="d-block w-100"
              alt="..."
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
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
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}

export default Introdution;

import React from "react";
import { useState } from "react";
import "./Categories.css";
import Cat01 from "../../images/cat-images/cat-01.jpg";
import Cat02 from "../../images/cat-images/cat-02.jpg";
import Cat03 from "../../images/cat-images/cat-03.jpg";
import Cat04 from "../../images/cat-images/cat-04.jpg";
import Cat05 from "../../images/cat-images/cat-05.jpg";
import Cat06 from "../../images/cat-images/cat-06.jpg";
import Cat07 from "../../images/cat-images/cat-07.jpg";
import Cat08 from "../../images/cat-images/cat-08.jpg";
import Cat09 from "../../images/cat-images/cat-09.jpg";
import Cat10 from "../../images/cat-images/cat-10.jpg";
import Cat11 from "../../images/cat-images/cat-11.jpg";
import Cat12 from "../../images/cat-images/cat-12.jpg";

import UploadIcon from "../../images/upload-icon.png";

const Categories = () => {
  const [isUploadCardVisible, setIsUploadCardVisible] = useState(false);

  const toggleUploadCardVisibility = () => {
    setIsUploadCardVisible(!isUploadCardVisible);
  };

  return (
    <div className="main-content m-5">
      <div className="row">
        <h1 className="fw-bold pb-2">CATEGORIES</h1>
        <hr />
        <div className="d-flex">
          <h5 className="pb-3 me-5">Total Categories: 12</h5>
          <h5 className="pb-3 me-5">Active Categories: 10</h5>
          <h5 className="pb-3 me-5">Disabled Categories: 2</h5>
        </div>
        <div className="col-8">
          <div
            className="cat-card d-flex align-items-center border border-dark rounded-2 my-3"
            style={{ backgroundColor: "#f5f5f5" }}
          >
            <div className="img-container">
              <a href="#">
                <img src={Cat01} class="" alt="Cat01" width="120px" />
              </a>
            </div>
            <div className="name-container">
              <h2 className="fw-bold mx-4 mb-0 text-nowrap">Graphics Card</h2>
            </div>
            <div className="btn-container d-flex">
              <button className="btn button me-4 my-1 border-0 text-light">
                Edit
              </button>
              <button className="btn button me-4 my-1 border-0 text-light">
                Disable
              </button>
              <button className="btn button me-4 my-1 border-0 text-light">
                Delete
              </button>
            </div>
          </div>

          <div
            className="cat-card d-flex align-items-center border border-dark rounded-2 my-3"
            style={{ backgroundColor: "#f5f5f5" }}
          >
            <div className="img-container">
              <a href="#">
                <img src={Cat02} class="" alt="Cat01" width="120px" />
              </a>
            </div>
            <div className="name-container">
              <h2 className="fw-bold mx-4 mb-0 text-nowrap">Mouse</h2>
            </div>
            <div className="btn-container d-flex">
              <button className="btn button me-4 my-1 border-0 text-light">
                Edit
              </button>
              <button className="btn button me-4 my-1 border-0 text-light">
                Disable
              </button>
              <button className="btn button me-4 my-1 border-0 text-light">
                Delete
              </button>
            </div>
          </div>

          <div
            className="cat-card d-flex align-items-center border border-dark rounded-2 my-3"
            style={{ backgroundColor: "#f5f5f5" }}
          >
            <div className="img-container">
              <a href="#">
                <img src={Cat03} class="" alt="Cat01" width="120px" />
              </a>
            </div>
            <div className="name-container">
              <h2 className="fw-bold mx-4 mb-0 text-nowrap">Headset</h2>
            </div>
            <div className="btn-container d-flex">
              <button className="btn button me-4 my-1 border-0 text-light">
                Edit
              </button>
              <button className="btn button me-4 my-1 border-0 text-light">
                Disable
              </button>
              <button className="btn button me-4 my-1 border-0 text-light">
                Delete
              </button>
            </div>
          </div>

          <div
            className="cat-card d-flex align-items-center border border-dark rounded-2 my-3"
            style={{ backgroundColor: "#f5f5f5" }}
          >
            <div className="img-container">
              <a href="#">
                <img src={Cat04} class="" alt="Cat05" width="120px" />
              </a>
            </div>
            <div className="name-container">
              <h2 className="fw-bold mx-4 mb-0 text-nowrap">Storage</h2>
            </div>
            <div className="btn-container d-flex">
              <button className="btn button me-4 my-1 border-0 text-light">
                Edit
              </button>
              <button className="btn button me-4 my-1 border-0 text-light">
                Disable
              </button>
              <button className="btn button me-4 my-1 border-0 text-light">
                Delete
              </button>
            </div>
          </div>

          <div
            className="cat-card d-flex align-items-center border border-dark rounded-2 my-3"
            style={{ backgroundColor: "#f5f5f5" }}
          >
            <div className="img-container">
              <a href="#">
                <img src={Cat05} class="" alt="Cat01" width="120px" />
              </a>
            </div>
            <div className="name-container">
              <h2 className="fw-bold mx-4 mb-0 text-nowrap">Cooler</h2>
            </div>
            <div className="btn-container d-flex">
              <button className="btn button me-4 my-1 border-0 text-light">
                Edit
              </button>
              <button className="btn button me-4 my-1 border-0 text-light">
                Disable
              </button>
              <button className="btn button me-4 my-1 border-0 text-light">
                Delete
              </button>
            </div>
          </div>

          <div
            className="cat-card d-flex align-items-center border border-dark rounded-2 my-3"
            style={{ backgroundColor: "#f5f5f5" }}
          >
            <div className="img-container">
              <a href="#">
                <img src={Cat06} class="" alt="Cat01" width="120px" />
              </a>
            </div>
            <div className="name-container">
              <h2 className="fw-bold mx-4 mb-0 text-nowrap">Monitor</h2>
            </div>
            <div className="btn-container d-flex">
              <button className="btn button me-4 my-1 border-0 text-light">
                Edit
              </button>
              <button className="btn button me-4 my-1 border-0 text-light">
                Disable
              </button>
              <button className="btn button me-4 my-1 border-0 text-light">
                Delete
              </button>
            </div>
          </div>

          <div
            className="cat-card d-flex align-items-center border border-dark rounded-2 my-3"
            style={{ backgroundColor: "#f5f5f5" }}
          >
            <div className="img-container">
              <a href="#">
                <img src={Cat07} class="" alt="Cat01" width="120px" />
              </a>
            </div>
            <div className="name-container">
              <h2 className="fw-bold mx-4 mb-0 text-nowrap">Case</h2>
            </div>
            <div className="btn-container d-flex">
              <button className="btn button me-4 my-1 border-0 text-light">
                Edit
              </button>
              <button className="btn button me-4 my-1 border-0 text-light">
                Disable
              </button>
              <button className="btn button me-4 my-1 border-0 text-light">
                Delete
              </button>
            </div>
          </div>

          <div
            className="cat-card d-flex align-items-center border border-dark rounded-2 my-3"
            style={{ backgroundColor: "#f5f5f5" }}
          >
            <div className="img-container">
              <a href="#">
                <img src={Cat08} class="" alt="Cat01" width="120px" />
              </a>
            </div>
            <div className="name-container">
              <h2 className="fw-bold mx-4 mb-0 text-nowrap">Microphone</h2>
            </div>
            <div className="btn-container d-flex">
              <button className="btn button me-4 my-1 border-0 text-light">
                Edit
              </button>
              <button className="btn button me-4 my-1 border-0 text-light">
                Disable
              </button>
              <button className="btn button me-4 my-1 border-0 text-light">
                Delete
              </button>
            </div>
          </div>

          <div
            className="cat-card d-flex align-items-center border border-dark rounded-2 my-3"
            style={{ backgroundColor: "#f5f5f5" }}
          >
            <div className="img-container">
              <a href="#">
                <img src={Cat09} class="" alt="Cat01" width="120px" />
              </a>
            </div>
            <div className="name-container">
              <h2 className="fw-bold mx-4 mb-0 text-nowrap">RAM</h2>
            </div>
            <div className="btn-container d-flex">
              <button className="btn button me-4 my-1 border-0 text-light">
                Edit
              </button>
              <button className="btn button me-4 my-1 border-0 text-light">
                Disable
              </button>
              <button className="btn button me-4 my-1 border-0 text-light">
                Delete
              </button>
            </div>
          </div>

          <div
            className="cat-card d-flex align-items-center border border-dark rounded-2 my-3"
            style={{ backgroundColor: "#f5f5f5" }}
          >
            <div className="img-container">
              <a href="#">
                <img src={Cat10} class="" alt="Cat01" width="120px" />
              </a>
            </div>
            <div className="name-container">
              <h2 className="fw-bold mx-4 mb-0 text-nowrap">Motherboard</h2>
            </div>
            <div className="btn-container d-flex">
              <button className="btn button me-4 my-1 border-0 text-light">
                Edit
              </button>
              <button className="btn button me-4 my-1 border-0 text-light">
                Disable
              </button>
              <button className="btn button me-4 my-1 border-0 text-light">
                Delete
              </button>
            </div>
          </div>

          <div
            className="disable cat-card d-flex align-items-center border border-dark rounded-2 my-3"
            style={{ backgroundColor: "#f5f5f5" }}
          >
            <div className="img-container">
              <a href="#">
                <img src={Cat11} class="" alt="Cat01" width="120px" />
              </a>
            </div>
            <div className="name-container">
              <h2 className="fw-bold mx-4 mb-0 text-nowrap">Laptop</h2>
            </div>
            <div className="btn-container d-flex">
              <button className="btn button me-4 my-1 border-0 text-light">
                Edit
              </button>
              <button className="btn button me-4 my-1 border-0 text-light">
                Enable
              </button>
              <button className="btn button me-4 my-1 border-0 text-light">
                Delete
              </button>
            </div>
          </div>

          <div
            className="disable cat-card d-flex align-items-center border border-dark rounded-2 my-3"
            style={{ backgroundColor: "#f5f5f5" }}
          >
            <div className="img-container">
              <a href="#">
                <img src={Cat12} class="" alt="Cat01" width="120px" />
              </a>
            </div>
            <div className="name-container">
              <h2 className="fw-bold mx-4 mb-0 text-nowrap">Gaming Chair</h2>
            </div>
            <div className="btn-container d-flex">
              <button className="btn button me-4 my-1 border-0 text-light">
                Edit
              </button>
              <button className="btn button me-4 my-1 border-0 text-light ">
                Enable
              </button>
              <button className="btn button me-4 my-1 border-0 text-light">
                Delete
              </button>
            </div>
          </div>

          {isUploadCardVisible && (
            <div
            className="upload cat-card d-flex align-items-center border border-dark rounded-2 my-3"
            style={{ backgroundColor: "#f5f5f5" }}
          >
            <div className="img-container">
              <a href="#">
              <img src={UploadIcon} alt="UploadIcon" width="120px" />
              </a>
            </div>
            <div className="name-container">
              <h2 className="fw-bold mx-4 mb-0 text-nowrap">Category Name</h2>
            </div>
            <div className="btn-container d-flex">
              <button className="btn button me-4 my-1 border-0 text-light">
                Edit
              </button>
              <button className="btn button me-4 my-1 border-0 text-light ">
                Enable
              </button>
              <button className="btn button me-4 my-1 border-0 text-light">
                Delete
              </button>
            </div>
          </div>
          
          )}

          <div className="text-center m-5">
            <button
              type="button"
              className="add-btn btn button rounded-circle px-3"
              onClick={toggleUploadCardVisibility}
            >
              <i
                class="bi bi-plus text-light"
                style={{ fill: "white", fontSize: 40 }}
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;

import React from "react";
import "./ViewReview.css";
import ReviewImg01 from "../../images/review-img-01.jpg";
import ReviewImg02 from "../../images/review-img-02.jpg";
import ReviewImg03 from "../../images/review-img-03.jpg";

const ViewReview = () => {
  return (
    <div className="main-content m-5">
      <div className="row">
        <div className="col-12">
          <h1 className="fw-bold pb-2">Review</h1>
          <hr />
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">Review ID</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">134</p>
            </div>
          </div>
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">Rating</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">4</p>
            </div>
          </div>
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">Review Text</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">
              I've been a loyal customer of this computer hardware seller for years, and they never disappoint. The latest motherboard I bought from them exceeded my expectations. The seller is knowledgeable and always ready to help you find the right components for your needs. Top-notch service!
              </p>
            </div>
          </div>
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">Date & Time</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">
                12/04/2023 14:00
              </p>
            </div>
          </div>
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">Review Pictures</p>
            </div>
            <div className="col-10 d-flex">
              <div className="container p-0">
                <div className="row">
                  <div className="col-2 mb-3">
                    <a
                      className="fixed-size-container"
                      style={{ width: "150px", height: "150px" }}
                    >
                      <img
                        src={ReviewImg01}
                        class="object-fit-cover w-100 h-100"
                        alt="review-img"
                      />
                    </a>
                  </div>
                  <div className="col-2 mb-3">
                    <a
                      className="fixed-size-container"
                      style={{ width: "150px", height: "150px" }}
                    >
                      <img
                        src={ReviewImg02}
                        class="object-fit-cover w-100 h-100"
                        alt="review-img"
                      />
                    </a>
                  </div>
                  <div className="col-2 mb-3">
                    <a
                      className="fixed-size-container"
                      style={{ width: "150px", height: "150px" }}
                    >
                      <img
                        src={ReviewImg03}
                        class="object-fit-cover w-100 h-100"
                        alt="review-img"
                      />
                    </a>
                  </div>
                  <div className="col-2 mb-3">
                    <a
                      className="fixed-size-container"
                      style={{ width: "150px", height: "150px" }}
                    >
                      <img
                        src={ReviewImg01}
                        class="object-fit-cover w-100 h-100"
                        alt="review-img"
                      />
                    </a>
                  </div>
                 
               
              
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-3 col-xxl-2">
              <a className="btn button text-light w-100">Delete</a>
            </div>
            <div className="col-3 col-xxl-2">
              <a className="btn button text-light w-100">Disable</a>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">Reviewer ID:</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">1101</p>
            </div>
          </div>
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">Reviewer Name:</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">Robert Downey</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-3 col-xxl-2">
              <a href="/view-user" className="btn button text-light w-100">View Reviewer Profile</a>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">Blogger ID:</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">2301</p>
            </div>
          </div>
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">Blogger Name:</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">James Hunt</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-3 col-xxl-2">
              <a href="/view-user" className="btn button text-light w-100">View Blogger Profile</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewReview;

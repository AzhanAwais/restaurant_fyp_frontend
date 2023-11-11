import React from "react";
import "./Analytics.css"
import  UserPFP from "../../images/user-pfp.jpg";
import PageNav from "../../components/PageNav";
import ReviewImg01 from "../../images/review-img-01.jpg";
import ReviewImg02 from "../../images/review-img-02.jpg";
import ReviewImg03 from "../../images/review-img-03.jpg";


const Analytics = () => {
  return (
    <div className="container main-content m-5">
      <div className="row justify-content-center">
      <h1 className="fw-bold">ANALYTICS</h1>
        <hr />
        <div className="col-3 my-3 justify-content-center">
            <div className="square-content rounded-4 align-items-center d-flex flex-column">
                <p className="numbers mb-0">3,775,165</p>
                <p className="fs-3  fw-bold">RESTAURANTS</p>
            </div>
        </div>
        <div className="col-3 my-3 justify-content-center">
            <div className="square-content rounded-4 align-items-center d-flex flex-column">
                <p className="numbers mb-0">6,564,334</p>
                <p className="fs-3 fw-bold">USER ACCOUNTS</p>
            </div>
        </div>
        <div className="col-3 my-3 justify-content-center">
            <div className="square-content rounded-4 align-items-center d-flex flex-column">
                <p className="numbers mb-0">2,357,925</p>
                <p className="fs-3 fw-bold">REVIEWS</p>
            </div>
        </div>
        <div className="col-3 my-3 justify-content-center">
            <div className="square-content rounded-4 align-items-center d-flex flex-column">
                <p className="numbers mb-0">768,123</p>
                <p className="fs-3 fw-bold">VERIFIED USERS</p>
            </div>
        </div>
        <div className="col-3 my-3 justify-content-center">
            <div className="square-content rounded-4 align-items-center d-flex flex-column">
                <p className="numbers mb-0">1,344,123</p>
                <p className="fs-3 fw-bold">ACTIVE USERS</p>
            </div>
        </div>
        <div className="col-3 my-3 justify-content-center">
            <div className="square-content rounded-4 align-items-center d-flex flex-column">
                <p className="numbers mb-0">23,123</p>
                <p className="fs-3 fw-bold">DISABLED USERS</p>
            </div>
        </div>
        <div className="col-3 my-3 justify-content-center">
            <div className="square-content rounded-4 align-items-center d-flex flex-column">
                <p className="numbers mb-0">85,463</p>
                <p className="fs-3 fw-bold">PENDING USERS</p>
            </div>
        </div>
        <div className="col-3 my-3 justify-content-center">
            <div className="square-content rounded-4 align-items-center d-flex flex-column">
                <p className="numbers mb-0">6,443</p>
                <p className="fs-4 text-center fw-bold">PENDING RESTAURANTS</p>
            </div>
        </div>
        <div className="col-3 my-3 justify-content-center">
            <div className="square-content rounded-4 align-items-center d-flex flex-column">
                <p className="numbers mb-0">34,247</p>
                <p className="fs-3 fw-bold">BLOGS</p>
            </div>
        </div>
        <div className="col-3 my-3 justify-content-center">
            <div className="square-content rounded-4 align-items-center d-flex flex-column">
                <p className="numbers mb-0">34,247</p>
                <p className="fs-3 fw-bold">DELETED BLOGS</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

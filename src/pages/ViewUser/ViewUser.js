import React from "react";
import "./ViewUser.css";
import UserPFP from "../../images/user-pfp.jpeg";
import PageNav from "../../components/PageNav";
import ReviewImg01 from "../../images/review-img-01.jpg";

const ViewUser = () => {
  return (
    <div className="main-content m-5">
      <div className="row">
        <div className="col-12">
          <h1 className="fw-bold pb-2">USER</h1>
          <hr />

          <div className="row mb-1">
            <div className=" col-2">
              <h4 className="fw-bold fs-5">Profile Picture</h4>
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
                        src={UserPFP}
                        class="object-fit-cover w-100 h-100"
                        alt="review-img"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">ID</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">1481</p>
            </div>
          </div>
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">Name</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">Marques Brownlee</p>
            </div>
          </div>
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">User Name</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">Marques_201</p>
            </div>
          </div>
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">Joining Date</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">03/08/2023</p>
            </div>
          </div>
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">Followers</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">4</p>
            </div>
          </div>
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">Status</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">Active</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">CNIC</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">42101-2011333-1</p>
            </div>
          </div>
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">Email</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">hamzayonus00@gmail.com</p>
            </div>
          </div>
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">Phone</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">03043910232</p>
            </div>
          </div>
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">Location</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">Karachi, Pakistan</p>
            </div>
          </div>

          <hr />
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">Blogs</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">69</p>
            </div>
          </div>

          <hr />
          <div className="row my-5">
            <div className="col-3 col-xxl-2">
              <a className="btn button text-light w-100">View On Website</a>
            </div>
            <div className="col-3 col-xxl-2">
              <a className="btn button text-light w-100">Delete</a>
            </div>
            <div className="col-3 col-xxl-2">
              <a className="btn button text-light w-100">Disable</a>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="d-flex mb-2">
          <h3 className="fw-bold pb-0">Blogs</h3>
          
        </div>
        <div className="row align-items-center">
          <div className="col-8 col-xxl-6 d-flex pe-0">
            <input
              type="keyword"
              class="form-control text-dark"
              id="search-box"
              aria-describedby="search-keyword"
              placeholder="Enter Keyword"
              style={{ width: "100%" }}
            ></input>
          </div>
          <div className="col-3">
            <button className="btn button text-light">Search</button>
          </div>
        </div>
        {/*Table Section*/}
        <table className="table table-hover my-4">
          <thead className="table-dark">
            <tr>
              <th className="col-1" scope="col">
                Images
              </th>
              <th className="col-1" scope="col">
                ID
              </th>
              <th className="title-column" scope="col">
                Title
              </th>
              <th className="content-column" scope="col">
                Content
              </th>
              <th className="col-1" scope="col">
                Likes
              </th>
              <th className="col-1" scope="col">
                Dislikes
              </th>
              <th className="col-1" scope="col">
                Date & Time
              </th>
              <th className="col-1" scope="col">
                Blog
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "120px", height: "120px" }}
                >
                  <img
                    src={ReviewImg01}
                    class="object-fit-cover w-100 h-100"
                    alt="review-img"
                  />
                </div>
              </td>
              <td>4242</td>
              <td className="">Feed The Hungry</td>
              <td>
                {" "}
                "When was the last time you went to bed hungry? Maybe you
                voluntarily fasted for 24 hours or had a busy day with little
                time to eat. But going to bed hungry because there’s no food in
                the house is a whole different, scary experience."
              </td>
              <td>30</td>
              <td>14</td>
              <td>03/08/2023 11:00</td>
              <td>
                <a
                  href="/view-listing"
                  className="btn button btn-sm text-light"
                >
                  View
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "120px", height: "120px" }}
                >
                  <img
                    src={ReviewImg01}
                    class="object-fit-cover w-100 h-100"
                    alt="review-img"
                  />
                </div>
              </td>
              <td>4242</td>
              <td className="">Feed The Hungry</td>
              <td>
                {" "}
                "When was the last time you went to bed hungry? Maybe you
                voluntarily fasted for 24 hours or had a busy day with little
                time to eat. But going to bed hungry because there’s no food in
                the house is a whole different, scary experience."
              </td>
              <td>30</td>
              <td>14</td>
              <td>03/08/2023 11:00</td>
              <td>
                <a
                  href="/view-listing"
                  className="btn button btn-sm text-light"
                >
                  View
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "120px", height: "120px" }}
                >
                  <img
                    src={ReviewImg01}
                    class="object-fit-cover w-100 h-100"
                    alt="review-img"
                  />
                </div>
              </td>
              <td>4242</td>
              <td className="">Feed The Hungry</td>
              <td>
                {" "}
                "When was the last time you went to bed hungry? Maybe you
                voluntarily fasted for 24 hours or had a busy day with little
                time to eat. But going to bed hungry because there’s no food in
                the house is a whole different, scary experience."
              </td>
              <td>30</td>
              <td>14</td>
              <td>03/08/2023 11:00</td>
              <td>
                <a
                  href="/view-listing"
                  className="btn button btn-sm text-light"
                >
                  View
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "120px", height: "120px" }}
                >
                  <img
                    src={ReviewImg01}
                    class="object-fit-cover w-100 h-100"
                    alt="review-img"
                  />
                </div>
              </td>
              <td>4242</td>
              <td className="">Feed The Hungry</td>
              <td>
                {" "}
                "When was the last time you went to bed hungry? Maybe you
                voluntarily fasted for 24 hours or had a busy day with little
                time to eat. But going to bed hungry because there’s no food in
                the house is a whole different, scary experience."
              </td>
              <td>30</td>
              <td>14</td>
              <td>03/08/2023 11:00</td>
              <td>
                <a
                  href="/view-listing"
                  className="btn button btn-sm text-light"
                >
                  View
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "120px", height: "120px" }}
                >
                  <img
                    src={ReviewImg01}
                    class="object-fit-cover w-100 h-100"
                    alt="review-img"
                  />
                </div>
              </td>
              <td>4242</td>
              <td className="">Feed The Hungry</td>
              <td>
                {" "}
                "When was the last time you went to bed hungry? Maybe you
                voluntarily fasted for 24 hours or had a busy day with little
                time to eat. But going to bed hungry because there’s no food in
                the house is a whole different, scary experience."
              </td>
              <td>30</td>
              <td>14</td>
              <td>03/08/2023 11:00</td>
              <td>
                <a
                  href="/view-listing"
                  className="btn button btn-sm text-light"
                >
                  View
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "120px", height: "120px" }}
                >
                  <img
                    src={ReviewImg01}
                    class="object-fit-cover w-100 h-100"
                    alt="review-img"
                  />
                </div>
              </td>
              <td>4242</td>
              <td className="">Feed The Hungry</td>
              <td>
                {" "}
                "When was the last time you went to bed hungry? Maybe you
                voluntarily fasted for 24 hours or had a busy day with little
                time to eat. But going to bed hungry because there’s no food in
                the house is a whole different, scary experience."
              </td>
              <td>30</td>
              <td>14</td>
              <td>03/08/2023 11:00</td>
              <td>
                <a
                  href="/view-listing"
                  className="btn button btn-sm text-light"
                >
                  View
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "120px", height: "120px" }}
                >
                  <img
                    src={ReviewImg01}
                    class="object-fit-cover w-100 h-100"
                    alt="review-img"
                  />
                </div>
              </td>
              <td>4242</td>
              <td className="">Feed The Hungry</td>
              <td>
                {" "}
                "When was the last time you went to bed hungry? Maybe you
                voluntarily fasted for 24 hours or had a busy day with little
                time to eat. But going to bed hungry because there’s no food in
                the house is a whole different, scary experience."
              </td>
              <td>30</td>
              <td>14</td>
              <td>03/08/2023 11:00</td>
              <td>
                <a
                  href="/view-listing"
                  className="btn button btn-sm text-light"
                >
                  View
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "120px", height: "120px" }}
                >
                  <img
                    src={ReviewImg01}
                    class="object-fit-cover w-100 h-100"
                    alt="review-img"
                  />
                </div>
              </td>
              <td>4242</td>
              <td className="">Feed The Hungry</td>
              <td>
                {" "}
                "When was the last time you went to bed hungry? Maybe you
                voluntarily fasted for 24 hours or had a busy day with little
                time to eat. But going to bed hungry because there’s no food in
                the house is a whole different, scary experience."
              </td>
              <td>30</td>
              <td>14</td>
              <td>03/08/2023 11:00</td>
              <td>
                <a
                  href="/view-listing"
                  className="btn button btn-sm text-light"
                >
                  View
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "120px", height: "120px" }}
                >
                  <img
                    src={ReviewImg01}
                    class="object-fit-cover w-100 h-100"
                    alt="review-img"
                  />
                </div>
              </td>
              <td>4242</td>
              <td className="">Feed The Hungry</td>
              <td>
                {" "}
                "When was the last time you went to bed hungry? Maybe you
                voluntarily fasted for 24 hours or had a busy day with little
                time to eat. But going to bed hungry because there’s no food in
                the house is a whole different, scary experience."
              </td>
              <td>30</td>
              <td>14</td>
              <td>03/08/2023 11:00</td>
              <td>
                <a
                  href="/view-listing"
                  className="btn button btn-sm text-light"
                >
                  View
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "120px", height: "120px" }}
                >
                  <img
                    src={ReviewImg01}
                    class="object-fit-cover w-100 h-100"
                    alt="review-img"
                  />
                </div>
              </td>
              <td>4242</td>
              <td className="">Feed The Hungry</td>
              <td>
                {" "}
                "When was the last time you went to bed hungry? Maybe you
                voluntarily fasted for 24 hours or had a busy day with little
                time to eat. But going to bed hungry because there’s no food in
                the house is a whole different, scary experience."
              </td>
              <td>30</td>
              <td>14</td>
              <td>03/08/2023 11:00</td>
              <td>
                <a
                  href="/view-listing"
                  className="btn button btn-sm text-light"
                >
                  View
                </a>
              </td>
            </tr>
          </tbody>
        </table>

        <PageNav />
      </div>
    </div>
  );
};

export default ViewUser;

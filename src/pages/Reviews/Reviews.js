import React from "react";
import "./Reviews.css";
import PageNav from "../../components/PageNav";

const Reviews = () => {
  return (
    <div className="main-content m-5">
      <div className="row">
        {/*Page Title */}
        <h1 className="fw-bold pb-2">REVIEWS</h1>
        <hr />
        <div className="d-flex mb-3">
          <h6 className="me-5">Total Reviews: 12</h6>
        </div>

        {/*Search Section*/}

        <div className="row align-items-center mb-3">
          <div className="col-8 col-xxl-6 d-flex pe-0">
            <input
              type="keyword"
              class="form-control text-dark user-search-box"
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
        <hr />

        {/*Filter Section*/}

        {/*Filter By Reviewer*/}
        <h3 className="mb-2 me-5">Filters: </h3>

        <div className="row align-items-center mb-3">
          <div className="col-1 me-2">
            <h6 className="mb-0 me-3">Reviewer: </h6>
          </div>
          <div className="col-3 col-xxl-2 d-flex align-items-center">
            <select class="form-select search-select">
              <option selected>--Select--</option>
              <option value="1">Reviewer ID</option>
              <option value="2">Reviewer Name</option>
            </select>
          </div>
          <div className="search-section col-4 col-xxl-3 d-flex align-items-center">
            <input
              type="keyword"
              class="form-control text-dark user-search-box"
              id="search-box"
              aria-describedby="search-keyword"
              placeholder="Enter Keyword"
              style={{ width: "100%" }}
            ></input>
          </div>
          <div className="search-section col-1">
            <button className="btn button text-light">Search</button>
          </div>
        </div>
        {/*Filter By Seller*/}

        <div className="row align-items-center mb-3">
          <div className="col-1 me-2">
            <h6 className="mb-0 me-3">Seller: </h6>
          </div>
          <div className="col-3 col-xxl-2 d-flex align-items-center">
            <select class="form-select search-select">
              <option selected>--Select--</option>
              <option value="1">Seller ID</option>
              <option value="2">Seller Name</option>
            </select>
          </div>

          <div className="search-section col-4 col-xxl-3 d-flex align-items-center">
            <input
              type="keyword"
              class="form-control text-dark user-search-box"
              id="search-box"
              aria-describedby="search-keyword"
              placeholder="Enter Keyword"
              style={{ width: "100%" }}
            ></input>
          </div>
          <div className="search-section col-1">
            <button className="btn button text-light">Search</button>
          </div>
        </div>
        {/*Filter By Rating*/}
        <div className="row align-items-center mb-3">
          <div className="col-1 me-2">
            <h6 className="mb-0 me-3">Rating: </h6>
          </div>
          <div className="col-3 col-xxl-2 d-flex align-items-center">
            <div className="form-group verification-filter me-5 d-flex align-items-center">
              <div className="d-flex pe-3">
                <div className="form-check pe-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="option1"
                    id="option1"
                  />
                  <label className="form-check-label" htmlFor="option1">
                    1
                  </label>
                </div>
                <div className="form-check pe-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="option2"
                    id="option2"
                  />
                  <label className="form-check-label" htmlFor="option2">
                    2
                  </label>
                </div>
                <div className="form-check pe-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="option2"
                    id="option2"
                  />
                  <label className="form-check-label" htmlFor="option2">
                    3
                  </label>
                </div>
                <div className="form-check pe-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="option2"
                    id="option2"
                  />
                  <label className="form-check-label" htmlFor="option2">
                    4
                  </label>
                </div>
                <div className="form-check pe-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="option2"
                    id="option2"
                  />
                  <label className="form-check-label" htmlFor="option2">
                    5
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1">
            <h6 className="mb-0 text-xxl-wrap">Time: </h6>
          </div>
          <div className="col-3 col-xxl-2 d-flex align-items-center">
            <select class="form-select search-select">
              <option selected>--Select--</option>
              <option value="1">Within 1 Hour</option>
              <option value="2">Within 24 Hour</option>
              <option value="3">Within This Week</option>
              <option value="4">Within This Month</option>
              <option value="5">Within This Year</option>
            </select>
          </div>
          <div className="search-section col-1">
            <button className="btn button text-light">Apply</button>
          </div>
        </div>

        {/*Table Section*/}
        <div className="col-12">
          <table className="table table-hover my-4">
            <thead className="table-dark">
              <tr>
                <th className="col-1" scope="col">
                  #
                </th>
                <th className="col-6" scope="col">
                  Review
                </th>
                <th className="col-1" scope="col">
                  Rating
                </th>
                <th className="col-1" scope="col">
                  Date & Time
                </th>
                <th className="col-1" scope="col">
                  Reviewer ID
                </th>
                <th className="col-1" scope="col">
                  Reviewer Name
                </th>
                <th className="col-1" scope="col">
                  Seller ID
                </th>
                <th className="col-1" scope="col">
                  Seller Name
                </th>
                <th className="col-1" scope="col">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td className="review-text">
                I've been a loyal customer of this computer hardware seller for years, and they never disappoint. The latest motherboard I bought from them exceeded my expectations. The seller is knowledgeable and always ready to help you find the right components for your needs. Top-notch service!
                </td>
                <td>4</td>
                <td>09-12-2023 11:00</td>
                <td>1101</td>
                <td>Robert Downey</td>
                <td>2301</td>
                <td>James Hunt</td>
                <td>
                  <a href="/view-review" className="btn button btn-sm text-light">View</a>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td className="review-text">
                I've been a loyal customer of this computer hardware seller for years, and they never disappoint. The latest motherboard I bought from them exceeded my expectations. The seller is knowledgeable and always ready to help you find the right components for your needs. Top-notch service!
                </td>
                <td>4</td>
                <td>09-12-2023 11:00</td>
                <td>1101</td>
                <td>Robert Downey</td>
                <td>2301</td>
                <td>James Hunt</td>
                <td>
                  <a href="/view-review" className="btn button btn-sm text-light">View</a>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td className="review-text">
                I've been a loyal customer of this computer hardware seller for years, and they never disappoint. The latest motherboard I bought from them exceeded my expectations. The seller is knowledgeable and always ready to help you find the right components for your needs. Top-notch service!
                </td>
                <td>4</td>
                <td>09-12-2023 11:00</td>
                <td>1101</td>
                <td>Robert Downey</td>
                <td>2301</td>
                <td>James Hunt</td>
                <td>
                  <a href="/view-review" className="btn button btn-sm text-light">View</a>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td className="review-text">
                I've been a loyal customer of this computer hardware seller for years, and they never disappoint. The latest motherboard I bought from them exceeded my expectations. The seller is knowledgeable and always ready to help you find the right components for your needs. Top-notch service!
                </td>
                <td>4</td>
                <td>09-12-2023 11:00</td>
                <td>1101</td>
                <td>Robert Downey</td>
                <td>2301</td>
                <td>James Hunt</td>
                <td>
                  <a href="/view-review" className="btn button btn-sm text-light">View</a>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td className="review-text">
                I've been a loyal customer of this computer hardware seller for years, and they never disappoint. The latest motherboard I bought from them exceeded my expectations. The seller is knowledgeable and always ready to help you find the right components for your needs. Top-notch service!
                </td>
                <td>4</td>
                <td>09-12-2023 11:00</td>
                <td>1101</td>
                <td>Robert Downey</td>
                <td>2301</td>
                <td>James Hunt</td>
                <td>
                  <a href="/view-review" className="btn button btn-sm text-light">View</a>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td className="review-text">
                I've been a loyal customer of this computer hardware seller for years, and they never disappoint. The latest motherboard I bought from them exceeded my expectations. The seller is knowledgeable and always ready to help you find the right components for your needs. Top-notch service!
                </td>
                <td>4</td>
                <td>09-12-2023 11:00</td>
                <td>1101</td>
                <td>Robert Downey</td>
                <td>2301</td>
                <td>James Hunt</td>
                <td>
                  <a href="/view-review" className="btn button btn-sm text-light">View</a>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td className="review-text">
                I've been a loyal customer of this computer hardware seller for years, and they never disappoint. The latest motherboard I bought from them exceeded my expectations. The seller is knowledgeable and always ready to help you find the right components for your needs. Top-notch service!
                </td>
                <td>4</td>
                <td>09-12-2023 11:00</td>
                <td>1101</td>
                <td>Robert Downey</td>
                <td>2301</td>
                <td>James Hunt</td>
                <td>
                  <a href="/view-review" className="btn button btn-sm text-light">View</a>
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td className="review-text">
                I've been a loyal customer of this computer hardware seller for years, and they never disappoint. The latest motherboard I bought from them exceeded my expectations. The seller is knowledgeable and always ready to help you find the right components for your needs. Top-notch service!
                </td>
                <td>4</td>
                <td>09-12-2023 11:00</td>
                <td>1101</td>
                <td>Robert Downey</td>
                <td>2301</td>
                <td>James Hunt</td>
                <td>
                  <a href="/view-review" className="btn button btn-sm text-light">View</a>
                </td>
              </tr>
              <tr>
                <td>9</td>
                <td className="review-text">
                I've been a loyal customer of this computer hardware seller for years, and they never disappoint. The latest motherboard I bought from them exceeded my expectations. The seller is knowledgeable and always ready to help you find the right components for your needs. Top-notch service!
                </td>
                <td>4</td>
                <td>09-12-2023 11:00</td>
                <td>1101</td>
                <td>Robert Downey</td>
                <td>2301</td>
                <td>James Hunt</td>
                <td>
                  <a href="/view-review" className="btn button btn-sm text-light">View</a>
                </td>
              </tr>
              <tr>
                <td>10</td>
                <td className="review-text">
                I've been a loyal customer of this computer hardware seller for years, and they never disappoint. The latest motherboard I bought from them exceeded my expectations. The seller is knowledgeable and always ready to help you find the right components for your needs. Top-notch service!
                </td>
                <td>4</td>
                <td>09-12-2023 11:00</td>
                <td>1101</td>
                <td>Robert Downey</td>
                <td>2301</td>
                <td>James Hunt</td>
                <td>
                  <a href="/view-review" className="btn button btn-sm text-light">View</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <PageNav />
      </div>
    </div>
  );
};

export default Reviews;

import React from "react";
import "./ViewUser.css";
import  UserPFP from "../../images/user-pfp.jpg";
import PageNav from "../../components/PageNav";
import ReviewImg01 from "../../images/review-img-01.jpg";
import ReviewImg02 from "../../images/review-img-02.jpg";
import ReviewImg03 from "../../images/review-img-03.jpg";


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
              <p className="fw-light fs-5">1011</p>
            </div>
          </div>
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">Name</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">
                Muhammad Hamza
              </p>
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

          <hr />
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">Blogs</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">69
              </p>
            </div>
          </div>
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">Reviews</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">42
              </p>
            </div>
          </div>
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">Average Rating</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">3.8
              </p>
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
        <h3 className="fw-bold pb-0">REVIEWS</h3>
        <a href="view-user" className="ms-5"><button className="btn button text-light">Show Listings</button></a>
        </div>
        <div className="row align-items-center">
            
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
        {/*Table Section*/}
        <div className="col-12">
          <table className="table table-hover my-4">
            <thead className="table-dark">
              <tr>
                <th className="col-1" scope="col">
                  #
                </th>
                <th className="col-7" scope="col">
                  Review
                </th>
                <th className="col-1" scope="col">
                  Rating
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate commodo imperdiet. Curabitur suscipit sem et auctor tincidunt. 
                </td>
                <td>4</td>
                <td>1101</td>
                <td>Muhammad Faisal Zamir</td>
                <td>2301</td>
                <td>Muhammad Hamza</td>
                <td>
                  <a href="/view-review" className="btn button btn-sm text-light">View</a>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td className="review-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate commodo imperdiet. Curabitur suscipit sem et auctor tincidunt. 
                </td>
                <td>4</td>
                <td>1101</td>
                <td>Muhammad Faisal Zamir</td>
                <td>2301</td>
                <td>Muhammad Hamza</td>
                <td>
                  <button className="btn button btn-sm text-light">View</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td className="review-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate commodo imperdiet. Curabitur suscipit sem et auctor tincidunt. 
                </td>
                <td>4</td>
                <td>1101</td>
                <td>Muhammad Faisal Zamir</td>
                <td>2301</td>
                <td>Muhammad Hamza</td>
                <td>
                  <button className="btn button btn-sm text-light">View</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td className="review-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate commodo imperdiet. Curabitur suscipit sem et auctor tincidunt. 
                </td>
                <td>4</td>
                <td>1101</td>
                <td>Muhammad Faisal Zamir</td>
                <td>2301</td>
                <td>Muhammad Hamza</td>
                <td>
                  <button className="btn button btn-sm text-light">View</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td className="review-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate commodo imperdiet. Curabitur suscipit sem et auctor tincidunt. 
                </td>
                <td>4</td>
                <td>1101</td>
                <td>Muhammad Faisal Zamir</td>
                <td>2301</td>
                <td>Muhammad Hamza</td>
                <td>
                  <button className="btn button btn-sm text-light">View</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td className="review-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate commodo imperdiet. Curabitur suscipit sem et auctor tincidunt. 
                </td>
                <td>4</td>
                <td>1101</td>
                <td>Muhammad Faisal Zamir</td>
                <td>2301</td>
                <td>Muhammad Hamza</td>
                <td>
                  <button className="btn button btn-sm text-light">View</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td className="review-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate commodo imperdiet. Curabitur suscipit sem et auctor tincidunt. 
                </td>
                <td>4</td>
                <td>1101</td>
                <td>Muhammad Faisal Zamir</td>
                <td>2301</td>
                <td>Muhammad Hamza</td>
                <td>
                  <button className="btn button btn-sm text-light">View</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td className="review-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate commodo imperdiet. Curabitur suscipit sem et auctor tincidunt. 
                </td>
                <td>4</td>
                <td>1101</td>
                <td>Muhammad Faisal Zamir</td>
                <td>2301</td>
                <td>Muhammad Hamza</td>
                <td>
                  <button className="btn button btn-sm text-light">View</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td className="review-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate commodo imperdiet. Curabitur suscipit sem et auctor tincidunt. 
                </td>
                <td>4</td>
                <td>1101</td>
                <td>Muhammad Faisal Zamir</td>
                <td>2301</td>
                <td>Muhammad Hamza</td>
                <td>
                  <button className="btn button btn-sm text-light">View</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td className="review-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate commodo imperdiet. Curabitur suscipit sem et auctor tincidunt. 
                </td>
                <td>4</td>
                <td>1101</td>
                <td>Muhammad Faisal Zamir</td>
                <td>2301</td>
                <td>Muhammad Hamza</td>
                <td>
                  <button className="btn button btn-sm text-light">View</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td className="review-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate commodo imperdiet. Curabitur suscipit sem et auctor tincidunt. 
                </td>
                <td>4</td>
                <td>1101</td>
                <td>Muhammad Faisal Zamir</td>
                <td>2301</td>
                <td>Muhammad Hamza</td>
                <td>
                  <button className="btn button btn-sm text-light">View</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td className="review-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate commodo imperdiet. Curabitur suscipit sem et auctor tincidunt. 
                </td>
                <td>4</td>
                <td>1101</td>
                <td>Muhammad Faisal Zamir</td>
                <td>2301</td>
                <td>Muhammad Hamza</td>
                <td>
                  <button className="btn button btn-sm text-light">View</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td className="review-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate commodo imperdiet. Curabitur suscipit sem et auctor tincidunt. 
                </td>
                <td>4</td>
                <td>1101</td>
                <td>Muhammad Faisal Zamir</td>
                <td>2301</td>
                <td>Muhammad Hamza</td>
                <td>
                  <button className="btn button btn-sm text-light">View</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td className="review-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate commodo imperdiet. Curabitur suscipit sem et auctor tincidunt. 
                </td>
                <td>4</td>
                <td>1101</td>
                <td>Muhammad Faisal Zamir</td>
                <td>2301</td>
                <td>Muhammad Hamza</td>
                <td>
                  <button className="btn button btn-sm text-light">View</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td className="review-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate commodo imperdiet. Curabitur suscipit sem et auctor tincidunt. 
                </td>
                <td>4</td>
                <td>1101</td>
                <td>Muhammad Faisal Zamir</td>
                <td>2301</td>
                <td>Muhammad Hamza</td>
                <td>
                  <button className="btn button btn-sm text-light">View</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td className="review-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate commodo imperdiet. Curabitur suscipit sem et auctor tincidunt. 
                </td>
                <td>4</td>
                <td>1101</td>
                <td>Muhammad Faisal Zamir</td>
                <td>2301</td>
                <td>Muhammad Hamza</td>
                <td>
                  <button className="btn button btn-sm text-light">View</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td className="review-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate commodo imperdiet. Curabitur suscipit sem et auctor tincidunt. 
                </td>
                <td>4</td>
                <td>1101</td>
                <td>Muhammad Faisal Zamir</td>
                <td>2301</td>
                <td>Muhammad Hamza</td>
                <td>
                  <button className="btn button btn-sm text-light">View</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td className="review-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate commodo imperdiet. Curabitur suscipit sem et auctor tincidunt. 
                </td>
                <td>4</td>
                <td>1101</td>
                <td>Muhammad Faisal Zamir</td>
                <td>2301</td>
                <td>Muhammad Hamza</td>
                <td>
                  <button className="btn button btn-sm text-light">View</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td className="review-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate commodo imperdiet. Curabitur suscipit sem et auctor tincidunt. 
                </td>
                <td>4</td>
                <td>1101</td>
                <td>Muhammad Faisal Zamir</td>
                <td>2301</td>
                <td>Muhammad Hamza</td>
                <td>
                  <button className="btn button btn-sm text-light">View</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td className="review-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate commodo imperdiet. Curabitur suscipit sem et auctor tincidunt. 
                </td>
                <td>4</td>
                <td>1101</td>
                <td>Muhammad Faisal Zamir</td>
                <td>2301</td>
                <td>Muhammad Hamza</td>
                <td>
                  <button className="btn button btn-sm text-light">View</button>
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

export default ViewUser;

import React from "react";
import "./ViewListing.css";
import ReviewImg01 from "../../images/colette.jpg";
import ReviewImg02 from "../../images/xanders.jpg";
import ReviewImg03 from "../../images/espresso.jpg";

const ViewListing = () => {
  return (
    <div className=" main-content m-5">
      <div className="row">
        <div className="col-12">
          <h1 className="fw-bold pb-2">BLOG</h1>
          <hr />
          <div className="row mb-1">
            <div className=" col-2">
              <h4 className="fw-bold fs-5">Pictures</h4>
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
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">ID</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">4242</p>
            </div>
          </div>
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">Title</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">
              Feed The Hungry
              </p>
            </div>
          </div>

          <hr />
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">Product Description</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                porttitor ante vitae lectus dapibus congue. Fusce nec sodales
                leo. Ut elementum ac nulla vel pharetra. Maecenas a massa vitae
                sapien efficitur mattis. Aliquam justo libero, viverra vel
                egestas id, scelerisque ac nisl. Maecenas eget dolor consequat,
                volutpat sapien vel, vestibulum nisl. Fusce efficitur iaculis
                mi. Sed porttitor sapien et faucibus ullamcorper. Sed nec mi
                sodales dui interdum luctus ac vel metus. Maecenas mauris enim,
                bibendum non elit id, tincidunt tincidunt ex. Mauris vitae
                venenatis purus, sit amet rutrum magna. Cras interdum porta
                velit, a malesuada dolor mattis a. Cras gravida massa a lacus
                imperdiet, ac efficitur eros pretium.
              </p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">User ID</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">1011</p>
            </div>
          </div>
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">User Name</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">Muhammad Hamza</p>
            </div>
          </div>
          <div className="row">
            <div className=" col-3 col-xxl-2">
              <a className="btn button text-light text-nowrap w-100">
                {" "}
                View User Profile
              </a>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">Reviews</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">23</p>
            </div>
            
          <hr />
          </div>
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">Date & Time</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">03/08/2023 11:00</p>
            </div>
          </div>
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">Dislikes</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">215</p>
            </div>
          </div>
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">Likes</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">26</p>
            </div>
          </div>
    
          <hr />
          <div className="row mt-5">
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

                <td>
                  <button className="btn button btn-sm text-light">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
   
  );
};

export default ViewListing;

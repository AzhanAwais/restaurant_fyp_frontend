import React, { useEffect, useState } from "react";
import "./ViewListing.css";
import ReviewImg01 from "../../images/colette.jpg";
import ReviewImg02 from "../../images/xanders.jpg";
import ReviewImg03 from "../../images/espresso.jpg";
import { DeleteBlog, GetSingleBlog } from "../../services/blog";
import { GetAllComment } from "../../services/comment";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";

const ViewListing = () => {
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(10)
  const [totalPage, setTotalPage] = useState(1)
  const [comments, setComments] = useState([])
  const navigate = useNavigate()

  const [blog, setBlog] = useState(null)
  const { id } = useParams()

  const deleteBlog = async()=>{
    try{
        const res = await DeleteBlog(id)
        navigate("/users")
    }
    catch(e){
      console.log(e)
    }
  }

  useEffect(() => {
    const getSingleBlog = async () => {
      try {
        const data = await GetSingleBlog(id)
        setBlog(data.data.data)
      }
      catch (e) {
        console.log(e)
      }
    }

    const getAllCommentsOfBlog = async () => {
      try {
        const params = {
          page: page,
          perPage: perPage,
          paginate: true,
          blog: id
        }
        const data = await GetAllComment(params)
        setTotalPage(data.data.pagination.totalPages)
        setComments(data.data.data)

      }
      catch (e) {

      }
    }

    getSingleBlog()
    getAllCommentsOfBlog()
  }, [])

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
                  {
                    blog?.images?.map((item, index) => (
                      <div className="col-2 mb-3" key={index}>
                        <a
                          className="fixed-size-container"
                          style={{ width: "150px", height: "150px" }}
                        >
                          <img
                            src={item || ReviewImg01}
                            class="object-fit-cover w-100 h-100"
                            alt="review-img"
                          />
                        </a>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">ID</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">{blog?._id}</p>
            </div>
          </div>
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">Title</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">
                {blog?.title}
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
                {blog?.description}
              </p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">User ID</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">{blog?.user?._id}</p>
            </div>
          </div>
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">User Name</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">{blog?.user?.name}</p>
            </div>
          </div>
          <div className="row">
            <div className=" col-3 col-xxl-2">
              <a href={`/view-user/${blog?.user?._id}`} className="btn button text-light text-nowrap w-100">
                View User Profile
              </a>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">Comments</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">{blog?.comments?.length}</p>
            </div>

            <hr />
          </div>
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">Date & Time</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">{moment(blog?.createdAt).format('D-MMM-YYYY hh:mm A')}</p>
            </div>
          </div>
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">Dislikes</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">{blog?.dislikes?.length}</p>
            </div>
          </div>
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">Likes</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">{blog?.likes?.length}</p>
            </div>
          </div>

          <hr />
          <div className="row mt-5">
            <div className="col-3 col-xxl-2">
              <a className="btn button text-light w-100">View On Website</a>
            </div>
            <div className="col-3 col-xxl-2">
              <a className="btn button text-light w-100" onClick={deleteBlog}>Delete</a>
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
                Comment
              </th>
              <th className="col-1" scope="col">
                Commenter ID
              </th>
              <th className="col-1" scope="col">
                Commenter Name
              </th>

              {/* <th className="col-1" scope="col">
                Actions
              </th> */}
            </tr>
          </thead>
          <tbody>
            {
              comments?.map((item, index) => (
                <tr key={index}>
                  <td>{item?._id}</td>
                  <td className="review-text">
                    {item?.comment}
                  </td>
                  <td>{item?.user?._id}</td>
                  <td>{item?.user?.name}</td>
                  {/* <td>
                    <a href={`/view-review/${item?._id}`} className="btn button btn-sm text-light">View</a>
                  </td> */}
                </tr>
              ))
            }

          </tbody>
        </table>
      </div>
    </div>

  );
};

export default ViewListing;

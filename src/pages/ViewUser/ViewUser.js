import React, { useEffect, useState } from "react";
import "./ViewUser.css";
import UserPFP from "../../images/user-pfp.jpeg";
import PageNav from "../../components/PageNav";
import ReviewImg01 from "../../images/review-img-01.jpg";
import { useNavigate, useParams } from "react-router-dom";
import { DeleteUser, GetSingleUser } from "../../services/user";
import moment from "moment";
import { GetAllBlog } from "../../services/blog";

const ViewUser = () => {
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(10)
  const [totalPage, setTotalPage] = useState(1)
  const [blogs, setBlogs] = useState([])
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const [user, setUser] = useState(null)
  const { id } = useParams()

  const filteredResults = blogs?.filter((item) => (
    item?.title?.toLowerCase().includes(search)
  ))

  const deleteUser = async()=>{
    try{
        const res = await DeleteUser(id)
        navigate("/users")
    }
    catch(e){
      console.log(e)
    }
  }

  useEffect(() => {
    const getSingleUser = async () => {
      try {
        const data = await GetSingleUser(id)
        setUser(data.data.data)
      }
      catch (e) {
        console.log(e)
      }
    }

    const getAllBlogsOfUser = async () => {
      try {
        const params = {
          page: page,
          perPage: perPage,
          paginate: true,
          user: id
        }
        const data = await GetAllBlog(params)
        setTotalPage(data.data.pagination.totalPages)
        setBlogs(data.data.data)

      }
      catch (e) {

      }
    }

    getSingleUser()
    getAllBlogsOfUser()
  }, [])

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
                        src={user?.profile_image || UserPFP}
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
              <p className="fw-light fs-5">{user?._id}</p>
            </div>
          </div>
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">Name</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">{user?.name}</p>
            </div>
          </div>
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">User Name</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">{user?.username}</p>
            </div>
          </div>
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">Joining Date</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">{moment(user?.createdAt).format('D-MMM-YYYY')}</p>
            </div>
          </div>
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">Status</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">{user?.is_verified ? "Verified" : "Not Verified"}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">CNIC</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">{user?.cnic}</p>
            </div>
          </div>
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">Email</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">{user?.email}</p>
            </div>
          </div>
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">Phone</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">{user?.phone}</p>
            </div>
          </div>

          <hr />
          <div className="row">
            <div className=" col-2">
              <p className="fw-bold fs-5">Blogs</p>
            </div>
            <div className="col-10">
              <p className="fw-light fs-5">{blogs?.length}</p>
            </div>
          </div>

          <hr />
          <div className="row my-5">
            <div className="col-3 col-xxl-2">
              <a className="btn button text-light w-100">View On Website</a>
            </div>
            <div className="col-3 col-xxl-2">
              <a className="btn button text-light w-100" onClick={deleteUser}>Delete</a>
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
             value={search}
             onChange={(e) => setSearch(e.target.value)}
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
            {
              filteredResults?.map((item, index) => (
                <tr key={index}>
                  <td>
                    <div
                      className="fixed-size-container"
                      style={{ width: "120px", height: "120px" }}
                    >
                      <img
                        src={item?.images?.length > 0 ? item?.images[0] : ReviewImg01}
                        class="object-fit-cover w-100 h-100"
                        alt="review-img"
                      />
                    </div>
                  </td>
                  <td>{item?._id}</td>
                  <td className="">{item?.title}</td>
                  <td>
                    {item?.description}
                  </td>
                  <td>{item?.likes?.length}</td>
                  <td>{item?.dislikes?.length}</td>
                  <td>{moment(item?.createdAt).format('D-MMM-YYYY')}</td>
                  <td>
                    <a
                      href={`/view-listing/${item?._id}`}
                      className="btn button btn-sm text-light"
                    >
                      View
                    </a>
                  </td>
                </tr>
              ))
            }

          </tbody>
        </table>

        <PageNav setPage={setPage} totalPage={totalPage} />
      </div>
    </div>
  );
};

export default ViewUser;

import React, { useEffect, useState } from "react";
import "./UsersList.css";
import PageNav from "../../components/PageNav";
import { GetAllUser } from "../../services/user";

const Users = () => {
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(10)
  const [totalPage, setTotalPage] = useState(1)
  const [searchBy, setSearchBy] = useState("")
  const [search, setSearch] = useState("")
  const [verifiedStatus, setVerifiedStatus] = useState("")

  const filteredResults = users?.filter((item) => {
    if (searchBy != "") {
      return item[searchBy]?.toLowerCase().includes(search)
    }
    else{
      return item
    }
  })

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const params = {
          page: page,
          perPage: perPage,
          paginate: true,
          ...(verifiedStatus != "" && { is_verified: verifiedStatus }),
        }

        const data = await GetAllUser(params)
        setTotalPage(data.data.pagination.totalPages)
        setUsers(data.data.data)
      }
      catch (e) {
        console.log(e)
      }
    }

    getAllUsers()
  }, [verifiedStatus])

  return (
    <div className="main-content m-5">
      <div className="row">
        {/*Page Title */}
        <h1 className="fw-bold pb-2">USERS</h1>
        <hr />

        {/*Analytics Section*/}
        <div className="d-flex mb-3">
          <h6 className="me-5">Total Users: {users.length}</h6>
        </div>

        {/*Search Section*/}
        <div className="row align-items-center mb-3">
          <div className="col-1 me-2">
            <h6 className="mb-0 me-3">Search By: </h6>
          </div>
          <div className="col-3 col-xxl-2 d-flex align-items-center">
            <select class="form-select search-select" onChange={(e) => setSearchBy(e.target.value)}>
              <option value="" selected>--Select--</option>
              <option value="name">Name</option>
              <option value="cnic">CNIC</option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>

            </select>
          </div>
          <div className="col-5 col-xxl-3 d-flex align-items-center">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="keyword"
              class="form-control text-dark user-search-box"
              id="search-box"
              aria-describedby="search-keyword"
              placeholder="Enter Keyword"
              style={{ width: "100%" }}
            ></input>
          </div>
          <div className="col-1">
            <button className="btn button text-light">Search</button>
          </div>
        </div>
        <hr />

        {/*Filter Section*/}
        <h3 className="fw-bold pb-2">Filters</h3>

        <div className="row align-items-center mb-3">
          {/* <div className="col-1 col-xxl-1 me-2">
            <h6 className="mb-0 me-3 text-xxl-wrap">Status: </h6>
          </div>
          <div className="search-section col-3 col-xxl-2 d-flex align-items-center">
            <select class="form-select search-select">
              <option selected>--Select--</option>
              <option value="1">Active</option>
              <option value="2">Restricted</option>
            </select>
          </div> */}
          <div className="col-2 col-xxl-1">
            <h6 className="mb-0">Verification:</h6>
          </div>
          <div className="search-section col-3 col-xxl-2 d-flex align-items-center">
            <select class="form-select search-select" onChange={(e) => setVerifiedStatus(e.target.value)}>
              <option value="" selected>--Select--</option>
              <option value="true">Verified</option>
              <option value="false">Non-Verified</option>
            </select>
          </div>
        </div>
        <div className="row align-items-center mb-3">
          <div className="col-1 me-2">
            <h6 className="mb-0 me-3">Level: </h6>
          </div>
          <div className="col-3 col-xxl-2 d-flex align-items-center">
            <div className="form-group verification-filter me-5 d-flex align-items-center">
              <div className="d-flex pe-3">
                <div className="form-check pe-2">
                  <input className="form-check-input" type="checkbox" value="option1" id="option1" />
                  <label className="form-check-label" htmlFor="option1">
                    1
                  </label>
                </div>
                <div className="form-check pe-2">
                  <input className="form-check-input" type="checkbox" value="option2" id="option2" />
                  <label className="form-check-label" htmlFor="option2">
                    2
                  </label>
                </div>
                <div className="form-check pe-2">
                  <input className="form-check-input" type="checkbox" value="option2" id="option2" />
                  <label className="form-check-label" htmlFor="option2">
                    3
                  </label>
                </div>
                <div className="form-check pe-2">
                  <input className="form-check-input" type="checkbox" value="option2" id="option2" />
                  <label className="form-check-label" htmlFor="option2">
                    4
                  </label>
                </div>
                <div className="form-check pe-2">
                  <input className="form-check-input" type="checkbox" value="option2" id="option2" />
                  <label className="form-check-label" htmlFor="option2">
                    5
                  </label>
                </div>
              </div>
            </div>
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
                  User ID
                </th>
                <th className="col-3" scope="col">
                  Name
                </th>

                <th className="col-2" scope="col">
                  CNIC
                </th>
                <th className="col-1" scope="col">
                  Email
                </th>
                <th className="col-1" scope="col">
                  Phone
                </th>
                <th className="col-1" scope="col">
                  Verification
                </th>
                <th className="col-1" scope="col">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {
                filteredResults?.map((item, index) => {
                  if (item?.role != "admin") {
                    return (
                      <tr key={index}>
                        <td>{item?._id}</td>
                        <td>{item?.username}</td>
                        <td>{item?.cnic}</td>
                        <td>{item?.email}</td>
                        <td>{item?.phone}</td>
                        <td>{item?.is_verified ? "Verified" : "Not Verified"}</td>
                        <td>
                          <a href={`/view-user/${item?._id}`} className="btn button btn-sm text-light">View</a>
                        </td>
                      </tr>
                    )
                  }
                })
              }
            </tbody>
          </table>
        </div>

        <PageNav setPage={setPage} totalPage={totalPage} />
      </div>
    </div>
  );
};

export default Users;

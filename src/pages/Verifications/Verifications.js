import React, {useEffect, useState} from "react";
import "./Verifications.css";
import PageNav from "../../components/PageNav";
import {getVerification, verifyUser} from "../../services/verification";

const Verifications = () => {

    const [search, setSearch] = useState("")
    const [selectSearch, setSelectSearch] = useState("")
    const [status, setStatus] = useState("")

    const [verification, setVerification] = useState([])
    const [update, setUpdate] = useState(0)
    const GetAllVerification = async () => {
        try {
            let query = {
                status: status
            }
            if(selectSearch == "id") query["id"] = search
            if(selectSearch == "user_id") query["user_id"] = search
            if(selectSearch == "name") query["name"] = search
            if(selectSearch == "nic") query["nic"] = search

            let res = await getVerification(query)
            setVerification(res?.data?.data)
        } catch (e) {
            console.log(e.message)
        }
    }

    const VerifyUser = async (selectedRecord, status) => {
        try {
            let res = await verifyUser(selectedRecord, status)
            setUpdate(update + 1)
            // setVerification(res?.data?.data)
        } catch (e) {
            console.log(e.message)
        }
    }
    useEffect(() => {
        GetAllVerification()
    }, [update, search, status])
    return (
        <div className="main-content m-5">
            {/*Page Title */}
            <div className="row">
                <h1 className="fw-bold pb-2">USER VERIFICATIONS</h1>
                <hr/>
                {/*Analytics Section*/}
                <div className="d-flex mb-3">
                    <h6 className="me-5">Total Verified Users: 12</h6>
                    <h6 className="me-5">Pending Requests: 10</h6>
                    <h6 className="me-5">Rejected Requests: 2</h6>
                </div>

                {/*Search Section*/}
                <div className="row align-items-center mb-3">
                    <div className="col-1 me-2">
                        <h6 className="mb-0 me-3">Search By: </h6>
                    </div>
                    <div className="col-3 col-xxl-2 d-flex align-items-center">
                        <select class="form-select search-select" onChange={e => setSelectSearch(e.target.value)}>
                            <option value={""}>--Select--</option>
                            <option value="id">Verification ID</option>
                            <option value="user_id">User ID</option>
                            <option value="name">User Name</option>
                            <option value="nic">CNIC</option>
                        </select>
                    </div>
                    <div className="col-5 col-xxl-3 d-flex align-items-center">
                        <input
                            type="keyword"
                            class="form-control text-dark user-search-box"
                            id="search-box"
                            aria-describedby="search-keyword"
                            placeholder="Enter Keyword"
                            style={{width: "100%"}}
                            onChange={e => setSearch(e.target.value)}
                        ></input>
                    </div>
                    <div className="col-1">
                        <button className="btn button text-light">Search</button>
                    </div>
                </div>

                {/*Filter Section*/}
                <div className="row align-items-center mb-4">
                    <div className="col-1 col-xxl-1 me-2">
                        <h6 className="mb-0 me-3 text-xxl-wrap">Status: </h6>
                    </div>
                    <div className="search-section col-3 col-xxl-2 align-items-center">
                        <select class="form-select search-select" onChange={e=>setStatus(e.target.value)}>
                            <option value={""}>--Select--</option>
                            <option value="approved">Approved</option>
                            <option value="pending">Pending</option>
                            <option value="rejected">Rejected</option>
                        </select>
                    </div>
                </div>


                {/*Table Section*/}
                <table className="table table-hover my-4">
                    <thead className="table-dark">
                    <tr>
                        <th className="col-1" scope="col">
                            ID
                        </th>
                        <th className="col-1" scope="col">
                            User ID
                        </th>
                        <th className="col-3" scope="col">
                            User Name
                        </th>
                        <th className="col-1" scope="col">
                            NIC
                        </th>
                        <th className="col-1" scope="col">
                            NIC Front
                        </th>
                        <th className="col-1" scope="col">
                            NIC Back
                        </th>
                        <th className="col-1" scope="col">
                            Shop Card
                        </th>
                        <th className="col-1" scope="col">
                            Shop Bill
                        </th>
                        <th className="col-1" scope="col">
                            Status
                        </th>
                        <th className="col-1" scope="col">
                            Actions
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {verification.length > 0 && verification?.map(dt => {
                        return (
                            <tr className="pending">
                                <td>{dt?._id}</td>
                                <td className="">{dt?.user_id?._id}</td>
                                <td>{dt?.user_id?.name}</td>
                                <td>{dt?.user_id?.cnic}</td>
                                <td>
                                    <div
                                        className="fixed-size-container"
                                        style={{width: "100px", height: "80px"}}
                                    >
                                        <img
                                            src={`http://localhost:4000/${dt?.nic_front}`}
                                            className="object-fit-cover w-100 h-100"
                                            alt="nic-front"
                                        />
                                    </div>
                                </td>
                                <td>
                                    <div
                                        className="fixed-size-container"
                                        style={{width: "100px", height: "80px"}}
                                    >
                                        <img
                                            src={`http://localhost:4000/${dt?.nic_back}`}
                                            className="object-fit-cover w-100 h-100"
                                            alt="review-img"
                                        />
                                    </div>
                                </td>
                                <td>
                                    <div
                                        className="fixed-size-container"
                                        style={{width: "100px", height: "80px"}}
                                    >
                                        <img
                                            src={`http://localhost:4000/${dt?.shop_card}`}
                                            className="object-fit-cover w-100 h-100"
                                            alt="review-img"
                                        />
                                    </div>
                                </td>
                                <td>
                                    <div
                                        className="fixed-size-container"
                                        style={{width: "100px", height: "80px"}}
                                    >
                                        <img
                                            src={`http://localhost:4000/${dt?.shop_bill}`}
                                            className="object-fit-cover w-100 h-100"
                                            alt="review-img"
                                        />
                                    </div>
                                </td>
                                <td>{dt?.status}</td>
                                <td>
                                    <button href="" className="btn button btn-sm text-light me-5 mb-2">
                                        View
                                    </button>
                                    <button
                                        // href="#"
                                        className="btn approve-button btn-sm text-light me-2"
                                        onClick={() => {
                                            VerifyUser(dt?._id, 'approved')
                                        }}
                                    >
                                        <i className="bi bi-check-lg"></i>
                                    </button>
                                    <button href="#" className="btn reject-button btn-sm text-light" onClick={() => {
                                        VerifyUser(dt?._id, 'rejected')
                                    }}>
                                        <i className="bi bi-x-lg"></i>
                                    </button>
                                </td>
                            </tr>
                        )
                    })}

                    </tbody>
                </table>
                <PageNav/>
            </div>
        </div>
    );
};

export default Verifications;

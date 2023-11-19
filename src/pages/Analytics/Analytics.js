import React, { useEffect, useState } from "react";
import "./Analytics.css"
import UserPFP from "../../images/user-pfp.jpg";
import PageNav from "../../components/PageNav";
import ReviewImg01 from "../../images/review-img-01.jpg";
import ReviewImg02 from "../../images/review-img-02.jpg";
import ReviewImg03 from "../../images/review-img-03.jpg";
import { GetDashboard } from "../../services/dashboard";


const Analytics = () => {
    const [dashboard, setDashboard] = useState(null)

    useEffect(() => {
        const getDashboard = async()=>{
            try{
                const data = await GetDashboard()
                setDashboard(data.data.data)
            }
            catch(e){
                console.log(e)
            }
        }

        getDashboard()
    },[])

    return (
        <div className="container main-content m-5">
            <div className="row justify-content-center">
                <h1 className="fw-bold">ANALYTICS</h1>
                <hr />
                <div className="col-3 my-3 justify-content-center">
                    <div className="square-content rounded-4 align-items-center d-flex flex-column">
                        <p className="numbers mb-0">{dashboard?.restaurants}</p>
                        <p className="fs-3  fw-bold">RESTAURANTS</p>
                    </div>
                </div>
                <div className="col-3 my-3 justify-content-center">
                    <div className="square-content rounded-4 align-items-center d-flex flex-column">
                        <p className="numbers mb-0">{dashboard?.users}</p>
                        <p className="fs-3 fw-bold">USER ACCOUNTS</p>
                    </div>
                </div>
                <div className="col-3 my-3 justify-content-center">
                    <div className="square-content rounded-4 align-items-center d-flex flex-column">
                        <p className="numbers mb-0">{dashboard?.reviews}</p>
                        <p className="fs-3 fw-bold">REVIEWS</p>
                    </div>
                </div>
                <div className="col-3 my-3 justify-content-center">
                    <div className="square-content rounded-4 align-items-center d-flex flex-column">
                        <p className="numbers mb-0">{dashboard?.verifiedUsers}</p>
                        <p className="fs-3 fw-bold">VERIFIED USERS</p>
                    </div>
                </div>
                <div className="col-3 my-3 justify-content-center">
                    <div className="square-content rounded-4 align-items-center d-flex flex-column">
                        <p className="numbers mb-0">{dashboard?.activeUsers}</p>
                        <p className="fs-3 fw-bold">ACTIVE USERS</p>
                    </div>
                </div>
                <div className="col-3 my-3 justify-content-center">
                    <div className="square-content rounded-4 align-items-center d-flex flex-column">
                        <p className="numbers mb-0">{dashboard?.disabledUsers}</p>
                        <p className="fs-3 fw-bold">DISABLED USERS</p>
                    </div>
                </div>
                <div className="col-3 my-3 justify-content-center">
                    <div className="square-content rounded-4 align-items-center d-flex flex-column">
                        <p className="numbers mb-0">{dashboard?.pendingUsers}</p>
                        <p className="fs-3 fw-bold">PENDING USERS</p>
                    </div>
                </div>
                <div className="col-3 my-3 justify-content-center">
                    <div className="square-content rounded-4 align-items-center d-flex flex-column">
                        <p className="numbers mb-0">{dashboard?.pendingRestaurants}</p>
                        <p className="fs-4 text-center fw-bold">PENDING RESTAURANTS</p>
                    </div>
                </div>
                <div className="col-3 my-3 justify-content-center">
                    <div className="square-content rounded-4 align-items-center d-flex flex-column">
                        <p className="numbers mb-0">{dashboard?.blogs}</p>
                        <p className="fs-3 fw-bold">BLOGS</p>
                    </div>
                </div>
                <div className="col-3 my-3 justify-content-center">
                    <div className="square-content rounded-4 align-items-center d-flex flex-column">
                        <p className="numbers mb-0">{dashboard?.deletedBlogs}</p>
                        <p className="fs-3 fw-bold">DELETED BLOGS</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;

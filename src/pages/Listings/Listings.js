import React, {useEffect, useState} from "react";
import "./Listings.css";
import PageNav from "../../components/PageNav";
import ReviewImg01 from "../../images/espresso.jpg";
import ReviewImg02 from "../../images/review-img-02.jpg";
import ReviewImg03 from "../../images/review-img-03.jpg";
import {getRestaurant} from "../../services/restaurant";
import {GetAllCuisine} from "../../services/cuisine";
import {GetAllAmbience} from "../../services/ambience";

const Listings = () => {
    const [restaurant, setRestaurant] = useState([])

    const [search, setSearch] = useState("")
    const [select, setSelect] = useState("")
    const [cuisine, setCuisine] = useState([])
    const [selectCuisine, setSelectCuisine] = useState([])
    const [ambience, setAmbience] = useState([])
    const [selectAmbience, setSelectAmbience] = useState([])
    const [selectRes, setSelectRes] = useState("")
    const getAllRestaurants = async () => {
        try {
            let query = {
                name: search == "" ? undefined : search,
                cuisine_type: selectCuisine,
                ambience_type: selectAmbience
            }
            if(selectRes == "id") {
                query["id"] = search
                delete query['name']
            }
            if(selectRes == "name") query["name"] = search
            let res = await getRestaurant(query)
            setRestaurant(res?.data?.data)

        } catch (e) {
            console.log(e.message)
        }
    }

    const getAllCuisine = async () => {
        try {
            let res = await GetAllCuisine()
            setCuisine(res?.data?.data)

        } catch (e) {
            console.log(e.message)
        }
    }

    const getAllAmbience = async () => {
        try {
            let res = await GetAllAmbience()
            setAmbience(res?.data?.data)

        } catch (e) {
            console.log(e.message)
        }
    }
    useEffect(() => {
        getAllRestaurants()
        getAllCuisine()
        getAllAmbience()
    }, [search, selectCuisine, selectAmbience])
    return (
        <div className="main-content m-5">
            {/*Page Title */}
            <div className="row">
                <h1 className="fw-bold pb-2">Restaurants</h1>
                <hr/>
                <div className="d-flex mb-3">
                    <h6 className="me-5">Total Listings: 12</h6>
                    <h6 className="me-5">Active Listings: 10</h6>
                    <h6 className="me-5">Disabled Listings: 2</h6>
                </div>
                <div className="row align-items-center mb-3">
                    <div className="col-8 col-xxl-6 d-flex pe-0">
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
                    {/*<div className="col-3">*/}
                    {/*    <button className="btn button text-light">Search</button>*/}
                    {/*</div>*/}
                </div>
                <hr/>

                {/*Filter Section*/}
                <h3 className="fw-bold pb-2">Filters</h3>

                <div className="row align-items-center mb-3">
                    <div className="col-1 me-2">
                        <h6 className="mb-0 me-3">Restaurant: </h6>
                    </div>
                    <div className="col-3 col-xxl-2 d-flex align-items-center">
                        <select class="form-select search-select" onChange={e => setSelectRes(e.target.value)}>
                            <option value={""}>--Select--</option>
                            <option value="id"> ID</option>
                            <option value="name"> Name</option>
                        </select>
                    </div>
                    <div className="col-4 col-xxl-3 d-flex align-items-center">
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
                </div>

                <div className="row align-items-center mb-3">
                    <div className="col-1 col-xxl-1 me-2">
                        <h6 className="mb-0 me-3 text-xxl-wrap">Ambience: </h6>
                    </div>
                    <div className="search-section col-3 col-xxl-2 d-flex align-items-center">
                        <select class="form-select search-select" onChange={e => setSelectAmbience(e.target.value)}>
                            <option value={""}>--Select--</option>
                            {ambience.length > 0 && ambience.map(dt => {
                                return (<option value={dt?._id}>{dt?.name}</option>)
                            })}
                        </select>
                    </div>
                    <div className="col-1">
                        <h6 className="mb-0">Cuisine-Type: </h6>
                    </div>
                    <div className="search-section col-3 col-xxl-2 d-flex align-items-center">
                        <select class="form-select search-select" onChange={e => setSelectCuisine(e.target.value)}>
                            <option value={""}>--Select--</option>
                            {cuisine.length > 0 && cuisine.map(dt => {
                                return (<option value={dt?._id}>{dt?.name}</option>)
                            })}
                        </select>
                    </div>
                </div>

                {/*<div className="row align-items-center mb-3">
                    <div className="col-1 me-2">
                        <h6 className="mb-0 text-xxl-wrap">Discounts: </h6>
                    </div>
                    <div className="search-section col-3 col-xxl-2 d-flex align-items-center">
                        <select class="form-select search-select">
                            <option selected>--Select--</option>
                            <option value="1">Bogo</option>
                            <option value="2">HBL</option>
                        </select>
                    </div>
                    <div className="col-1">
                        <h6 className="mb-0">Budget: </h6>
                    </div>
                    <div className="search-section col-3 col-xxl-2 d-flex align-items-center">
                        <input
                            type="keyword"
                            class="form-control text-dark user-search-box"
                            id="search-box"
                            aria-describedby="search-keyword"
                            placeholder="MIN"
                            style={{width: "100%"}}
                        ></input>
                        <h6 className="mx-2">-</h6>
                        <input
                            type="keyword"
                            class="form-control text-dark user-search-box"
                            id="search-box"
                            aria-describedby="search-keyword"
                            placeholder="MAX"
                            style={{width: "100%"}}
                        ></input>
                    </div>

                </div>*/}

                {/*<div className="row align-items-center mb-3">
                    <div className="col-1 me-2">
                        <h6 className="mb-0 text-wrap">Location: </h6>
                    </div>
                    <div className="col-3 col-xxl-2 d-flex align-items-center">
                        <select class="form-select search-select">
                            <option selected>--Select Province--</option>
                            <option value="1">Sindh</option>
                            <option value="2">Punjab</option>
                            <option value="3">Balochistan</option>
                            <option value="4">Khyber Pakhtunkhwa</option>
                        </select>
                    </div>
                    <div className="col-4 col-xxl-3 d-flex align-items-center">
                        <select class="form-select search-select">
                            <option selected>--Select City--</option>
                            <option value="1">City 1</option>
                            <option value="2">City 2</option>
                            <option value="3">City 3</option>
                            <option value="4">City 4</option>
                        </select>
                    </div>
                </div>*/}

                {/*<div className="row align-items-center mb-4">
                    <div className="col-1 me-2">
                        <h6 className="mb-0">Opening hours: </h6>
                    </div>
                    <div className="search-section col-3 col-xxl-2 d-flex align-items-center">
                        <input
                            type="keyword"
                            class="form-control text-dark user-search-box"
                            id="search-box"
                            aria-describedby="search-keyword"
                            placeholder="MIN"
                            style={{width: "100%"}}
                        ></input>
                        <h6 className="mx-2">-</h6>
                        <input
                            type="keyword"
                            class="form-control text-dark user-search-box"
                            id="search-box"
                            aria-describedby="search-keyword"
                            placeholder="MAX"
                            style={{width: "100%"}}
                        ></input>
                    </div>
                    <div className="col-1">
                        <h6 className="mb-0">Meals: </h6>
                    </div>
                    <div className="col-3 col-xxl-2 d-flex align-items-center">
                        <select class="form-select search-select">
                            <option selected>--Select--</option>
                            <option value="1">Breakfast</option>
                            <option value="2">Lunch</option>
                            <option value="3">Dinner</option>

                        </select>
                    </div>

                </div>*/}
                {/*<div className="row align-items-center mb-4">
                    <div className="col-1">
                        <h6 className="mb-0">Service options: </h6>
                    </div>
                    <div className="col-3 col-xxl-2 d-flex align-items-center">
                        <select class="form-select search-select">
                            <option selected>--Select--</option>
                            <option value="1">Dine-In</option>
                            <option value="2">Takeaway</option>
                            <option value="3">Delivery</option>
                        </select>
                        <button className="btn button text-light">Apply</button>
                    </div>
                </div>*/}

                {/*Sorting Section*/}
                <hr/>
                {/*<div className="row align-items-center">
                    <div className="col-1 me-2">
                        <h6 className="mb-0 text-xxl-wrap">Sort By: </h6>
                    </div>
                    <div className="col-3 col-xxl-2 d-flex align-items-center">
                        <select class="form-select search-select">
                            <option selected>--Select--</option>
                            <option value="1">ID</option>
                            <option value="2">Newest</option>
                            <option value="3">Oldest</option>
                            <option value="4">Lowest Price</option>
                            <option value="5">Highest Price</option>
                        </select>
                    </div>
                </div>*/}

                {/*Table Section*/}
                <table className="table table-hover my-4">
                    <thead className="table-dark">
                    <tr>
                        <th className="col-1" scope="col">
                            Thumbnail
                        </th>
                        <th className="col-1" scope="col">
                            ID
                        </th>
                        <th className="title-column" scope="col">
                            Name
                        </th>
                        <th className="col-1" scope="col">
                            Location
                        </th>
                        <th className="col-1" scope="col">
                            Ambience
                        </th>
                        <th className="col-1" scope="col">
                            Cuisine-Type
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
                    {
                        restaurant.length > 0 && restaurant.map(dt => {
                            return (
                                <tr>
                                    <td>
                                        <div
                                            className="fixed-size-container"
                                            style={{width: "120px", height: "120px"}}
                                        >
                                            <img
                                                src={dt?.images[0]}
                                                className="object-fit-cover w-100 h-100"
                                                alt="review-img"
                                            />
                                        </div>
                                    </td>
                                    <td>{dt?._id}</td>
                                    <td className="">
                                        {dt?.name}
                                    </td>
                                    <td>{dt?.address}</td>
                                    <td>{dt?.ambience_type?.name}</td>
                                    <td>{dt?.cuisine_type?.name}</td>
                                    <td>{dt?.created_by?.username}</td>
                                    <td>
                                        <a
                                            href={`/view-listing/${dt?._id}`}
                                            className="btn button btn-sm text-light"
                                        >
                                            View
                                        </a>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>

                <PageNav/>
            </div>
        </div>
    );
};

export default Listings;

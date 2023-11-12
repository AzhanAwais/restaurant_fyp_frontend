import React from "react";
import "./sidebar.css";
import FNLogo from "../images/foodnauts-Logo.png";
import { useNavigate } from "react-router-dom";
import { EmptyLocalStorage } from "../services/localStorage";

const Sidebar = () => {
  const navigate = useNavigate()

  const logout = ()=>{
    EmptyLocalStorage()
    navigate("/")
  }

  return (
    <div className="wrapper">
      <nav className="sidebar sticky-left bg-dark">
        {/* Sidebar content goes here */}
        <div className="bg-dark border-right">
          <div className="sidebar-heading text-center">
            <img className="sidebar-logo" src={FNLogo} alt="Logo" width="200px" />
          </div>
          <div className="list-group list-group-flush py-0">
            <a
              href="/analytics"
              className="list-group-item list-group-item-action bg-dark text-light border-0 "
            >
              {/* <AnalyticsIcon className="ms-5 me-4" fill="white" width="20px" /> */}
              <i class="bi bi-bar-chart-fill fs-5 ms-5 me-4"></i>
              Analytics
              <hr class="hr hr-blurry mb-0" />
            </a>

            <a
              href="/media"
              className="list-group-item list-group-item-action bg-dark text-light border-0"
            >
              {/* <MediaIcon className="ms-5 me-4" fill="white" width="20px" /> */}
              <i class="bi bi-card-image fs-5 ms-5 me-4"></i>
              Media
              <hr class="hr hr-blurry mb-0" />
            </a>
            <a
              href="/ambience"
              className="list-group-item list-group-item-action bg-dark text-light border-0"
            >
              {/* <CategoriesIcon className="ms-5 me-4" fill="white" width="20px" /> */}
              <i class="bi bi-tag-fill fs-5 ms-5 me-4"></i>
              Ambeince
              <hr class="hr hr-blurry mb-0" />
            </a>
            <a
              href="/cuisine"
              className="list-group-item list-group-item-action bg-dark text-light border-0 justify-content-center"
            >
              {/* <CuisineIcon className="ms-5 me-4" fill="white" width="20px" /> */}
              <i class="bi bi-c-circle-fill fs-5 ms-5 me-4"></i>
              Cuisine
              <hr class="hr hr-blurry mb-0" />
            </a>
            <a
              href="/users"
              className="list-group-item list-group-item-action bg-dark text-light border-0"
            >
              {/* <UsersIcon className="ms-5 me-4" fill="white" width="20px" /> */}
              <i class="bi bi-people-fill fs-5 ms-5 me-4"></i>
              Users
              <hr class="hr hr-blurry mb-0" />
            </a>
            <a
              href="/listings"
              className="list-group-item list-group-item-action bg-dark text-light border-0"
            >
              {/* <ListingsIcon className="ms-5 me-4" fill="white" width="20px" /> */}
              <i class="bi bi-badge-ad-fill fs-5 ms-5 me-4"></i>
              Restaurants
              <hr class="hr hr-blurry mb-0" />
            </a>
            {/* <a
              href="/pending-listing"
              className="list-group-item list-group-item-action bg-dark text-light border-0"
            >
          
              <i class="bi bi-hourglass-split fs-5 ms-5 me-4"></i>
              Pending Listings
              <hr class="hr hr-blurry mb-0" />
            </a> */}
            <a
              href="/verifications"
              className="list-group-item list-group-item-action bg-dark text-light border-0"
            >
              {/* <VerificationIcon className="ms-5 me-4 fs-4" fill="white" width="20px" /> */}
              <i class="bi bi-patch-check-fill fs-5 ms-5 me-4"></i>
              Verifications
              <hr class="hr hr-blurry mb-0" />
            </a>
            {/* <a
              href="/reviews"
              className="list-group-item list-group-item-action bg-dark text-light border-0"
            >
            
              <i class="bi bi-star-fill fs-5 ms-5 me-4"></i>
              Reviews
              <hr class="hr hr-blurry mb-0" />
            </a> */}
            <a
              href="/locations"
              className="list-group-item list-group-item-action bg-dark text-light border-0"
            >
              {/* <LocationIcon className="ms-5 me-4" fill="white" width="16px" /> */}
              <i class="bi bi-geo-alt-fill fs-5 ms-5 me-4"></i>
              Locations
              <hr class="hr hr-blurry mb-0" />
            </a>
            <a
              onClick={logout}
              href="/"
              className="list-group-item list-group-item-action bg-dark text-light border-0 mb-4"
            >
              {/* <LogoutIcon className="ms-5 me-4" fill="white" width="20px" /> */}
              <i class="bi bi-box-arrow-left fs-5 ms-5 me-4"></i>
              Log out
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;

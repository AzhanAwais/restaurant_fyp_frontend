import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

import Sidebar from './components/sidebar';
import Cat from "./pages/Categories/Categories";
import Users from "./pages/Users/UsersList";
import Locations from "./pages/Locations/Locations";
import Media from "./pages/Media/Media";
import Login from "./pages/Login/AdminLogin";
import Reviews from "./pages/Reviews/Reviews";
import ViewReview from "./pages/ViewReview/ViewReview";
import Listings from "./pages/Listings/Listings";
import ViewListing from "./pages/ViewListing/ViewListing";
import PendingListings from "./pages/PendingListings/PendingListings";
import ViewPendingListing from "./pages/ViewPendingListing/ViewPendingListing";
import ViewUser from "./pages/ViewUser/ViewUser";
import ViewUser02 from "./pages/ViewUser/ViewUser02";
import Analytics from "./pages/Analytics/Analytics";
import Cuisine from "./pages/Cuisine/Cuisine";
import Ambience from "./pages/Ambience/Ambience";
import Verifications from "./pages/Verifications/Verifications"


function App() {
  return (
    <div className='app d-flex'>
      
      <>
      <Routes>
          {/* Define a layout with the sidebar for non-login pages */}
          <Route path="/" element={<Login />} />
          <Route
            path="/"
            element={
              <>
                <Sidebar />
                <Outlet />
              </>
            }
          >
            <Route path="/cat" element={<Cat />} />
            <Route path="/users" element={<Users />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/view-listing/:id" element={<ViewListing />} />
            <Route path="/pending-listing" element={<PendingListings />} />
            <Route path="/view-pending-listing" element={<ViewPendingListing />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/media" element={<Media />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/view-review/:id" element={<ViewReview />} />
            <Route path="/view-user/:id" element={<ViewUser />} />
            <Route path="/view-user-2" element={<ViewUser02 />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/cuisine" element={<Cuisine />} />
            <Route path="/ambience" element={<Ambience />} />

            <Route path="/verifications" element={<Verifications />} />
            
          </Route>

          {/* Define a separate layout without the sidebar for the login page */}
          
        </Routes>

    </>
    </div>
  );
}

export default App;

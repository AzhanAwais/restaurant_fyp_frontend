import React from "react";
import "./PageNav.css";
const PageNav = () => {
  return (
    <div className="page-nav-container d-flex justify-content-center align-items-center">
        <nav aria-label="Page navigation" class="absolute-bottom mx-4">
          <ul class="pagination">
            <li class="page-item disabled">
              <a class="page-link prev-page-btn" href="#" tabindex="-1">
                Previous
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link next-page-btn" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
        <p>Page: 1/10</p>
        </div>
  );
};

export default PageNav;

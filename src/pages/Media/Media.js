import React from "react";
import "./Media.css";
import Banner01 from "../../images/ad-1.jpg";
import Banner02 from "../../images/ad2.jpg";
import Banner03 from "../../images/ad-1.jpg";
import UploadImg from "../../images/upload-icon-01.png";

const Media = () => {
  return (
    <div className="main-content m-5">
      <div className="row">
        <h1 className="fw-bold pb-2">MEDIA</h1>
        <hr />
        <div className="col-12">
          <div className="row my-3">
            <h2 className="fw-bold">BANNER AD</h2>
            <div className="col-3 my-2">
              <div class="card">
                <img src={Banner01} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">banner-01.jpg</h5>
                  <div className="btn-container">
                    <a href="#" class="btn btn-primary button me-2 mt-2">
                    <i class="bi bi-eye-fill"></i>
                    </a>
                    <a href="#" class="btn btn-primary button me-2 mt-2">
                    <i class="bi bi-trash3-fill"></i>
                    </a>
                    <a href="#" class="btn btn-primary button me-2 mt-2">
                    <i class="bi bi-arrow-repeat"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 my-2">
              <div class="card">
                <img src={Banner02} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">banner-02.jpg</h5>
                  <div className="btn-container">
                    <a href="#" class="btn btn-primary button me-2 mt-2">
                    <i class="bi bi-eye-fill"></i>
                    </a>
                    <a href="#" class="btn btn-primary button me-2 mt-2">
                    <i class="bi bi-trash3-fill"></i>
                    </a>
                    <a href="#" class="btn btn-primary button me-2 mt-2">
                    <i class="bi bi-arrow-repeat"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 my-2">
              <div class="card">
                <img src={Banner02} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">banner-03.jpg</h5>
                  <div className="btn-container">
                    <a href="#" class="btn btn-primary button me-2 mt-2">
                    <i class="bi bi-eye-fill"></i>
                    </a>
                    <a href="#" class="btn btn-primary button me-2 mt-2">
                    <i class="bi bi-trash3-fill"></i>
                    </a>
                    <a href="#" class="btn btn-primary button me-2 mt-2">
                    <i class="bi bi-arrow-repeat"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-3 my-2">
              <div class="card upload-card">
                <img src={UploadImg} class="card-img-top" alt="..." />
              </div>
            </div>
          </div>
          <hr />
          <div className="row mt-5 mb-3">
            <h2 className="fw-bold">OTHER PICTURES</h2>
            <div className="col-3 my-2">
              <div class="card">
                <img src={Banner01} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">banner-01.jpg</h5>
                  <div className="btn-container">
                    <a href="#" class="btn btn-primary button me-2 mt-2">
                    <i class="bi bi-eye-fill"></i>
                    </a>
                    <a href="#" class="btn btn-primary button me-2 mt-2">
                    <i class="bi bi-trash3-fill"></i>
                    </a>
                    <a href="#" class="btn btn-primary button me-2 mt-2">
                    <i class="bi bi-arrow-repeat"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 my-2">
              <div class="card">
                <img src={Banner03} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">banner-02.jpg</h5>
                  <div className="btn-container">
                    <a href="#" class="btn btn-primary button me-2 mt-2">
                    <i class="bi bi-eye-fill"></i>
                    </a>
                    <a href="#" class="btn btn-primary button me-2 mt-2">
                    <i class="bi bi-trash3-fill"></i>
                    </a>
                    <a href="#" class="btn btn-primary button me-2 mt-2">
                    <i class="bi bi-arrow-repeat"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 my-2">
              <div class="card">
                <img src={Banner02} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">banner-02.jpg</h5>
                  <div className="btn-container">
                    <a href="#" class="btn btn-primary button me-2 mt-2">
                    <i class="bi bi-eye-fill"></i>
                    </a>
                    <a href="#" class="btn btn-primary button me-2 mt-2">
                    <i class="bi bi-trash3-fill"></i>
                    </a>
                    <a href="#" class="btn btn-primary button me-2 mt-2">
                    <i class="bi bi-arrow-repeat"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 my-2">
              <div class="card">
                <img src={Banner02} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">banner-02.jpg</h5>
                  <div className="btn-container">
                    <a href="#" class="btn btn-primary button me-2 mt-2">
                    <i class="bi bi-eye-fill"></i>
                    </a>
                    <a href="#" class="btn btn-primary button me-2 mt-2">
                    <i class="bi bi-trash3-fill"></i>
                    </a>
                    <a href="#" class="btn btn-primary button me-2 mt-2">
                    <i class="bi bi-arrow-repeat"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 my-2">
              <div class="card">
                <img src={Banner02} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">banner-02.jpg</h5>
                  <div className="btn-container">
                    <a href="#" class="btn btn-primary button me-2 mt-2">
                    <i class="bi bi-eye-fill"></i>
                    </a>
                    <a href="#" class="btn btn-primary button me-2 mt-2">
                    <i class="bi bi-trash3-fill"></i>
                    </a>
                    <a href="#" class="btn btn-primary button me-2 mt-2">
                    <i class="bi bi-arrow-repeat"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 my-2">
              <div class="card">
                <img src={Banner02} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">banner-02.jpg</h5>
                  <div className="btn-container">
                    <a href="#" class="btn btn-primary button me-2 mt-2">
                    <i class="bi bi-eye-fill"></i>
                    </a>
                    <a href="#" class="btn btn-primary button me-2 mt-2">
                    <i class="bi bi-trash3-fill"></i>
                    </a>
                    <a href="#" class="btn btn-primary button me-2 mt-2">
                    <i class="bi bi-arrow-repeat"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 my-2">
              <div class="card">
                <img src={Banner02} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">banner-03.jpg</h5>
                  <div className="btn-container">
                    <a href="#" class="btn btn-primary button me-2 mt-2">
                    <i class="bi bi-eye-fill"></i>
                    </a>
                    <a href="#" class="btn btn-primary button me-2 mt-2">
                    <i class="bi bi-trash3-fill"></i>
                    </a>
                    <a href="#" class="btn btn-primary button me-2 mt-2">
                    <i class="bi bi-arrow-repeat"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-3 my-2">
              <div class="card upload-card">
                <img src={UploadImg} class="card-img-top" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;

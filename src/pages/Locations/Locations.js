import React from "react";
import "./Locations.css";

const Locations = () => {
  return (
    <div className="main-content m-5">
      <div className="row">
        {/*Page Title */}
        <h1 className="fw-bold pb-2">LOCATIONS</h1>
        <hr/>

        {/*Analytics Section*/}
        <h3 className="fw-bold pt-3">PROVINCES</h3>
        <div className="col-6 pb-4">
          <table className="table table-hover mt-2 mb-4">
            <thead className="table-dark">
              <tr>
                <th className="col-1" scope="col">
                  #
                </th>
                <th className="col-6" scope="col">
                  Province Name
                </th>
                <th className="col-1" scope="col">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Sindh</td>
                <td>
                  <button className="btn button btn-sm text-light">Edit</button>
                  <button className="btn button btn-sm text-light ms-2"><i class="bi bi-trash3-fill"></i></button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Punjab</td>
                <td>
                  <button className="btn button btn-sm text-light">Edit</button>
                  <button className="btn button btn-sm text-light ms-2"><i class="bi bi-trash3-fill"></i></button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Balochistan</td>
                <td>
                  <button className="btn button btn-sm text-light">Edit</button>
                  <button className="btn button btn-sm text-light ms-2"><i class="bi bi-trash3-fill"></i></button>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Khyber Pakhtunkhwa</td>
                <td>
                  <button className="btn button btn-sm text-light">Edit</button>
                  <button className="btn button btn-sm text-light ms-2"><i class="bi bi-trash3-fill"></i></button>
                </td>
              </tr>
            </tbody>
          </table>
        <button className="btn button px-4">Add</button>
        </div>

<hr/>

        <h3 className="fw-bold pt-3">CITIES</h3>
        {/*Search Section*/}

        <div className="row align-items-center mb-3">
          <div className="col-2 col-xxl-1 me-xxl-4">
            <h6 className="mb-0 text-nowrap">Filter By Province: </h6>
          </div>
          <div className="col-4 col-xxl-3 d-flex align-items-center">
            <select class="form-select search-select">
              <option selected>--Select Province--</option>
              <option value="1">Sindh</option>
              <option value="2">Punjab</option>
              <option value="3">Balochistan</option>
              <option value="4">Khyber Pakhtunkhwa</option>
            </select>
          </div>
        </div>

        {/*Table Section*/}
  
        <div className="col-10 text-nowrap">
          <table className="table table-hover mt-2 mb-4">
            <thead className="table-dark">
              <tr>
                <th className="col-1" scope="col">
                  #
                </th>
                <th className="col-5" scope="col">
                  City Name
                </th>
                <th className="col-3" scope="col">
                  Province
                </th>
                <th className="col-1" scope="col">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Karachi</td>
                <td>Sindh</td>
                <td>
                  <button className="btn button btn-sm text-light">Edit</button>
                  <button className="btn button btn-sm text-light ms-2"><i class="bi bi-trash3-fill"></i></button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Hyderabad</td>
                <td>Sindh</td>
                <td className="d-flex"> 
                  <button className="btn button btn-sm text-light">Edit</button>
                  <button className="btn button btn-sm text-light ms-2"><i class="bi bi-trash3-fill"></i></button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Khairpur</td>
                <td>Sindh</td>
                <td>
                  <button className="btn button btn-sm text-light">Edit</button>
                  <button className="btn button btn-sm text-light ms-2"><i class="bi bi-trash3-fill"></i></button>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Lahore</td>
                <td>Punjab</td>
                <td>
                  <button className="btn button btn-sm text-light">Edit</button>
                  <button className="btn button btn-sm text-light ms-2"><i class="bi bi-trash3-fill"></i></button>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Rawalpindi</td>
                <td>Punjab</td>
                <td>
                  <button className="btn button btn-sm text-light">Edit</button>
                  <button className="btn button btn-sm text-light ms-2"><i class="bi bi-trash3-fill"></i></button>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>Islamabad</td>
                <td>Punjab</td>
                <td>
                  <button className="btn button btn-sm text-light">Edit</button>
                  <button className="btn button btn-sm text-light ms-2"><i class="bi bi-trash3-fill"></i></button>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>Quetta</td>
                <td>Balochistan</td>
                <td>
                  <button className="btn button btn-sm text-light">Edit</button>
                  <button className="btn button btn-sm text-light ms-2"><i class="bi bi-trash3-fill"></i></button>
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>Chaman</td>
                <td>Balochistan</td>
                <td>
                  <button className="btn button btn-sm text-light">Edit</button>
                  <button className="btn button btn-sm text-light ms-2"><i class="bi bi-trash3-fill"></i></button>
                </td>
              </tr>
              <tr>
                <td>9</td>
                <td>Khuzdar</td>
                <td>Balochistan</td>
                <td>
                  <button className="btn button btn-sm text-light">Edit</button>
                  <button className="btn button btn-sm text-light ms-2"><i class="bi bi-trash3-fill"></i></button>
                </td>
              </tr>
              <tr>
                <td>10</td>
                <td>Peshawar</td>
                <td>Khyber Pakhtunkhwa</td>
                <td>
                  <button className="btn button btn-sm text-light">Edit</button>
                  <button className="btn button btn-sm text-light ms-2"><i class="bi bi-trash3-fill"></i></button>
                </td>
              </tr>
              <tr>
                <td>11</td>
                <td>Chitral</td>
                <td>Khyber Pakhtunkhwa</td>
                <td>
                  <button className="btn button btn-sm text-light">Edit</button>
                  <button className="btn button btn-sm text-light ms-2"><i class="bi bi-trash3-fill"></i></button>
                </td>
              </tr>
              <tr>
                <td>12</td>
                <td>Abbottabad</td>
                <td>Khyber Pakhtunkhwa</td>
                <td>
                  <button className="btn button btn-sm text-light">Edit</button>
                  <button className="btn button btn-sm text-light ms-2"><i class="bi bi-trash3-fill"></i></button>
                </td>
              </tr>
            </tbody>
          </table>
          <button className="btn button px-4">Add</button>
        </div>
      </div>
    </div>
  );
};

export default Locations;

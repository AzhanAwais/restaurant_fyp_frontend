import React, { useState, useEffect } from "react";
import "./ambience.css";
import { CreateAmbience, DeleteAmbience, GetAllAmbience, UpdateAmbience } from "../../services/ambience";
import AddEditAmbienceModal from "../../modals/AddEditAmbienceModal";

const Ambience = () => {
  const [ambience, setAmbience] = useState([])
  const [addEditAmbienceModal, setAddEditAmbienceModal] = useState(false)
  const [onAddEdit, setOnAddEdit] = useState(1)
  const [onDelete, setOnDelete] = useState(1)
  const [modalType, setModalType] = useState("add")
  const [id, setId] = useState(null)

  const handleOnAddEdit = () => {
    setOnAddEdit(onAddEdit + 1)
  }

  const addAmbience = async (name) => {
    try {
      const data = await CreateAmbience({ name })
      setAddEditAmbienceModal(false)
      handleOnAddEdit()
    }
    catch (e) {
      console.log(e)
    }
  }

  const editAmbience = async (name) => {
    try {
      const data = await UpdateAmbience(id, { name })
      setAddEditAmbienceModal(false)
      handleOnAddEdit()
    }
    catch (e) {
      console.log(e)
    }
  }

  const onClick = async (name) => {
    if (modalType == "add") {
      await addAmbience(name)
    }
    else {
      await editAmbience(name)
    }
  }

  const handleDelete = async (id) => {
    try {
      await DeleteAmbience(id)
      setOnDelete(onDelete + 1)
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    const getAllAmbience = async () => {
      const params = {
        paginate: false
      }
      const data = await GetAllAmbience(params)
      setAmbience(data.data.data)
    }

    getAllAmbience()
  }, [onAddEdit, onDelete])


  return (
    <>
      <div className="main-content m-5">
        <div className="row">
          {/*Page Title */}
          <h1 className="fw-bold pb-2">Ambience</h1>
          <hr />
          <div className="d-flex mb-3">
            <h6 className="me-5">Total Ambience: {ambience.length}</h6>
          </div>

          {/*Search Section*/}

          <div className="row align-items-center mb-3">
            <div className="col-8 col-xxl-8 d-flex pe-0">
              <input
                type="keyword"
                class="form-control text-dark user-search-box"
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


          {/*Ambience Table Section*/}
          <div className="col-8 pb-4">
            <table className="table table-hover mt-2 mb-4">
              <thead className="table-dark">
                <tr>
                  <th className="col-1" scope="col">
                    #
                  </th>
                  <th className="col-4" scope="col">
                    Ambience Name
                  </th>
                  <th className="col-1" scope="col">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  ambience?.map((item, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item?.name}</td>
                      <td>
                        <button className="btn button btn-sm text-light" onClick={() => {
                          setId(item?._id)
                          setAddEditAmbienceModal(true)
                          setModalType("edit")
                        }}>Edit</button>

                        <button onClick={() => handleDelete(item?._id)} className="btn button btn-sm text-light ms-2"><i class="bi bi-trash3-fill"></i></button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
            <button className="btn button px-4" onClick={() => {
              setAddEditAmbienceModal(true)
              setModalType("add")
            }}>Add</button>
          </div>
          <hr />
        </div>
      </div>

      {
        addEditAmbienceModal &&
        <AddEditAmbienceModal
          addEditAmbienceModal={addEditAmbienceModal}
          setAddEditAmbienceModal={setAddEditAmbienceModal}
          handleOnAddEdit={handleOnAddEdit}
          onClick={onClick}
          modalType={modalType}
          id={id}
        />
      }
    </>
  );
};

export default Ambience;

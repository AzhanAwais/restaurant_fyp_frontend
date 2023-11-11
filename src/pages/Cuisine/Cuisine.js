import React, { useEffect, useState } from "react";
import "./cuisine.css";
import { CreateCuisine, DeleteCuisine, GetAllCuisine, UpdateCuisine } from "../../services/cuisine";
import AddEditCuisineModal from "../../modals/AddEditCuisineModal";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([])
  const [addEditCuisineModal, setAddEditCuisineModal] = useState(false)
  const [onAddEdit, setOnAddEdit] = useState(1)
  const [onDelete, setOnDelete] = useState(1)
  const [modalType, setModalType] = useState("add")
  const [id, setId] = useState(null)

  const handleOnAddEdit = () => {
    setOnAddEdit(onAddEdit + 1)
  }

  const addCuisine = async (name) => {
    try {
      const data = await CreateCuisine({ name })
      setAddEditCuisineModal(false)
      handleOnAddEdit()
    }
    catch (e) {
      console.log(e)
    }
  }

  const editCuisine = async (name) => {
    try {
      const data = await UpdateCuisine(id, { name })
      setAddEditCuisineModal(false)
      handleOnAddEdit()
    }
    catch (e) {
      console.log(e)
    }
  }

  const onClick = async (name) => {
    if (modalType == "add") {
      await addCuisine(name)
    }
    else {
      await editCuisine(name)
    }
  }

  const handleDelete = async (id) => {
    try {
      await DeleteCuisine(id)
      setOnDelete(onDelete + 1)
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    const getAllCuisine = async () => {
      const params = {
        paginate: false
      }
      const data = await GetAllCuisine(params)
      setCuisine(data.data.data)
    }

    getAllCuisine()
  }, [onAddEdit, onDelete])

  return (
    <>
      <div className="main-content m-5">
        <div className="row">
          {/*Page Title */}
          <h1 className="fw-bold pb-2">Cuisine</h1>
          <hr />
          <div className="d-flex mb-3">
            <h6 className="me-5">Total Cuisine: {cuisine?.length}</h6>
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


          {/*Cuisine Table Section*/}
          <div className="col-8 pb-4">
            <table className="table table-hover mt-2 mb-4">
              <thead className="table-dark">
                <tr>
                  <th className="col-1" scope="col">
                    #
                  </th>
                  <th className="col-4" scope="col">
                    Cuisine Name
                  </th>
                  <th className="col-1" scope="col">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  cuisine?.map((item, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item?.name}</td>
                      <td>
                        <button className="btn button btn-sm text-light" onClick={() => {
                          setId(item?._id)
                          setAddEditCuisineModal(true)
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
              setAddEditCuisineModal(true)
              setModalType("add")
            }}>Add</button>
          </div>
          <hr />
        </div>
      </div>

      {
        addEditCuisineModal &&
        <AddEditCuisineModal
          addEditCuisineModal={addEditCuisineModal}
          setAddEditCuisineModal={setAddEditCuisineModal}
          handleOnAddEdit={handleOnAddEdit}
          onClick={onClick}
          modalType={modalType}
          id={id}
        />
      }
    </>

  );
};

export default Cuisine;

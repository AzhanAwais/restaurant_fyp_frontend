import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { GetSingleCuisine } from '../services/cuisine'

const AddEditCuisineModal = ({ addEditCuisineModal, setAddEditCuisineModal, onClick, modalType, id }) => {
    const [name, setName] = useState("")

    useEffect(() => {
        const getSingleCuisine = async () => {
            try {
                const data = await GetSingleCuisine(id)
                setName(data.data.data.name)
            }
            catch (e) {
                console.log(e)
            }
        }

        if (id && modalType == "edit") {
            getSingleCuisine()
        }
    }, [id])

    return (
        <Modal
            show={addEditCuisineModal}
            onHide={() => setAddEditCuisineModal(false)}
        >
            <Modal.Header closeButton>
                <Modal.Title>{modalType == "add" ? "Add Cuisine" : "Edit Cuisine"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <input
                        value={name}
                        type="text"
                        class="form-control login-input bg-dark text-light rounded-0 border-0 border-bottom "
                        id="text"
                        placeholder="Cuisine Name"
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div>
                    <Button variant="primary" onClick={() => onClick(name)}>{modalType == "add" ? "Add" : "Update"}</Button>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default AddEditCuisineModal
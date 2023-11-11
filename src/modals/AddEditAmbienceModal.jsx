
import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { GetSingleAmbience } from '../services/ambience'

const AddEditAmbienceModal = ({ addEditAmbienceModal, setAddEditAmbienceModal, onClick, modalType, id }) => {
    const [name, setName] = useState("")

    useEffect(() => {
        const getSingleAmbience = async () => {
            try {
                const data = await GetSingleAmbience(id)
                setName(data.data.data.name)
            }
            catch (e) {
                console.log(e)
            }
        }

        if (id && modalType == "edit") {
            getSingleAmbience()
        }
    }, [id])

    return (
        <Modal
            show={addEditAmbienceModal}
            onHide={() => setAddEditAmbienceModal(false)}
        >
            <Modal.Header closeButton>
                <Modal.Title>{modalType == "add" ? "Add Ambience" : "Edit Ambience"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <input
                        value={name}
                        type="text"
                        class="form-control login-input bg-dark text-light rounded-0 border-0 border-bottom "
                        id="text"
                        placeholder="Ambience Name"
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

export default AddEditAmbienceModal
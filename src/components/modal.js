import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Modal, ModalBody } from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/esm/ModalHeader';


export default function CustomModal(props) {

    const handleNewMovie = () => {
        const movie = { img: newPoster, name: newName, duration: newDuration, rating: newRating }

        props.addNewMovie(movie)
    }
    const [newPoster, setNewPoster] = useState('')
    const [newName, setNewName] = useState('')
    const [newDuration, setNewDuration] = useState('')
    const [newRating, setNewRating] = useState('')


    return (
        <div >
            <Modal show={props.modalIsopen}>
                <ModalHeader>ADD movie informations</ModalHeader>
                <ModalBody>
                    <form className="modal-body">
                        <div>
                            <label> poster </label>  <input onChange={(e) => setNewPoster(e.target.value)} type="text" placeholder='add url....' />
                        </div>
                        <div>
                            <label> name </label>  <input onChange={(e) => setNewName(e.target.value)} type="text" placeholder=' name ...' />
                        </div>
                        <div>
                            <label> duration </label>  <input onChange={(e) => setNewDuration(e.target.value)} type="text" placeholder='duration ...' />
                        </div>
                        <div>
                            <label> rating </label>  <input onChange={(e) => setNewRating(e.target.value)} type="number" placeholder='rating' />
                        </div>
                    </form>
                </ModalBody>
                <Modal.Footer>
                    <Button onClick={handleNewMovie}> save </Button> <Button onClick={props.modalIsClose} > close </Button>
                </Modal.Footer>

            </Modal>
        </div>
    );
}


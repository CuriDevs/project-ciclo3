import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { api } from '../../utils/api';
import styles from '../styles/Table.css';

function Remove({ user, setConsulta}) {

    const [ show, setShow ] = useState(false);
    const id = [];

    const userDelete = () => {
        id.push(user);
        deleteUsers(id);
        setShow(false);
    };

    const deleteUsers = async (userDelete) => {
        await api.Users.delete(userDelete[ 0 ]._id);
        alert("Se elimino el Usuario: " + userDelete[ 0 ]._id);
        setConsulta(true);
    };

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <Button variant="danger" onClick={ handleShow } className="BotonTable">
            <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/ffffff/external-delete-miscellaneous-kiranshastry-solid-kiranshastry.png"/>
            </Button>{ ' ' }
            <Modal show={ show } onHide={ handleClose }>
                <Modal.Header closeButton>
                    <Modal.Title>Eliminar usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>¿Estas seguro de querer eliminar el usuario?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={ handleClose }>
                        Close
                    </Button>
                    <Button variant="danger" onClick={ userDelete } >
                        Eliminar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Remove;
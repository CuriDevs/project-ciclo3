import Toast from 'react-bootstrap/Toast';

function Alert( show2, setToast) {
    return (
        <>
            <Toast onClose={ () => setToast(false) } show={ show2 } delay={ 3000 } autohide>
                <Toast.Header>
                    <strong className="me-auto">Eliminacion exitosa</strong>
                    <small>1 second ago</small>
                </Toast.Header>
                <Toast.Body>Venta eliminada con exito</Toast.Body>
            </Toast>
        </>
    );
}

export default Alert;
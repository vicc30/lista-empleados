import { Modal, Button, Form } from 'react-bootstrap';
import React from 'react';
import uniqid from 'uniqid';

const ModalComponent = (props) => {

    const { handleClose, show, setEmpleados } = props;

    const handleNew = () => {
        const nombre = document.getElementById("formName");
        const empresa = document.getElementById("formCompany");
        const salario = document.getElementById("formSalary");
        setEmpleados((prev) => [...prev, {
            id:uniqid(), 
            nombre: nombre.value,
            empresa: empresa.value,
            salario: salario.value,
            imagen: ""
        }]);
        //Reset form
        nombre.value = "";
        empresa.value = "";
        salario.value = "";
    }

    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Agregar Empleado</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form id="modalEmpleado">
                    <Form.Group controlId="formName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Ingresa el nombre completo" />
                    </Form.Group>
                    <Form.Group controlId="formCompany">
                        <Form.Label>Empresa</Form.Label>
                        <Form.Control type="text" placeholder="Ingresa el nombre de la empresa" />
                    </Form.Group>
                    <Form.Group controlId="formSalary">
                        <Form.Label>Salario</Form.Label>
                        <Form.Control type="number" placeholder="Ingresa el salario" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={handleNew}>Agregar</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalComponent;
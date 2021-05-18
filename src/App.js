import { Table, InputGroup, FormControl, Button, ButtonGroup } from 'react-bootstrap';
import Tabla from './components/tableComponent';
import ModalComponent from './components/modalComponent';
import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { EMPLEADOS } from './data/data';

const App = () => {

  //Estados
  const [empleados, setEmpleados] = useState(EMPLEADOS);
  const [currency, setCurrency] = useState("MXN");
  const [numeroEmpleados, setNumeroEmpleados] = useState("");
  const [editable, setEditable] = useState(false);

  //Funcion de cambio de moneda en estado
  const changeCurrency = (currency) => {
    currency === "MXN" ? setCurrency(() => "USD") : setCurrency(() => "MXN");
  }

  //Modal Nuevo Empleado
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    counter();
  });

  // Funcion contadora de empleados.
  const counter = () => {
    const number = document.getElementById("myTable").rows.length - 1;
    setNumeroEmpleados(() => number);
  }

  return (
    <>
      <section className="container-fluid">
        <h1 className="text-center">Lista de Empleados</h1>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Buscar Empleado o Empresa"
            aria-label="Buscar"
            aria-describedby="buscar"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary">Buscar</Button>
          </InputGroup.Append>
        </InputGroup>
        <ButtonGroup>
          <Button onClick={() => changeCurrency(currency)}>Moneda: {currency}</Button>
          <Button disabled>Total empleados: {numeroEmpleados}</Button>
        </ButtonGroup>
        <ButtonGroup className="editar">
          <Button onClick={handleShow} >Nuevo Empleado</Button>
          { editable === false ? 
            <Button onClick={handleShow} variant="secondary">Editar Empleados</Button> :
            <Button variant="primary">Guardar</Button> }
        </ButtonGroup>
        <Table striped bordered hover id="myTable">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Empresa</th>
              <th>Salario</th>
              <th>Imagen</th>
            </tr>
          </thead>
          <tbody>
            <Tabla
              empleados={empleados}
              currency={currency}
            />
          </tbody>
        </Table>
        <ModalComponent show={show}
          handleClose={handleClose}
          setEmpleados={setEmpleados} />
      </section>
    </>
  );
}

export default App;

import { Table, InputGroup, FormControl, Button, ButtonGroup } from 'react-bootstrap';
import Tabla from './components/tableComponent';
import ModalComponent from './components/modalComponent';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { EMPLEADOS } from './data/data';

const App = () => {

  //Estados
  const [empleados, setEmpleados] = useState(EMPLEADOS);
  const [currency, setCurrency] = useState("MXN");
  const changeCurrency = (currency) => {
    currency === "MXN" ? setCurrency(() => "USD") : setCurrency(() => "MXN");
  }

  //Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <Button disabled>Total empleados: 2</Button>
        </ButtonGroup>
        <Table striped bordered hover>
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
            <Tabla empleados={empleados} currency={currency} />
          </tbody>
        </Table>
        <Button onClick={handleShow} >Nuevo Empleado</Button>
        <Button variant="secondary" className="ml-md-2">Editar Empleado</Button>
        <ModalComponent show={show} handleClose={handleClose} setEmpleados={setEmpleados}/>
      </section>
    </>
  );
}

export default App;

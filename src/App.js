import { Table, InputGroup, FormControl, Button, ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Tabla from './components/tableComponent';

import { EMPLEADOS } from './data/data';
import { useState } from 'react';

const App = () => {

  //Estados
  const empleados = useState(EMPLEADOS);
  const [currency, setCurrency] = useState("MXN");

  const changeCurrency = (currency) => {
    currency === "MXN" ? setCurrency(() => "USD") : setCurrency(() => "MXN");
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
          <Button onClick={() => changeCurrency(currency)}>Currency: {currency}</Button>
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
        <button className="btn btn-primary">Nuevo Empleado</button>
        <button className="btn btn-secondary ml-md-2">Editar Empleado</button>
      </section>
    </>
  );
}

export default App;

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

  // Funcion que cambia de estado a editable
  const toggleEditable = () => {
    setEditable((prev) => !prev);
    const empleados = document.getElementsByClassName('nombre-empleado');
    const salarios = document.getElementsByClassName('salario-empleado');

    for (var i = 0; i < empleados.length; i++) {
      empleados[i].contentEditable = !editable;
      salarios[i].contentEditable = !editable;
    }
  }

  // Funcion que hace editables a los elementos de la lista
  const makeEditable = () => {
    setCurrency("MXN");
    toggleEditable();
  }

  const updateData = (idx, id, name, salary) => {
    const match = empleados[idx].id === id.toString();
    setEmpleados((prev) => {
      if (match) {
        let newArr = [...prev];
        newArr[idx] = { ...newArr[idx], nombre: name, salario: salary }
        return newArr;
      } else return [...prev]
    })
  }

  // Funcion que guarda en estado valores en pantalla.
  const saveData = () => {
    const table = document.getElementById("myTable");
    for (var i = 0; i < empleados.length; i++) {
      const id = table.rows[i + 1].childNodes[0].innerText;
      const name = table.rows[i + 1].childNodes[1].innerText;
      const salary = parseFloat(table.rows[i + 1].childNodes[3].innerText.toString().replace(/[^0-9.]/g, ""));
      updateData(i, id, name, salary);
    }
    console.log(empleados);
  }

  const saveItems = () => {
    toggleEditable();
    saveData();
  }

  //Modal Nuevo Empleado
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    counter();
  }, []);

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
          {editable === false ?
            <Button onClick={makeEditable} variant="secondary">Editar Empleados</Button> :
            <Button onClick={saveItems} variant="primary">Guardar</Button>}
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
              editable={editable}
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

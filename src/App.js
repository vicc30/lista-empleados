import { Table, InputGroup, FormControl, Button, ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
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
          <Button primary>Currency: MXN</Button>
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
            <tr>
              <td>1</td>
              <td>Victor</td>
              <td>empresa 1</td>
              <td>$18,000</td>
              <td>Img</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Victor</td>
              <td>empresa 1</td>
              <td>$18,000</td>
              <td>Img</td>
            </tr>
          </tbody>
        </Table>
        <button className="btn btn-primary">Nuevo Empleado</button>
        <button className="btn btn-secondary ml-md-2">Editar Empleado</button>
      </section>
    </>
  );
}

export default App;

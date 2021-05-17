import React from 'react';

const Tabla = (props) => {

    const { empleados } = props;

    return empleados[0].map((empleado) => {
        return (
            <>
                <tr key={empleado.id}>
                    <td>{empleado.id}</td>
                    <td>{empleado.nombre}</td>
                    <td>{empleado.empresa}</td>
                    <td>{empleado.salario}</td>
                    <td>{empleado.imagen===""?"Sin imagen":empleado.imagen}</td>
                </tr>
            </>
        );
    });
}

export default Tabla;
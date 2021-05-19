import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const Tabla = (props) => {

    const { empleados, currency } = props;
    const dolar = 21.50 / 100;

    const currencyFormat = (qty) => {
        if (currency === "MXN") {
            return new Intl.NumberFormat('es-MX', { minimumFractionDigits: 2 }).format(qty);
        } else {
            const dolarQty = Math.round(qty / dolar) / 100;
            return new Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(dolarQty);
        }
    }

    return empleados.map((empleado) => {
        return (
            <>
                <tr key={empleado.id} id={empleado.id}>
                    <td>{empleado.id}</td>
                    <td className="nombre-empleado">{empleado.nombre}</td>
                    <td>{empleado.empresa}</td>
                    <td className="salario-empleado">$ {currencyFormat(empleado.salario)}</td>
                    <td>{empleado.imagen === "" ? <FontAwesomeIcon icon={faUserCircle} />  : empleado.imagen}</td>
                </tr>
            </>
        );
    });
}

export default Tabla;
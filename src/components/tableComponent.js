import React from 'react';
import CameraComponent from './camaraComponent';

const Tabla = (props) => {

    const { empleados, currency, editable } = props;
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
                    <td className="id">{empleado.id}</td>
                    <td className="nombre-empleado">{empleado.nombre}</td>
                    <td>{empleado.empresa}</td>
                    {!editable ?
                        <td style={empleado.salario >= 10000 ? {color:"green"} : {color:"red"}} className="salario-empleado">$ {currencyFormat(empleado.salario)}</td>
                        : <td className="salario-empleado">{empleado.salario}</td>}
                    <td><CameraComponent imagen={empleado.imagen}/></td>
                </tr>
            </>
        );
    });
}

export default Tabla;
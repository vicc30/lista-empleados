import React from 'react';

const Tabla = (props) => {

    const { empleados, currency } = props;
    const dolar = 21.50 / 100

    const currencyFormat = (qty) => {
        if (currency === "MXN") {
            return new Intl.NumberFormat('es-MX').format(qty)
        } else {
            const dolarQty = Math.round(qty / dolar) / 100;
            return new Intl.NumberFormat('en-US').format(dolarQty);
        }
    }

    return empleados[0].map((empleado) => {
        return (
            <>
                <tr key={empleado.id}>
                    <td>{empleado.id}</td>
                    <td>{empleado.nombre}</td>
                    <td>{empleado.empresa}</td>
                    <td>$ {currencyFormat(empleado.salario)}</td>
                    <td>{empleado.imagen === "" ? "Sin imagen" : empleado.imagen}</td>
                </tr>
            </>
        );
    });
}

export default Tabla;
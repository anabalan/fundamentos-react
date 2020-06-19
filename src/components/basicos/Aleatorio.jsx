import React from 'react';

export default props => {

    // const min = props.min
    // const max = props.max

    const { min, max } = props;

    const aleatorio = parseInt(Math.random() * (max - min)) + min

    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p><b>Valor Mínimo: </b> {min}</p>
            <p><b>Valor Máximo: </b> {max}</p>
            <p><b>Valor Escolhido: </b> {aleatorio}</p>
        </div>
    )
}

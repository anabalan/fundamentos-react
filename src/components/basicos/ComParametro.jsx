import React from 'react'

export default function ComParametro(props) {
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>
                <b>{props.aluno} </b>
                tem nota
                <b> {props.nota} </b>
                e foi
                <b> {status}</b>!
            </p>
        </div>
    )
}
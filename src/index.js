// ReactDOM pode ser qualquer nome
import ReactDOM from 'react-dom'
import React from 'react'
// Importando arquivo de dentro da aplicação
import './index.css'


// Pegando a div do index.html (elemento) para inserir como segundo parametro
// const el = document.getElementById('root')

const tag = <strong>Eai</strong>

ReactDOM.render(
    <div>
        <b>Olá React! </b>
        { tag }
    </div>, 
    document.getElementById('root')
)
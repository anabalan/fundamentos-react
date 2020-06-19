// ReactDOM pode ser qualquer nome
import ReactDOM from 'react-dom'
import React from 'react'
// Importando arquivo de dentro da aplicação
import './index.css'

import App from './App'

// Pegando a div do index.html (elemento) para inserir como segundo parametro
// const el = document.getElementById('root')

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
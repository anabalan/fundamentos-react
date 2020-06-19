import React from 'react'
import './App.css'

import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'

export default function (props) {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">

                <Card titulo="#09 - Comunicação Direta" color="#bcaaa4">
                    <DiretaPai></DiretaPai>
                </Card>

                <Card titulo="#08 - Renderização Condicional" color="#aed581">
                    <ParOuImpar numero={20}></ParOuImpar>
                    <UsuarioInfo usuario={{ nome: 'Fernando' }}></UsuarioInfo>
                    <UsuarioInfo usuario={{ email: 'fer@nando.com' }}></UsuarioInfo>
                    <UsuarioInfo usuario/>
                </Card>

                <Card titulo="#07 - Desafio Repetição" color="#4dd0e1">
                    <TabelaProdutos></TabelaProdutos>
                </Card>

                <Card titulo="#06 - Repetição" color="#ba68c8">
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo="#05 - Componente com Membros" color="#ffb74d">
                    <Familia sobrenome="Ferreira">
                        <FamiliaMembro nome="Pedro"></FamiliaMembro>
                        <FamiliaMembro nome="Julia"></FamiliaMembro>
                        <FamiliaMembro nome="Gustavo"></FamiliaMembro>
                    </Familia>
                </Card>

                <Card titulo="#04 - Desafio Aleatório" color="#f06292">
                    <Aleatorio min={10} max={50} />
                </Card>

                <Card titulo="#03 - Fragmento" color="#4db6ac" >
                    <Fragmento></Fragmento>
                </Card>

                <Card titulo="#02 - Com Parâmetro" color="#ff8a65">
                    <ComParametro
                        titulo="Situação do Aluno"
                        aluno="Ana"
                        nota={8} />
                </Card>

                <Card titulo="#01 - Primeiro Componente" color="#64b5f6">
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    );
}
import React from 'react'
import If, { Else } from './if'

export default props => {
    const usuario = props.usuario || {

    }
    return (
        <div>
            {/* <If test={usuario && usuario.nome}>
              Seja bem vindo(a) <b>{props.usuario.nome}</b>!  
            </If>
            <If test={!usuario || !usuario.nome}>
              Seja bem vindo(a) <b>Amigão</b>!  
            </If> */}

            <If test={usuario && usuario.nome}>
                Seja bem vindo(a) <b>{usuario.nome}</b>! 
              <Else>
                 Seja bem vindo(a) <b>Amigão</b>! 
              </Else>
            </If>
        </div>
    )
}
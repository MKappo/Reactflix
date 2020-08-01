import React from 'react'

function ButtonLink(props) {

    //Props é um objeto que herda as propriedades no react. Com este componete generico podemos utiliza-lo em 
    //diversos lugares, e como o href e o className pode variar, então vamos receber atravós do props o que vier
    //de quem está usando o componente.

    return (

        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    )
}

export default ButtonLink

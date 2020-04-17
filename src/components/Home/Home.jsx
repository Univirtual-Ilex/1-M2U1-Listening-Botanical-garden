import React from 'react'
import styled from 'styled-components'
import Container from '../Container'
import {ButtonLink} from '../ButtonX'
import estilos_home from './Home_styles'



const Home_base = function ({ staticContext, ...props}) { // se le pasan las props para recibir los styled components

    return (
        <Container {...props}  row bgImage="src/bg.png">

                    <div className='bloque-izquierdo entrada-top-Y-2'>
                        <div className='bloque-izquierdo-container'>
                            <h1> The Botanical Garden </h1>
                            <p>
                            Listen to the following radio interview with a botanical garden monitor. Then, answer the questions on part 1; on part 2 arrange the sentence on the right order they were say.
                            </p>
                            <ButtonLink to='/actividad1'>Start</ButtonLink>
                        </div>
                    </div>
                    <div className='bloque-derecho entrada-top-Y-3'>
                        <figure>
                            <img src='./src/cover.png' alt='Logo' />    
                        </figure>

                    </div>

        </Container>
    )
}

const Home = styled(Home_base)`
    ${ estilos_home }
`

export default Home
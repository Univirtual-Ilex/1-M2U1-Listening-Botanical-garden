
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './ButtonCheck_styles'
import {Link} from 'react-router-dom'

// Componente base
const ButtonCheck_base = ({link, text, ...props}) => {
    return (
        <div {...props}>
            <button className='btn-clean'>
            	{link ? <Link to={link}> {text ? text : 'Check'} </Link> : text ? text : 'Check'}
            </button>
        </div>
    )
}
const ButtonCheck = styled(ButtonCheck_base)`${ styles }`
export default ButtonCheck

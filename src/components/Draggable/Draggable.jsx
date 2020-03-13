
//Import
import React from 'react'
import styled from 'styled-components'
import styles, {draggableBlock} from './Draggable_styles'
// import BocinaButton from '../BocinaButton'

export const DraggableBlock = styled.div`
    ${draggableBlock}
`

// Componente base
const Draggable_base = ({ elementid, index, name, target, ...props }) => {
    return (
        <div {...props}>
            <span>{ name }</span>
        </div>
    )
}
const Draggable = styled(Draggable_base)`${ styles }`


export default Draggable

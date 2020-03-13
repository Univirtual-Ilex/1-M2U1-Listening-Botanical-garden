
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './AreaDrop_styles'

// Componente base
const AreaDrop_base = React.forwardRef(({title, ...props}, ref) => {
    return (
        <div {...props} ref={ref}>
            {props.children}
        </div>
    )
})
const AreaDrop = styled(AreaDrop_base)`${ styles }`
export default AreaDrop

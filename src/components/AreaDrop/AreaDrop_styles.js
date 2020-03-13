import { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`
    min-width: 15.625em;
    min-height: 15.625em;
    background-image: url(./src/spriteperson250x250.png);
    background-repeat: no-repeat;
    background-position:0 0;
    border-radius: 1em;
    padding: 1em;
    margin:0.8em 0.5em 0 0.5em;
    cursor:pointer;
    h3{
        color: ${Ilex.grisOscuro};
        text-transform: uppercase;
        text-align: center;
    }
    &.persona2{
        background-position:-250px 0;
    }
    &.persona3{
        background-position:-500px 0;
    }
    &.persona4{
        background-position:-750px 0;
    }
    &.persona5{
        background-position:-1000px 0;
    }
    &.selected{
        background-position-y:-250px;
        transform: scale(1.1)
    }
`

export default styles
    
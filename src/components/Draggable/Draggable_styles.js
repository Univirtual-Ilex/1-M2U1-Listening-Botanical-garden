import { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`
    
    background-color: #fff;
    border: 2px solid ${Ilex.dragItem};
    color: ${Ilex.violeta2};
    display: inline-block;
    padding: 0.6em 0.6em;
    border-radius: 0.8em;
    box-shadow: 0 0.25em 0 0.1em ${Ilex.dragItem};
    cursor: move;
    font-size:0.75em;
    margin:0.5em 0.5em;
    &.colorize{
        border: 2px solid ${Ilex.verde};
    }

`


export const draggableBlock = css`
    width:${ props => props.w || 100}%;
    font-size:0.7em;
    background-color: ${Ilex.dragItem};
    padding:0.25em 0.5em;
    margin:0.25em 0;
    cursor:move;
    &.ok{
        background-color: ${Ilex.verde};
        color:#274c50;
    }


`


export default styles

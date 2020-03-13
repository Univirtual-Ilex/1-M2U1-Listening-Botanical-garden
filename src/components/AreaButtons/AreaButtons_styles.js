import { css } from 'styled-components'

const styles = css`
/* Buttons */
.area-buttons{
    text-align: right;
    position: relative;
    left:0em;
    top:-1.5em;
    .button{
        display:inline-block;
        width:55px;
        height:45px;
        background-image: url(./src/spritebuttons55x45.png);
        background-repeat: no-repeat;
        background-position: 0 0;
        margin: 0 0.5em;
        cursor: pointer;
        &.sound{
            &:hover{
                background-position:0 -45px;   
            }
        }
        &.text{
            background-position:-55px 0px;
            &:hover{
                background-position:-55px -45px;
            }
        }
    }
}
`

export default styles
    
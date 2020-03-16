import { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`
    color: ${Ilex.color_grisMedio};
    .btn-audio{
    	left:50%;
    }
    .boxes{
        margin-top: 2em;
        border:2px dashed;
        border-radius: 1.5em;
        background: #E6E6E6;
        &>div{
            width: 100%;
            padding: 1.5em;
            font-size: 20px;
            margin-top: -3em;
           
        }
        
    }
`

export default styles
    
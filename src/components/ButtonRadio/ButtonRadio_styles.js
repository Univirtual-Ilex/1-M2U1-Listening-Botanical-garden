import { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`
display: block;
position: relative;

.container {
  display: block;
  position: relative;
  cursor: pointer;
  height: auto;
  margin-right: 1em;
  left: 0;
  
}
.container input {
  opacity: 0;
  cursor: pointer;
  position: absolute;
}





/* On mouse-over, add a grey background color */


/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background: ${Ilex.rosa}
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
`

export default styles
    
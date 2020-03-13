
//Import
import React, {useState} from 'react'
import styled from 'styled-components'
import styles from './ButtonRadioSimple_styles'


// Componente base
const Checkbox = props => (
  <input type="radio" name {...props} />
)

// Componente base
const ButtonRadioSimple_base = ({buttonId,setCheckedState, text, arrId, nameb, questionId, ...props}) => {
    const [state, setState] = useState({ checked: false })

	const handleCheckboxChange = event => (
    		setState({ checked: event.target.checked }),
    		setCheckedState(questionId, buttonId)
		)

    return (
        <div {...props}>
        	<label className="container">
	            <Checkbox 
	            	defaultChecked={state.checked}
	            	onClick={handleCheckboxChange}
	            	name={nameb}
	            >
            	</Checkbox>
            	<span className="checkmark"></span>
				<div className="text">{text} </div>
            </label>
        </div>
    )
}
const ButtonRadioSimple = styled(ButtonRadioSimple_base)`${ styles }`
export default ButtonRadioSimple

//Import
import React, {useState} from 'react'
import styled from 'styled-components'
import styles from './Actividad_styles'
import Ilex from '../../App/variables'
import ProgressBar from '../ProgressBar'
// styles from styled
import { UiButtonsContainer } from '../Actividad1/Actividad_styles'
// Data
// import data from './Actividad_data'
// Components
import Container from '../Container'
import MainTitle from '../MainTitle'
import { IRow, ICol } from '../Grid'
// import ButtonUi from '../ButtonControlUI'
import ButtonCheck from '../ButtonCheck'
import ButtonUi from '../ButtonControlUI'
// import PreguntaRadio from '../PreguntaRadio/PreguntaRadio'
// Componente base
import Data from './Actividad_data'
import PreguntaTF from '../PreguntaTF'

import ButtonRadioSimple from '../ButtonRadioSimple'
import AreaButtons from '../AreaButtons'
import ButtonAudio from '../ButtonAudio'
import Modal from '../Generales/Modal'

const Actividad_base = ({staticContext, ...props}) => {



  
    const [modalFlag, setModal] = useState(false)
    const [ok, setOk] = useState(false)
    const [err, setErr] = useState(false)


    const checkActivity = () => {
        var count = 0
        Data.map((data, i) => {
            if(data.right === 1){
                count ++
            }else{
                setErr(true)
                setModal(true)
            }

            if(count === Data.length){
                setOk(true)
                setModal(true)
            }
        })
    }


    const setChecked = (questionId, buttonId) => {
        const data = Data[questionId]
        
        const button = data.buttons[buttonId]

        if(button.score === 1){
            data.right = 1
        }else{
            data.right = 0
        }
    }


    const questions = Data.map((data,i) => {
        return(
            <ICol w={33} pt={5} key={i} >
                <div className="mb-2"><strong>{i + 1}). {data.text}</strong></div>
                {
                    data.buttons.map((button, index) => {
                        return(
                            <ButtonRadioSimple setCheckedState={setChecked} key={index} buttonId={index} questionId={i}  nameb={'button_' + i} text={button.text} className={"ml-1  " + 'first_button1' + i} />
                        )
                    })
                } 
            </ICol>
        )
    })
    return (
        <Container bgImage='./src/bg_actividad1.png' h={46} w={80} {...props}>
            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='Listen the audio and answer correctly' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' onClick={ () => {window.location.href = '/actividad1'} } />
            </UiButtonsContainer>           
            <IRow w={85} align="center">
                <ICol pt={ 3 } pb={0.5}>
                    <MainTitle color={Ilex.violeta2} size={1.5}>
                    COMPLETE THE EXERCISES WITH THE CORRECT INFORMATION FROM THE AUDIOS
                    </MainTitle>  
                </ICol>
                <ButtonAudio className="btn-audio" src={'./media/audio.mp3'} />
            </IRow>
            <IRow  w={85} justify={'center'} className="columns" align={'center'}>
                {questions}
            </IRow>
             <IRow pt={4}>
                <ICol  > 
                        <ButtonCheck onClick={checkActivity} className="next"  text={'CHECK'} />
                </ICol>
            </IRow>
            <Modal visible={modalFlag} ok={ok} err={err} w={25} repeatUrl={'/actividad1'} nxtUrl={'/actividad2'} />
        </Container>

    )
}
const Actividad = styled(Actividad_base)`${ styles }`
export default Actividad

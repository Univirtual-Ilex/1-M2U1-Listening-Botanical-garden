//Import
import React, {useState} from 'react'
import styled from 'styled-components'
import styles from './Actividad2D_styles'
import Ilex from '../../App/variables'
import ProgressBar from '../ProgressBar'
// styles from styled
import { UiButtonsContainer } from '../Actividad1/Actividad_styles'
// Data
// import data from './Actividad2D_data'
// Components
import Container from '../Container'
import MainTitle from '../MainTitle'
import { IRow, ICol } from '../Grid'
// import ButtonUi from '../ButtonControlUI'
import ButtonCheck from '../ButtonCheck'
import ButtonUi from '../ButtonControlUI'
// import PreguntaRadio from '../PreguntaRadio/PreguntaRadio'
// Componente base
import Data from '../Data'
import PreguntaTF from '../PreguntaTF'

import ButtonRadioSimple from '../ButtonRadioSimple'
import AreaButtons from '../AreaButtons'


import Area from '../AreaDrop'
import Modal from '../Generales/Modal'

const Actividad2D_base = ({staticContext, ...props}) => {

	const [modalFlag, setModal] = useState(false)
    const [ok, setOk] = useState(false)
    const [err, setErr] = useState(false)


    const DataPerson = Data[4] // this is the first screen and the first person

    const w_c = 100 / DataPerson.audios.length
    const changeData = () => {
        var count = 0
        DataPerson.audios.forEach((audio) => {
            if(audio.right == 1){
                count ++
            }else{
                DataPerson.right = 0
            }
            if(count === DataPerson.audios.length){
                DataPerson.right = 1
            }
        })
    }


    const setChecked = (audioId, buttonId) => {
        const data = DataPerson.audios[audioId]
        
        const button = data.buttons[buttonId]

        if(button.score === 1){
            data.right = 1
        }else{
            data.right = 0
        }

        changeData()
    }

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
    const questions = DataPerson.audios.map((data,i) => {
        return(
            <ICol w={w_c} key={i} >
                <AreaButtons audio={data.audio} align={'left'} text={data.audio_text}/>
                {
                    data.buttons.map((button, index) => {
                        return(
                            <ButtonRadioSimple setCheckedState={setChecked} key={index} buttonId={index} audioId={i}  nameb={'button_' + i} text={button.text} className={"ml-1  " + 'first_button1' + i} />
                        )
                    })
                } 
            </ICol>
        )
    })
    return (
        <Container bgImage='./src/bg_actividad1.png' h={46} w={80} {...props}>
            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='From the previous activity responds' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' onClick={ () => {window.location.href = '/actividad1'} } />
            </UiButtonsContainer>           
            <IRow w={85} align="center">
                <ICol pt={ 4 } pb={0.5}>
                    <MainTitle color={Ilex.violeta2} size={1.5}>
                    COMPLETE THE EXERCISES WITH THE CORRECT INFORMATION FROM THE AUDIOS
                    </MainTitle>  
                </ICol>
            </IRow>
            <IRow pt={2} w={85} justify={'center'} className="columns" align={'center'} className="questions">
                <ICol w={28} >
                    <Area className={"persona1"} title={Data[4].name}/>
                </ICol>
                <ICol w={60} pt={3} >
                    <IRow>
                        {questions}
                    </IRow>
                </ICol>
            </IRow>
             <IRow pt={19}>
                <ICol  ><ButtonCheck className="next" onClick={checkActivity} text={'NEXT'} /></ICol>
            </IRow>

            <Modal visible={modalFlag} ok={ok} err={err} w={25} repeatUrl={'/actividad1'} finished={ok} />
        </Container>

    )
}
const Actividad2D = styled(Actividad2D_base)`${ styles }`
export default Actividad2D

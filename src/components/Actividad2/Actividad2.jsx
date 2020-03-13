//Import
import React, {useState} from 'react'
import styled from 'styled-components'
import styles from './Actividad2_styles'
import Ilex from '../../App/variables'
// styles from styled
import { ProgressbarContainer, UiButtonsContainer } from '../Actividad1/Actividad_styles'
// Components
import Container from '../Container'
import ProgressBar from '../ProgressBar'
import MainTitle from '../MainTitle'
import { IRow, ICol } from '../Grid'
import { DraggableBlock } from '../Draggable'
import ButtonUi from '../ButtonControlUI'
import {ReactSortable} from 'react-sortablejs'
import Modal from '../Generales/Modal'

// DAta
import data from './Actividad2_data'
// Componente base
const Actividad2_base = ({staticContext, ...props}) => {
    
    const [modalFlag, setModal] = useState(false)
    const [ok, setOk] = useState(false)
    const [err, setErr] = useState(false)
    // Función que reordena las palabras de forma aleatoria
    const randomizeItems = (array) => {
        //let sortable = array.sort(()=>Math.random() - 0.5) // realiza un reordenamiento al azar
        let sortable = array.map((item, index) => {
            return item
        })
        sortable.sort(() =>Math.random() - 0.5)
        return sortable
    }


    const check = (evt) => {
        let arr = draggable.map(item => {
            return item.props['data-feedback']
        })
        if( arr.indexOf('err') === -1){
            setFeedback(true)
            setOk(true)
            setErr(false)
        } else {
            setErr(true)
            setOk(false)
            setFeedback(false)
        }
    }






    const [Data, setData] = useState(randomizeItems(data))
    const [Feedback, setFeedback] = useState(false)


     const draggable = Data.map((part, index) => (
        <DraggableBlock key={part.id} data-index={index} target={part.targetPos} className={ part.targetPos === (index + 1) ? 'ok' : 'err'} data-feedback={part.targetPos === (index + 1) ? 'ok' : 'err'}>
            { part.content }
        </DraggableBlock>
    ))


    return (
        <Container bgImage='./src/bg_actividad1.png' {...props}>

            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='slide the sentences to organize them, then press check to verify if it is right or wrong, press hint if you need help   ' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' />
            </UiButtonsContainer>


            <IRow pt={4.5} w={90} align='center' justify='center'>
                <ICol w={100}>
                        <MainTitle color={Ilex.violeta2}> ORGANIZE THE CONVERSATION IN THE ORDER YOU HEARD IT  </MainTitle>
                </ICol>
            </IRow>
            
            <IRow align='center' justify='flex-start' w={80} pt={3}>
                <ReactSortable
                    list={Data}
                    setList={setData}
                    group="groupName"
                    animation={300}
                    delayOnTouchStart={true}
                    delay={2}
                    onEnd={check} >
                        { draggable }
                </ReactSortable>
           
            </IRow>
            <Modal visible={Feedback} ok={ok} err={err} w={25} repeatUrl={'/actividad2'} finished={ok} />
        </Container>

    )
}
const Actividad2 = styled(Actividad2_base)`${ styles }`
export default Actividad2

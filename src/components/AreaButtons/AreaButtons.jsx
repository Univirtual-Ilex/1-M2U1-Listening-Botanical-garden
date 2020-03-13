
//Import
import React,{useState, useRef} from 'react'
import styled from 'styled-components'
import styles from './AreaButtons_styles'

// Componente base
const AreaButtons_base = ({ tooltip, audio, align, ...props}) => {
    const ilxAudio = useRef()
    const [running, playAudio] = useState(false)
    const aPlay = () => {

        if(!running) {
            ilxAudio.current.play()
            playAudio(true)
        } else {
            ilxAudio.current.pause()
            playAudio(false)
        }

    }
    return (
        <div {...props}>
            <div className="area-buttons" style={{textAlign: `${align}`}} >
                <button className="btn-clean button sound" onClick={ aPlay }></button>
            </div>
            <audio ref={ilxAudio}>
                <source src={ audio }/>
                <span>No se puede reproducir el audio</span>
            </audio>
        </div>
    )
}
const AreaButtons = styled(AreaButtons_base)`${ styles }`
export default AreaButtons

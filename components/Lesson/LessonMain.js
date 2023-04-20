import styled from "styled-components"
import Tab from "../SVG/Tab"
import { useState } from "react"
import useNoteDetection from "/hooks/useNoteDetection"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding-left: 27px;
`

const NotesHelper = styled.p`
    font-weight: 700;
    color: red;
    position: absolute;
    top: 5px;
    left: 5px;
    
`



const LessonMain = ({finished}) => {
    const notes = useNoteDetection(finished)


    return (
        <Container>
            <NotesHelper>{notes}</NotesHelper>
            <Tab />
        </Container>
    )
}

export default LessonMain
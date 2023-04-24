import styled from "styled-components"
import Tab from "../SVG/Tab"
import { useState, useEffect } from "react"
import useNoteDetection from "/hooks/useNoteDetection"
import {motion} from "framer-motion"

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

const InteractiveTab = styled(motion.div)`
  z-index: 0;
`

const LessonMain = ({ finished }) => {
  const playedNote = useNoteDetection(finished)

  const [index, setIndex] = useState(0)
  const [correctNote, setCorrectNote] = useState(false)

  useEffect(() => {
    const expectedNotes = [
        "G",
        "B",
        "G",
        "C",
        "E",
        "G",
        "C",
        "A",
        "E",
        "A",
        "D",
        "F#",
        "G#",
        "E",
        "B",
      ] 

    let timerId = null
    if (playedNote === expectedNotes[index]) {
      timerId = setTimeout(() => {
        setCorrectNote(true)
        setIndex(index + 1)
      }, 500)
    } else {
      setCorrectNote(false)
    }
    return () => clearTimeout(timerId)
  }, [playedNote, index])

  const variants = {
    finished: {x: "-100%"}
  }
 
  return (
    <Container>
      <NotesHelper>{playedNote}</NotesHelper>
        <Tab correctNote={correctNote} expectedNoteIndex={index} finished={finished} />
    </Container>
  )
}

export default LessonMain

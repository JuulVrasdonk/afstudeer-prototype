import styled from "styled-components"
import Tab from "../SVG/Tab"
import { useState, useEffect } from "react"
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

const LessonMain = ({ finished }) => {
  const playedNote = useNoteDetection(finished)

  const [index, setIndex] = useState(0)
  const [correct, setCorrect] = useState(false)

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
        setCorrect(true)
        setIndex(index + 1)
        console.log(`Correct! Note: ${playedNote} Expected: ${expectedNotes[index]}`)
      }, 500)
    } else {
      setCorrect(false)
    }
    return () => clearTimeout(timerId)
  }, [playedNote, index])

  return (
    <Container>
      <NotesHelper>{playedNote}</NotesHelper>
      <Tab />
    </Container>
  )
}

export default LessonMain

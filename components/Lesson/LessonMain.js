import styled from "styled-components"
import Tab from "../SVG/Tab"
import { useState, useEffect } from "react"
import useNoteDetection from "/hooks/useNoteDetection"

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  padding-left: 27px;
  overflow: hidden;
`

const NotesHelper = styled.p`
  font-weight: 700;
  color: red;
  position: absolute;
  top: 5px;
  left: 5px;
`

const Test = styled.div`
    display: flex;
    width: max-content;
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
      "C",
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
    if (playedNote === expectedNotes[index] && !correctNote) {
      timerId = setTimeout(() => {
        setCorrectNote(true)
        setIndex(index + 1)
      }, 500)
    } else {
      setCorrectNote(false)
    }
    return () => clearTimeout(timerId)
  }, [playedNote, index, setIndex, correctNote])

 
  return (
    <Container>
      <NotesHelper>{playedNote}</NotesHelper>
      <Test>
        <Tab correctNote={correctNote} expectedNoteIndex={index} finished={finished} />
      </Test>
    </Container>
  )
}

export default LessonMain

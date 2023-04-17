import styled from "styled-components"
import { useState } from "react"
import { motion, AnimatePresence, easeOut, useAnimationControls} from "framer-motion"

// COMPONENTS
import SvgGuitarPath from "../SVG/SvgGuitarPath"
import LessonDescription from "./LessonDescription"


const Container = styled.div`
    min-width: 100vw;
    scroll-snap-align: center;

    padding-top: 15vh;
`

const LessonDescriptionContainer = styled(motion.div)`
    position: fixed;
    height: 75.7vh;
    bottom: 0;
`

const GuitarPath = () => {

    const [isActive, setIsActive] = useState(false);

    isActive ? console.log('isActive is true') : console.log('isActive is false')

    const controls = useAnimationControls()

    async function handleDragEnd(event, info) {
        const offset = info.offset.y
        const velocity = info.velocity.y
        console.log(offset);
        console.log(velocity);

        if (offset > 500 || velocity > 500) {
            await controls.start({ y: "100%", transition: { duration: 0.2 } })
            console.log('yup')
            setIsActive(false)
        } else {
            controls.start({ y: 0, opacity: 1, transition: { duration: 0.5 } })
        }
    }

    return (
        <Container id="guitarpath">
            <SvgGuitarPath setIsClicked={setIsActive} isClicked={isActive}/>
            <AnimatePresence>
                {isActive  && (
                    <LessonDescriptionContainer
                    key="lesson-description"
                    drag="y"
                    onDragEnd={handleDragEnd}
                    dragConstraints={{ top: 0, bottom: 0 }}
                    transition={{duration: 0.5, ease: easeOut }}
                    initial={{y: 1000}}
                    animate={{y: 0}}
                    exit={{y: 1000}}
                    >
                        <LessonDescription />
                    </LessonDescriptionContainer>
                    
                )}
            </AnimatePresence>
        </Container>
    )
}

export default GuitarPath
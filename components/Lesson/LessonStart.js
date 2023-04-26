import styled from 'styled-components'
import useWindowSize from '/hooks/useWindowSize'
import TiltDevice from '../SVG/TiltDevice'
import { useEffect, useState } from 'react'

const Container = styled.div``

const StartLessonContainer = styled.div`
    position: absolute;
    top: 0;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    background-color: ${({started}) => started ? `#36363600`: `#36363680`};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: background-color 0.5s ease-out;
`

const StartLessonHeading = styled.h2`
    font-size: 24px;
    color: #fff;
    text-transform: uppercase;

    display: ${({started}) => (started ? 'none' : 'block')}
`

const CountdownText = styled.h2`
    font-size: 48px;`

const StartButton = styled.button`
    margin: 0 30px;
    background-color: #0095E9;
    display: block;
    text-align: center;
    padding: 14px 50px 17px;
    border-radius: 10px;
    font-weight: 700;
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    outline: none;
    border: none;
    margin-top: 50px;
    cursor: pointer;
`

const PermissionButton = styled.button`
    background: #E90000;
    border: none;
    outline: none;
    padding: 14px 15px 17px;
    font-weight: 700;
    color: white;
    border-radius: 12px;
    position: absolute;
    top: 15px; 
    left: 15px;
`

const TiltContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #fff
`

const TiltHeading = styled.h2`
    font-size: 24px;
    text-transform: uppercase;
    margin-top: 20px;
`


const LessonStart = ({setCountdownFinished}) => {
    const {width, height} = useWindowSize()


    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        let interval;
        if (started && count > 0) {
        interval = setInterval(() => setCount(count - 1), 1000);
        } else if (count === 0 && started) {
            setCountdownFinished(true);
            setStarted(false)
        }
        return () => clearInterval(interval);
    }, [started, count, setCountdownFinished]);

    const countDown = () => {
        setCount(3);
        setStarted(true);
        setCountdownFinished(false);
    };

    return(
        <Container> 
            {width > height ? 
                <StartLessonContainer started={started}>
                    <StartLessonHeading started={started}>Ready? Start the lesson🤘.</StartLessonHeading>
                    {count > 0 ? (
                        <CountdownText>{count}</CountdownText>
                    ) : (
                        <StartButton onClick={() => countDown()}>Start</StartButton>
                    )}
                </StartLessonContainer> : 
                <TiltContainer>
                    <TiltDevice />
                    <TiltHeading>Tilt your device please</TiltHeading>               
                </TiltContainer>}
        </Container>
    )
}

export default LessonStart
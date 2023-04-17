import styled from "styled-components"
import RecapIcon from "../SVG/RecapIcon"
import Link from "next/link"


const Container = styled.div`
    width: 100vw;
    height: 90vh;
    padding: 44px 30px 22px 30px;
    background-color: white;
    border-radius: 25px 25px 0 0;
    border: 5px solid #f3f3f3;
    border-bottom: none;
    box-sizing: border-box;

    &::after {
        content: "";
        position: absolute;
        left: 50%;
        top: 10px;
        width: 60px;
        height: 5px;
        background-color: #f3f3f3;
        border-radius: 8px;
        transform: translateX(-50%);
    }
`

const SemiHeading = styled.h4`
    font-weight: 400;
    font-size: 11px;
    margin-bottom: 10px;
`

const DescriptionHeading = styled.h2`
    font-family: Inter;
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 16px;
`

const DummyImage = styled.div`
    width: 100%;
    height: 173px;
    background-color: #f3f3f3;
    margin-bottom: 14px;
` 

const LessonDescriptionText = styled.p`
    font-size: 12px;
    margin-bottom: 23px;
`

const TheoryLink = styled(Link)`
    font-size: 14px;
    font-weight: 700;
    color: #1DB91A; 
`

const CTAContainer = styled.div`
    position: absolute;
    left: 0px;
    bottom: 22px;
    width: 100%;
`

const LessonRecap = styled.div`
    display: flex;
    width: max-content;
    margin: auto auto 23px;
    opacity: 0.6;
`

const LessonRecapLabel = styled.p`
    margin-left: 13px;
    font-size: 14px;
`

const StartLesson = styled(Link)`
    margin: 0 30px;
    background-color: #0095E9;
    display: block;
    text-align: center;
    padding: 14px 0 17px;
    border-radius: 5px;
    font-weight: 700;
    text-decoration: none;
    color: white;
`

const LessonDescription = () => {
    return(
        <Container> 
            <SemiHeading>Lesson 2.3</SemiHeading>
            <DescriptionHeading>How to hold the guitar</DescriptionHeading>
            <DummyImage />
            <LessonDescriptionText>
                Small explanation of the theory used in the lesson.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed bibendum mauris purus, ornare faucibus ipsum luctus quis. 
                Suspendisse potenti. Aenean aliquet leo ut justo molestie elementum. 
                Cras eget urna vitae lacus commodo interdum. Etiam id lorem eros. 
                Aenean sodales ac purus ut blandit. Suspendisse tempus efficitur metus in cursus. 
            </LessonDescriptionText>
            <TheoryLink href="#theorypath">Start theory lesson</TheoryLink>
            <CTAContainer>
            <LessonRecap>
            <RecapIcon />
            <LessonRecapLabel>Watch lesson recap</LessonRecapLabel>
        </LessonRecap>
        <StartLesson href="/lesson" >Start lesson🤘</StartLesson>
            </CTAContainer>
        </Container>
    )
}

export default LessonDescription
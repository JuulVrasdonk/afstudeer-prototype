import styled from "styled-components"
import GuitarPath from "./GuitarPath"
import TheoryPath from "./TheoryPath"

const Container = styled.div`
        display: flex;
        width: 100vw;
        scroll-snap-type: x mandatory;
        overflow-x: scroll;
`

const Paths = () => {

    return (
        <Container>
                <GuitarPath />
                <TheoryPath />
        </Container>
    )
}

export default Paths
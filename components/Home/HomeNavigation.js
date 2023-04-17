import styled from "styled-components"

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 10vh;
    width: 100%;
    background-color: blue;
    z-index: 999;
`

const HomeNavigation = () => {
    return (
        <Container></Container>
    )
}

export default HomeNavigation
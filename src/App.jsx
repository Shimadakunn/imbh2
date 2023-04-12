import styled from "styled-components"
import IBMH from "./Components/IBMH"
import Home from "./Components/Home"
import BlackPuffer from "./Components/BlackPuffer"
import GreyPuffer from "./Components/GreyPuffer"
import WhitePuffer from "./Components/WhitePuffer"
import MetalicPuffer from "./Components/MetalicPuffer"

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }
  background-color: black;
  color: white;
  
`

function App() {

  return (
    <Container>
      <IBMH/>
      <Home/>
      <BlackPuffer/>
      <WhitePuffer/>
      <GreyPuffer/>
      <MetalicPuffer/>
    </Container>
  )
}

export default App

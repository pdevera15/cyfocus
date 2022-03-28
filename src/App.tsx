import styled from "styled-components"
import Header from "./components/Header"
import Hero from "./components/Hero"
function App() {
  return (
    <Bgcolor>
      <AppContainer>
        <Header />
        <Hero />
      </AppContainer>
    </Bgcolor>
  )
}

export default App

const Bgcolor = styled.div`
  background-color: #e76f51;
`
const AppContainer = styled.div`
  height: 100vh;
  max-width: 620px;
  margin: auto;
`

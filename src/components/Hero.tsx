import styled from "styled-components"
import MusicToggler from "./MusicToggler"
import VolumeSlider from "./VolumeSlider"

function Hero() {
  return (
    <HeroStyled>
      <TimeStyled>25:00</TimeStyled>
      <MusicToggler />
      <ButtonStyled>Start</ButtonStyled>
    </HeroStyled>
  )
}

export default Hero

const HeroStyled = styled.div`
  margin: auto;
  max-width: 450px;
  background-color: rgb(255, 255, 255, 0.1);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2em 0;
`

const TimeStyled = styled.div`
  font-size: 120px;
  font-weight: bold;
`

const ButtonStyled = styled.button`
  background-color: white;
  padding: 10px;
  font-size: 24px;
  border: 0;
  color: #e76f51;
  width: 200px;
  border-radius: 0.4em;
`

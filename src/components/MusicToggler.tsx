import React, { useMemo, useState } from "react"
import VolumeSlider from "./VolumeSlider"
import styled from "styled-components"
import MusicIcon from "./MusicIcon"

const rain: string = require("../assets/music/rain.mp3")
const fire: string = require("../assets/music/fire.aac")

function MusicToggler() {
  const [isFireSoundPlaying, setIsFireSoundPlaying] = useState<boolean>(false)
  const [isRainSoundPlaying, setIsRainSoundPlaying] = useState<boolean>(false)
  const [volumeFireSound, setVolumeFireSound] = useState<number>(0.3)
  const rainSound = useMemo(() => {
    let audio = new Audio(rain)
    audio.loop = true
    audio.volume = 0.3
    audio.id = "rain"
    return audio
  }, [])

  const fireSound = useMemo(() => {
    let audio = new Audio(fire)
    audio.loop = true
    audio.volume = 0.3
    audio.id = "fire"
    return audio
  }, [])

  const soundToggle = (audio: HTMLAudioElement) => {
    console.log(audio)
    audio.paused ? audio.play() : audio.pause()
    switch (audio.id) {
      case "rain":
        setIsRainSoundPlaying(!isRainSoundPlaying)
        break
      case "fire":
        setIsFireSoundPlaying(!isFireSoundPlaying)
        break
      default:
        break
    }
  }

  const changeHandler = (event: any) => {
    setVolumeFireSound(event.target.value)
    console.log(volumeFireSound)
    fireSound.volume = volumeFireSound / 100
  }

  return (
    <ContainerStyled>
      <BlockStyled>
        <div onClick={() => soundToggle(fireSound)}>
          <MusicIcon isActive={isFireSoundPlaying} name={"FIRE"} />
        </div>
        <VolumeSlider onVolumeChange={changeHandler} />
      </BlockStyled>
      <BlockStyled>
        <div>
          <MusicIcon isActive={isRainSoundPlaying} name={"RAIN"} />
        </div>
      </BlockStyled>
    </ContainerStyled>
  )
}

export default MusicToggler

const BlockStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ContainerStyled = styled.div`
  display: flex;
`

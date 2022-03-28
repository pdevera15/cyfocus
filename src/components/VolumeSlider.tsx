import React from "react"
import styled from "styled-components"

type Props = {
  defaultVolume?: 30
  audio?: HTMLAudioElement
  onVolumeChange: Function
}
function VolumeSlider({ onVolumeChange, defaultVolume }: Props) {
  return (
    <StyledInput
      type="range"
      min={0}
      max={100}
      value={defaultVolume}
      onChange={(event) => onVolumeChange(event)}
    />
  )
}

const StyledInput = styled.input`
  -webkit-appearance: slider-vertical;
`
export default VolumeSlider

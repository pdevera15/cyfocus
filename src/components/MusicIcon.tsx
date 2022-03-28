import React from "react"
import { BsCloudRainHeavy, BsCloudRainHeavyFill } from "react-icons/bs"
import { AiFillFire, AiOutlineFire } from "react-icons/ai"

type Props = {
  isActive: boolean
  name: "RAIN" | "FIRE"
}
function MusicIcon({ isActive, name }: Props) {
  switch (name) {
    case "RAIN":
      return isActive ? <BsCloudRainHeavyFill /> : <BsCloudRainHeavy />
    default:
    case "FIRE":
      return isActive ? <AiFillFire /> : <AiOutlineFire />
  }
}

export default MusicIcon

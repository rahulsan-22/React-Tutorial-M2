import { memo } from "react"

const Special = ({hero}) => {
  console.log("Special Component Rendering...")
  return (
    <div>Special - {hero}</div>
  )
}

export default memo(Special)
import React from 'react'
import "./Metaphor.css"

function Metaphor(props) {
  const isLlama = props.isLlama;
  return isLlama ? (<p className="Metaphor">But Probably Does Not Mean Definitely.</p>) : (<></>)
}

export default Metaphor
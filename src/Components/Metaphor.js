import React from 'react'
import "./Metaphor.css"

function Metaphor(props) {
  const isLlama = props.isLlama;
  return isLlama ? (<p className="Metaphor">However, <b className = "Bold">probably</b> does not mean <b className = "Bold">definitely.</b></p>) : (<></>)
}

export default Metaphor
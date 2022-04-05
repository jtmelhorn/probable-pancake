import React from 'react'
import './GenerateButton.css'

function GenerateButton(props) {
    const randomImage = props.randomImage;
    const isLlama = props.isLlama;
  return !isLlama ? (<button className = 'GenerateButton' onClick={randomImage}>Generate Image</button>) : (<></>)
}

export default GenerateButton
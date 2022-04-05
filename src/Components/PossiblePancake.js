import React, { useState } from 'react'
import Metaphor from './Metaphor'
import './PossiblePancake.css'
function PossiblePancake(props) {
  const curImage = props.curImage;
  return (<img className='MaybePancakeImg' src={curImage} alt = "Link Broken" />)
}

export default PossiblePancake
import './App.css';
import React, { useState } from 'react'
import PossiblePancake from './Components/PossiblePancake';
import GenerateButton from './Components/GenerateButton';
import Metaphor from './Components/Metaphor';

function App() {
  const images = 
  [
    "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F02%2F17%2F21014-Good-old-Fashioned-Pancakes-mfs_002.jpg",
    "https://www.inspiredtaste.net/wp-content/uploads/2016/07/Pancake-Recipe-2-1200.jpg",
    "https://images-gmi-pmc.edge-generalmills.com/df109202-f5dd-45a1-99b4-f10939afd509.jpg",
     "https://images-gmi-pmc.edge-generalmills.com/edfaaf9f-9bde-426a-8d67-3284e9e496ae.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJH7eTaiYZAL_zVwJr0jQSalEVW44h5W2GpDcUygRGFobvg-GtJdZMcwdJVRaOeVaNGPo&usqp=CAU",
    "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F02%2F17%2F21014-Good-old-Fashioned-Pancakes-mfs_002.jpg",
    "https://www.inspiredtaste.net/wp-content/uploads/2016/07/Pancake-Recipe-2-1200.jpg",
    "https://images-gmi-pmc.edge-generalmills.com/df109202-f5dd-45a1-99b4-f10939afd509.jpg",
     "https://images-gmi-pmc.edge-generalmills.com/edfaaf9f-9bde-426a-8d67-3284e9e496ae.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJH7eTaiYZAL_zVwJr0jQSalEVW44h5W2GpDcUygRGFobvg-GtJdZMcwdJVRaOeVaNGPo&usqp=CAU",
    "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F02%2F17%2F21014-Good-old-Fashioned-Pancakes-mfs_002.jpg",
    "https://www.inspiredtaste.net/wp-content/uploads/2016/07/Pancake-Recipe-2-1200.jpg",
    "https://images-gmi-pmc.edge-generalmills.com/df109202-f5dd-45a1-99b4-f10939afd509.jpg",
     "https://images-gmi-pmc.edge-generalmills.com/edfaaf9f-9bde-426a-8d67-3284e9e496ae.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJH7eTaiYZAL_zVwJr0jQSalEVW44h5W2GpDcUygRGFobvg-GtJdZMcwdJVRaOeVaNGPo&usqp=CAU",
  "https://www.ukri.org/wp-content/uploads/2021/09/UKRI-200921-Llama-antibody-COVID-19-Getty.jpg"]

const [curImage, setImage] = useState("https://images-gmi-pmc.edge-generalmills.com/df109202-f5dd-45a1-99b4-f10939afd509.jpg")
const [isLlama,setTruth] = useState(false)

function randomImage()
{
  let x  = Math.floor(Math.random() * images.length)
  setImage(images[x])
  setTruth(false)
  if (x == (images.length - 1))
  {
    setTruth(true)
  }

}


  return (
    <div className="App">
      <header className="App-header">
        <p> This image is <b className = "Probably">probably</b> a stack of pancakes. </p>
        <PossiblePancake curImage = {curImage}/>
        <GenerateButton randomImage = {randomImage} isLlama = {isLlama}/>
        <Metaphor isLlama = {isLlama} />
      </header>
    </div>
  );
}

export default App;

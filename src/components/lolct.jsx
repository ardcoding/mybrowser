import React, { useState } from 'react'

export default function Lolct(){
  const [hero, setHero] = useState('');

  const handleInputChange = (event) => {
    setHero(event.target.value);
  };

  const handleInputReset = () => {
    setHero("");
  };

  return (
    <div className='h-screen w-3/12 float-left grid justify-items-center' style={{borderRight:"1px solid white"}}>
      <iframe
        title='lolct'
        src={`https://app.mobalytics.gg/tr_tr/lol/champions/${hero}/counters#container`}
        width='100%'
        height='100%'
      ></iframe>

      <input
        name='hero'
        placeholder='Search Hero'
        value={hero}
        onChange={handleInputChange}
        onClick={handleInputReset}
        className='fixed h-10 rounded-md pl-2 w-2/12'
        style={{top:"18px", height:"39px"}}
        type='text'
      />
    </div>
  )
}

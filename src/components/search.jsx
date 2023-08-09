import { Icon } from '@iconify/react';
import React, { useState } from 'react'
import Favorites from './favorites';

export default function Search() {
  const [searchword, setSearchword] = useState('');

  const handleInputChange = (event) => {
    setSearchword(event.target.value);
  };

  const searching = (event) =>{
    var seperator = ".";
    if (event.key === 'Enter') {
      event.preventDefault();
      if(searchword.startsWith("yt.")){
        let data = searchword
        let part = data.split(seperator);
        data = part[1];
        window.location.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(data)}`;
      }else if (searchword.trim() !== '') {
        // Google'da arama yapmak için işlemler burada gerçekleştirilebilir.
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchword)}`;
      }
    }
  }

  return (
    <div className='flex flex-col items-center h-screen justify-center pt-12 w-9/12 float-left' >
    <div className='float-left flex flex-col mt-28'>
      {/* <h1 className='text-8xl text-center text-white mb-16 mt-12'>Rüchan</h1> */}
      <div>
        <Icon className='absolute mt-1' icon="ic:sharp-search" width={40} />
      </div>
      <input
        value={searchword}
        placeholder='Bir şeyler arayın'
        onChange={handleInputChange}
        onKeyDown={searching}
        className='h-12 w-96 rounded-2xl pl-12'
        type='text'
        autoFocus
      /> 
    </div>
    <div className='flex mt-24 justify-between items-end'>
      <Favorites />
      </div>
    </div>
  )
}

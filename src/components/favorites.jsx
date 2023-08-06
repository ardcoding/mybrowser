import { Icon } from '@iconify/react'
import React from 'react'

export default function Favorites() {
  return (
    <div className='flex'>

      <a href="https://sahibinden.com">
      <div className='w-16 h-16 bg-gray-500 mr-4 rounded-2xl flex items-center justify-center'>
        <Icon icon="simple-icons:sahibinden" color='yellow' width={37} />
      </div>
      </a>

      <a href='https://akakce.com'>
      <div className='w-16 h-16 bg-gray-500 rounded-2xl mr-4 flex items-center justify-center'>
      <Icon icon="carbon:checkmark-filled" className='text-sky-800' width={40} />
      </div>
      </a>

      <a href='https://chat.openai.com'>
      <div className='w-16 h-16 bg-gray-500 rounded-2xl flex items-center justify-center'>
      <Icon icon="ri:openai-fill" className='text-white bg-emerald-400' width={40} />
      </div>
      </a>
      
    </div>
  )
}

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'

const Success = () => {
  return (
    <div className='h-4/5 overflow-scroll no-scrollbar flex justify-center items-center'>
        <div className='text-center'>
            <img className='mb-4 mx-auto' width={200} src="/src/assets/success.png" alt="successful logo" />
            <h2 className='text-red-300 font-bold text-2xl'>Thanks for Your Purchase <FontAwesomeIcon icon={faHeart} /></h2>
        </div>
    </div>
  )
}

export default Success
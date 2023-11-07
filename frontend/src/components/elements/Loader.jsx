import React, { useState } from 'react'
import { BallTriangle } from 'react-loader-spinner'


const Loader = ({ message }) => {


  return (
    <div className='flex  items-center justify-center flex-col m-4'>
      <BallTriangle color="#335e9e" height={80} width={80} />
      <p className="flex text-lg items-center m-5">
        {message}

      </p>
    </div>
  )
}

export default Loader
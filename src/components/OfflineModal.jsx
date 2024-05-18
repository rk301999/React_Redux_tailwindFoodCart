import React from 'react'

const OfflineModal = ({children,status}) => {
  return (
    <div className='modal w-full h-screen '>
      <div className='w-[300px] h-[300px] bg-white'>
        <h1>You are offline ! </h1>
      </div>
    </div>
  )
}

export default OfflineModal

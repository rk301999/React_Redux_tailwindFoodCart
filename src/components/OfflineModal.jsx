import React from 'react'
import { ImCross } from "react-icons/im";

const OfflineModal = ({open,children,status,onClose}) => {
    if(!open)
        return null;
  return (
    <>
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,.8)] z-[1000]'/>
    <div className='fixed top-[20%] left-[25%] transform translate-x-1/2 translate-y-1/2 bg-[#f4bd85]
    h-[250px] w-[400px] rounded-lg z-[1000]' >
        <div className='w-full bg-[#533414] flex justify-end'>
    <button onClick={onClose} className='mr-2 p-1.5 text-[#1d150d]'> <ImCross/> </button>
        </div>
    <div className='flex flex-col items-center p-12'>
    {children}
    </div>
    </div>
    </>
  )
}

export default OfflineModal

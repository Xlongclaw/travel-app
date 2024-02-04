import React from 'react'

const PageIndicator = () => {
  return (
    <div className='flex justify-center items-center gap-4 absolute rotate-90 right-[5rem] top-[20rem]'>
        <div className='bg-color4 w-[9px] h-[9px] rounded-full'></div>
        <div className='bg-color4 w-[5px] h-[5px] rounded-full'></div>
        <div className='bg-color4 w-[5px] h-[5px] rounded-full'></div>
        <div className='bg-color4 w-[5px] h-[5px] rounded-full'></div>
    </div>
  )
}

export default PageIndicator
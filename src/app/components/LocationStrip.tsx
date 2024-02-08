import React from 'react'

const LocationStrip = ({location}:{location:string}) => {
  return (
    <div className="flex gap-5 justify-center items-center -rotate-90 absolute w-[30rem] right-[-11rem] top-[14rem]">
        <div className="h-[1px] w-[8rem] bg-color3"/>
        <div className="text-color3 text-sm font-semibold">{location.toUpperCase()}</div>
      </div>
  )
}

export default LocationStrip
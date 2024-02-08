"use client"
import React, { useState } from 'react'
import popularPackagesData from '../constants/popularPackagesData'
import PackageWrapper from './PackageWrapper'
import * as Icon from "react-icons/bs";
import { packageType } from '@/app/type';


const PackagesContainer = (
  {packagesJSON}:{packagesJSON:string}
  ) => {
    const packages:Array<packageType> = JSON.parse(packagesJSON)
  const [x,setX] = useState(0)
  
  return (
    <div className='relative mr-16'>
    <div className="flex justify-between mt-4 mr-0 gap-6 relative  overflow-hidden pb-4">
      <div className='flex overflow-hidde p-4 gap-4 transition-all duration-500' style={{transform:`translateX(-${x}%)`}}>
          {packages.map((tourPackage, i) => (
            <PackageWrapper key={i} tourPackage={tourPackage} />
          ))}

      </div>
        </div>
          <Icon.BsChevronRight
          onClick={()=>{setX(x+25)
          }}
            size={80}
            className="absolute  shadow-xl hover:bg-color9 text-col hover:text-color1 p-7 right-[-2rem] top-[48%] rounded-ful bg-color1 text-color9"
            style={{display:(x>popularPackagesData.length*5-1)?'none':'block'}}
          /> 
          <Icon.BsChevronLeft
          onClick={()=>setX(x-25)}
            size={80}
            className="absolute  shadow-xl hover:bg-color9 text-col hover:text-color1 p-7 right-[-2rem] bottom-1/4 rounded-ful bg-color1 text-color9"
            style={{display:x<25?'none':'block'}}
          />

    </div>
  )
}

export default PackagesContainer
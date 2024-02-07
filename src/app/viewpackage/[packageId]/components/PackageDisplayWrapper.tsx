import { packageType } from '@/app/tourpackages/types/type'
import Image from 'next/image'
import React from 'react'
import * as Icon from 'react-icons/bs'

const PackageDisplayWrapper = ({packageData}:{packageData:packageType}) => {
  return (
    <div className='mt-4 flex'>
        
        <div className='flex flex-col gap-2 w-[50rem]'>
            <div style={{backgroundImage:`url(${packageData.tourImages[1]})`}} className='w-[50rem] bg-cover h-[30rem] rounded-2xl overflow-hidden relative'>
            <div className='absolute bg-color9 p-4 top-8 left-8 rounded-lg'><Icon.BsChevronLeft/></div>

            </div>
            <div className='grid grid-cols-3 gap-2 h-[10rem]'>
                <div style={{backgroundImage:`url(${packageData.tourImages[0]})`}} className='bg-cover relative overflow-hidden rounded-xl flex items-center text-color9 justify-center text-sm font-semibold py-2 border-4 border-color5'>
                    <h3 className='relative z-10'>

                    TOUR IMAGES
                    </h3>
                    <div className='h-full w-full bg-color1/30  absolute'></div>
                </div>
                <div style={{backgroundImage:`url(${packageData.hotelImages[3]})`}} className='bg-cover relative overflow-hidden rounded-xl flex items-center text-color9 justify-center text-sm font-semibold py-2'>
                    <h3 className='relative z-10'>

                    HOTEL IMAGES
                    </h3>
                    <div className='h-full w-full bg-color1/30  absolute'></div>
                </div>
                <div style={{backgroundImage:`url(${packageData.hotelImages[1]})`}} className='bg-cover relative overflow-hidden rounded-xl flex items-center text-color9 justify-center text-sm font-semibold py-2'>
                    <h3 className='relative z-10'>

                    DESTINATION IMAGES
                    </h3>
                    <div className='h-full w-full bg-color1/30  absolute'></div>
                </div>
                        
            </div>
        </div>
        {/* <div className='text-4xl font-semibold text-color1'>{packageData.name}</div> */}
    </div>
  )
}

export default PackageDisplayWrapper
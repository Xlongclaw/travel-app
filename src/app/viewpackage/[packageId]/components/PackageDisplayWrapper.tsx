'use client'
import { packageType } from '@/app/tourpackages/types/type'
import Image from 'next/image'
import React, { useState } from 'react'
import * as Icon from 'react-icons/bs'
import * as Icon1 from 'react-icons/bi'


const PackageDisplayWrapper = ({packageData}:{packageData:packageType}) => {
    const [imageIndex,setImageIndex] = useState(0)
    const [currentImageArray,setCurrentImageArray] = useState(packageData.tourImages)
    const handleNext = () =>{
        if(imageIndex!==currentImageArray.length-1)
        setImageIndex(x=>x+1)
    }
    const handlePrev = () =>{
        if(imageIndex!==0)
        setImageIndex(x=>x-1)
    }
  return (
    <div className='mb-2 flex gap-8'>
        
        <div className='flex flex-col gap-2 w-[50rem]'>
            <div style={{backgroundImage:`url(${currentImageArray[imageIndex]})`}} className='w-[50rem] transition-all bg-center duration-500 bg-cover h-[30rem] rounded-2xl overflow-hidden relative'>
            <div className='absolute bg-color9 p-4 top-8 left-8 rounded-lg'><Icon.BsArrowLeft/></div>
            <div className='absolute bottom-8 right-8 flex gap-3'>
            <div onClick={handlePrev} className=' bg-color9 p-4 rounded-lg'>
                <Icon.BsChevronLeft/>
                </div>
            <div onClick={handleNext} className=' bg-color9 p-4 rounded-lg'>
                <Icon.BsChevronRight/>
                </div>

            </div>
            <div className='absolute left-8 bottom-8 flex gap-2 items-center'>
                {
                    currentImageArray.map((img,index)=>(

                        <div style={imageIndex===index?{ width:'10px',height:'10px'}:{ width:'6px',height:'6px'}} className='bg-color9  rounded-full '></div>
                    ))
                }

            </div>

            </div>
            <div className='grid grid-cols-3 gap-2 h-[10rem]'>
                <div  onClick={()=>{setCurrentImageArray(packageData.tourImages);setImageIndex(0)}} style={{backgroundImage:`url(${packageData.tourImages[0]})`}} className='bg-cover relative overflow-hidden rounded-xl flex items-center text-color9 justify-center text-sm font-semibold py-2 border-4 border-color5'>
                    <h3 className='relative z-10'>

                    TOUR IMAGES
                    </h3>
                    <div className='h-full w-full bg-color1/30  absolute'></div>
                </div>
                <div onClick={()=>{setCurrentImageArray(packageData.hotelImages);setImageIndex(0)}} style={{backgroundImage:`url(${packageData.hotelImages[3]})`}} className='bg-cover relative overflow-hidden rounded-xl flex items-center text-color9 justify-center text-sm font-semibold py-2'>
                    <h3 className='relative z-10'>

                    HOTEL IMAGES
                    </h3>
                    <div className='h-full w-full bg-color1/30  absolute'></div>
                </div>
                <div  onClick={()=>{setCurrentImageArray(packageData.hotelImages);setImageIndex(0)}} style={{backgroundImage:`url(${packageData.hotelImages[1]})`}} className='bg-cover relative overflow-hidden rounded-xl flex items-center text-color9 justify-center text-sm font-semibold py-2'>
                    <h3 className='relative z-10'>

                    DESTINATION IMAGES
                    </h3>
                    <div className='h-full w-full bg-color1/30  absolute'></div>
                </div>
                        
            </div>
        </div>

        <div>
           <h3 className='text-sm font-bold flex gap-2 text-color10'>
            {packageData.city.toUpperCase()} <span className='text-[#ff2a2a]'>{packageData.night}N/{packageData.day}D</span> 
           </h3>
           <h3 className='text-3xl font-bold text-color1'>
            {packageData.name.toUpperCase()}
           </h3>
           <div className='border border-color2/20 text-color1 mt-4 p-4'>
            <h2 className='font-semibold flex items-center gap-2'><Icon.BsAirplane/> Package Overview</h2>
            <h3 className='mt-2 font-medium text-sm text-color2'> Experience what it's like to feel on top of the world at the Burj Khalifa Enter the grand reception area of the Dubai Mall- the world's largest shopping arena and take the 65-metre travelator. Enjoy the visual presentation showcasing the wonders of Dubai and Burj Khalifa along your way.</h3>
           </div>
           <div className='bordes border-color2/20 text-color1 mt-4 p-4'>
            <h1 className='font-semibold flex items-center gap-2 text-color1'><Icon1.BiPackage/> Package Includes</h1>
            <div className='flex my-4 gap-2'>
            <h2 className='flex flex-col justify-center items-center bg-color4 gap-2 p-3 text-color9 rounded-lg'>
            <Icon1.BiHotel size={30}/>
            <h3 className='text-xs font-medium'>HOTEL</h3>
            </h2>
            <h2 className='flex flex-col justify-center items-center bg-color4 gap-2 p-3 text-color9 rounded-lg'>
            <Icon.BsBinoculars size={30}/>
            <h3 className='text-xs font-medium'>SIGHTSEEING</h3>
            </h2>
            <h2 className='flex flex-col justify-center items-center bg-color4 gap-2 p-3 text-color9 rounded-lg'>
            <Icon1.BiCar size={30}/>
            <h3 className='text-xs font-medium'>TRANSFERS</h3>
            </h2>
            <h2 className='flex flex-col justify-center items-center bg-color4 gap-2 p-3 text-color9 rounded-lg'>
            <Icon1.BiFoodMenu size={30}/>
            <h3 className='text-xs font-medium'>MEALS</h3>
            </h2>

            </div>
            <div className='mt-6'>
                <h3 className='text-xs font-semibold'>STARTING FROM</h3>
                <h3 className='text-2xl font-semibold text-[#ff2a2a]'>Rs. {packageData.price}</h3>
                <h3 className='text-xs font-medium'>per person</h3>
            </div>
            <div className='flex gap-8'>
                <div className='mt-4'>
                    <h4 className='text-sm font-semibold'>ADULTS</h4>
                    <div className='flex'>
                        <button className='py-3 px-4 text-sm font-semibold border border-color1/50'>-</button>
                        <div className='p-3 text-sm font-semibold border-t border-b border-color1/50'>2</div>
                        <button className='py-3 px-4 text-sm font-semibold border border-color1/50'>+</button>
                    </div>
                </div>
                <div className='mt-4'>
                    <h4 className='text-sm font-semibold'>CHILD</h4>
                    <div className='flex'>
                        <button className='py-3 px-4 text-sm font-semibold border border-color1/50'>-</button>
                        <div className='p-3 text-sm font-semibold border-t border-b border-color1/50'>0</div>
                        <button className='py-3 px-4 text-sm font-semibold border border-color1/50'>+</button>
                    </div>
                </div>
                <div className='mt-4'>
                    <h4 className='text-sm font-semibold'>INFANT</h4>
                    <div className='flex'>
                        <button className='py-3 px-4 text-sm font-semibold border border-color1/50'>-</button>
                        <div className='p-3 text-sm font-semibold border-t border-b border-color1/50'>0</div>
                        <button className='py-3 px-4 text-sm font-semibold border border-color1/50'>+</button>
                    </div>
                </div>
            </div>
            <div className='flex gap-12'>
            <div className='mt-6'>
                <h3 className='text-xs font-semibold'>TOTAL AMOUNT</h3>
                <h3 className='text-2xl font-semibold text-[#ff2a2a]'>Rs. 2,15,998</h3>
                <h3 className='text-xs font-medium'>incl. GST</h3>
            </div>

            <div  className='text-sm mt-8 font-bold px-3 py-4 justify-center items-center border-2 border-color1 flex w-[10rem]'>BOOK NOW</div>
            </div>
           </div>
        </div>

    </div>
  )
}

export default PackageDisplayWrapper
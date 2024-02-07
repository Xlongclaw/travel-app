import NavBar from '@/app/components/NavBar'
import Image from 'next/image'
import React from 'react'
import TitleText from '../components/TitleText'
import * as Icon from "react-icons/bs";


const page = ({params}:{params:{location:string}}) => {
  return (
    <div className='px-32 py-8'>
      <NavBar/>
      <div className='w-full h-[15rem] overflow-hidden flex relative'>
        <Image className='object-cover w-full' src={require('@/app/assets/herobg9.png')} alt=''/>
        <div className="absolute right-36 bottom-[38%] flex flex-col">
        <div className="  text-4xl font-medium text-color9">
          Explore <strong className='text-5xl'>Australia</strong>{" "}
        </div>
        <div className="text-color2 font-medium max-w-[20rem]">Dive deep in ife of Australia</div>

      </div>
      </div>
      <div className="flex justify-between items-center mt-6 pr-8 pl-2">
          {/* <div>HELLO</div> */}
          <TitleText
            title="Packages "
            strong = "AUSTRALIA"
            subtitle="Our most popular tour package just for you."
          />
          <div className="text-sm font-bold flex gap-4 items-center">VIEW ALL <Icon.BsArrowRight className="gap-4"/></div>
        </div>
    </div>
  )
}

export default page
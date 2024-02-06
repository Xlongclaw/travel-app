import Image from 'next/image'
import React from 'react'

const MustVisitContainer = () => {
  return (
    <div className="bg-color5 w-full h-[30rem] mb-6 flex gap-24 pr-8 py-10">
          <div className="text-lg font-semibold text-color6 flex justify-center items-center gap-3">
            <span className="bg-color6 h-[2px] w-[6rem]"></span>PLACES YOU MUST
            VISIT
          </div>
          <div className="h-full grid grid-flow-col gap-8 overflow-x-scroll flex-1 custom-scroll my-3">
            <div className="w-[15rem] flex flex-col flex-shrink-0">
              <div className="flex h-[20rem] w-[15rem] justify-center items-center">
                <Image
                  className="h-full object-cover"
                  alt=""
                  src={require("@/app/assets/herobg2.jpg")}
                />
              </div>
              <h3 className="text-color6 font-bold mt-2">Thailand</h3>
              <h3 className="text-color6/90 text-xs ">Starting at Rs. 20,999 per person</h3>
            </div>
            <div className="w-[15rem] flex flex-col flex-shrink-0">
              <div className="flex h-[20rem] w-[15rem] justify-center items-center">
                <Image
                  className="h-full object-cover"
                  alt=""
                  src={require("@/app/assets/herobg3.jpg")}
                />
              </div>
              <h3 className="text-color6 font-bold mt-2">Japan</h3>
              <h3 className="text-color6/90 text-xs ">Starting at Rs. 20,999 per person</h3>
            </div>
            <div className="w-[15rem] flex flex-col flex-shrink-0">
              <div className="flex h-[20rem] w-[15rem] justify-center items-center">
                <Image
                  className="h-full object-cover"
                  alt=""
                  src={require("@/app/assets/herobg5.jpg")}
                />
              </div>
              <h3 className="text-color6 font-bold mt-2">Thailand</h3>
              <h3 className="text-color6/90 text-xs ">Starting at Rs. 20,999 per person</h3>
            </div>
            <div className="w-[15rem] flex flex-col flex-shrink-0">
              <div className="flex h-[20rem] w-[15rem] justify-center items-center">
                <Image
                  className="h-full object-cover"
                  alt=""
                  src={require("@/app/assets/herobg6.jpg")}
                />
              </div>
              <h3 className="text-color6 font-bold mt-2">Thailand</h3>
              <h3 className="text-color6/90 text-xs ">Starting at Rs. 20,999 per person</h3>
            </div>
            <div className="w-[15rem] flex flex-col flex-shrink-0">
              <div className="flex h-[20rem] w-[15rem] justify-center items-center">
                <Image
                  className="h-full object-cover"
                  alt=""
                  src={require("@/app/assets/herobg2.jpg")}
                />
              </div>
              <h3 className="text-color6 font-bold mt-2">Thailand</h3>
              <h3 className="text-color6/90 text-xs ">Starting at Rs. 20,999 per person</h3>
            </div>

          </div>
        </div>
  )
}

export default MustVisitContainer
import React from 'react'
import popularPackagesData from '../constants/popularPackagesData'
import PackageWrapper from './PackageWrapper'
import * as Icon from "react-icons/bs";


const PackagesContainer = () => {
  return (
    <div className="flex justify-between mt-4 mr-16 relative">
          {popularPackagesData.map((tourPackage, i) => (
            <PackageWrapper key={i} tourPackage={JSON.parse(JSON.stringify(tourPackage))} />
          ))}
          <Icon.BsChevronRight
            size={60}
            className="absolute  shadow-xl bg-color9 text-col  p-5 right-[-2rem] top-1/2 rounded-full"
          />
          <Icon.BsChevronLeft
            size={60}
            className="absolute  shadow-xl bg-color9 text-col  p-5 left-[-2rem] top-1/2 rounded-full hidden"
          />
        </div>
  )
}

export default PackagesContainer
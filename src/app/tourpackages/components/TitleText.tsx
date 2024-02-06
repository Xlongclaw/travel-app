import React from 'react'

const TitleText = ({title,subtitle}:{title:string,subtitle:string}) => {
  return (
    <div className="flex flex-col items-center justify-center  mt-6">
          <h3 className="text-xl font-semibold text-color4">
            {title}
          </h3>
          <h3 className="text-sm font-medium text-color1">
            {subtitle}
          </h3>
        </div>
  )
}

export default TitleText
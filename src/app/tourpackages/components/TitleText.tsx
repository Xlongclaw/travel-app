import React from 'react'

const TitleText = ({title,subtitle}:{title:string,subtitle:string}) => {
  return (
    <div className="flex flex-col items-start justify-center  ">
          <h3 className="text-xl font-semibold text-color4">
            {title}
          </h3>
          <h3 className="text-sm font-semibold text-color2">
            {subtitle}
          </h3>
        </div>
  )
}

export default TitleText
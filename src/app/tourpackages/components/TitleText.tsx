import React from 'react'

const TitleText = ({title,subtitle,strong}:{title:string,subtitle:string,strong:string}) => {
  return (
    <div className="flex flex-col items-start justify-center  ">
          <h3 className="text-xl font-semibold text-color4">
            {title}
            <strong className='text-2xl'>{strong}</strong>
          </h3>
          <h3 className="text-sm font-medium text-color2">
            {subtitle}
          </h3>
        </div>
  )
}

export default TitleText
import NavBar from '@/app/components/NavBar'
import React from 'react'

const page = ({params}:{params:{tourId:string}}) => {
  return (
    <div className='px-32 py-8'>
      <NavBar/>
    </div>
  )
}

export default page
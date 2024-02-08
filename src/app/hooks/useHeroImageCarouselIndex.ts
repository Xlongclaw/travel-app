import { useEffect, useState } from 'react'
import { heroImageCarouselDataType } from '../type'

const useHeroImageCarouselIndex = (heroImageCarouselData:heroImageCarouselDataType) => {
    const [imageIndex,setImageIndex] = useState(0)
    useEffect(()=>{
        const nextImage = () =>{
            if(imageIndex!=heroImageCarouselData.length-1) setImageIndex(i=>i+1)
            else setImageIndex(0)
        }
        const interval = setInterval(nextImage,3000)
        return ()=> clearInterval(interval)
    },[imageIndex])
    return imageIndex
}

export default useHeroImageCarouselIndex
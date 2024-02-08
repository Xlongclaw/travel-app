const useDiscountPrice = (price:string,discount:string) => {
    let originalPrice = Number(price.split(',').join(''))
    return originalPrice-(originalPrice*Number(discount)/100)
  }

export default useDiscountPrice
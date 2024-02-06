type bannerDataType = Array<{
  image: string;
  link: string;
}>;

type tourPackageType = {
  name: string;
  image: any;
  night: string;
  day: string;
  description: string;
  originalPrice: string;
  discount: string;
  link: string;
  country: string;
  city: string;
};

 export {bannerDataType,tourPackageType}
type bannerDataType = Array<{
  image: string;
  link: string;
}>;
type signInSliderDataType = Array<{
  image: string;
  title: string;
  description: string;
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
type packageType = {
  name: string;
  image: any;
  night: string;
  day: string;
  description: string;
  price: string;
  discount: string;
  link: string;
  country: string;
  city: string;
  hotelImages: Array<string>;
  tourImages: Array<string>;
  destinationImages: Array<string>;
  _id: string;
  startDate: Date;
  endDate: Date;
  location: string;
};

type heroBannerDataType = {
  location: string;
  description: string;
  image: string;
};

type placeDataType = {
  name: string;
  subtitle: string;
  image: string;
};
type heroImageCarouselDataType = Array<{
  image: string;
  location: string;
  title: string;
  subtitle: string;
}>;

export {
  bannerDataType,
  tourPackageType,
  packageType,
  heroBannerDataType,
  placeDataType,
  heroImageCarouselDataType,
  signInSliderDataType,
};

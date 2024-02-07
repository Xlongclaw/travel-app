import { groq } from "next-sanity";
import { client } from "./lib/client";

export async function getAllPackages() {
  return client.fetch(
    groq`*[_type=='packages']{
        _id,name,
          price,
          startDate,
          ecdDate,
          day,
          night,
          country,
          city,
          description,
          discount,
          location,
          'tourImages' : tourImages[].asset->url,
          'hotelImages' : hotelImages[].asset->url,
          'destinationImages' : destinationImages[].asset->url,
      }`
  );
}

export async function getHeroBannerData() {
  return client.fetch(
    groq`*[_type=='banner']{
      location,description,
        'image' : destinationImage.asset->url
    }`
  );
}


export async function getPlaceDataByName(place:string) {
  const placeData  = await client.fetch(
    groq`*[_type=='place' && name match "${place}"]{
      name,subtitle,'image':image.asset->url
    }`
  );
  return  placeData[0]
}


export async function getPackageDataByPlace(place:string) {
  const packages  = await client.fetch(
    groq`*[_type=='packages' && location match "${place}"]{
      _id,name,
      price,
      startDate,
      ecdDate,
      day,
      night,
      country,
      city,
      description,
      discount,
      'tourImages' : tourImages[].asset->url,
      'hotelImages' : hotelImages[].asset->url,
      'destinationImages' : destinationImages[].asset->url,
  }`
  );
  return packages
}


export async function getPackagesByCategory(category:string) {
  
  const packages = await client.fetch(
    groq`*[_type=='category' && title == '${category}']{
        packages[]->{
            _id,name,
          price,
          startDate,
          endDate,
          day,
          night,
          country,
          city,
          description,
          discount,
          location,
          'tourImages' : tourImages[].asset->url,
          'hotelImages' : hotelImages[].asset->url,
          'destinationImages' : destinationImages[].asset->url,
        }
      }`
  );
  
  return packages[0].packages
}


// export async function getProductById(_id: string) {
//   return client.fetch(groq`*[_id match "${_id}"]{
//     'images': image[].asset->url,brand,name,originalPrice,
//     discount,rating,description,_id
//   }`);
// }

// export async function getAllOffers() {
//   return client.fetch(groq`*[_type=='offers']{
//     'image' : image.asset->url,
//       title,link
//   }`);
// }

// export async function getHeroSliderData() {
//   return client.fetch(groq`*[_type=='heroSlider']{
//     'image' : image.asset->url,
//       primaryTitle,secondaryTitle,link
//   }`);
// }
// export async function getImageSliderDataByCategory(category:string) {
//   return client.fetch(groq`*[_type=='imageSliderContent' && category->title == '${category}']{
//     'image' : image.asset->url,
//       primaryTitle,secondaryTitle,link
//   }`);
// }

// export async function getAllCategories() {
//   return client.fetch(groq`*[_type=='category']{
//     _id,title,description,
//     'image' : image.asset->url,
//     'icon' : icon.asset->url,
//       subcategory[]->{title,description,
//       'image':image.asset->url,
//       'icon':icon.asset->url}
      
//   }`);
// }
// export async function getTopPicksByCategory(category:string) {
//   return client.fetch(groq`*[_type=='category' && title == '${category}']
//   {
//     topPicks[]->{
//       'images': image[].asset->url,
//       brand,name,originalPrice,discount,rating,description,_id
//     }
//   }`);
// }

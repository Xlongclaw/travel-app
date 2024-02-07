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
          'tourImages' : tourImages[].asset->url,
          'hotelImages' : hotelImages[].asset->url,
          'destinationImages' : destinationImages[].asset->url,
      }`
  );
}



export async function getPackagesByCategory(category:string) {
  return client.fetch(
    groq`*[_type=='category' && title == '${category}']{
        packages[]->{
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
        }
      }`
  );
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

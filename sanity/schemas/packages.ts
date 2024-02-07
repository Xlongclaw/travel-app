import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'packages',
  title: 'Tour Packages',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Package Name',
      type: 'string',
    }),
    defineField({
      name: 'night',
      title: 'No.of Nights',
      type: 'string',
    }),
    defineField({
      name: 'day',
      title: 'No.of Days',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'country',
      title: 'Country of Tour',
      type: 'string',
    }),
    defineField({
      name: 'city',
      title: 'City of Tour',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'discount',
      title: 'Discount Percentage',
      type: 'string',
    }),
    defineField({
      name: 'hotelImages',
      title: 'Hotel Images',
      type: 'array',
      of: [{type: 'image'}]
    }),
    defineField({
      name: 'tourImages',
      title: 'Tour Images',
      type: 'array',
      of: [{type: 'image'}]
    }),
    defineField({
      name: 'destinationImages',
      title: 'Destination Images',
      type: 'array',
      of: [{type: 'image'}]
    }),
    defineField({
      name: 'startDate',
      title: 'Tour Start Date',
      type: 'date',
    }),
    defineField({
      name: 'endDate',
      title: 'Tour End Date',
      type: 'date',
    }),
    
  ],
})

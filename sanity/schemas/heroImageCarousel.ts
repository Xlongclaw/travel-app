import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'heroImageCarousel',
  title: 'Hero Image Carousel',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'subtitle',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location Name',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Background Image',
      type: 'image',
    }),
  ],
})

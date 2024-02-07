import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'place',
  title: 'Place',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Place Name',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Place Image',
      type: 'image',
    }),
  ],
})

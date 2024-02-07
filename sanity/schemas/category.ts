import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Category Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'packages',
      title: 'Packages',
      type: 'array',
      of: [{type: 'reference', to: {type: 'packages'}}],
    }),
  ],
})

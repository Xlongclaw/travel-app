import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
        defineField({
            name: 'location',
            title: 'Location Name',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Destination Description',
            type: 'string',
        }),
        defineField({
          name: 'destinationImage',
          title: 'Destination Image',
          type: 'image',
        }),
  ],
})

import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "signinSlider",
  title: "SignInSlider",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Image Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
  ],
});

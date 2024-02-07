import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'
import packages from './schemas/packages'
import banner from './schemas/banner'
import place from './schemas/place'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent,packages,banner,place],
}

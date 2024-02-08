import { type SchemaTypeDefinition } from 'sanity'

import category from './schemas/category'
import packages from './schemas/packages'
import banner from './schemas/banner'
import place from './schemas/place'
import heroImageCarousel from './schemas/heroImageCarousel'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ category,packages,banner,place,heroImageCarousel],
}

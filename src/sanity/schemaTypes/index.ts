import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import contact from './contact'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, contact],
}

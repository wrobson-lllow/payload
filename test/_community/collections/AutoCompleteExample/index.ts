import type { CollectionConfig } from '../../../../packages/payload/src/collections/config/types'

export const AutoCompleteExampleSlug = 'auto-complete-example'

export const AutoCompleteExampleCollection: CollectionConfig = {
  slug: AutoCompleteExampleSlug,
  fields: [
    {
      name: 'text',
      type: 'text',
      admin: {
        autoComplete: 'example-attribute',
      },
    },
    {
      name: 'number',
      type: 'number',
      admin: {
        autoComplete: 'example-attribute',
      },
    },
    {
      name: 'email',
      type: 'email',
      admin: {
        autoComplete: 'example-attribute',
      },
    },
  ],
}

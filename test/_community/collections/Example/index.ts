import type { CollectionConfig } from '../../../../packages/payload/src/collections/config/types'

export const ExampleCollection: CollectionConfig = {
  slug: 'example',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      type: 'collapsible',
      label: 'Collapsible One',
      fields: [
        {
          name: 'textField',
          type: 'text',
        },
      ],
    },
    {
      type: 'collapsible',
      label: ({ data }) => `Collapsible Two - ${data.selectField}`,
      fields: [
        {
          name: 'selectField',
          type: 'select',
          options: ['A', 'B', 'C'],
        },
      ],
    },
  ],
}

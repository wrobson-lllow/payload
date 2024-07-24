import type { CollectionConfig } from '../../../../packages/payload/src/collections/config/types'
import { APIError } from '../../../../packages/payload/src/errors'

import { mediaSlug } from '../Media'

export const postsSlug = 'posts'

class CustomAPIError extends APIError {
  constructor(message: string) {
    super(message, 400, undefined, true)
  }
}

export const PostsCollection: CollectionConfig = {
  defaultSort: 'title',
  hooks: {
    beforeDelete: [
      () => {
        throw new CustomAPIError('You must select the delete checkbox before deleting this post')
      },
    ],
  },
  fields: [
    {
      name: 'text',
      type: 'text',
    },
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'associatedMedia',
      access: {
        create: () => true,
        update: () => false,
      },
      relationTo: mediaSlug,
      type: 'upload',
    },
  ],
  slug: postsSlug,
}

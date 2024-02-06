export const menuPhotos = {
  name: 'menuPhotos',
  title: 'Menu Photos',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Name',
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            },
            {
              name: 'toastLink',
              type: 'string',
              title: 'Toast Link',
            },
          ],
        },
      ],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
}

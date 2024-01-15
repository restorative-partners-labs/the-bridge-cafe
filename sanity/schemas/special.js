export const special = {
  name: 'special-item',
  title: 'Specials',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'available',
      title: 'Available',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      title: 'name',
      available: 'available',
      media: 'image',
    },
    prepare(selection) {
      const { title, available } = selection
      return {
        title: `${title} ${available ? '[LIVE]' : ''}`,
      }
    },
  },
}

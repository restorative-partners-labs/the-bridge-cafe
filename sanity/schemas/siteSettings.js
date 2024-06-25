export const siteSettings = {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Site Title',
      description: 'The name of your site, used in SEO and site-wide branding.',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Site Description',
      description: 'A short description of your site, used for SEO purposes.',
    },
    {
      name: 'mainImage',
      type: 'image',
      title: 'Main Site Image',
      description:
        'An image used site-wide, for example, as a default social sharing image.',
    },
    {
      name: 'social',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              type: 'string',
              title: 'Platform',
              description: 'The name of the social media platform.',
            },
            {
              name: 'url',
              type: 'url',
              title: 'URL',
              description: 'The URL to your profile on this platform.',
            },
          ],
        },
      ],
    },
    {
      name: 'hoursOfOperation',
      title: 'Hours of Operation',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'day',
              type: 'string',
              title: 'Day of the Week',
              options: {
                list: [
                  {title: 'Monday', value: 'Monday'},
                  {title: 'Tuesday', value: 'Tuesday'},
                  {title: 'Wednesday', value: 'Wednesday'},
                  {title: 'Thursday', value: 'Thursday'},
                  {title: 'Friday', value: 'Friday'},
                  {title: 'Saturday', value: 'Saturday'},
                  {title: 'Sunday', value: 'Sunday'},
                ],
              },
            },
            {
              name: 'openTime',
              type: 'string',
              title: 'Opening Time',
              description: 'Time the business opens (e.g., 09:00 AM)',
            },
            {
              name: 'closeTime',
              type: 'string',
              title: 'Closing Time',
              description: 'Time the business closes (e.g., 05:00 PM)',
            },
            {
              name: 'isClosed',
              type: 'boolean',
              title: 'Closed',
              description: 'Check if the business is closed on this day',
              initialValue: false,
            },
          ],
          preview: {
            select: {
              title: 'day',
              subtitle: 'openTime',
              media: 'isClosed',
            },
            prepare({title, subtitle, media}) {
              return {
                title: title,
                subtitle: media ? 'Closed' : `Open: ${subtitle}`,
              }
            },
          },
        },
      ],
    },
  ],
}

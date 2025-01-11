export default {
  name: 'components',
  type: 'document',
  title: 'Components',
  fields: [
    {
      name: 'footer',
      type: 'object',
      title: 'Footer',
      fields: [
        {
          name: 'footerOpeningHours',
          type: 'commonContent',
          title: 'Footer Opening Hours',
        },
        {
          name: 'footerContact',
          type: 'commonContent',
          title: 'Footer Contact',
        },
        {
          name: 'footerDisclaimer',
          type: 'string',
          title: 'Footer Disclaimer',
        },
        {
          name: 'footerImages',
          type: 'array',
          title: 'Footer images',
          of: [
            {
              type: 'image',
            },
          ],
        },
        {
          name: 'footerLinks',
          type: 'array',
          title: 'Footer Links',
          of: [
            {
              title: 'Footer Links',
              type: 'object',
              fields: [
                {
                  name: 'footerLink',
                  type: 'string',
                  title: 'Footer Link',
                },
                {
                  name: 'footerText',
                  type: 'string',
                  title: 'Footer Text',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'featuredProducts',
      type: 'array',
      title: 'Featured Products',
      of: [
        {
          type: 'image',
        },
      ],
    },
    {
      name: 'banner',
      type: 'image',
      title: 'Action Banner',
    },
    {
      name: 'brands',
      type: 'array',
      title: 'Brands',
      of: [
        {
          type: 'object',
          fields: [
            {type: 'string', name: 'link'},
            {type: 'image', name: 'image'},
          ],
        },
      ],
    },
  ],
}

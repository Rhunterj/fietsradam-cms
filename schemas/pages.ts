export default {
  name: 'pages',
  type: 'document',
  title: 'Pages',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'headerImage',
      type: 'image',
      title: 'Header Image',
    },
    {
      name: 'headerText',
      type: 'string',
      title: 'Header Text',
    },
    {
      name: 'categoryBlock',
      type: 'array',
      title: 'Category Block',
      of: [
        {
          title: 'Category Block',
          type: 'object',
          fields: [
            {
              name: 'categoryName',
              title: 'Category Name',
              type: 'string',
            },
            {
              name: 'categoryText',
              title: 'Category Text',
              type: 'string',
            },
            {
              name: 'categoryIcon',
              title: 'Category Icon',
              type: 'image',
            },
          ],
        },
      ],
    },
    {
      name: 'commonContent',
      type: 'commonContent',
      title: 'Content ',
    },
  ],
}

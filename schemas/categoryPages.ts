import brands from './brands'

export default {
  name: 'categoryPages',
  type: 'document',
  title: 'Category Pages',
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
    // create an array from the brands array
    {
      name: 'brands',
      type: 'array',
      title: 'brands',
      of: [
        {
          type: 'object',
          name: 'brand',
          fields: [
            { type: 'string', name: 'name'},
            { type: 'string', name: 'value'},
            { type: 'string', name: 'icon'},
          ],
        },
      ],
      options: {
        list: brands.map((brand) => ({
          _type: 'brand',
          name: brand.title,
          value: brand.value,
          icon: brand.icon,
        })),
      },
    },
  ],
}

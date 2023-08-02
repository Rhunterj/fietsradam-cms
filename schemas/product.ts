import categories from "./categories"
import brands from "./brands"

export default {
  name: 'products',
  type: 'document',
  title: 'Products',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          ...categories
        ]
      }
    },
    {
      name: 'brand',
      type: 'string',
      title: 'Brand',
      options: {
        list: [
          ...brands
        ]
      }
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    {
      name: 'exclusive',
      type: 'string',
      title: 'Exclusive',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'attributes',
      type: 'array',
      title: 'Attributes',
      of: [{type: 'string'}],
    },
  ],
}

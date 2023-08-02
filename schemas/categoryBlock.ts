import { defineType } from "sanity";

export const categoryBlockType = defineType({
    name: 'categoryBlock',
    title: 'categoryBlock',
    type: 'document',
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
})

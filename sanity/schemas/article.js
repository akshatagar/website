export default {
    name: 'article',
    title: 'Article',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        rows: 3,
        validation: Rule => Rule.required().max(300),
      },
      {
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [
          {
            type: 'string',
            options: {
              list: [
                { title: 'BFSI', value: 'bfsi' },
                { title: 'Corporate', value: 'corporate' },
                { title: 'Miscellaneous', value: 'misc' },
              ]
            }
          }
        ],
        validation: Rule => Rule.min(1).error('At least one category is required')
      },
      {
        name: 'articleUrl',
        title: 'External Article URL',
        type: 'url',
        validation: Rule =>
          Rule.uri({
            scheme: ['http', 'https'],
          }).required(),
      },
      {
        name: 'image',
        title: 'Thumbnail Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        validation: Rule => Rule.required(),
      },
    ],
  }
  
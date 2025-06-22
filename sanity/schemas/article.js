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
  
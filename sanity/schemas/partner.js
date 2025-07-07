export default {
    name: 'partner',
    title: 'Partner',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Partner Name',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'solution',
        title: 'Solution',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'summary',
        title: 'Summary',
        type: 'text',
        rows: 2,
        validation: Rule => Rule.required(),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'array',
        of: [
          { type: 'block' },        
        ],
        validation: Rule => Rule.required()
      },
      {
        name: 'logo',
        title: 'Logo Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        validation: Rule => Rule.required(),
      },
      {
        name: 'website',
        title: 'Website URL',
        type: 'url',
        validation: Rule => Rule.required().uri({
          scheme: ['http', 'https']
        }),
      },
    ],
  }
  
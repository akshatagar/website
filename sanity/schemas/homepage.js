export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'aboutUsText',
      title: 'About Us Text',
      type: 'string',
      validation: Rule => Rule.required().min(10).max(300),
    },
    {
      name: 'howWeDoIt',
      title: 'How We Do It (Bullet Points)',
      type: 'array',
      of: [
        {
          type: 'string',
          validation: Rule => Rule.required().min(10).max(100)
        }
      ],
      validation: Rule =>
        Rule.min(1).max(4).error('You must provide 1-4 bullet points.')
    }
  ]
};

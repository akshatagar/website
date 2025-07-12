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
        title: 'Bolded Summary on Carousel',
        type: 'text',
        rows: 2,
        validation: Rule => Rule.required(),
      },
      {
        name: 'carouselSubtext',
        title: 'Carousel Subtext',
        type: 'text',
        rows: 2,
      },
      {
        name: 'carouselGraphic',
        title: 'Carousel Graphic',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'carouselLogoImage',
        title: 'Carousel Logo Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'logo',
        title: 'Interactive Diagram Textless Logo Image',
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
  
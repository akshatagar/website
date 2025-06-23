import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'ji6s5asj',   // from sanity.json or sanity.io/manage
  dataset: 'production',
  apiVersion: '2023-06-22',
  useCdn: true,
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)

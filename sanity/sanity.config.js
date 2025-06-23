import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import article from './schemas/article'
import partner from './schemas/partner'

export const schemaTypes = [article, partner]

export default defineConfig({
  name: 'default',
  title: 'omintel-cms',

  projectId: 'ji6s5asj',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

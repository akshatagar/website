import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import article from './schemas/article'

export const schemaTypes = [article]

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

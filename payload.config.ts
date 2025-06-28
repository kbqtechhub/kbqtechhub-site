import { s3Storage } from '@payloadcms/storage-s3'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Categories } from './collections/Categories'
import { Blog } from './collections/Blog'
import Store from './collections/Store'
import GadgetCategories from './collections/GadgetCategories'
import GadgetTags from './collections/GadgetTags'
import { Media } from './collections/Media'
import { Roles } from './collections/Roles'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    livePreview: {
      url: process.env.SERVER_URL,
      collections: ['pages'],
    },
    user: 'users'
  },
  collections: [Users, Media, Blog, Categories, Store, Roles, GadgetCategories, GadgetTags],
  debug: process.env.NODE_ENV === 'development',
  serverURL: process.env.SERVER_URL,
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    autoGenerate: true,
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  cors: '*',
  sharp,
  plugins: [
    s3Storage({
      collections: {
        media: true,
      },
      bucket: process.env.S3_BUCKET || '',
      config: {
        endpoint: process.env.S3_ENDPOINT,
        forcePathStyle: true,
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
        },
        region: process.env.S3_REGION,
      },
    }),
  ],
  upload: {
    limits: {
      fileSize: 100 * 1024 * 1024, // 100 MB
    }
  }
})

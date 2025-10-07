// storage-adapter-import-placeholder
// import { sqliteAdapter } from '@payloadcms/db-sqlite'
import path from 'path'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { getServerSideURL } from './utilities/getURL'
import { postgresAdapter } from '@payloadcms/db-postgres'
//import { payloadCloudPlugin } from '@payloadcms/payload-cloud'

import { defaultLexical } from '@/fields/defaultLexical'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Posts } from './collections/Posts'
import { Pages } from './collections/Pages'
import { plugins } from './plugins'
import { migrations } from './migrations'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// fall back to mongodb if not specified in the .env file
const dbAdapter = process.env.DATABASE_ENGINE === 'postgres'
  ? postgresAdapter({
    // Postgres-specific arguments go here.
    // `pool` is required.
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
    push: false, // disable automatic migrations
    idType: 'uuid',
    prodMigrations: migrations,
  })
  : mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  })

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  collections: [Users, Media, Posts, Pages],
  cors: [getServerSideURL()].filter(Boolean),
  editor: defaultLexical,
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: dbAdapter,
  // db: postgresAdapter({
  //   // Postgres-specific arguments go here.
  //   // `pool` is required.
  //   pool: {
  //     connectionString: process.env.DATABASE_URI,
  //   },
  //   push: false, // disable automatic migrations
  // }),
  sharp,
  plugins: [
    ...plugins,
    //payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})

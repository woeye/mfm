import { withPayload } from '@payloadcms/next/withPayload'

//import { fileURLToPath } from 'url'
//import path from 'path'


//const __filename = fileURLToPath(import.meta.url)
//const dirname = path.dirname(__filename)

/** @type {import('next').NextConfig} */
const config = {
  async redirects() {
    return [{
      source: "/",
      destination: "/posts",
      permanent: true,
    }]
  },
  // env: {
  //   PAYLOAD_CORE_DEV: 'true',
  //   ROOT_DIR: path.resolve(dirname),
  //   // @todo remove in 4.0 - will behave like this by default in 4.0
  //   PAYLOAD_DO_NOT_SANITIZE_LOCALIZED_PROPERTY: 'true',
  // },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // experimental: {
  //   fullySpecified: true,
  //   serverActions: {
  //     bodySizeLimit: '5mb',
  //   },
  // },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/media/**",
      },
    ],
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      }
    }
  },
  // webpack: (webpackConfig) => {
  //   webpackConfig.resolve.extensionAlias = {
  //     '.cjs': ['.cts', '.cjs'],
  //     '.js': ['.ts', '.tsx', '.js', '.jsx'],
  //     '.mjs': ['.mts', '.mjs'],
  //   }

  //   return webpackConfig
  // },
  reactStrictMode: true,
  output: 'standalone',
}

export default withPayload(config, { devBundleServerPackages: false })

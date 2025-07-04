import type { CollectionConfig } from 'payload'

import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'

import { slugField } from '@/fields/slug'
import { generatePreviewPathByID } from '@/utilities/generatePreviewPath'
import { getServerSideURL } from '@/utilities/getURL'
import { MediaBlock } from '@/components/blocks/MediaBlock/config'
import { revalidatePost } from './hooks/revalidatePost'

export const Posts: CollectionConfig<'posts'> = {
  slug: 'posts',
  access: {
    // create: authenticated,
    // delete: authenticated,
    read: authenticatedOrPublished,
    // update: authenticated,
  },
  // This config controls what's populated by default when a post is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'posts'>
  defaultPopulate: {
    title: true,
    slug: true,
    //categories: true,
    meta: {
      image: true,
      description: true,
    },
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) => {
        //console.log(`!!!!!!!!!!!!! livePreview slug: ${data.slug}`)
        const path = generatePreviewPathByID({
          id: data.id as string,
          collection: 'posts',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) => {
      const path = generatePreviewPathByID({
        id: data.id as string,
        collection: 'posts',
        req,
      })

      return path
    },
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [
            {
              name: 'featuredPhoto',
              type: 'upload',
              required: true,
              relationTo: 'media',
            },
            {
              name: 'abstract',
              type: 'text',
              required: true,
            },
            {
              name: 'content',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
                    BlocksFeature({ blocks: [MediaBlock] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                  ]
                },
              }),
              label: false,
              required: true,
            },
          ],
          label: 'Content',
        },
        // {
        //   fields: [
        //     {
        //       name: 'relatedPosts',
        //       type: 'relationship',
        //       admin: {
        //         position: 'sidebar',
        //       },
        //       filterOptions: ({ id }) => {
        //         return {
        //           id: {
        //             not_in: [id],
        //           },
        //         }
        //       },
        //       hasMany: true,
        //       relationTo: 'posts',
        //     },
        //     // {
        //     //   name: 'categories',
        //     //   type: 'relationship',
        //     //   admin: {
        //     //     position: 'sidebar',
        //     //   },
        //     //   hasMany: true,
        //     //   relationTo: 'categories',
        //     // },
        //   ],
        //   label: 'Meta',
        // },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) {
              return new Date()
            }
            return value
          },
        ],
      },
    },
    // {
    //   name: 'authors',
    //   type: 'relationship',
    //   admin: {
    //     position: 'sidebar',
    //   },
    //   hasMany: true,
    //   relationTo: 'users',
    // },
    // This field is only used to populate the user data via the `populateAuthors` hook
    // This is because the `user` collection has access control locked to protect user privacy
    // GraphQL will also not return mutated user data that differs from the underlying schema
    // {
    //   name: 'populatedAuthors',
    //   type: 'array',
    //   access: {
    //     update: () => false,
    //   },
    //   admin: {
    //     disabled: true,
    //     readOnly: true,
    //   },
    //   fields: [
    //     {
    //       name: 'id',
    //       type: 'text',
    //     },
    //     {
    //       name: 'name',
    //       type: 'text',
    //     },
    //   ],
    // },
    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidatePost],
    //afterRead: [populateAuthors],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}

import { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  fields: [
    {
      name: 'defaultMetaAuthor',
      label: 'Default META Author',
      type: 'text',
      required: true,
    },
    {
      name: 'defaultMetaDescription',
      label: 'Default META Description',
      type: 'text',
      required: true,
    },
    {
      name: 'defaultMetaImage',
      label: 'Default META Image',
      type: 'upload',
      required: true,
      relationTo: 'media',
    },
  ],
}

import { TextField } from 'payload'

type Overrides = {
  altOverrides?: Partial<TextField>
}
type SmartAlt = (overrides?: Overrides) => [TextField]


export const smartAltField: SmartAlt = (overrides = {}) => {
  const { altOverrides } = overrides

  const altField: TextField = {
    name: 'slug',
    type: 'text',
    index: true,
    label: 'Slug',
    ...(altOverrides || {}),
    hooks: {},
    admin: {
      position: 'sidebar',
      ...(altOverrides?.admin || {}),
      components: {
        Field: {
          path: '@/fields/slug/SlugComponent#SlugComponent',
          clientProps: {
            fieldToUse,
          },
        },
      },
    },
  }

  return [altField]
}


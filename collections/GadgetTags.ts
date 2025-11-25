import type { CollectionConfig } from 'payload';

export const GadgetTags: CollectionConfig = {
  slug: 'gadgetTags',
  admin: {
    useAsTitle: 'name',
    group: 'Store',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
  ],
};

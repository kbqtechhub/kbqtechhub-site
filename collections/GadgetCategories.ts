import type { CollectionConfig } from 'payload';

const GadgetCategories: CollectionConfig = {
  slug: 'gadgetCategories',
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
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
};

export default GadgetCategories;

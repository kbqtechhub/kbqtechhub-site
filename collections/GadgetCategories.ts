import type { CollectionConfig } from 'payload';
import { canManageStore } from '@/access/checkRole';

export const GadgetCategories: CollectionConfig = {
  slug: 'gadgetCategories',
  admin: {
    useAsTitle: 'name',
    group: 'Store',
  },
  access: {
    // Public read access
    read: () => true,
    // Admin or merchant can create gadget categories
    create: ({ req: { user } }) => {
      if (!user) return false;
      return canManageStore(user);
    },
    // Admin or merchant can update gadget categories
    update: ({ req: { user } }) => {
      if (!user) return false;
      return canManageStore(user);
    },
    // Admin or merchant can delete gadget categories
    delete: ({ req: { user } }) => {
      if (!user) return false;
      return canManageStore(user);
    },
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

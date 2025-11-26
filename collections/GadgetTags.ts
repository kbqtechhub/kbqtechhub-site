import type { CollectionConfig } from 'payload';
import { canManageStore } from '@/access/checkRole';

export const GadgetTags: CollectionConfig = {
  slug: 'gadgetTags',
  admin: {
    useAsTitle: 'name',
    group: 'Store',
  },
  access: {
    // Public read access
    read: () => true,
    // Admin or merchant can create gadget tags
    create: ({ req: { user } }) => {
      if (!user) return false;
      return canManageStore(user);
    },
    // Admin or merchant can update gadget tags
    update: ({ req: { user } }) => {
      if (!user) return false;
      return canManageStore(user);
    },
    // Admin or merchant can delete gadget tags
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
  ],
};

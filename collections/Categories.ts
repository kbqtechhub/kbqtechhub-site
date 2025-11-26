import type { CollectionConfig } from 'payload';
import { canManageContent } from '@/access/checkRole';

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug'],
    group: 'Blog Posts',
  },
  access: {
    // Public read access
    read: () => true,
    // Admin or editor can create categories
    create: ({ req: { user } }) => {
      if (!user) return false;
      return canManageContent(user);
    },
    // Admin or editor can update categories
    update: ({ req: { user } }) => {
      if (!user) return false;
      return canManageContent(user);
    },
    // Admin or editor can delete categories
    delete: ({ req: { user } }) => {
      if (!user) return false;
      return canManageContent(user);
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
      required: false,
    },
  ],
};

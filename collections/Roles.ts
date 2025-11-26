import type { CollectionConfig } from 'payload';
import { isAdmin } from '@/access/checkRole';

export const Roles: CollectionConfig = {
  slug: 'roles',
  admin: {
    useAsTitle: 'name',
    description: 'User roles and their permissions',
  },
  access: {
    // Everyone can read roles (for reference)
    read: () => true,
    // Only admin can create roles
    create: ({ req: { user } }) => {
      if (!user) return false;
      return isAdmin(user);
    },
    // Only admin can update roles
    update: ({ req: { user } }) => {
      if (!user) return false;
      return isAdmin(user);
    },
    // Only admin can delete roles
    delete: ({ req: { user } }) => {
      if (!user) return false;
      return isAdmin(user);
    },
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: 'Display name for the role',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Unique identifier for the role (e.g., admin, editor)',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Detailed description of role permissions',
      },
    },
    {
      name: 'permissions',
      type: 'group',
      fields: [
        {
          name: 'canManageUsers',
          label: 'Can Manage Users',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'canPublishPosts',
          label: 'Can Publish Posts',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'canManageAllPosts',
          label: 'Can Manage All Posts',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'canCreatePosts',
          label: 'Can Create Posts',
          type: 'checkbox',
          defaultValue: false,
        },
      ],
    },
  ],
  hooks: {
    beforeValidate: [
      // Add default roles on initial create
      async ({ operation, req, data }) => {
        if (operation === 'create') {
          // No need to add defaults if roles already exist
          return data;
        }
      },
    ],
  },
};

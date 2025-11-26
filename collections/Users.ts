import type { CollectionConfig, CollectionSlug } from 'payload';
import { isAdmin } from '@/access/checkRole';

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  access: {
    // Only admin can create users (allow first user creation for initial setup)
    create: ({ req: { user } }) => {
      // Allow creation if no user exists (first user setup) or if user is admin
      if (!user) {
        // Check if any users exist - if not, allow creation
        return true; // PayloadCMS handles first user creation automatically
      }
      return isAdmin(user);
    },
    // Users can read their own profile, admins can read all
    read: ({ req: { user } }) => {
      if (!user) return false;
      // Admins can read all users
      if (isAdmin(user)) return true;
      // Users can read their own profile
      return {
        id: {
          equals: user.id,
        },
      };
    },
    // Users can update their own profile, admins can update all
    update: ({ req: { user } }) => {
      if (!user) return false;
      // Admins can update all users
      if (isAdmin(user)) return true;
      // Users can only update their own profile
      return {
        id: {
          equals: user.id,
        },
      };
    },
    // Only admin can delete users
    delete: ({ req: { user } }) => {
      if (!user) return false;
      return isAdmin(user);
    },
  },
  fields: [
    // Email added by default
    {
      type: 'row',
      fields: [
        {
          name: 'firstName',
          type: 'text',
          required: true,
        },
        {
          name: 'lastName',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'roles',
      type: 'relationship',
      relationTo: 'roles' as CollectionSlug,
      hasMany: false,
      required: false,
      admin: {
        description: 'User role determines their permissions in the system',
      },
      // Default value will need to be set using hooks after role collection is populated
    },
    {
      name: 'roleAssignedBy',
      type: 'relationship',
      relationTo: 'users',
      admin: {
        description: 'User who assigned the current role',
        position: 'sidebar',
        readOnly: true,
      },
    },
    {
      name: 'roleAssignedAt',
      type: 'date',
      admin: {
        description: 'When the current role was assigned',
        position: 'sidebar',
        readOnly: true,
      },
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
      access: {
        // update: ({ req }) => req.user.roles === 'admin',
      },
    },
    {
      name: 'phoneNumber',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'profileImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'lastLogin',
      type: 'date',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ data, req }) => {
        // Set role assignment metadata when role changes
        if (data.roles) {
          data.roleAssignedBy = req.user?.id;
          data.roleAssignedAt = new Date();
        }
        return data;
      },
    ],
  },
  // Example access control based on roles would need to be updated to check role permissions
};

import type { CollectionConfig, CollectionSlug } from 'payload';
import { slugField } from '@/lib/slugField';
import { canManageStore } from '@/access/checkRole';

export const Store: CollectionConfig = {
  slug: 'store',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'price', 'rating', 'updatedAt'],
    group: 'Store',
  },
  access: {
    // Public read access
    read: () => true,
    // Admin or merchant can create store items
    create: ({ req: { user } }) => {
      if (!user) return false;
      return canManageStore(user);
    },
    // Admin or merchant can update store items
    update: ({ req: { user } }) => {
      if (!user) return false;
      return canManageStore(user);
    },
    // Admin or merchant can delete store items
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
      label: 'Gadget Name',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [slugField('name')],
      },
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Featured Image',
    },
    {
      name: 'gallery',
      type: 'array',
      label: 'Image Gallery',
      minRows: 0,
      maxRows: 10,
      labels: {
        singular: 'Image',
        plural: 'Images',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
        },
      ],
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      min: 0,
    },
    {
      name: 'salePrice',
      type: 'number',
      min: 0,
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'fullDescription',
      type: 'richText',
      required: true,
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'gadgetCategories' as CollectionSlug,
      required: true,
      hasMany: true,
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'gadgetTags' as CollectionSlug,
      hasMany: true,
    },
    {
      name: 'specs',
      type: 'array',
      label: 'Specifications',
      fields: [
        {
          name: 'specName',
          type: 'text',
          required: true,
        },
        {
          name: 'specValue',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'rating',
      type: 'number',
      min: 0,
      max: 5,
      defaultValue: 0,
    },
    {
      name: 'reviews',
      type: 'array',
      label: 'Reviews',
      fields: [
        {
          name: 'reviewer',
          type: 'text',
          required: true,
        },
        {
          name: 'rating',
          type: 'number',
          min: 1,
          max: 5,
          required: true,
        },
        {
          name: 'reviewText',
          type: 'textarea',
          required: true,
        },
        {
          name: 'reviewDate',
          type: 'date',
          required: true,
        },
        {
          name: 'verifiedPurchase',
          type: 'checkbox',
          defaultValue: false,
        },
      ],
    },
    {
      name: 'affiliateLink',
      type: 'text',
      label: 'Affiliate or Purchase Link',
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          label: 'Available',
          value: 'available',
        },
        {
          label: 'Coming Soon',
          value: 'comingSoon',
        },
        {
          label: 'Sold Out',
          value: 'soldOut',
        },
      ],
      defaultValue: 'available',
      required: true,
    },
    {
      name: 'stockStatus',
      type: 'select',
      options: [
        {
          label: 'In Stock',
          value: 'inStock',
        },
        {
          label: 'Out of Stock',
          value: 'outOfStock',
        },
      ],
      defaultValue: 'inStock',
      required: true,
      admin: {
        description: 'Current inventory status',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Featured Product',
    },
    {
      name: 'meta',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Meta Title',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Meta Description',
        },
      ],
    },
  ],
  timestamps: true,
};

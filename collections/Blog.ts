import type { CollectionConfig, CollectionSlug } from 'payload';
import { slugField } from '@/lib/slugField';
import { canManageContent } from '@/access/checkRole';

export const Blog: CollectionConfig = {
  slug: 'blog',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'author', 'category', 'publishedDate'],
    group: 'Blog Posts',
  },
  access: {
    // Public read access
    read: () => true,
    // Admin or editor can create blog posts
    create: ({ req: { user } }) => {
      if (!user) return false;
      return canManageContent(user);
    },
    // Admin or editor can update blog posts
    update: ({ req: { user } }) => {
      if (!user) return false;
      return canManageContent(user);
    },
    // Admin or editor can delete blog posts
    delete: ({ req: { user } }) => {
      if (!user) return false;
      return canManageContent(user);
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'popular',
      type: 'checkbox',
      defaultValue: false,
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
        beforeValidate: [slugField('title')],
      },
    },
    {
      name: 'status',
      label: 'Status',
      type: 'select',
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
        { label: 'Archived', value: 'archived' },
      ],
      admin: {
        position: 'sidebar',
      },
      required: true,
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories' as CollectionSlug,
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'author',
      type: 'text',
      required: true,
    },
    {
      name: 'publishedDate',
      type: 'date',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'readTime',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'tags',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'tag',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'views',
      type: 'number',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'likes',
      type: 'number',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'featured',
      label: 'Featured Post',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Mark this post to be featured prominently',
      },
    },
    {
      name: 'coverImageAltText',
      label: 'Image Alt Text',
      type: 'text',
      admin: {
        description: 'Describe the image for accessibility',
      },
    },
    {
      name: 'lastModified',
      type: 'date',
      admin: {
        position: 'sidebar',
        description: 'Date when this post was last updated',
      },
    },
    {
      name: 'seo',
      type: 'group',
      admin: {
        description: 'SEO settings for this blog post',
      },
      fields: [
        {
          name: 'metaTitle',
          label: 'Meta Title',
          type: 'text',
          admin: {
            description: 'Custom title for search engines. Defaults to post title if empty.',
          },
        },
        {
          name: 'metaDescription',
          label: 'Meta Description',
          type: 'textarea',
          admin: {
            description: 'Brief description for search results (recommended: 150-160 characters)',
          },
        },
        {
          name: 'metaKeywords',
          label: 'Meta Keywords',
          type: 'text',
          admin: {
            description: 'Comma-separated keywords (optional)',
          },
        },
        {
          name: 'canonicalUrl',
          label: 'Canonical URL',
          type: 'text',
          admin: {
            description: 'Use only if this content exists elsewhere and this is a duplicate',
          },
        },
        {
          name: 'ogImage',
          label: 'Social Sharing Image',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Image shown when shared on social media (if different from post image)',
          },
        },
        {
          name: 'ogTitle',
          label: 'Social Sharing Title',
          type: 'text',
          admin: {
            description: 'Custom title for social sharing (defaults to post title if empty)',
          },
        },
        {
          name: 'ogDescription',
          label: 'Social Sharing Description',
          type: 'textarea',
          admin: {
            description: 'Custom description for social sharing',
          },
        },
      ],
    },
    {
      name: 'relatedPosts',
      label: 'Related Posts',
      type: 'relationship',
      relationTo: 'blog' as CollectionSlug,
      hasMany: true,
      admin: {
        description: 'Select posts that are related to this one',
      },
    },
    {
      name: 'sources',
      label: 'Sources & References',
      type: 'array',
      admin: {
        description: 'Add citations or reference links',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
        },
      ],
    },
    {
      name: 'comments',
      type: 'array',
      admin: {
        description: 'Comments on this blog post',
      },
      fields: [
        {
          name: 'user',
          type: 'text',
          required: true,
        },
        {
          name: 'userEmail',
          type: 'email',
          admin: {
            description: 'Email of commenter (hidden from public view)',
          },
        },
        {
          name: 'userAvatar',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'User profile image',
          },
        },
        {
          name: 'comment',
          type: 'textarea',
          required: true,
        },
        {
          name: 'createdAt',
          type: 'date',
          admin: {
            readOnly: true,
            position: 'sidebar',
          },
          defaultValue: () => new Date(),
        },
        {
          name: 'updatedAt',
          type: 'date',
          admin: {
            readOnly: true,
            position: 'sidebar',
            description: 'Last edit timestamp',
          },
        },
        {
          name: 'status',
          type: 'select',
          defaultValue: 'pending',
          options: [
            { label: 'Pending', value: 'pending' },
            { label: 'Approved', value: 'approved' },
            { label: 'Spam', value: 'spam' },
            { label: 'Deleted', value: 'deleted' },
          ],
          admin: {
            description: 'Moderation status',
          },
          required: true,
        },
        {
          name: 'likes',
          type: 'number',
          defaultValue: 0,
          admin: {
            description: 'Number of likes/upvotes',
          },
        },
        {
          name: 'ipAddress',
          type: 'text',
          admin: {
            description: 'IP address (for moderation purposes)',
            position: 'sidebar',
          },
        },
        {
          name: 'replies',
          type: 'array',
          fields: [
            {
              name: 'user',
              type: 'text',
              required: true,
            },
            {
              name: 'userEmail',
              type: 'email',
            },
            {
              name: 'userAvatar',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'reply',
              type: 'textarea',
              required: true,
            },
            {
              name: 'createdAt',
              type: 'date',
              defaultValue: () => new Date(),
              admin: {
                readOnly: true,
              },
            },
            {
              name: 'status',
              type: 'select',
              defaultValue: 'pending',
              options: [
                { label: 'Pending', value: 'pending' },
                { label: 'Approved', value: 'approved' },
                { label: 'Spam', value: 'spam' },
                { label: 'Deleted', value: 'deleted' },
              ],
            },
            {
              name: 'likes',
              type: 'number',
              defaultValue: 0,
            },
          ],
        },
      ],
    },
  ],
};

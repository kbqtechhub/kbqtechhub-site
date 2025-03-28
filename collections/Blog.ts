import type { CollectionConfig } from 'payload'
import { slugField } from '@/lib/slugField';

export const Blog: CollectionConfig = {
  slug: 'blogs',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'author', 'category', 'publishedDate'],
    group: 'Blog Posts',
  },
  access: {
    read: () => true,
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
      type: 'select',
      options: ['Computing', 'AI & Healthcare', 'Cybersecurity', 'Networking', 'Blockchain'],
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
      name: 'comments',
      type: 'array',
      fields: [
        {
          name: 'user',
          type: 'text',
          required: true,
        },
        {
          name: 'comment',
          type: 'textarea',
          required: true,
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
              name: 'reply',
              type: 'textarea',
              required: true,
            },
          ],
        },
      ],
    },
  ],
};
// This collection configures a blog post with various fields including title, description, image, category, content, author, published date, tags, and comments.
// The comments field is an array of objects, each containing a user and comment, and can also have replies.
// The collection is accessible to all users and has a sidebar for easy navigation.
// The 'readTime' field is a text field that can be used to store the estimated reading time for the blog post.
// The 'views' and 'likes' fields are number fields that can be used to track the number of views and likes for the blog post.
// The 'popular' field is a checkbox that can be used to mark the blog post as popular.
// The 'slug' field is a unique text field that can be used to create a URL-friendly version of the blog post title.
// The 'image' field is an upload field that allows users to upload an image for the blog post.
// The 'category' field is a select field that allows users to choose a category for the blog post from a predefined list.
// The 'tags' field is an array of text fields that can be used to store tags related to the blog post.
// The 'publishedDate' field is a date field that can be used to store the date the blog post was published.
// The 'author' field is a text field that can be used to store the name of the author of the blog post.
// The 'content' field is a rich text field that allows users to format the content of the blog post.
// The 'description' field is a textarea field that can be used to store a brief description of the blog post.
// The 'comments' field is an array of objects, each containing a user and comment, and can also have replies.
// The 'replies' field is an array of objects, each containing a user and reply, that can be used to store replies to comments.


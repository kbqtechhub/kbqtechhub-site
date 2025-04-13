import { CollectionConfig } from 'payload';

const Pages: CollectionConfig = {
    slug: 'pages',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'slug', 'status', 'updatedAt'],
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
            name: 'content',
            type: 'richText',
            required: true,
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'status',
            type: 'select',
            options: [
                {
                    value: 'draft',
                    label: 'Draft',
                },
                {
                    value: 'published',
                    label: 'Published',
                },
            ],
            defaultValue: 'draft',
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'publishedDate',
            type: 'date',
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'featuredImage',
            type: 'upload',
            relationTo: 'media',
            required: false,
        },
        {
            name: 'author',
            type: 'relationship',
            relationTo: 'users',
            hasMany: false,
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'seo',
            type: 'group',
            fields: [
                {
                    name: 'description',
                    type: 'textarea',
                },
                {
                    name: 'keywords',
                    type: 'text',
                },
                {
                    name: 'ogImage',
                    type: 'upload',
                    relationTo: 'media',
                },
            ],
            admin: {
                position: 'sidebar',
            },
        },
    ],
    timestamps: true,
};

export default Pages;

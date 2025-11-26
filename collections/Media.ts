import type { CollectionConfig } from 'payload';
import { canManageMedia } from '@/access/checkRole';

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    // Public read access
    read: () => true,
    // Admin, editor, merchant, or instructor can create media
    create: ({ req: { user } }) => {
      if (!user) return false;
      return canManageMedia(user);
    },
    // Admin, editor, merchant, or instructor can update media
    update: ({ req: { user } }) => {
      if (!user) return false;
      return canManageMedia(user);
    },
    // Admin, editor, merchant, or instructor can delete media
    delete: ({ req: { user } }) => {
      if (!user) return false;
      return canManageMedia(user);
    },
  },
  upload: {
    staticDir: 'media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre',
      },
      {
        name: 'tablet',
        width: 1024,
        height: undefined,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: [
      'image/jpeg',
      'image/png',
      'image/webp',
      'image/avif',
      'image/gif',
      'image/svg+xml',
      'video/mp4',
      'video/webm',
      'audio/mpeg',
      'audio/wav',
      'audio/ogg',
      'application/pdf',
      'application/docx',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/json',
      'text/markdown',
      'text/csv',
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
};

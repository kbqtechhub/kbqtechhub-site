# Admin Dashboard Setup Guide

This guide will help you set up the admin dashboard for course management with S3 file uploads and authentication.

## Features

- ✅ Course management with CRUD operations
- ✅ File uploads to Linode S3 bucket
- ✅ Admin authentication
- ✅ Responsive admin dashboard
- ✅ Course creation and editing forms
- ✅ File management for course materials

## Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Database
DATABASE_URI=your_mongodb_connection_string

# Payload CMS
PAYLOAD_SECRET=your_payload_secret_key
SERVER_URL=http://localhost:3000

# S3 Configuration (Linode)
S3_BUCKET=your-linode-bucket-name
S3_ENDPOINT=https://your-region.linodeobjects.com
S3_ACCESS_KEY_ID=your_linode_access_key
S3_SECRET_ACCESS_KEY=your_linode_secret_key
S3_REGION=us-east-1
```

## Linode S3 Setup

1. **Create a Linode Object Storage Bucket:**
   - Log into your Linode account
   - Go to Object Storage
   - Create a new bucket for your course files
   - Note the bucket name and region

2. **Generate Access Keys:**
   - In the Object Storage section, go to Access Keys
   - Create a new access key
   - Save the Access Key ID and Secret Access Key

3. **Configure CORS (if needed):**
   ```json
   [
     {
       "AllowedOrigins": ["*"],
       "AllowedMethods": ["GET", "PUT", "POST", "DELETE"],
       "AllowedHeaders": ["*"],
       "ExposeHeaders": ["ETag"]
     }
   ]
   ```

## Installation

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Generate Payload types:**
   ```bash
   pnpm generate:types
   ```

3. **Start the development server:**
   ```bash
   pnpm dev
   ```

## Admin Access

1. **Navigate to the admin login:**
   ```
   http://localhost:3000/admin/login
   ```

2. **Use demo credentials:**
   - Email: `admin@example.com`
   - Password: `admin123`

3. **Access the dashboard:**
   ```
   http://localhost:3000/admin
   ```

## Admin Dashboard Features

### Dashboard Overview
- Course statistics
- User management
- Revenue tracking
- Recent activity feed

### Course Management
- Create new courses
- Edit existing courses
- Upload course materials
- Manage course status (draft/published/archived)
- Set course pricing and categories

### File Upload
- Thumbnail uploads
- Course material files (PDF, videos, etc.)
- Automatic S3 integration
- File organization and ordering

## API Endpoints

### Courses API
- `GET /api/courses` - List courses with pagination and filtering
- `POST /api/courses` - Create new course with file uploads
- `PUT /api/courses?id={id}` - Update existing course
- `DELETE /api/courses?id={id}` - Delete course

### File Upload
- Automatic S3 upload for course thumbnails
- Course material file uploads
- File metadata management

## Database Schema

The Courses collection includes:
- Basic course information (title, description, content)
- Course metadata (level, price, duration, status)
- File uploads (thumbnail, course materials)
- Relationships (category, instructor, tags)
- SEO settings
- Timestamps

## Security

### Authentication
- Simple session-based authentication
- Admin route protection
- Session cookies with expiration

### File Upload Security
- File type validation
- File size limits
- Secure S3 uploads
- Access control for admin users

## Customization

### Adding New Course Fields
1. Update the `Courses.ts` collection schema
2. Modify the course form component
3. Update the API route handlers
4. Regenerate Payload types

### Styling
- Uses Tailwind CSS for styling
- Responsive design
- Custom UI components
- Dark mode support (can be added)

### File Upload Limits
Configure in `payload.config.ts`:
```typescript
upload: {
  limits: {
    fileSize: 100 * 1024 * 1024, // 100 MB
  }
}
```

## Production Deployment

1. **Environment Variables:**
   - Set all required environment variables
   - Use secure secrets management

2. **Database:**
   - Use production MongoDB instance
   - Configure proper indexes

3. **S3 Bucket:**
   - Configure proper CORS settings
   - Set up CDN if needed
   - Configure backup strategies

4. **Authentication:**
   - Implement proper session management
   - Add rate limiting
   - Configure HTTPS

## Troubleshooting

### Common Issues

1. **S3 Upload Failures:**
   - Check S3 credentials
   - Verify bucket permissions
   - Check CORS configuration

2. **Authentication Issues:**
   - Clear browser cookies
   - Check session configuration
   - Verify middleware setup

3. **File Upload Limits:**
   - Check file size limits
   - Verify file type restrictions
   - Check server configuration

### Debug Mode
Enable debug mode in `payload.config.ts`:
```typescript
debug: process.env.NODE_ENV === 'development',
```

## Support

For issues and questions:
1. Check the Payload CMS documentation
2. Review Linode Object Storage documentation
3. Check Next.js and React documentation

## License

This project is part of the KBQ Tech Hub platform. 
import { NextRequest, NextResponse } from 'next/server'
import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

// Initialize S3 client for Linode
const s3Client = new S3Client({
  region: process.env.S3_REGION || 'us-east-1',
  endpoint: process.env.S3_ENDPOINT,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
  },
  forcePathStyle: true,
})

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const title = formData.get('title') as string
    const description = formData.get('description') as string
    const content = formData.get('content') as string
    const level = formData.get('level') as string
    const price = parseFloat(formData.get('price') as string) || 0
    const duration = formData.get('duration') as string
    const status = formData.get('status') as string
    const featured = formData.get('featured') === 'true'
    const category = formData.get('category') as string
    const instructor = formData.get('instructor') as string
    const thumbnail = formData.get('thumbnail') as File
    const courseFiles = formData.getAll('courseFiles') as File[]

    // Validate required fields
    if (!title || !description || !category || !instructor) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Upload thumbnail to S3
    let thumbnailUrl = ''
    if (thumbnail) {
      const thumbnailKey = `courses/thumbnails/${Date.now()}-${thumbnail.name}`
      const thumbnailBuffer = Buffer.from(await thumbnail.arrayBuffer())
      
      await s3Client.send(new PutObjectCommand({
        Bucket: process.env.S3_BUCKET,
        Key: thumbnailKey,
        Body: thumbnailBuffer,
        ContentType: thumbnail.type,
      }))
      
      thumbnailUrl = `${process.env.S3_ENDPOINT}/${process.env.S3_BUCKET}/${thumbnailKey}`
    }

    // Upload course files to S3
    const uploadedFiles = []
    for (const file of courseFiles) {
      const fileKey = `courses/files/${Date.now()}-${file.name}`
      const fileBuffer = Buffer.from(await file.arrayBuffer())
      
      await s3Client.send(new PutObjectCommand({
        Bucket: process.env.S3_BUCKET,
        Key: fileKey,
        Body: fileBuffer,
        ContentType: file.type,
      }))
      
      uploadedFiles.push({
        title: file.name,
        description: '',
        url: `${process.env.S3_ENDPOINT}/${process.env.S3_BUCKET}/${fileKey}`,
        size: file.size,
        type: file.type,
        order: uploadedFiles.length
      })
    }

    // Create course object
    const course = {
      id: Date.now().toString(),
      title,
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      description,
      content,
      level,
      price,
      duration,
      status,
      featured,
      category,
      instructor,
      thumbnail: thumbnailUrl,
      courseFiles: uploadedFiles,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    // In a real application, you would save this to your database
    // For now, we'll return the course object
    return NextResponse.json({ 
      success: true, 
      course,
      message: 'Course created successfully' 
    })

  } catch (error) {
    console.error('Error creating course:', error)
    return NextResponse.json(
      { error: 'Failed to create course' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const search = searchParams.get('search') || ''
    const status = searchParams.get('status') || ''

    // Mock data - in real app, fetch from database
    const mockCourses = [
      {
        id: '1',
        title: 'Web Development Fundamentals',
        description: 'Learn the basics of web development with HTML, CSS, and JavaScript',
        status: 'published',
        level: 'beginner',
        price: 99,
        instructor: 'John Doe',
        thumbnail: 'https://example.com/thumbnail1.jpg',
        createdAt: '2024-01-15T10:00:00Z'
      },
      {
        id: '2',
        title: 'Advanced React Development',
        description: 'Master React with advanced patterns and best practices',
        status: 'draft',
        level: 'advanced',
        price: 149,
        instructor: 'Jane Smith',
        thumbnail: 'https://example.com/thumbnail2.jpg',
        createdAt: '2024-01-20T14:30:00Z'
      }
    ]

    // Filter courses based on search and status
    let filteredCourses = mockCourses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase()) ||
                          course.description.toLowerCase().includes(search.toLowerCase())
      const matchesStatus = !status || course.status === status
      return matchesSearch && matchesStatus
    })

    // Pagination
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedCourses = filteredCourses.slice(startIndex, endIndex)

    return NextResponse.json({
      courses: paginatedCourses,
      pagination: {
        page,
        limit,
        total: filteredCourses.length,
        totalPages: Math.ceil(filteredCourses.length / limit)
      }
    })

  } catch (error) {
    console.error('Error fetching courses:', error)
    return NextResponse.json(
      { error: 'Failed to fetch courses' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json(
        { error: 'Course ID is required' },
        { status: 400 }
      )
    }

    const formData = await request.formData()
    const title = formData.get('title') as string
    const description = formData.get('description') as string
    const content = formData.get('content') as string
    const level = formData.get('level') as string
    const price = parseFloat(formData.get('price') as string) || 0
    const duration = formData.get('duration') as string
    const status = formData.get('status') as string
    const featured = formData.get('featured') === 'true'
    const category = formData.get('category') as string
    const instructor = formData.get('instructor') as string

    // Validate required fields
    if (!title || !description || !category || !instructor) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // In a real application, you would update the course in your database
    const updatedCourse = {
      id,
      title,
      description,
      content,
      level,
      price,
      duration,
      status,
      featured,
      category,
      instructor,
      updatedAt: new Date().toISOString()
    }

    return NextResponse.json({ 
      success: true, 
      course: updatedCourse,
      message: 'Course updated successfully' 
    })

  } catch (error) {
    console.error('Error updating course:', error)
    return NextResponse.json(
      { error: 'Failed to update course' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json(
        { error: 'Course ID is required' },
        { status: 400 }
      )
    }

    // In a real application, you would delete the course from your database
    // and also delete associated files from S3

    return NextResponse.json({ 
      success: true,
      message: 'Course deleted successfully' 
    })

  } catch (error) {
    console.error('Error deleting course:', error)
    return NextResponse.json(
      { error: 'Failed to delete course' },
      { status: 500 }
    )
  }
} 
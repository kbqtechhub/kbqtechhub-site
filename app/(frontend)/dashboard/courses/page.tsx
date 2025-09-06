'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus, Upload, Edit, Trash2, Search } from 'lucide-react'
import CourseForm from '@/components/CourseForm'

interface Course {
  id: string
  title: string
  description: string
  status: 'draft' | 'published' | 'archived'
  level: 'beginner' | 'intermediate' | 'advanced'
  price: number
  instructor: string
  thumbnail?: string
  createdAt: string
}

export default function AdminCoursesPage() {
  const router = useRouter()
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [editingCourse, setEditingCourse] = useState<Course | null>(null)

  // Mock data for demonstration
  useEffect(() => {
    const mockCourses: Course[] = [
      {
        id: '1',
        title: 'Web Development Fundamentals',
        description: 'Learn the basics of web development with HTML, CSS, and JavaScript',
        status: 'published',
        level: 'beginner',
        price: 99,
        instructor: 'John Doe',
        createdAt: '2024-01-15'
      },
      {
        id: '2',
        title: 'Advanced React Development',
        description: 'Master React with advanced patterns and best practices',
        status: 'draft',
        level: 'advanced',
        price: 149,
        instructor: 'Jane Smith',
        createdAt: '2024-01-20'
      }
    ]
    setCourses(mockCourses)
    setLoading(false)
  }, [])

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleCreateCourse = () => {
    setShowCreateForm(true)
    setEditingCourse(null)
  }

  const handleEditCourse = (course: Course) => {
    setEditingCourse(course)
    setShowCreateForm(true)
  }

  const handleDeleteCourse = (courseId: string) => {
    if (confirm('Are you sure you want to delete this course?')) {
      setCourses(courses.filter(course => course.id !== courseId))
    }
  }

  const handleSaveCourse = (courseData: any) => {
    if (editingCourse) {
      // Update existing course
      setCourses(courses.map(course =>
        course.id === editingCourse.id
          ? { ...course, ...courseData, id: course.id }
          : course
      ))
    } else {
      // Create new course
      const newCourse = {
        ...courseData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString()
      }
      setCourses([...courses, newCourse])
    }
    setShowCreateForm(false)
    setEditingCourse(null)
  }

  const handleCancelForm = () => {
    setShowCreateForm(false)
    setEditingCourse(null)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-800'
      case 'draft':
        return 'bg-yellow-100 text-yellow-800'
      case 'archived':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-blue-100 text-blue-800'
      case 'intermediate':
        return 'bg-orange-100 text-orange-800'
      case 'advanced':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-64 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Course Management</h1>
          <p className="text-gray-600 mt-2">Manage your online courses and training materials</p>
        </div>
        <Button onClick={handleCreateCourse} className="mt-4 sm:mt-0">
          <Plus className="w-4 h-4 mr-2" />
          Create Course
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <Card key={course.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <CardDescription className="mt-2 line-clamp-2">
                    {course.description}
                  </CardDescription>
                </div>
                <div className="flex gap-2 ml-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEditCourse(course)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDeleteCourse(course.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Status:</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(course.status)}`}>
                    {course.status}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Level:</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Price:</span>
                  <span className="font-medium">
                    ${course.price}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Instructor:</span>
                  <span className="text-sm">{course.instructor}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Created:</span>
                  <span className="text-sm">{new Date(course.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Upload className="w-12 h-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
          <p className="text-gray-600">Create your first course to get started</p>
        </div>
      )}
    </div>

    // {showCreateForm && (
    //   <CourseForm
    //     course={editingCourse || undefined}
    //     onSave={handleSaveCourse}
    //     onCancel={handleCancelForm}
    //     isEditing={!!editingCourse}
    //   />
    // )}
  )
}
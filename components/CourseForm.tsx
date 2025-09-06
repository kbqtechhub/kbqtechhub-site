'use client';

import { Plus, Trash2, Upload, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

interface CourseFormData {
  title: string;
  slug: string;
  description: string;
  content: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  price: number;
  duration: string;
  status: 'draft' | 'published' | 'archived';
  featured: boolean;
  category: string;
  instructor: string;
  thumbnail?: File;
  courseFiles: Array<{
    file?: File;
    title: string;
    description: string;
    order: number;
  }>;
}

interface CourseFormProps {
  course?: CourseFormData;
  onSave: (data: CourseFormData) => void;
  onCancel: () => void;
  isEditing?: boolean;
}

export default function CourseForm({
  course,
  onSave,
  onCancel,
  isEditing = false,
}: CourseFormProps) {
  const [formData, setFormData] = useState<CourseFormData>({
    title: course?.title || '',
    slug: course?.slug || '',
    description: course?.description || '',
    content: course?.content || '',
    level: course?.level || 'beginner',
    price: course?.price || 0,
    duration: course?.duration || '',
    status: course?.status || 'draft',
    featured: course?.featured || false,
    category: course?.category || '',
    instructor: course?.instructor || '',
    courseFiles: course?.courseFiles || [],
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }

    if (!formData.category) {
      newErrors.category = 'Category is required';
    }

    if (!formData.instructor) {
      newErrors.instructor = 'Instructor is required';
    }

    if (formData.price < 0) {
      newErrors.price = 'Price must be non-negative';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSave(formData);
    }
  };

  const handleInputChange = (field: keyof CourseFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const addCourseFile = () => {
    setFormData((prev) => ({
      ...prev,
      courseFiles: [
        ...prev.courseFiles,
        { title: '', description: '', order: prev.courseFiles.length },
      ],
    }));
  };

  const removeCourseFile = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      courseFiles: prev.courseFiles.filter((_, i) => i !== index),
    }));
  };

  const updateCourseFile = (index: number, field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      courseFiles: prev.courseFiles.map((file, i) =>
        i === index ? { ...file, [field]: value } : file
      ),
    }));
  };

  const handleFileUpload = (field: 'thumbnail' | 'courseFiles', file: File, index?: number) => {
    if (field === 'thumbnail') {
      setFormData((prev) => ({ ...prev, thumbnail: file }));
    } else if (field === 'courseFiles' && index !== undefined) {
      updateCourseFile(index, 'file', file);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>{isEditing ? 'Edit Course' : 'Create New Course'}</CardTitle>
              <CardDescription>
                {isEditing ? 'Update course information' : 'Add a new course to your platform'}
              </CardDescription>
            </div>
            <Button variant="ghost" size="sm" onClick={onCancel}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="title">Course Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="Enter course title"
                  className={errors.title ? 'border-red-500' : ''}
                />
                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
              </div>

              <div>
                <Label htmlFor="slug">Slug</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => handleInputChange('slug', e.target.value)}
                  placeholder="course-slug"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Brief description of the course"
                rows={3}
                className={errors.description ? 'border-red-500' : ''}
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">{errors.description}</p>
              )}
            </div>

            <div>
              <Label htmlFor="content">Course Content</Label>
              <Textarea
                id="content"
                value={formData.content}
                onChange={(e) => handleInputChange('content', e.target.value)}
                placeholder="Detailed course content and curriculum"
                rows={6}
              />
            </div>

            {/* Course Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="level">Level *</Label>
                <Select
                  value={formData.level}
                  onValueChange={(value) => handleInputChange('level', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="price">Price ($)</Label>
                <Input
                  id="price"
                  type="number"
                  value={formData.price}
                  onChange={(e) => handleInputChange('price', parseFloat(e.target.value) || 0)}
                  placeholder="0"
                  className={errors.price ? 'border-red-500' : ''}
                />
                {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
              </div>

              <div>
                <Label htmlFor="duration">Duration</Label>
                <Input
                  id="duration"
                  value={formData.duration}
                  onChange={(e) => handleInputChange('duration', e.target.value)}
                  placeholder="e.g., 8 hours, 4 weeks"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="category">Category *</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => handleInputChange('category', value)}
                >
                  <SelectTrigger className={errors.category ? 'border-red-500' : ''}>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="mobile-development">Mobile Development</SelectItem>
                    <SelectItem value="data-science">Data Science</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="marketing">Digital Marketing</SelectItem>
                  </SelectContent>
                </Select>
                {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
              </div>

              <div>
                <Label htmlFor="instructor">Instructor *</Label>
                <Select
                  value={formData.instructor}
                  onValueChange={(value) => handleInputChange('instructor', value)}
                >
                  <SelectTrigger className={errors.instructor ? 'border-red-500' : ''}>
                    <SelectValue placeholder="Select instructor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="john-doe">John Doe</SelectItem>
                    <SelectItem value="jane-smith">Jane Smith</SelectItem>
                    <SelectItem value="mike-johnson">Mike Johnson</SelectItem>
                  </SelectContent>
                </Select>
                {errors.instructor && (
                  <p className="text-red-500 text-sm mt-1">{errors.instructor}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="status">Status</Label>
                <Select
                  value={formData.status}
                  onValueChange={(value) => handleInputChange('status', value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured}
                  onChange={(e) => handleInputChange('featured', e.target.checked)}
                  className="rounded"
                />
                <Label htmlFor="featured">Featured Course</Label>
              </div>
            </div>

            {/* Thumbnail Upload */}
            <div>
              <Label htmlFor="thumbnail">Course Thumbnail</Label>
              <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                <input
                  type="file"
                  id="thumbnail"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleFileUpload('thumbnail', file);
                  }}
                  className="hidden"
                />
                <label
                  htmlFor="thumbnail"
                  className="cursor-pointer text-blue-600 hover:text-blue-800"
                >
                  {formData.thumbnail ? formData.thumbnail.name : 'Click to upload thumbnail'}
                </label>
              </div>
            </div>

            {/* Course Files */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <Label>Course Files</Label>
                <Button type="button" variant="outline" size="sm" onClick={addCourseFile}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add File
                </Button>
              </div>

              <div className="space-y-4">
                {formData.courseFiles.map((file, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="font-medium">File {index + 1}</h4>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeCourseFile(index)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>File Upload</Label>
                        <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx,.mp4,.mov,.avi"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) handleFileUpload('courseFiles', file, index);
                            }}
                            className="hidden"
                            id={`file-${index}`}
                          />
                          <label
                            htmlFor={`file-${index}`}
                            className="cursor-pointer text-blue-600 hover:text-blue-800"
                          >
                            {file.file ? file.file.name : 'Click to upload file'}
                          </label>
                        </div>
                      </div>

                      <div>
                        <Label>Title</Label>
                        <Input
                          value={file.title}
                          onChange={(e) => updateCourseFile(index, 'title', e.target.value)}
                          placeholder="File title"
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <Label>Description</Label>
                      <Textarea
                        value={file.description}
                        onChange={(e) => updateCourseFile(index, 'description', e.target.value)}
                        placeholder="File description"
                        rows={2}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end space-x-4 pt-6 border-t">
              <Button type="button" variant="outline" onClick={onCancel}>
                Cancel
              </Button>
              <Button type="submit">{isEditing ? 'Update Course' : 'Create Course'}</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  BookOpen, 
  Users, 
  FileText, 
  TrendingUp, 
  DollarSign,
  Plus,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react'
import Link from 'next/link'

interface DashboardStats {
  totalCourses: number
  totalUsers: number
  totalRevenue: number
  totalBlogPosts: number
  coursesGrowth: number
  revenueGrowth: number
  usersGrowth: number
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalCourses: 0,
    totalUsers: 0,
    totalRevenue: 0,
    totalBlogPosts: 0,
    coursesGrowth: 0,
    revenueGrowth: 0,
    usersGrowth: 0
  })

  useEffect(() => {
    // Mock data - in real app, fetch from API
    setStats({
      totalCourses: 24,
      totalUsers: 156,
      totalRevenue: 12450,
      totalBlogPosts: 18,
      coursesGrowth: 12.5,
      revenueGrowth: 8.2,
      usersGrowth: -2.1
    })
  }, [])

  const quickActions = [
    {
      title: 'Create Course',
      description: 'Add a new course to your platform',
      icon: BookOpen,
      href: '/admin/courses',
      color: 'bg-blue-500'
    },
    {
      title: 'Manage Users',
      description: 'View and manage user accounts',
      icon: Users,
      href: '/admin/users',
      color: 'bg-green-500'
    },
    {
      title: 'Write Blog Post',
      description: 'Create new blog content',
      icon: FileText,
      href: '/admin/blog',
      color: 'bg-purple-500'
    }
  ]

  const recentActivity = [
    {
      id: 1,
      type: 'course',
      title: 'Web Development Fundamentals',
      action: 'created',
      time: '2 hours ago',
      user: 'John Doe'
    },
    {
      id: 2,
      type: 'user',
      title: 'New user registration',
      action: 'registered',
      time: '4 hours ago',
      user: 'jane.smith@example.com'
    },
    {
      id: 3,
      type: 'blog',
      title: 'Getting Started with React',
      action: 'published',
      time: '1 day ago',
      user: 'Mike Johnson'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your platform.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalCourses}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              {stats.coursesGrowth > 0 ? (
                <ArrowUpRight className="h-3 w-3 text-green-600 mr-1" />
              ) : (
                <ArrowDownRight className="h-3 w-3 text-red-600 mr-1" />
              )}
              {Math.abs(stats.coursesGrowth)}% from last month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalUsers}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              {stats.usersGrowth > 0 ? (
                <ArrowUpRight className="h-3 w-3 text-green-600 mr-1" />
              ) : (
                <ArrowDownRight className="h-3 w-3 text-red-600 mr-1" />
              )}
              {Math.abs(stats.usersGrowth)}% from last month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${stats.totalRevenue.toLocaleString()}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <ArrowUpRight className="h-3 w-3 text-green-600 mr-1" />
              {stats.revenueGrowth}% from last month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalBlogPosts}</div>
            <div className="text-xs text-muted-foreground">
              Published articles
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quickActions.map((action) => (
          <Card key={action.title} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className={`p-2 rounded-lg ${action.color}`}>
                  <action.icon className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="text-lg">{action.title}</CardTitle>
              </div>
              <CardDescription>{action.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={action.href}>
                <Button className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  {action.title}
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions on your platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      {activity.type === 'course' && <BookOpen className="h-4 w-4 text-gray-600" />}
                      {activity.type === 'user' && <Users className="h-4 w-4 text-gray-600" />}
                      {activity.type === 'blog' && <FileText className="h-4 w-4 text-gray-600" />}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {activity.title}
                    </p>
                    <p className="text-sm text-gray-500">
                      {activity.action} by {activity.user}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <p className="text-xs text-gray-400">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
            <CardDescription>Platform overview</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Active Courses</span>
                <span className="text-sm font-medium">18</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Draft Courses</span>
                <span className="text-sm font-medium">6</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Premium Users</span>
                <span className="text-sm font-medium">89</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">This Month Revenue</span>
                <span className="text-sm font-medium">$3,240</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Avg. Course Rating</span>
                <span className="text-sm font-medium">4.8/5</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 
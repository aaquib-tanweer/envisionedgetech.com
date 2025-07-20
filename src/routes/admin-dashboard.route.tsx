import { createFileRoute } from '@tanstack/react-router'
import { AdminDashboard } from '@/UI/pages/admin/AdminDashboard'

export const Route = createFileRoute('/admin-dashboard')({
  component: AdminDashboard,
}) 
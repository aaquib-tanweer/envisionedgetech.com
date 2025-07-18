import { createFileRoute } from '@tanstack/react-router'
import { Blog } from '@/UI/pages/Blog'

export const Route = createFileRoute('/blog/')({
  component: Blog,
}) 
import { createFileRoute } from '@tanstack/react-router';
import { Careers } from '@/UI/pages/Careers';

export const Route = createFileRoute('/careers')({
  component: Careers
}); 
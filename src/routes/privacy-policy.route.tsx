import { createFileRoute } from '@tanstack/react-router';
import { PrivacyPolicy } from '@/UI/pages/PrivacyPolicy';

export const Route = createFileRoute('/privacy-policy')({
  component: PrivacyPolicy
}); 
import { createFileRoute } from '@tanstack/react-router';
import { TermsAndConditions } from '@/UI/pages/TermsAndConditions';

export const Route = createFileRoute('/terms-and-conditions')({
  component: TermsAndConditions
}); 
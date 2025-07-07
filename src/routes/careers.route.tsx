import { createFileRoute } from '@tanstack/react-router';
import { Careers } from '@/UI/pages/Careers';
import { Layout } from '@/UI/pages/Layout';

export const Route = createFileRoute('/careers')({
  component: () => (
    <Layout>
      <Careers />
    </Layout>
  )
}); 
'use client';

import { QueryClient, QueryClientProvider } from 'react-query';

import { QuestionTable } from '@/lib/components/dashboard';

const ProblemsPage = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-full px-6 py-4">
        <QuestionTable />
      </div>
    </QueryClientProvider>
  );
};

export default ProblemsPage;

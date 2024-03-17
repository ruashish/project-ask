'use client';

import { UserButton } from '@clerk/nextjs';
import { QueryClient, QueryClientProvider } from 'react-query';

import { CreateQuestionDialog, QuestionTable } from '@/components/dashboard';
import { QuestionDifficulty, QuestionField, QuestionType } from '@/lib/constants/prompt-enums';
import { newProblemStatement } from '@/lib/utils/api';

const Dashboard = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        Dashboard
        <QuestionTable />
        <UserButton />
        <CreateQuestionDialog />
        <button
          onClick={async () => {
            const response = await newProblemStatement({
              difficulty: QuestionDifficulty.EASY,
              questionField: QuestionField.BANKING,
              questionType: QuestionType.ARRAY,
            });
            console.log('response', response);
          }}
        >
          Create question
        </button>
      </div>
    </QueryClientProvider>
  );
};

export default Dashboard;

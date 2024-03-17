'use client';

import { UserButton } from '@clerk/nextjs';

import { CreateQuestionDialog } from '@/components/dashboard';
import { QuestionDifficulty, QuestionField, QuestionType } from '@/lib/constants/prompt-enums';
import { newProblemStatement } from '@/lib/utils/api';

const Dashboard = () => {
  return (
    <div>
      Dashboard
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
  );
};

export default Dashboard;

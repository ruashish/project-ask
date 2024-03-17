'use client';

import { UserButton } from '@clerk/nextjs';

import { QuestionDifficulty, QuestionField, QuestionType } from '@/constants/prompt-enums';
import { newProblemStatement } from '@/utils/api';

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <UserButton />
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

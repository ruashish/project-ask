import { NextResponse } from 'next/server';

import { getUserByClerkID, prisma } from '@/utils';
import { generateProblemStatement } from '@/utils/ai';

export const POST = async (request: Request) => {
  const data = await request.json();
  const user = await getUserByClerkID();
  const generatedProblemStatement = await generateProblemStatement(data);

  const entry = await prisma.questions.create({
    data: {
      difficulty: data.difficulty,
      problemStatement: generatedProblemStatement.problemStatement,
      questionField: data.questionField,
      questionType: data.questionType,
      testCases: {
        create: generatedProblemStatement.testCases.map((testCase) => ({
          input: testCase.input,
          output: testCase.output,
        })),
      },
      title: generatedProblemStatement.title,
      user: {
        connect: {
          id: user?.id ?? '',
        },
      },
    },
  });

  return NextResponse.json({ data: entry });
};

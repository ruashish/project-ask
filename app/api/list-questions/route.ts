import { NextResponse } from 'next/server';

import { prisma } from '@/lib/utils';

export const GET = async (request: Request) => {
  const { questionType, questionField, difficulty, page = 1 } = await request.json();

  const pageSize = 20;
  const skip = (page - 1) * pageSize;

  const entry = await prisma.questions.findMany({
    skip,
    take: pageSize,
    where: {
      difficulty,
      questionField,
      questionType,
    },
  });

  return NextResponse.json({ data: entry });
};

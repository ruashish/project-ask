import { NextResponse } from 'next/server';

import { ListQuestionsRequest } from '@/lib/types';
import { prisma } from '@/lib/utils';

export const POST = async (request: Request) => {
  const { questionType, questionField, difficulty, page = 1, pageSize = 10 } = await request.json();

  const skip = (page - 1) * pageSize;

  // Dynamically build the where object based on the provided filters
  const where: ListQuestionsRequest = {};
  if (questionType) where.questionType = questionType;
  if (questionField) where.questionField = questionField;
  if (difficulty) where.difficulty = difficulty;

  const [entries, totalCount] = await prisma.$transaction([
    prisma.questions.findMany({
      skip,
      take: pageSize,
      where,
    }),
    prisma.questions.count({
      where,
    }),
  ]);

  return NextResponse.json({ data: entries, totalCount });
};

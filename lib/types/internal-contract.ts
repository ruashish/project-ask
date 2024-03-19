import { QuestionDifficulty, QuestionField, Questions, QuestionType } from '@prisma/client';

export interface ListQuestionsRequest {
  questionType?: QuestionType;
  questionField?: QuestionField;
  difficulty?: QuestionDifficulty;
}

export interface ListQuestionsResponse {
  data: Questions[];
  totalCount: number;
}

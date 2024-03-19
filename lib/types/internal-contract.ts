import { Questions } from '@prisma/client';

import { QuestionDifficulty, QuestionField, QuestionType } from '../constants/prompt-enums';

export interface ListQuestionsRequest {
  questionType?: QuestionType;
  questionField?: QuestionField;
  difficulty?: QuestionDifficulty;
}

export interface ListQuestionsResponse {
  data: Questions[];
  totalCount: number;
}

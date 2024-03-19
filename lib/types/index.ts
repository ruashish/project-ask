import { QuestionDifficulty, QuestionField, QuestionType } from '@/lib/constants/prompt-enums';

export interface CreatePromptProps {
  difficulty: QuestionDifficulty;
  questionType: QuestionType;
  questionField: QuestionField;
}
export * from './data-query';
export * from './internal-contract';

import { ApiRoutes } from '@/lib/constants/routes';
import { useDataQueries } from '@/lib/hooks';

export const QuestionTable = () => {
  const {
    data: questionsList,
    error: isQuestionError,
    isLoading: isQuestionsLoading,
  } = useDataQueries({ url: ApiRoutes.ListQuestions });

  console.log('questionsList', questionsList, isQuestionsLoading);

  return (
    <div>
      <h1>Question Table</h1>
    </div>
  );
};

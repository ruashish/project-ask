import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';
import { ApiRoutes } from '@/lib/constants/routes';
import { useDataQueries } from '@/lib/hooks';
import { ListQuestionsRequest, ListQuestionsResponse } from '@/lib/types';

export const QuestionTable = () => {
  const {
    data: questionsListData,
    error: isQuestionError,
    isLoading: isQuestionsLoading,
  } = useDataQueries<ListQuestionsRequest, ListQuestionsResponse>({
    url: ApiRoutes.ListQuestions,
  });

  if (isQuestionsLoading) return <div>Loading...</div>;

  const { data: questionList, totalCount } = questionsListData;

  return (
    <div className="rounded-md border">
      <Table className="h-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Status</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Difficulty</TableHead>
            <TableHead className="text-right">Acceptance</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="overflow-y-auto">
          {questionList.map((question) => (
            <TableRow key={question.id}>
              <TableCell className="font-medium">{}</TableCell>
              <TableCell>{question.title}</TableCell>
              <TableCell className="capitalize">{question.difficulty}</TableCell>
              <TableCell className="text-right">{}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

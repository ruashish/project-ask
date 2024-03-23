import Link from 'next/link';
import React from 'react';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';
import { ApiRoutes } from '@/lib/constants/routes';
import { useDataQueries } from '@/lib/hooks';
import { ListQuestionsRequest, ListQuestionsResponse } from '@/lib/types';

import { Button } from '../ui/button';

const PageSize = 20;

export const QuestionTable = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const {
    data: questionsListData,
    error: isQuestionError,
    isLoading: isQuestionsLoading,
  } = useDataQueries<ListQuestionsRequest, ListQuestionsResponse>({
    page: currentPage,
    pageSize: PageSize,
    queryKey: `list-question-${PageSize}`,
    url: ApiRoutes.ListQuestions,
  });

  if (isQuestionsLoading) return <div>Loading...</div>;

  const { data: questionList, totalCount } = questionsListData;

  const doesPreviousExists = currentPage > 1;
  const doesNextExists = totalCount > currentPage * PageSize;

  return (
    <div className="h-full">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Status</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Difficulty</TableHead>
              <TableHead className="text-right">Acceptance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {questionList.map((question) => (
              <TableRow key={question.id}>
                <TableCell className="font-medium">{}</TableCell>
                <TableCell className="cursor-pointer">
                  <Link href={`/problems/${question.id}`}>{question.title}</Link>
                </TableCell>
                <TableCell className="capitalize">{question.difficulty}</TableCell>
                <TableCell className="text-right">{}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          <Button
            disabled={!doesPreviousExists}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            size="sm"
            variant="outline"
          >
            Previous
          </Button>
          <Button
            disabled={!doesNextExists}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            size="sm"
            variant="outline"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

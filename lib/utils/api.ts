import { ApiRoutes } from '@/lib/constants/routes';
import { CreatePromptProps } from '@/lib/types';

const createURL = (path: string) => window.location.origin + path;

export const newProblemStatement = async (props: CreatePromptProps) => {
  const res = await fetch(
    new Request(createURL(ApiRoutes.ProblemStatement), {
      body: JSON.stringify(props),
      method: 'POST',
    }),
  );

  if (res.ok) {
    return res.json();
  } else {
    throw new Error('Something went wrong on API server!');
  }
};

export const listQuestions = async (props: {
  questionType: string;
  questionField: string;
  difficulty: string;
  page?: number;
}) => {
  const res = await fetch(
    new Request(createURL(ApiRoutes.ListQuestions), {
      body: JSON.stringify(props),
      method: 'POST',
    }),
  );

  if (res.ok) {
    return res.json();
  } else {
    throw new Error('Something went wrong on API server!');
  }
};

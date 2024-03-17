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

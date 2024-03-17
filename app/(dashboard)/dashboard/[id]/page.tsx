import { ProblemPage } from '@/components';

const Page = async ({ params }: { params: { id: string } }) => {
  // const user = await getUserByClerkID();
  // const questionId = params.id;
  // const questionData = await prisma.questions.findUnique({
  //   where: {
  //     id: questionId,
  //   },
  //   include: {
  //     submissions: {
  //       where: {
  //         userId: user?.id ?? "",
  //       },
  //     },
  //     testCases: true,
  //   },
  // });

  return <ProblemPage />;
};

export default Page;

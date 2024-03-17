import { ApiRoutes } from "@/constants/routes";
import { CreatePromptProps } from "@/types";

const createURL = (path: string) => window.location.origin + path;

export const newProblemStatement = async (props: CreatePromptProps) => {
  const res = await fetch(
    new Request(createURL(ApiRoutes.ProblemStatement), {
      method: "POST",
      body: JSON.stringify(props),
    })
  );

  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Something went wrong on API server!");
  }
};

import { CreatePromptProps } from "@/types";
import { OpenAI } from "langchain/llms/openai";
import { StructuredOutputParser } from "langchain/output_parsers";
import { PromptTemplate } from "langchain/prompts";
import z from "zod";

const parser = StructuredOutputParser.fromZodSchema(
  z.object({
    problemStatement: z
      .string()
      .describe(
        "a dsa problem statement with example, should have detailed description and examples for what user has to code. also be very creative with the problem statement."
      ),
    title: z.string().describe("a short title of the problem statement."),
    testCases: z
      .array(
        z
          .object({
            input: z.string(),
            output: z.string(),
          })
          .describe(
            "input is what function should take and output is expected output."
          )
      )
      .describe("7 test cases for the problem statement also add edge cases."),
  })
);

const getPrompt = async ({
  difficulty,
  questionType,
  questionField,
}: CreatePromptProps) => {
  const format_instructions = parser.getFormatInstructions();
  const prompt = new PromptTemplate({
    template:
      "generate a DSA(data structure and algorithm), and format your response to match the format instructions, no matter what! \n{format_instructions} \n{entry}",
    inputVariables: ["entry"],
    partialVariables: { format_instructions },
  });

  const input = await prompt.format({
    entry: `problem statement of difficulty ${difficulty}, related to ${questionField} field, focusing on ${questionType}`,
  });

  console.log(input);
  return input;
};

export const generateProblemStatement = async (props: CreatePromptProps) => {
  const input = await getPrompt(props);

  const model = new OpenAI({
    temperature: 0,
    modelName: "gpt-3.5-turbo",
  });

  const result = await model.invoke(input);

  console.log(result);

  return parser.parse(result);
};

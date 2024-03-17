import fs from "fs";
import path from "path";
import {
  QuestionDifficulty,
  QuestionField,
  QuestionType,
} from "./prompt-enums";

describe("Enum Sync Test", () => {
  const schema = fs.readFileSync(
    path.join(__dirname, "../prisma/schema.prisma"),
    "utf-8"
  );

  it("enums in Prisma schema and TypeScript code are in sync", () => {
    const questionTypeMatch = schema.match(/enum QuestionType \{([^}]+)\}/);
    const questionFieldMatch = schema.match(/enum QuestionField \{([^}]+)\}/);
    const questionDifficultyMatch = schema.match(
      /enum QuestionDifficulty \{([^}]+)\}/
    );

    expect(questionTypeMatch).toBeTruthy();
    expect(questionFieldMatch).toBeTruthy();
    expect(questionDifficultyMatch).toBeTruthy();

    if (questionTypeMatch && questionFieldMatch && questionDifficultyMatch) {
      const prismaQuestionType = questionTypeMatch[1].trim().split(/\s+/);
      const prismaQuestionField = questionFieldMatch[1].trim().split(/\s+/);
      const prismaQuestionDifficulty = questionDifficultyMatch[1]
        .trim()
        .split(/\s+/);

      expect(prismaQuestionType).toEqual(Object.values(QuestionType));
      expect(prismaQuestionField).toEqual(Object.values(QuestionField));
      expect(prismaQuestionDifficulty).toEqual(
        Object.values(QuestionDifficulty)
      );
    }
  });

  it("Question model has correct fields with correct types", () => {
    const questionModelMatch = schema.match(/model Questions \{([^}]+)\}/);

    expect(questionModelMatch).toBeTruthy();

    if (questionModelMatch) {
      const questionModel = questionModelMatch[1];

      expect(questionModel).toMatch(/questionType\s+QuestionType/);
      expect(questionModel).toMatch(/questionField\s+QuestionField/);
      expect(questionModel).toMatch(/difficulty\s+QuestionDifficulty/);
    }
  });
});

'use client';

import { QuestionDifficulty, QuestionField, QuestionType } from '@prisma/client';
import { PlusIcon } from '@radix-ui/react-icons';
import React from 'react';
import { toast } from 'sonner';

import { Button } from '@/lib/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/lib/components/ui/dialog';
import { Label } from '@/lib/components/ui/label';
import { enumToOptions } from '@/lib/utils';
import { newProblemStatement } from '@/lib/utils/api';

import { Combobox } from '../ui/combobox';

export const GenerateProblemDialog = () => {
  const [questionType, setQuestionType] = React.useState<QuestionType>();
  const [questionDifficulty, setQuestionDifficulty] = React.useState<QuestionDifficulty>();
  const [questionField, setQuestionField] = React.useState<QuestionField>();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="gap-2" variant="outline">
          <PlusIcon />
          <span className="text-sm">Create Question</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Customized Problem Statement</DialogTitle>
          <DialogDescription>Make changes to your profile here. Click save when done.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 text-sm">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Type
            </Label>
            <Combobox
              defaultButtonLabel={'Select question type'}
              notFoundLabel={'No match found'}
              onChange={(value) => {
                setQuestionType(value as QuestionType);
              }}
              options={enumToOptions(QuestionType)}
              searchLabel={'Search types'}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="username">
              Difficulty
            </Label>
            <Combobox
              defaultButtonLabel={'Select difficulty'}
              notFoundLabel={'No match found'}
              onChange={(value) => {
                setQuestionDifficulty(value as QuestionDifficulty);
              }}
              options={enumToOptions(QuestionDifficulty)}
              searchLabel={'Search types'}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="username">
              Field
            </Label>
            <Combobox
              defaultButtonLabel={'Select field'}
              notFoundLabel={'No match found'}
              onChange={(value) => {
                setQuestionField(value as QuestionField);
              }}
              options={enumToOptions(QuestionField)}
              searchLabel={'Search types'}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            className="text-sm"
            disabled={!questionType || !questionDifficulty || !questionField}
            onClick={async () => {
              if (questionType && questionDifficulty && questionField) {
                toast.info('Creating Problem Statement', {
                  description: 'Summoning our top-tier AI to whip up a fresh problem statement just for you',
                });
                const response = await newProblemStatement({
                  difficulty: questionDifficulty,
                  questionField: questionField,
                  questionType: questionType,
                });
                if (response.ok) {
                  toast.success('Problem Statement Created', {
                    description: 'Your problem statement has been created and is ready for use',
                  });
                } else {
                  toast.error('Problem Statement Creation Failed', {
                    description: 'We were unable to create your problem statement',
                  });
                }
              }
            }}
            size="sm"
            type="submit"
          >
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

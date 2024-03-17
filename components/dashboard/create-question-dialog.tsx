'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { QuestionDifficulty, QuestionField, QuestionType } from '@/lib/constants/prompt-enums';
import { enumToOptions } from '@/lib/utils';

import { Combobox } from '../ui/combobox';

export const CreateQuestionDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Create Question</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>Make changes to your profile here. Click save when done.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Type
            </Label>
            <Combobox
              defaultButtonLabel={'Select question type'}
              notFoundLabel={'No match found'}
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
              options={enumToOptions(QuestionField)}
              searchLabel={'Search types'}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

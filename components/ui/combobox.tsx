'use client';

import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from './command';

interface ComboboxProps {
  options: {
    label: string;
    value: string;
  }[];
  defaultButtonLabel: string;
  searchLabel: string;
  notFoundLabel?: string;
}

export const Combobox = ({
  options,
  defaultButtonLabel,
  searchLabel,
  notFoundLabel = 'No match found',
}: ComboboxProps) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild>
        <Button aria-expanded={open} className="w-[200px] justify-between" role="combobox" variant="outline">
          {value ? options.find((option) => option.value === value)?.label : defaultButtonLabel}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <Command>
          <CommandInput className="h-9" placeholder={searchLabel} />
          <CommandEmpty>{notFoundLabel}</CommandEmpty>
          <CommandGroup>
            {options.map((option) => (
              <CommandItem
                key={option.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue);
                  setOpen(false);
                }}
                value={option.value}
              >
                {option.label}
                <CheckIcon className={cn('ml-auto h-4 w-4', value === option.value ? 'opacity-100' : 'opacity-0')} />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

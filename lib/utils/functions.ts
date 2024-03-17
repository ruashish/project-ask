import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function enumToOptions(enumObject: Record<string, string>) {
  return Object.entries(enumObject).map(([key, value]) => {
    const modifiedKey = key.trim().replace('_', ' ');
    return {
      label: modifiedKey.charAt(0).toUpperCase() + modifiedKey.slice(1).toLowerCase(),
      value: value.toLowerCase(),
    };
  });
}

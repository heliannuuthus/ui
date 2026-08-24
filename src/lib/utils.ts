import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export type ClassNameValue =
  | ClassNameValue[]
  | Record<string, unknown>
  | ((...args: never[]) => unknown)
  | string
  | number
  | bigint
  | null
  | boolean
  | undefined;

export const cn = (...inputs: ClassNameValue[]): string => {
  return twMerge(clsx(inputs as never[]));
};

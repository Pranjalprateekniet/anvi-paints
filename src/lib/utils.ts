/**
 * cn — utility for conditionally joining class names.
 *
 * Lightweight alternative to clsx+tailwind-merge for this project's needs.
 * Handles strings, arrays, objects, and falsy values.
 */
export function cn(...inputs: ClassValue[]): string {
  return inputs
    .flat()
    .filter(Boolean)
    .map((input) => {
      if (typeof input === 'string') return input;
      if (typeof input === 'object' && input !== null) {
        return Object.entries(input)
          .filter(([, value]) => Boolean(value))
          .map(([key]) => key)
          .join(' ');
      }
      return '';
    })
    .join(' ')
    .trim();
}

type ClassValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | ClassValue[]
  | Record<string, unknown>;

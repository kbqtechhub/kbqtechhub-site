import type { FieldHook } from 'payload';

/**
 * Formats a string into a URL-friendly slug
 * - Replaces spaces with hyphens
 * - Removes special characters
 * - Converts to lowercase
 *
 * @param {string} val - The string to format
 * @returns {string} The formatted slug
 */
const format = (val: string): string =>
  val
    .replace(/ /g, '-')
    .replace(/[^\w-/]+/g, '')
    .toLowerCase();

/**
 * Creates a field hook for generating slugs in Payload CMS
 * The hook will use the provided value if it exists, otherwise fall back
 * to another specified field to generate the slug
 *
 * @param {string} fallback - The field name to use as fallback if no value is provided
 * @returns {FieldHook} A Payload field hook function
 */
export const slugField =
  (fallback: string): FieldHook =>
  ({ value, originalDoc, data }) => {
    if (typeof value === 'string') {
      return format(value);
    }
    const fallbackData = data?.[fallback] || originalDoc?.[fallback];

    if (fallbackData && typeof fallbackData === 'string') {
      return format(fallbackData);
    }

    return value;
  };

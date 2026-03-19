import { marked } from "marked";

/**
 * Parses inline markdown syntax (bold, italic, links) to HTML.
 * Used for rendering formatted text in job highlights and descriptions.
 *
 * @param text - Text containing markdown syntax (e.g., "**bold** text")
 * @returns HTML string with markdown converted to tags
 */
export function parseMarkdown(text: string): string {
  return marked.parseInline(text) as string;
}

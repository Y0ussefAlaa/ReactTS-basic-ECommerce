/**
 *
 * @param {string} text - The input text to be sliced.
 * @param {number} [maxLength = 50 ] - The maximum length before truncation.
 * @returns The Sliced text , with an ellipsis (...) append if truncated
 */
export const txtSlicer = (text: string, maxLength: number = 50) => {
  if (text.length >= maxLength) return `${text.slice(0, maxLength)}...`;
  else return text;
};

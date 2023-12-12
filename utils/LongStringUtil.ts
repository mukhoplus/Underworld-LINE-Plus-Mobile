export const LongStringUtil = (string: string, maxLength: number): string => {
  return string.length > maxLength
    ? `${string.slice(0, maxLength)}...`
    : string;
};

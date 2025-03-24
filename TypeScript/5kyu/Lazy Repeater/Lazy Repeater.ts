export const makeLooper = (str: string): () => string => {
  let index = 0;
  return (): string => {
    const char = str.charAt(index);
    index = (index + 1) % str.length;
    return char;
  };
};

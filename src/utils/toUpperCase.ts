export const convertFirstLetterToUpperCase = (name: string): string => {
  return name[0].toUpperCase() + name.slice(1, name.length).split(" ")[0];
};

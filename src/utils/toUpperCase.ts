export const convertFirstLetterToUpperCase = (
  name: any
): string | undefined => {
  try {
    if (!name || typeof name !== "string") {
      return undefined;
    }
    return name[0].toUpperCase() + name.slice(1, name.length).split(" ")[0];
  } catch (e) {
    throw e;
  }
};

export const capitalize = (str: string) =>
  str.length ? str.charAt(0).toLocaleUpperCase() + str.slice(1) : str;

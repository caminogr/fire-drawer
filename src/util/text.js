export const trimOutsideEmptyCharacters = text =>
  text.replace(/(^\s+)|(\s+$)/g, '');

export const formatTitle = (title) => {
  if (!title) return '';

  return title
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

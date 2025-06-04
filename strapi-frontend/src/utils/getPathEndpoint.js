export const getPathEndpoint = () => {
  const endpoint = window.location.pathname.split('/').filter(Boolean).pop() || '';
  if (endpoint.at(-1) !== 's') return endpoint + 's';
  return endpoint;
};

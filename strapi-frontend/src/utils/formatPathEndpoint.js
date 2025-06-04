export const formatPathEndpoint = (endpoint) => {
  if (endpoint.at(-1) === 's') return endpoint.slice(0, -1);
  return endpoint;
};

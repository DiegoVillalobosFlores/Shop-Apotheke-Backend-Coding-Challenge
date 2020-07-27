import Repositories from './api';

export default () => {
  const api = new Repositories();

  return {
    getRepositories: (request) => api.getRepositories(request),
  };
};

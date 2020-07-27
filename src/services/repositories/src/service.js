import Repositories from './api';

export default ({ GITHUB_API_URL }) => {
  const api = new Repositories(GITHUB_API_URL);

  return {
    getRepositories: (request) => api.getRepositories(request),
  };
};

import Repositories from '../../services/repositories/src';

const repositories = Repositories();

export default [
  ['get', '/getRepositories', (request) => repositories.getRepositories(request.query)],
];

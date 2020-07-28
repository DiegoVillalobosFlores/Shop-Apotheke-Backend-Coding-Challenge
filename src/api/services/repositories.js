import Repositories from '../../services/repositories/src';

const repositories = Repositories();

export default [
  ['get', '/getRepos', (request) => repositories.getRepositories(request.query)],
  [
    'get',
    '/getMostPopularRepos',
    (request) => repositories.getRepositories({ ...request.query, sort: 'stars' }),
  ],
  [
    'get',
    '/getTop10Repos',
    (request) => repositories.getRepositories({ ...request.query, sort: 'stars', limit: 10 }),
  ],
  [
    'get',
    '/getTop50Repos',
    (request) => repositories.getRepositories({ ...request.query, sort: 'stars', limit: 50 }),
  ],
  [
    'get',
    '/getTop100Repos',
    (request) => repositories.getRepositories({ ...request.query, sort: 'stars', limit: 100 }),
  ],
];

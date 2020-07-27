import test from 'ava';
import moment from 'moment';

import Repositories from '../src';

test.before((t) => {
  // eslint-disable-next-line no-param-reassign
  t.context.repositories = Repositories({ GITHUB_API_URL: 'https://api.github.com' });
});

test('get repos by language', async (t) => {
  const { repositories } = t.context;

  await t.throwsAsync(repositories.getRepositories({}));

  const messageOnlyResponse = await repositories.getRepositories({
    language: 'javascript',
  });

  t.is(messageOnlyResponse.data.length > 0, true);
  t.is(messageOnlyResponse.data[0].language, 'JavaScript');
});

test('get repos by created at', async (t) => {
  const { repositories } = t.context;

  const createdAtOnlyResponse = await repositories.getRepositories({
    createdAt: '2020-07-26',
  });

  t.is(createdAtOnlyResponse.data.length > 0, true);
  t.is(moment(createdAtOnlyResponse.data[0].created_at).isSameOrAfter('2020-07-26'), true);

  const languageAndCreatedResponse = await repositories.getRepositories({
    language: 'javascript',
    createdAt: '2019-07-26',
  });

  t.is(languageAndCreatedResponse.data.length > 0, true);
  t.is(languageAndCreatedResponse.data[0].language, 'JavaScript');
  t.is(moment(languageAndCreatedResponse.data[0].created_at).isSameOrAfter('2019-07-26'), true);
});

test('get repos with sorting', async (t) => {
  const { repositories } = t.context;

  await t.throwsAsync(repositories.getRepositories({ sorting: { } }));

  const starSortingResponse = await repositories.getRepositories({
    language: 'javascript',
    sorting: {
      field: 'stars',
    },
  });

  t.is(starSortingResponse.data.length > 1, true);

  const [firstRepoDesc, secondRepoDesc] = starSortingResponse.data;

  t.is(firstRepoDesc.stargazers_count > secondRepoDesc.stargazers_count, true);

  const starSortedAscResponse = await repositories.getRepositories({
    language: 'javascript',
    sorting: {
      field: 'stars',
      direction: 'asc',
    },
  });

  const [firstRepoAsc, secondRepoAsc] = starSortedAscResponse.data;

  t.is(firstRepoAsc.stargazers_count > secondRepoAsc.stargazers_count, true);
});

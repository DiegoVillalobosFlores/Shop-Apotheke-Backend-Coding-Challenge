import superagent from 'superagent';

class Repositories {
  constructor() {
    this.BASE_URL = 'https://api.github.com';
    this.SEARCH_REPOS_URL = '/search/repositories';
    this.USER_AGENT = 'Shop-Apotheke-Coding-Challenge';
  }

  generateURL(inputURL, params) {
    return Object
      .entries(params)
      .reduce((acc, [key, value]) => acc.concat(`${key}=${value}&`), `${this.BASE_URL}${inputURL}?`);
  }

  async getRepositories({
    language, limit, starting, sort, order,
  }) {
    const params = {
      q: '', sort, order, per_page: limit,
    };

    if (language) params.q = params.q.concat(`language:${language}`);
    if (starting) params.q = params.q.concat(`${language ? '+' : ''}created:>${starting}`);

    const url = this.generateURL(this.SEARCH_REPOS_URL, params);

    const { body: result } = await superagent
      .get(url)
      .set('User-Agent', this.USER_AGENT);

    return { data: result.items };
  }
}

export default Repositories;

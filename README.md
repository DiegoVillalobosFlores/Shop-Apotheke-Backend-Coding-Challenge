Shop Apotheke Backend Challenge by Diego Villalobos.

## Made with Node + fastify

[CI enabled on GCP with Cloud Build and Cloud Run](https://server-apotheke-4mzymbpevq-ew.a.run.app/)

### How to run

```yarn start-server```

or

```docker build -t backend-challenge:1.0.0 . && docker run -d -p 3000:3000 --name challenge backend-challenge:1.0.0```

### API Documentation

#### /getRepos

This is the main route to search for repos.

Params: 

| Name | Type | Value | Required | Description |
| -----|:----:|:-------:|:--------:|:-----------:|
| ```language``` | ```string``` | any | (Only if 'starting' is missing) | Query only repos written in the specified language _i.e._ ```javascript```|
| ```starting``` | ```string``` | date | (Only if 'language' is missing) | Query only created after the specified date _i.e._ ```2020-07-27```|
| ```limit``` | ```number``` | 0-100 | No | Limits the amount of repos per request _i.e._ ```100```|
| ```sort``` | ```string``` | ```stars``` ```forks``` ```help-wanted-issues``` ```updated```  | No | Sorts the repos by the specified field _i.e_ ```stars```|
| ```order``` | ```string``` | ```desc``` ```asc``` | No | Changed the direction of the sorting applied to the repos _i.e._ ```desc```|

Returns JSON: 

```
{
    "data": []
}
```

Example:

> [/getRepos](https://server-apotheke-4mzymbpevq-ew.a.run.app/getRepos?language=javascript&limit=2&createdAt=2020-06-27&sort=stars&order=desc)

#### /getMostPopularRepos

Same as  ```/getRepos``` but always returns the data sorted by ```stars``` in a ```desc``` order.

Params: 

| Name | Type | Value | Required | Description |
| -----|:----:|:-------:|:--------:|:-----------:|
| ```language``` | ```string``` | any | (Only if 'starting' is missing) | Query only repos written in the specified language _i.e._ ```javascript```|
| ```starting``` | ```string``` | date | (Only if 'language' is missing) | Query only created after the specified date _i.e._ ```2020-07-27```|
| ```limit``` | ```number``` | 0-100 | No | Limits the amount of repos per request _i.e._ ```100```|

Returns JSON: 

```
{
    "data": []
}
```

Example:

> [/getMostPopularRepos](https://server-apotheke-4mzymbpevq-ew.a.run.app/getMostPopularRepos?language=javascript&limit=2&createdAt=2020-06-27)

#### /getTop10Repos

Same as ```/getMostPopularRepos``` but always returns 10 elements at _max_.

Params: 

| Name | Type | Value | Required | Description |
| -----|:----:|:-------:|:--------:|:-----------:|
| ```language``` | ```string``` | any | (Only if 'starting' is missing) | Query only repos written in the specified language _i.e._ ```javascript```|
| ```starting``` | ```string``` | date | (Only if 'language' is missing) | Query only created after the specified date _i.e._ ```2020-07-27```|

Returns JSON: 

```
{
    "data": []
}
```

Example:

> [/getTop10Repos](https://server-apotheke-4mzymbpevq-ew.a.run.app/getTop10Repos?language=javascript&createdAt=2020-06-27)

#### /getTop50Repos

Same as ```/getTop10Repos``` but always returns 50 elements at _max_.

Params: 

| Name | Type | Value | Required | Description |
| -----|:----:|:-------:|:--------:|:-----------:|
| ```language``` | ```string``` | any | (Only if 'starting' is missing) | Query only repos written in the specified language _i.e._ ```javascript```|
| ```starting``` | ```string``` | date | (Only if 'language' is missing) | Query only created after the specified date _i.e._ ```2020-07-27```|

Returns JSON: 

```
{
    "data": []
}
```

Example:

> [/getTop50Repos](https://server-apotheke-4mzymbpevq-ew.a.run.app/getTop50Repos?language=javascript&createdAt=2020-06-27)

#### /getTop100Repos

Same as ```/getTop10Repos``` but always returns 100 elements at _max_.

Params: 

| Name | Type | Value | Required | Description |
| -----|:----:|:-------:|:--------:|:-----------:|
| ```language``` | ```string``` | any | (Only if 'starting' is missing) | Query only repos written in the specified language _i.e._ ```javascript```|
| ```starting``` | ```string``` | date | (Only if 'language' is missing) | Query only created after the specified date _i.e._ ```2020-07-27```|

Returns JSON: 

```
{
    "data": []
}
```

Example:

> [/getTop100Repos](https://server-apotheke-4mzymbpevq-ew.a.run.app/getTop100Repos?language=javascript&createdAt=2020-06-27)

# countrycode-from-cran

JS port of [R package countrycode](https://github.com/vincentarelbundock/countrycode) by Prof. Vincent Arel-Bundock 

> Arel-Bundock, Vincent, Nils Enevoldsen, and CJ Yetman, (2018). countrycode: An R package to convert country names and country codes. Journal of Open Source Software, 3(28), 848, https://doi.org/10.21105/joss.00848

### Install

```shell
npm install countrycode-from-cran
```


### Usage

#### import

``` typescript
const countrycode = require('countrycode-from-cran')

// Or,
import * as countrycode from 'countrycode-from-cran'
```

#### find

```typescript
countrycode.find('JPN', 'cowc')

// =>
{
  ar5: 'OECD1990',
  cctld: '.jp',
  continent: 'Asia',
  'country.name.de': 'Japan',
  'country.name.de.regex': 'japan',
  'country.name.en': 'Japan',
  'country.name.en.regex': 'japan',
  'cow.name': 'Japan',
  cowc: 'JPN',
  cown: 740,
  currency: 'Yen',
  ...
}
```

#### findAll


```typescript
countrycode.findAll(['Japan', 'Antarctica'], 'country.name.en')

// =>
[
   {
      ar5: 'OECD1990',
      cctld: '.jp',
      continent: 'Asia',
      'country.name.de': 'Japan',
      'country.name.de.regex': 'japan',
      'country.name.en': 'Japan',
      'country.name.en.regex': 'japan',
      'cow.name': 'Japan',
      cowc: 'JPN',
      cown: 740,
      currency: 'Yen',
      ...
   },
   {
      ar5: 'LAM',
      cctld: '.aq',
      continent: '',
      'country.name.de': 'Antarktis',
      'country.name.de.regex': 'antarktis',
      'country.name.en': 'Antarctica',
      'country.name.en.regex': 'antarctica',
      'cow.name': '',
      cowc: '',
      cown: null,
      ...
   }
]
```

#### guessCodeKey

```typescript
countrycode.guessCodeKey(['Japan', 'Antarctica'])

// =>
[
  {
    key: 'country.name.en',
    results: [ [Object], [Object] ],
    hits: 2,
    missing: 0,
    matchRatio: 1
  },
  {
    key: 'country.name.en.regex',
    results: [ [Object], [Object] ],
    hits: 2,
    missing: 0,
    matchRatio: 1
  },
  {
    key: 'iso.name.en',
    results: [ [Object], [Object] ],
    hits: 2,
    missing: 0,
    matchRatio: 1
  },
  ...
]
```

#### fuzzySearch

``` typescript
countrycode.fuzzySearch('Congo', 'country.name.en')
// =>
[
  {
    ar5: 'MAF',
    cctld: '.cg',
    continent: 'Africa',
    'country.name.de': 'Kongo',
    'country.name.en': 'Congo - Brazzaville',
    'cow.name': 'Congo',
    cowc: 'CON',
    cown: 484,
    ...
  },
  {
    ar5: 'MAF',
    cctld: '.cd',
    continent: 'Africa',
    'country.name.de': 'Demokratische Republik Kongo',
    'country.name.en': 'Congo - Kinshasa',
    'cow.name': 'Democratic Republic of the Congo',
    cowc: 'DRC',
    cown: 490,
    ...
  }
]
```

#### fuzzySearchAll

``` typescript
countrycode.fuzzySearchAll(['Jpn', 'Antarctic', 'Congo'])
// =>
[
  [ 'Jpn', [ [Object] ] ],
  [ 'Antarctic', [ [Object] ] ],
  [ 'Congo', [ [Object], [Object] ] ]
]
```

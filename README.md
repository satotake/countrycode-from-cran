# countrycode-from-cran

JS wrapper for [R package countrycode](https://github.com/vincentarelbundock/countrycode)

### Install

```shell
npm install countrycode-from-cran
```


### Usage

#### import

``` typescript
const countrycode = require('countrycode-from-cran');

// Or,
import * as countrycode from 'countrycode-from-cran';
```

#### find

```typescript
countrycode.find('JPN, 'cowc')

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
countrycode.fuzzySearchAll('Congo, 'country.name.en')
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

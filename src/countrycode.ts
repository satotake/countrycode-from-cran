import { Country } from './types'
import _countries from '../data/codelist.json'
import fuzzysearch from 'fuzzysearch'

const COUNTRIES = _countries as Country[]
const KEYS = Object.keys(COUNTRIES[0]) as (keyof Country)[]

export const find = (
  input: string | number,
  origin: keyof Country = 'country.name.en',
): Country | undefined => COUNTRIES.find((c: Country) => c[origin] === input)

export const findAll = (
  input: (string | number)[],
  origin: keyof Country = 'country.name.en',
): (Country | undefined)[] => {
  const map = new Map(COUNTRIES.map((c) => [c[origin], c]))
  return input.map((i) => map.get(i))
}

type GuessResult = {
  key: keyof Country
  hits: number
  missing: number
  matchRatio: number
  results: (Country | undefined)[]
}

export const guessCodeKey = (
  input: (string | number)[],
  targets: (keyof Country)[] = KEYS,
  preprocess: (d: string | number | null) => any = (d) =>
    String(d).toLowerCase(),
): GuessResult[] => {
  const maps: [
    keyof Country,
    Map<string | number | null, Country>,
  ][] = targets.map((k) => [
    k,
    new Map(COUNTRIES.map((c) => [preprocess(c[k]), c])),
  ])

  return maps
    .map(([key, map]) => ({
      key,
      results: input.map((i) => map.get(preprocess(i))),
    }))
    .map((res) => ({
      ...res,
      hits: res.results.filter((r) => r).length,
      missing: res.results.filter((r) => !r).length,
      matchRatio: res.results.filter((r) => r).length / res.results.length,
    }))
    .sort((a, b) => -a.matchRatio + b.matchRatio)
}

export const fuzzySearch = (
  input: string | number,
  origin: keyof Country = 'country.name.en',
  preprocess: (d: string | number | null) => any = (d) =>
    String(d).toLowerCase(),
): (Country | undefined)[] => {
  return String(input) === ''
    ? []
    : COUNTRIES.filter((c) =>
        fuzzysearch(String(preprocess(input)), String(preprocess(c[origin]))),
      )
}

export const fuzzySearchAll = (
  input: (string | number)[],
  origin: keyof Country = 'country.name.en',
): [string | number, (Country | undefined)[]][] => {
  return input.map((i) => [i, fuzzySearch(i, origin)])
}

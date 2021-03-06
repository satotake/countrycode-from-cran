import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import json from '@rollup/plugin-json'

import sourceMaps from 'rollup-plugin-sourcemaps'

const pkg = require('./package.json')


const libraryName = 'countrycode'

export default {
  input: `src/${libraryName}.ts`,
  output: [
    { file: pkg.main, name: (libraryName), format: 'umd', sourcemap: true },
    { file: pkg.module, format: 'es', sourcemap: true },
  ],
  external: [],
  watch: {
    include: 'src/**',
  },
  plugins: [
    json(),
    typescript(),
    commonjs(),
    resolve(),
    sourceMaps(),
  ],
}

import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import json from '@rollup/plugin-json'
// import packageJson from './package.json'

const integrityCheck = require('./config/plugins/rollup-integrity-check-plugin')
const {
  SERVICE_WORKER_SOURCE_PATH,
  SERVICE_WORKER_BUILD_PATH,
} = require('./config/constants')

export default [
  {
    input: ['tree-shaked.js'],
    output: [
      {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        dir: 'lib/tree',
        format: 'esm',
      },
    ],
    plugins: [
      json(),
      resolve({
        preferBuiltins: false,
        mainFields: ['module', 'main', 'jsnext:main', 'browser'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      })
    ],
  },
]

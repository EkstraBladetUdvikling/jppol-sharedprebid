// Rollup plugins
import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';

const plugins = [
  typescript(),
  babel({
    exclude: 'node_modules/**'
  })
];

export default [
  {
    input: './src/index.ts',
    output: {
      file: './tspublic/index.js',
      format: 'iife',
      name: 'jppol'
    },
    plugins
  }
];

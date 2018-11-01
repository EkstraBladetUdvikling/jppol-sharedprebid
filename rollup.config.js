// Rollup plugins
import babel from 'rollup-plugin-babel';
import multiEntry from 'rollup-plugin-multi-entry';
import typescript from 'rollup-plugin-typescript2';
import { uglify } from 'rollup-plugin-uglify';
const plugins = [
  multiEntry(),
  typescript(),
  babel({
    exclude: 'node_modules/**'
  })
];

function getPlugins(state) {
  if (state === 'debug') {
    plugins.push(
      uglify({
        compress: false,
        ie8: false,
        keep_fnames: true,
        mangle: false,
        nameCache: null,
        output: {
          beautify: {
            quote_style: 1
          }
        },
        toplevel: false,
        warnings: false
      })
    );
  } else {
    plugins.push(
      uglify({
        compress: {
          drop_console: true
        }
      })
    );
  }
  return plugins;
}

export default [
  {
    input: './src/index.ts',
    output: {
      file: './tspublic/index.min.js',
      format: 'iife',
      name: 'jppol'
    },
    plugins: getPlugins('production')
  },
  {
    input: './src/index.ts',
    output: {
      file: './tspublic/index.debug.js',
      format: 'iife',
      name: 'jppol'
    },
    plugins: getPlugins('debug')
  }
];

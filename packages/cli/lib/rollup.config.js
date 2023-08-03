const resolve = require('rollup-plugin-node-resolve');
const vue = require('rollup-plugin-vue');
const babel = require('rollup-plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');
const {nodeResolve} = require('@rollup/plugin-node-resolve');
const image = require('@rollup/plugin-image');
const alias = require('@rollup/plugin-alias');
const requireContext = require('rollup-plugin-require-context');
const postcss = require('rollup-plugin-postcss');
const svg = require('rollup-plugin-svg');
const url = require('rollup-plugin-url');
const path = require('path');
const {terser} = require('rollup-plugin-terser');
const livereload = require('rollup-plugin-livereload');
const copy = require('rollup-plugin-copy');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const typescript = require('rollup-plugin-typescript2');
const fs = require('fs');
const isProd = process.env.NODE_ENV === 'production';
console.log(process.env.NODE_ENV);
const path_resolve = (...args) => path.resolve(process.cwd(), ...args);
const packageJsonData = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const config = {
    input: path_resolve('index.js'),
    external: [/@babel\/runtime/, 'vue'],
    output: [
        {
            dir: path_resolve('dist'),
            format: 'es',
            entryFileNames: chunk => `[name].mjs`,
        },
        {
            dir: path_resolve('dist'),
            format: 'cjs',
            exports: 'named',
            entryFileNames: chunk => `[name].cjs`,
        },
    ],
    plugins: [
        nodeResolve(),
        resolve({
            extensions: ['.vue'],
        }),
        alias({}),
        copy({
            targets: [
                {src: 'public/*', dest: path_resolve('dist/static')},
            ],
        }),
        vue({}),
        babel({
            exclude: 'node_modules/**',
            extensions: ['.js', '.vue'],
        }),
        postcss({
            extract: false,
            minimize: isProd,
            extensions: ['.css', '.less'],
        }),
        url({
            include: ['**/*.woff', '**/*.ttf'],
            limit: Infinity,
        }),
        image(),
        svg(),
        requireContext(),
        terser(),
        peerDepsExternal({
            includeDependencies: !isProd,
        }),
    ],
};

if (!isProd) {
    config.plugins.push(livereload());
}

module.exports = config;

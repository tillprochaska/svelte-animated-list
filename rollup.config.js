import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';

const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'example/src/index.js',
    output: {
        sourcemap: true,
        format: 'es',
        name: 'app',
        file: 'example/dist/bundle.js',
    },
    plugins: [
        svelte({
            dev: !production,
            cascade: false,
        }),

        resolve(),
        commonjs(),

        production && buble({ exclude: 'node_modules/**' }),
        production && uglify(),
    ]
};
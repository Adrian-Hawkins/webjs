import { defineConfig } from 'vite';
import babel from 'vite-plugin-babel';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  base: "./",
  plugins: [
    federation({
      name: 'remote',
      filename: 'remoteEntry.js',
      exposes: {
        './sayHello': './src/sayHello.js',
      },
    }),
    babel({
      babelConfig: {
        plugins: [
          ["@babel/plugin-proposal-decorators", { "version": "2023-11" }],
          "@babel/plugin-transform-class-static-block"
        ],
      },
    }),
  ],
  server: {
    host: true,
    port: 3001,
    open: "/home",
  },
});
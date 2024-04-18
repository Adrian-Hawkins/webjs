import { defineConfig } from 'vite';
import babel from 'vite-plugin-babel';

export default defineConfig({
  base: "./",
  plugins: [
    babel({
      babelConfig: {
        // babelrc: false,
        // configFile: false,
        plugins: [
          ["@babel/plugin-proposal-decorators", { "version": "2023-11" }]
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
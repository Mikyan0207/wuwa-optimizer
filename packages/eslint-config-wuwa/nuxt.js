import antfu from "@antfu/eslint-config";
import { baseConfig } from './base.js';

/**
 * A custom ESLint configuration for Nuxt.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const nuxtConfig = antfu({
    formatters: true,
    stylistic: {
      indent: 2,
      quotes: 'double',
    },
  }).prepend(baseConfig);
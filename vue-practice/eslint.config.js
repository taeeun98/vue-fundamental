import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import * as parserVue from 'vue-eslint-parser'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/strongly-recommended'],

  {
    languageOptions: {
      parser: parserVue,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
      },
    },
  },

  {
    rules: {
      // Vue 컴포넌트 관련 규칙
      'vue/no-undef-components': ['error', {
        ignorePatterns: []
      }],
      'vue/component-definition-name-casing': ['error', 'PascalCase'],
      'vue/no-unused-components': 'warn',
      'vue/multi-word-component-names': 'off', // 필요에 따라 조정
      
      // TypeScript 관련 규칙
      '@typescript-eslint/no-unused-vars': 'warn',
      
    },
  },
]
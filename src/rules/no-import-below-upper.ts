import { ESLintUtils, TSESTree } from '@typescript-eslint/utils';

const createRule = ESLintUtils.RuleCreator((name) => `https://example.com/rule/${name}`);

export const rule = createRule({
  name: __filename.replace('.ts', ''),
  meta: {
    docs: {
      description: '',
      recommended: 'error',
    },
    messages: {
      error: 'Do not import bellow an upper-case-first directory or file',
    },
    type: 'problem',
    schema: [],
  },
  defaultOptions: [],
  create(context) {
    return {
      ImportDeclaration(node: TSESTree.ImportDeclaration) {
        const parts = node.source.value.split('/').filter((p) => p !== '.' && p !== '..');
        const upper = parts.findIndex((p) => p.toUpperCase() === p);
        const lower = parts.findIndex((p) => p.toLowerCase() === p);
        if (lower > upper) {
          context.report({
            messageId: 'error',
            node,
          });
        }
      },
    };
  },
});

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
      error: 'Import of lower-case after upper case in "{{source}}"',
    },
    type: 'problem',
    schema: [],
  },
  defaultOptions: [],
  create(context) {
    return {
      ImportDeclaration(node: TSESTree.ImportDeclaration) {
        const parts = node.source.value.split('/').filter((p) => p !== '.' && p !== '..');
        const upper = parts.findIndex((p) => p[0].toUpperCase() === p[0]);
        if (upper === -1) {
          return;
        }
        const found = parts.find((p, j) => j > upper && p[0].toLowerCase() === p[0]);
        if (found) {
          context.report({
            messageId: 'error',
            node,
            data: {
              source: node.source.value,
            },
          });
        }
      },
    };
  },
});

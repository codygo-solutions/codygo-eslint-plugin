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
      error: 'Import of lower-case after upper case in "{{source}}": "{{upperCased}}"',
    },
    type: 'problem',
    schema: [],
  },
  defaultOptions: [],
  create(context) {
    return {
      ImportDeclaration(node: TSESTree.ImportDeclaration) {
        const results = /^(.*\/)?([A-Z][^/]*)\//gm.exec(node.source.value);
        if (results) {
          context.report({
            messageId: 'error',
            node,
            data: {
              upperCased: results[2] as string,
              source: node.source.value,
            },
          });
        }
      },
    };
  },
});

// import { rule as layeredModuleImports } from './rules/layered-module-imports';
import { rule as noImportBellowIndex } from './rules/no-import-below-upper';

export default {
  rules: {
    // 'layered-module-imports': layeredModuleImports,
    'no-import-below-upper': noImportBellowIndex,
  },
  configs: {
    recommended: {
      'no-import-below-index': 'error',
      //   'layered-module-imports': 'error',
    },
  },
};

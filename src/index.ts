/* eslint-disable @typescript-eslint/no-explicit-any */
// import { rule as layeredModuleImports } from './rules/layered-module-imports';
import { rule as noImportBellowIndex } from './rules/no-import-below-upper';

export const rules = {
  // 'layered-module-imports': layeredModuleImports,
  'no-import-below-upper': noImportBellowIndex,
};

export const configs = {
  recommended: {
    'no-import-below-index': 'error',
    //   'layered-module-imports': 'error',
  },
};

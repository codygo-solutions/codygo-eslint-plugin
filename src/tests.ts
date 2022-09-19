import { ESLintUtils } from '@typescript-eslint/utils';

import { rule } from './rules/no-import-below-upper';

const ruleTester = new ESLintUtils.RuleTester({
  parser: '@typescript-eslint/parser',
  settings: {},
});

ruleTester.run('no-import-below-upper', rule, {
  valid: [
    { code: 'import a from "x";' },
    { code: 'import a from "X";' },
    { code: 'import a from "Xx";' },
    { code: 'import a from "xXx";' },
    { code: 'import a from "./x";' },
    { code: 'import a from "./X";' },
    { code: 'import a from "./Xx";' },
    { code: 'import a from "./xXx";' },
    { code: 'import a from "../x";' },
    { code: 'import a from "../../X";' },
    { code: 'import a from "../../../Xx";' },
    { code: 'import a from "../../xXx";' },
    { code: 'import a from "../../../../x";' },
    { code: 'import a from "./a/b/c/X";' },
    { code: 'import a from "../../a/b/c/../Xx";' },
    { code: 'import a from "../xXx/a/b/c";' },
    { code: 'import a from "../../a/b/c/../Xx.svg";' },
    { code: 'import a from "../xXx/a/b/c.css";' },
    { code: 'import a from "@heroicons/react/24/a"' },
    { code: 'import a from "@heroicons/react/24/A";' },
    { code: 'import a from "@heroicons/react/24/aA";' },
    { code: 'import a from "@heroicons/react/24/Aa";' },
    { code: 'import a from "~/aa/react/24/a";' },
    { code: 'import a from "~/abc/react/24/A";' },
    { code: 'import a from "@~/abx/react/24/aA";' },
    { code: 'import a from "~/abc/react/24/Aa";' },
    { code: 'import a from "~/aa/react/24/a/BN";' },
    { code: 'import a from "@~/abx/react/24/aA/a/B";' },
  ],
  invalid: [
    { code: 'import a from "./X/y";', errors: [{ messageId: 'error' }] },
    { code: 'import a from "X/y";', errors: [{ messageId: 'error' }] },
    { code: 'import a from "../X/y/v/x";', errors: [{ messageId: 'error' }] },
    { code: 'import a from "a/b/c/X/y/v/x";', errors: [{ messageId: 'error' }] },
    { code: 'import a from "@heroicons/react/24/Aa/a";', errors: [{ messageId: 'error' }] },
    { code: 'import a from "~/abc/react/24/A/B";', errors: [{ messageId: 'error' }] },
    { code: 'import a from "~/abc/react/24/Aa/Cde";', errors: [{ messageId: 'error' }] },
  ],
});

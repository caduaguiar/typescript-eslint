import type { TSESTree } from '@typescript-eslint/types';

import { VariableBase } from './VariableBase';

/**
 * ESLint defines global variables using the eslint-scope Variable class
 * This is declared here for consumers to use
 */
export class ESLintScopeVariable extends VariableBase {
  /**
   * Written to by ESLint.
   * If this key exists, this variable is a global variable added by ESLint.
   * If this is `true`, this variable can be assigned arbitrary values.
   * If this is `false`, this variable is readonly.
   */
  public writeable?: boolean; // note that this isn't a typo - ESlint uses this spelling here

  /**
   * Written to by ESLint.
   * This property is undefined if there are no globals comment directives.
   * The array of globals comment directives which defined this global variable in the source code file.
   */
  public eslintExplicitGlobal?: boolean;

  /**
   * Written to by ESLint.
   * The configured value in config files. This can be different from `variable.writeable` if there are globals comment directives.
   */
  public eslintImplicitGlobalSetting?: 'readonly' | 'writable';

  /**
   * Written to by ESLint.
   * If this key exists, it is a global variable added by ESLint.
   * If `true`, this global variable was defined by a globals comment directive in the source code file.
   */
  public eslintExplicitGlobalComments?: TSESTree.Comment[];
}

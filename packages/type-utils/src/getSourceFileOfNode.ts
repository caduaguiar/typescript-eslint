import * as ts from 'typescript';

/**
 * @deprecated
 * Gets the source file for a given node
 */
export function getSourceFileOfNode(node: ts.Node): ts.SourceFile {
  while (node.kind !== ts.SyntaxKind.SourceFile) {
    node = node.parent;
  }
  return node as ts.SourceFile;
}

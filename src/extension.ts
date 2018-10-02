'use strict';

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('[bracket-highligher-vscode] is now active!');

  let matchDisposable = vscode.commands.registerCommand(
    'extension.matchBrackets',
    () => {
      const editor: vscode.TextEditor | undefined =
        vscode.window.activeTextEditor;
      if (!editor) {
        console.error("Can't run if there's no active file");
        return;
      }
    }
  );

  context.subscriptions.push(matchDisposable);
}

export function deactivate() {}

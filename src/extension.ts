import * as vscode from "vscode";
import axios from "axios";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "codingBuddy.askCodingBuddy",
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showInformationMessage(
          "Please open a file to ask the coding buddy."
        );
        return;
      }

      const selectedText =
        editor.document.getText(editor.selection) || editor.document.getText();

      const prompt = await vscode.window.showInputBox({
        placeHolder: "What do you want to ask the coding buddy?",
        prompt: "Ask a question about your code or provide instructions.",
      });

      if (!prompt) {
        vscode.window.showInformationMessage(
          "I can't define the existence of nothing."
        );
        return;
      }

      try {
        const response = await axios.post(
          "http://localhost:11434/api/generate",
          {
            model: "llama3.1",
            prompt: `${prompt}\n\nCode:\n${selectedText}`,
            max_tokens: 15000,
            stream: false,
            timeout: 3000000,
          }
        );

        const codingBuddyResponse = await response.data?.response;
        console.log(response.data);

        const doc = await vscode.workspace.openTextDocument({
          content: codingBuddyResponse,
          language: "plaintext",
        });

        await vscode.window.showTextDocument(doc);
      } catch (error: any) {
        vscode.window.showErrorMessage(
          `Error fetching response from LLaMA: ${error.message}`
        );
      }
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}

# DevPartner README

DevPartner is a VSCode extension designed to act as a Coding Buddy, helping you solve coding problems, providing suggestions, and acting as a programming assistant similar to CoPilot, but with an integration to locally hosted LLaMA models. It uses an AI-powered large language model (LLM) to assist in your coding tasks.

Authors: Saif Z (210071601157) And Vikas S (210071601188)

## Features

- **Code Assistance**: You can select any part of your code and ask DevPartner to analyze it and provide feedback or suggestions.
- **Custom Queries**: Ask specific questions or get clarifications about any part of your codebase, including explanations and code improvements.
- **AI-Powered Code Generation**: DevPartner can generate code snippets based on natural language prompts, using LLaMA running locally on your machine.

> Tip: You can easily ask DevPartner to explain code or generate new ideas for functions!

## Requirements

To use DevPartner, you need the following:

- A locally installed LLaMA 3.1 model and its associated API.
- Proper configuration of the LLaMA API to be accessible at `localhost` on port `11434`.

Follow these steps to set up the API:

1. Download and install the LLaMA model on your machine.
2. Ensure the API is running by executing the following command:
   ```
   ollama serve
   ```
3. Verify the API is running by checking it with Postman or a simple `curl` request.

## Extension Settings

This extension contributes the following settings:

- `DevPartner.apiUrl`: Set the URL for your LLaMA server. Default is `http://localhost:11434/api/generate`.
- `DevPartner.maxTokens`: Configure the maximum number of tokens in a response.

## Known Issues

- Occasionally, the connection to the LLaMA API may reset due to timeout or network issues. Ensure that the API server is running and accessible at the specified URL.
- Large queries may take longer to process; consider adjusting the `maxTokens` setting for more efficient responses.

## Release Notes

### 1.0.0

- Initial release of DevPartner.
- Core features: Code suggestions, analysis, and query-based responses using LLaMA 3.1.

---

**Enjoy using DevPartner!**

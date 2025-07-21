import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { BrainCircuitIcon, SendIcon, LoadingSpinnerIcon } from './icons';

const InteractiveDemo: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async () => {
    if (!prompt || isLoading) return;

    setIsLoading(true);
    setError('');
    setResponse('');

    try {
      // The instructions require assuming process.env.API_KEY is available.
      // A ReferenceError will be thrown if 'process' is not defined, which will be caught below.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

      const systemInstruction = "You are an AI assistant specialized in analyzing smart contracts. Your role is to review provided code snippets or contract descriptions, identify potential vulnerabilities, explain complex logic in simple terms, or suggest optimizations. Your tone should be professional, clear, and helpful. When given a prompt, assume it's related to a smart contract and provide a relevant analysis.";

      const result = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: { systemInstruction }
      });

      if (!result.text) {
        throw new Error("Received an empty response from the API. This could be due to safety settings or an issue with the prompt.");
      }

      setResponse(result.text);

    } catch (e: any) {
      console.error(e);
      let errorMessage = `An error occurred while contacting the AI model.`;
      if (e instanceof ReferenceError) {
        errorMessage = "Error: The application environment is not configured correctly. It seems `process.env.API_KEY` is not accessible, which is required for this demo.";
      } else if (e.message?.includes('403')) {
        errorMessage = "Error 403 (Forbidden): The request was rejected by the server. This often means the API key is invalid, expired, or not authorized for this origin. Please check your API key configuration in the Google Cloud console.";
      } else if (e.message?.includes('API key not valid')) {
        errorMessage = "Error: The provided API Key is not valid. Please check your environment configuration.";
      } else {
        errorMessage = `An unexpected error occurred: ${e.message}`;
      }
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-dark-card dark:to-slate-900 rounded-xl shadow-lg border border-slate-200 dark:border-dark-border float-animation">
      <div className="flex items-start mb-6">
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
          <BrainCircuitIcon className="w-6 h-6" />
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">AI Contract Analysis</h3>
          <p className="mt-1 text-slate-600 dark:text-slate-400">
            Ask the AI to review a contract concept, explain a vulnerability, or suggest an optimization.
          </p>
        </div>
      </div>
      
      <div className="space-y-4">
        <textarea
          value={prompt}
          onChange={handlePromptChange}
          placeholder="e.g., 'Explain the security risks in a basic ERC20 token contract.'"
          className="w-full h-24 p-3 bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-dark-border rounded-md focus:ring-2 focus:ring-brand-primary dark:focus:ring-brand-secondary focus:outline-none transition-colors"
          disabled={isLoading}
          aria-label="Smart contract prompt"
        />
        <button
          onClick={handleSubmit}
          disabled={isLoading || !prompt}
          className="w-full flex items-center justify-center px-6 py-3 font-semibold text-white bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
        >
          {isLoading ? (
            <>
              <LoadingSpinnerIcon className="w-5 h-5 mr-2" />
              Analyzing...
            </>
          ) : (
            <>
              <SendIcon className="w-5 h-5 mr-2" />
              Ask AI
            </>
          )}
        </button>
      </div>

      {error && (
        <div className="mt-4 p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-300 rounded-md" role="alert">
          <p className="font-bold">Error</p>
          <p className="text-sm">{error}</p>
        </div>
      )}
      {response && (
        <div className="mt-4 p-4 bg-slate-100 dark:bg-dark-bg rounded-md border border-slate-200 dark:border-dark-border">
          <h4 className="font-bold text-slate-800 dark:text-slate-200">AI Analysis:</h4>
          <pre className="mt-2 text-sm text-slate-600 dark:text-slate-400 whitespace-pre-wrap font-sans">{response}</pre>
        </div>
      )}
    </div>
  );
};

export default InteractiveDemo;

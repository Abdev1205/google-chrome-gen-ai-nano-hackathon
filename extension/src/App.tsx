// App.tsx
import React, { useState, useEffect } from "react";
import { PromptInput } from "./components/custom/PromptInput";
import { ResponseArea } from "./components/custom/ResponseArea";
import { SessionStats } from "./components/custom/SessionStats";
import { Controls } from "./components/custom/Controls";
import ErrorDisplay from "./components/custom/ErrorDisplay";
import { NavLink } from "react-router-dom";

declare global {
  interface Window {
    ai: any;
  }
}
const App: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [session, setSession] = useState<any>(null);
  const [response, setResponse] = useState<string>("");
  const [stats, setStats] = useState({
    maxTokens: 0,
    temperature: 0.7,
    tokensLeft: 0,
    tokensSoFar: 0,
    topK: 0,
  });

  useEffect(() => {
    if (!self.ai?.languageModel) {
      setError(
        `Your browser doesn't support the Prompt API. If you're on Chrome, join the Early Preview Program.`
      );
      return;
    }

    const initSession = async () => {
      const capabilities = await self.ai.languageModel.capabilities();
      const newSession = await self.ai.languageModel.create({
        temperature: capabilities.defaultTemperature,
        topK: capabilities.defaultTopK,
      });
      setSession(newSession);
      setStats({
        maxTokens: capabilities.defaultMaxTokens,
        temperature: capabilities.defaultTemperature,
        tokensLeft: capabilities.defaultMaxTokens,
        tokensSoFar: 0,
        topK: capabilities.defaultTopK,
      });
    };

    initSession();
  }, []);

  const handlePromptSubmit = async (prompt: string) => {
    if (!session) return;
    let fullResponse = "";
    try {
      const stream = await session.promptStreaming(prompt);
      for await (const chunk of stream) {
        fullResponse = chunk.trim();
        setResponse(fullResponse);
      }
    } catch (error: any) {
      setResponse(`Error: ${error.message}`);
    }
  };

  const resetSession = async () => {
    setResponse("");
    setStats((prev) => ({
      ...prev,
      tokensLeft: prev.maxTokens,
      tokensSoFar: 0,
    }));
  };

  if (error) return <ErrorDisplay message={error} />;

  return (
    <div className="w-full min-h-[30rem] ">
      <h1 className="text-3xl font-bold text-center py-[1rem] ">
        React Google Nano Demo
      </h1>
      <PromptInput onSubmit={handlePromptSubmit} />
      <ResponseArea response={response} />
      {/* <SessionStats stats={stats} />
      <Controls
        stats={stats}
        onReset={resetSession}
        onUpdateSession={(updatedStats) => setStats(updatedStats)}
      /> */}
    </div>
  );
};

export default App;

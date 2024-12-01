import React from "react";
import ReactMarkdown from "react-markdown";

interface ResponseAreaProps {
  response: string;
}

export const ResponseArea: React.FC<ResponseAreaProps> = ({ response }) => (
  <div className="mt-4 p-4 bg-gray-800 rounded">
    <h2 className="text-lg font-semibold text-gray-200">Response</h2>
    <div className="mt-2">
      {response ? (
        <div className="prose max-w-none text-gray-300">
          <ReactMarkdown>{response}</ReactMarkdown>
        </div>
      ) : (
        <p className="text-gray-400">No response yet.</p>
      )}
    </div>
  </div>
);

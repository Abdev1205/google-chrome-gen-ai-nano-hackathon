import React from "react";

interface ErrorMessageProps {
  message: string;
}

const ErrorDisplay: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="p-4 bg-red-500 text-white rounded-md shadow-md">
      <p>{message}</p>
      <a
        href="https://developer.chrome.com/docs/ai/built-in#get_an_early_preview"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-blue-300 hover:text-blue-400"
      >
        Join the Early Preview Program
      </a>
    </div>
  );
};

export default ErrorDisplay;

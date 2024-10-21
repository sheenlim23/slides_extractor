'use client'

import { useState } from 'react';

export const CopyBlock = ({ children, title }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    // Copy the code to clipboard
    navigator.clipboard.writeText(children).then(() => {
      // Show the success message
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Hide the message after 2 seconds
    });
  };

  return (
    <div className="w-full">
      <div className="mb-2 flex justify-between items-center">
        <p className="text-sm font-medium text-gray-900 dark:text-white">{title}</p>
      </div>
      <div className="relative bg-gray-50 rounded-lg dark:bg-gray-700 p-4 h-[calc(100vh-25rem)]">
        <div className="overflow-auto max-h-full">
          <pre>
            <code className="text-sm text-gray-500 dark:text-gray-400 whitespace-pre">
              {children}
            </code>
          </pre>
        </div>
        <div className="absolute top-2 end-2 bg-gray-50 dark:bg-gray-700">
          <button
            onClick={handleCopy}
            className="text-gray-900 dark:text-gray-400 m-0.5 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            <span className="inline-flex items-center">
              <svg className="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
              </svg>
              <span className="text-xs font-semibold">{isCopied ? 'Copied' : 'Copy code'}</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

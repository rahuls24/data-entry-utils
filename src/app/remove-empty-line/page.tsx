'use client'
import Header from '@/components/Header';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import Link from 'next/link';
import React, { useState } from 'react';

const RemoveEmptyLine: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [transformedText, setTransformedText] = useState('');
  const [copiedText, copyToClipboard,resetCopiedText] = useCopyToClipboard();
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
    setError(null); // Reset error message when input changes
  };

  const handleRemoveEmptyLine = () => {
    try {
      // Use regular expression to remove empty lines
      const withoutEmptyLines = inputText.replace(/^\s*[\r\n]/gm, '');
      setTransformedText(withoutEmptyLines);

      // Use the copyToClipboard function from the hook
      copyToClipboard(withoutEmptyLines);
    } catch (error) {
      console.error('Remove empty lines failed', error);
      setError('Remove empty lines failed. Please try again.');
    }
  };

  const handleReset = () => {
    setInputText('');
    setTransformedText('');
    setError(null);
    resetCopiedText()
  };

  return (
    <div>
      <Header />

      <div className="max-w-md mx-auto p-4 mt-8 bg-white border border-gray-300 rounded-lg shadow-md">
        <textarea
          className="w-full h-40 resize-none p-2 mb-4 border border-gray-300 rounded focus:outline-none"
          placeholder="Enter text..."
          value={inputText}
          onChange={handleInputChange}
        />

        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 mb-4 rounded focus:outline-none focus:shadow-outline-blue hover:bg-blue-600"
          onClick={handleRemoveEmptyLine}
        >
          Remove Empty Lines
        </button>

        {transformedText && (
          <div className="mb-4">
            <div className="text-gray-600 mb-2">Transformed Text:</div>
            <pre className="bg-gray-100 p-2 border border-gray-300 rounded whitespace-pre-wrap">{transformedText}</pre>
          </div>
        )}

        {error && (
          <div className="text-red-600 mb-2">{error}</div>
        )}

        {(copiedText && !error) && (
          <div className="flex items-center justify-between bg-gray-100 p-2 border border-gray-300 rounded mb-4">
            <div>Copied to clipboard!</div>
            <button
              className="text-blue-500 hover:text-blue-600 cursor-pointer"
              onClick={() => copyToClipboard(copiedText)}
            >
              📄 Copy Backup
            </button>
          </div>
        )}

        <button
          className="bg-gray-300 text-gray-700 font-bold ml-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline-gray hover:bg-gray-400 ml-auto"
          onClick={handleReset}
        >
          Reset
        </button>
       
      </div>
      <Link href="/">
        <button
          className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-gray hover:bg-gray-400 mt-5"
        
        >
          Go Home
        </button>
        </Link>
    </div>
  );
};
export default RemoveEmptyLine;

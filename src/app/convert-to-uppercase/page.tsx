'use client'
import Header from '@/components/Header';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import React, { useState } from 'react';

const ConvertToUppercase: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [convertedText, setConvertedText] = useState('');
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
    setError(null); // Reset error message when input changes
  };

  const handleConvertToUppercase = async () => {
    try {
      const uppercasedText = inputText.toUpperCase();
      setConvertedText(uppercasedText);

      // Use the copyToClipboard function from the hook
      const success = await copyToClipboard(uppercasedText);

      if (success) {
        // Handle success if needed
      } else {
        setError('Copy to clipboard failed. Please use the backup option.');
      }
    } catch (error) {
      console.error('Conversion failed', error);
      setError('Conversion failed. Please try again.');
    }
  };

  const handleBackupCopy = () => {
    if (copiedText) {
      // Use the copyToClipboard function from the hook
      copyToClipboard(copiedText);
    }
  };

  return (
    <div>
      <Header />

      <div className="max-w-md mx-auto p-4 mt-8 bg-white border border-gray-300 rounded-lg shadow-md">
        <textarea
          className="w-full h-20 resize-none p-2 mb-4 border border-gray-300 rounded focus:outline-none"
          placeholder="Enter text..."
          value={inputText}
          onChange={handleInputChange}
        />

        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 mb-4 rounded focus:outline-none focus:shadow-outline-blue hover:bg-blue-600"
          onClick={handleConvertToUppercase}
        >
          To Uppercase
        </button>

        {convertedText && (
          <div className="mb-4">
            <div className="text-gray-600 mb-2">Converted Text:</div>
            <div className="bg-gray-100 p-2 border border-gray-300 rounded">{convertedText}</div>
          </div>
        )}

        {error && (
          <div className="text-red-600 mb-2">{error}</div>
        )}

        {(copiedText && !error) && (
          <div className="flex items-center justify-between bg-gray-100 p-2 border border-gray-300 rounded">
            <div>Copied to clipboard!</div>
            <button
              className="text-blue-500 hover:text-blue-600 cursor-pointer"
              onClick={handleBackupCopy}
            >
              📄 Copy Backup
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConvertToUppercase;


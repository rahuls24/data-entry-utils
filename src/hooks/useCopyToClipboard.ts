import { useState } from 'react';

type CopiedValue = string | null;
type CopyFn = (text: string) => Promise<boolean>; // Return success
type CopyHandler = () => Promise<boolean>; // Return success

export function useCopyToClipboard(): [CopiedValue, CopyFn, CopyHandler] {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);

  const copyToClipboard: CopyFn = async (text) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported');
      return false;
    }

    // Try to save to clipboard then save it in the state if it worked
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true;
    } catch (error) {
      console.warn('Copy failed', error);
      setCopiedText(null);
      return false;
    }
  };

  const resetCopiedText: CopyHandler = async () => {
    setCopiedText(null);
    return true; // Indicate success without copying anything to the clipboard
  };

  return [copiedText, copyToClipboard, resetCopiedText];
}

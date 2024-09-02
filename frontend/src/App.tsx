import { useState, useEffect, useMemo } from 'react';
import UpvoteIcon from './UpvoteIcon';
import CheckIcon from './CheckIcon';
import ClipboardIcon from './ClipboardIcon';

function App() {
  const [quote, setQuote] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [votes, setVotes] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);
  const [showVoting, setShowVoting] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('curl https://perl.is/api');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  const getRandomQuote = async () => {
    setError(null);
    try {
      const response = await fetch('https://perl.is/api');
      if (!response.ok) {
        throw new Error('Failed to fetch quote');
      }
      const data = await response.json();
      setQuote(data.quote);
      setVotes(0); // Reset votes for new quote
      setHasVoted(false); // Reset voting status for new quote
    } catch (error) {
      console.error('Error fetching quote:', error);
      setError('Failed to fetch quote. Please try again.');
      setQuote('');
    }
  };

  const urlParams = useMemo(() => new URLSearchParams(window.location.search), []);

  useEffect(() => {
    // Check if the 'voting' parameter is set to 'true'
    setShowVoting(urlParams.get('voting') === 'true');
  }, [urlParams]);

  const upvoteQuote = () => {
    if (!hasVoted) {
      setVotes(prevVotes => prevVotes + 1);
      setHasVoted(true);
    }
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="text-center max-w-2xl xl:max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-3">
          <a href="https://perl.is" className="hover:underline">perl.is</a>
        </h1>
        <h2 className="text-lg text-gray-600 mb-6">A free API for random Alan Perlis epigrams.</h2>
        <div className="relative">
          {quote !== "" ? (
            <>
              <span className="absolute top-0 left-0 xl:text-9xl text-6xl text-gray-300 font-serif">&ldquo;</span>
              <p className="text-2xl xl:text-4xl font-serif text-gray-800 italic px-8 pt-6 xl:px-16 xl:pt-12">{quote}</p>
              <span className="absolute bottom-[-2rem] xl:bottom-[-5rem] right-0 xl:text-9xl text-6xl text-gray-300 font-serif">&rdquo;</span>
            </>
          ) : error ? (
            <div className="text-red-500 text-xl">
              <p>{error}</p>
              <button
                onClick={getRandomQuote}
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Try Again
              </button>
            </div>
          ) : (
            <p className="text-2xl xl:text-4xl font-serif text-gray-800 italic px-8 pt-6 xl:px-16 xl:pt-12">Loading quote...</p>
          )}
        </div>
        {quote !== "" && !error && (
          <>
            <p className="text-right text-xl xl:text-3xl text-gray-600 font-serif mt-4 mb-8 xl:mt-8">&mdash; Alan Perlis</p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={getRandomQuote}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                New Quote
              </button>
              {showVoting && (
                <button
                  onClick={upvoteQuote}
                  className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center ${hasVoted ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={hasVoted}
                >
                  <UpvoteIcon className="h-5 w-5 mr-2" />
                  {votes} {votes === 1 ? 'Vote' : 'Votes'}
                </button>
              )}
            </div>
          </>
        )}
        <div className="mt-6 max-w-sm mx-auto">
          <p className="text-sm text-gray-600 mb-2 text-left">Generate a random quote programmatically:</p>
          <div className="border border-gray-300 rounded p-2 flex items-center justify-between bg-gray-200">
            <p className="font-mono px-3 py-2 rounded">curl{" "}<a href="https://perl.is/api" className="text-blue-500 hover:underline">https://perl.is/api</a></p>
            <button
              onClick={copyToClipboard}
              className={`mr-2 text-gray-500 hover:text-gray-700 transition-colors duration-200 ${copied ? 'text-green-500' : ''}`}
              title={copied ? 'Copied!' : 'Copy to clipboard'}
            >
              {copied ? (
                <CheckIcon />
              ) : (
                <ClipboardIcon />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="mb-8 text-center text-lg">
        <p className="mb-2">Made by{" "}<a href="https://twitter.com/rybickic" className="text-blue-500 hover:underline">@rybickic</a></p>
        <a href="https://github.com/Chriscbr/perl.is" className="inline-block">
          <img src="https://img.shields.io/github/stars/Chriscbr/perl.is?style=social" alt="Github Link" />
        </a>
      </div>
    </div>
  );
}

export default App;

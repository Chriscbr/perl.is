"use client";
import { useCallback, useEffect, useState } from "react";
import { getRecaptchaToken } from "./recaptcha";
import QuoteDisplay from "./QuoteDisplay";
import VoteButton from "./VoteButton";
import CheckIcon from "./CheckIcon";
import ClipboardIcon from "./ClipboardIcon";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? '';

export default function Home() {
  const [quote, setQuote] = useState("");
  const [quoteId, setQuoteId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [votes, setVotes] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('curl https://perl.is/random');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  const getRandomQuote = async () => {
    setError(null);
    try {
      const response = await fetch(`${API_URL}/random?withVotes=true`);
      if (!response.ok) {
        throw new Error('Failed to fetch quote');
      }
      const data = await response.json();
      setQuote(data.quote);
      setQuoteId(data.id);
      setVotes(data?.votes ?? 0);
      setHasVoted(false); // Reset voting status for new quote
    } catch (error) {
      console.error('Error fetching quote:', error);
      setError('Failed to fetch quote. Please try again.');
      setQuote('');
    }
  };

  const upvoteQuote = useCallback(async () => {
    if (!hasVoted && quoteId !== null) {
      setVotes(prevVotes => prevVotes + 1);
      setHasVoted(true);
      try {
        const token = await getRecaptchaToken('VOTE');
        const response = await fetch(`/vote/${quoteId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Recaptcha-Token': token,
          },
        });

        if (!response.ok) {
          throw new Error(`Server responded with status: ${response.status}`);
        }

      } catch (error) {
        console.error(`Error voting for quote ${quoteId}:`, error);
      }
    }
  }, [hasVoted, quoteId]);

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
        <QuoteDisplay quote={quote} error={error} getRandomQuote={getRandomQuote} />
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
              <VoteButton votes={votes} hasVoted={hasVoted} upvoteQuote={upvoteQuote} />
            </div>
          </>
        )}
        <div className="mt-6 max-w-sm mx-auto">
          <p className="text-sm text-gray-600 mb-2 text-left">Generate a random quote programmatically:</p>
          <div className="border border-gray-300 rounded p-2 flex items-center justify-between bg-gray-200">
            <p className="font-mono px-3 py-2 rounded">curl{" "}<a href="https://perl.is/random" className="text-blue-500 hover:underline">https://perl.is/random</a></p>
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

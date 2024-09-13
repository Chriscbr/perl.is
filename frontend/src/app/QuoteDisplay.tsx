import React from 'react';

interface QuoteDisplayProps {
  quote: string;
  error: string | null;
  getRandomQuote: () => void;
}

const QuoteDisplay: React.FC<QuoteDisplayProps> = ({ quote, error, getRandomQuote }) => {
  return (
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
  );
};

export default QuoteDisplay;

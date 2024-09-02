import React from 'react';
import UpvoteIcon from './UpvoteIcon';

interface VoteButtonProps {
  votes: number;
  hasVoted: boolean;
  upvoteQuote: () => void;
}

const VoteButton: React.FC<VoteButtonProps> = ({ votes, hasVoted, upvoteQuote }) => {
  return (
    <button
      onClick={upvoteQuote}
      className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center ${hasVoted ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={hasVoted}
    >
      <UpvoteIcon className="h-5 w-5 mr-2" />
      {votes} {votes === 1 ? 'Vote' : 'Votes'}
    </button>
  );
};

export default VoteButton;

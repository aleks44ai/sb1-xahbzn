import React from 'react';

interface BuyButtonProps {
  onClick: () => void;
  loading: boolean;
}

export function BuyButton({ onClick, loading }: BuyButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
        loading ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {loading ? 'Processing...' : 'Buy 1 DRAGO Token'}
    </button>
  );
}
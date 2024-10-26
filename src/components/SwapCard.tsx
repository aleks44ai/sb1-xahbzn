import React, { useState } from 'react';
import { CurrencyInput } from './CurrencyInput';

interface SwapCardProps {
  connected: boolean;
  loading: boolean;
  onSwap: (amount: string) => void;
}

export function SwapCard({ connected, loading, onSwap }: SwapCardProps) {
  const [tonAmount, setTonAmount] = useState('0.01');
  const [dragoAmount, setDragoAmount] = useState('1');

  const handleTonAmountChange = (value: string) => {
    setTonAmount(value);
    setDragoAmount((parseFloat(value) * 100).toString());
  };

  return (
    <div className="bg-card rounded-2xl p-6 shadow-lg border border-gray-800">
      <h2 className="text-xl font-semibold mb-6">Swap</h2>
      
      <div className="space-y-4">
        <CurrencyInput
          label="From"
          value={tonAmount}
          onChange={handleTonAmountChange}
          currency="TON"
          logo="/ton-logo.svg"
        />

        <div className="flex justify-center">
          <button className="bg-card p-2 rounded-full border border-gray-800">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>

        <CurrencyInput
          label="To"
          value={dragoAmount}
          onChange={() => {}}
          currency="DRAGO"
          logo="/drago-logo.svg"
          disabled
        />

        <button
          onClick={() => onSwap(tonAmount)}
          disabled={!connected || loading}
          className={`w-full py-4 px-6 rounded-xl text-white font-semibold transition
            ${connected 
              ? 'bg-primary hover:bg-primary/90' 
              : 'bg-gray-600 cursor-not-allowed'}`}
        >
          {!connected ? 'Connect Wallet' 
            : loading ? 'Swapping...' 
            : 'Swap TON to DRAGO'}
        </button>
      </div>
    </div>
  );
}
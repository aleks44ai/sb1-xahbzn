import React from 'react';

interface TokenStatsProps {
  balance: string;
  totalSupply: string;
  price: string;
}

export function TokenStats({ balance, totalSupply, price }: TokenStatsProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">DRAGO Token Stats</h2>
      <p className="mb-2">Available Tokens: {balance}</p>
      <p className="mb-2">Total Supply: {totalSupply}</p>
      <p className="mb-4">Price: {price} TON</p>
    </div>
  );
}
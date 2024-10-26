import React from 'react';

interface TokenInfoProps {
  balance: string;
  totalSupply: string;
  price: string;
  address: string;
}

export function TokenInfo({ balance, totalSupply, price, address }: TokenInfoProps) {
  return (
    <div className="bg-card rounded-2xl p-6 border border-gray-800">
      <h2 className="text-xl font-semibold mb-6">DRAGO Token Info</h2>
      
      <div className="space-y-4">
        <div>
          <label className="text-sm text-gray-400">Available Supply</label>
          <p className="text-lg font-medium">{balance} DRAGO</p>
        </div>
        
        <div>
          <label className="text-sm text-gray-400">Total Supply</label>
          <p className="text-lg font-medium">{totalSupply} DRAGO</p>
        </div>
        
        <div>
          <label className="text-sm text-gray-400">Price</label>
          <p className="text-lg font-medium">{price} TON</p>
        </div>
        
        <div>
          <label className="text-sm text-gray-400">Contract Address</label>
          <p className="text-sm font-mono break-all mt-1 text-primary">
            {address}
          </p>
        </div>
      </div>
    </div>
  );
}
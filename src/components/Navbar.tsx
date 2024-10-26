import React from 'react';
import { TonConnectButton } from '@tonconnect/ui-react';

export function Navbar() {
  return (
    <nav className="bg-[#1E293B] border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src="/ton.svg" alt="TON" className="w-8 h-8 mr-2" />
            <span className="text-xl font-bold text-white">DRAGO DEX</span>
          </div>
          
          <div className="flex items-center gap-4">
            <TonConnectButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
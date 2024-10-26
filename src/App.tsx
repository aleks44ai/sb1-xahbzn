import React from 'react';
import { TonConnectButton, useTonConnect } from '@tonconnect/ui-react';
import { Navbar } from './components/Navbar';
import { SwapCard } from './components/SwapCard';
import { TokenInfo } from './components/TokenInfo';
import { TransactionHistory } from './components/TransactionHistory';

function App() {
  const { connected } = useTonConnect();

  return (
    <div className="min-h-screen bg-[#0F172A]">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <SwapCard 
              connected={connected}
              loading={false}
              onSwap={(amount) => console.log('Swap:', amount)}
            />
          </div>

          <div>
            <TokenInfo
              balance="1,000,000"
              totalSupply="1,000,000"
              price="0.01"
              address="EQD4FPq-PRDieyQKkizFTRtSDyucUIqrj0v_zXJmqaDp6_0t"
            />
          </div>
        </div>

        <div className="mt-8">
          <TransactionHistory />
        </div>
      </main>
    </div>
  );
}
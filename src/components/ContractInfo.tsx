import React from 'react';

interface ContractInfoProps {
  address: string;
}

export function ContractInfo({ address }: ContractInfoProps) {
  return (
    <div className="mt-8 text-sm text-gray-500">
      <p>Contract Address:</p>
      <p className="font-mono break-all">{address}</p>
    </div>
  );
}
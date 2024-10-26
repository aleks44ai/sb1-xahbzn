import React from 'react';

interface CurrencyInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  currency: string;
  logo: string;
  disabled?: boolean;
}

export function CurrencyInput({ 
  label, 
  value, 
  onChange, 
  currency, 
  logo, 
  disabled 
}: CurrencyInputProps) {
  return (
    <div className="bg-background rounded-xl p-4 border border-gray-800">
      <label className="text-sm text-gray-400 mb-2 block">
        {label}
      </label>
      
      <div className="flex items-center gap-4">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className="bg-transparent text-2xl w-full focus:outline-none"
          placeholder="0.0"
        />
        
        <div className="flex items-center gap-2 bg-card px-3 py-2 rounded-xl">
          <img src={logo} alt={currency} className="w-6 h-6" />
          <span className="font-medium">{currency}</span>
        </div>
      </div>
    </div>
  );
}
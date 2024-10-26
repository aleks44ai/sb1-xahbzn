import React from 'react';

export function TransactionHistory() {
  return (
    <div className="bg-card rounded-2xl p-6 border border-gray-800">
      <h2 className="text-xl font-semibold mb-6">Transaction History</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-400">
              <th className="pb-4">Type</th>
              <th className="pb-4">Amount</th>
              <th className="pb-4">Price</th>
              <th className="pb-4">Time</th>
              <th className="pb-4">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-t border-gray-800">
              <td className="py-4">Buy</td>
              <td className="py-4">1 DRAGO</td>
              <td className="py-4">0.01 TON</td>
              <td className="py-4">2 mins ago</td>
              <td className="py-4">
                <span className="text-green-400">Completed</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
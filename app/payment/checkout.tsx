"use client";

import { Payment } from '@/components/payment';
import { useState } from 'react';

const Checkout = () => {
  const [recipient, setRecipient] = useState('gEb7nD9yLkau1P4uyMdke9byJNrat61suH4vYiPUuiR'); // Replace with actual recipient address
  const [amount, setAmount] = useState(1); // Default amount in SOL

  return (
    <div className="checkout-page">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      
      <div className="payment-form">
        {/* Input for recipient (optional, could be preset or removed if fixed) */}
        <div className="mb-4">
          <label htmlFor="recipient" className="block mb-2">Recipient Address</label>
          <input
            id="recipient"
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="border p-2 rounded w-full"
            placeholder="Enter recipient address"
          />
        </div>

        {/* Input for amount in SOL */}
        <div className="mb-4">
          <label htmlFor="amount" className="block mb-2">Amount (in SOL)</label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            className="border p-2 rounded w-full"
            placeholder="Enter amount in SOL"
          />
        </div>

        {/* Render Payment element to handle the payment process */}
        <Payment recipient={recipient} amount={amount} description="Purchase" />
      </div>
    </div>
  );
};

export default Checkout;

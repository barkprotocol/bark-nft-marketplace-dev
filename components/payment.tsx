import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Transaction, SystemProgram, PublicKey } from '@solana/web3.js';
import { useState } from 'react';
import { toast } from 'react-toastify';

interface PaymentProps {
  recipient: string; // Solana wallet address
  amount: number; // Amount in SOL
  description: string; // Description of the payment
}

const Payment = ({ recipient, amount, description }: PaymentProps) => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    if (!publicKey) {
      toast.error("Please connect your wallet.");
      return;
    }

    if (!recipient || !amount || amount <= 0) {
      toast.error("Invalid recipient address or amount.");
      return;
    }

    try {
      setLoading(true);
      
      // Convert recipient and amount
      const recipientPublicKey = new PublicKey(recipient);
      const lamports = amount * 1e9; // Convert SOL to lamports

      // Create transaction to send SOL
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: recipientPublicKey,
          lamports: lamports,
        })
      );

      // Send transaction
      const signature = await sendTransaction(transaction, connection);
      
      // Confirm transaction
      await connection.confirmTransaction(signature, 'processed');
      toast.success(`Payment of ${amount} SOL to ${recipient} successful!`);
    } catch (error) {
      console.error("Payment failed:", error);
      toast.error("Payment failed. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="payment-section p-4 border rounded-lg shadow-md bg-white dark:bg-gray-800">
      <p className="text-gray-700 dark:text-gray-300 mb-2">Description: {description}</p>
      <p className="text-gray-700 dark:text-gray-300 mb-4">Amount: {amount} SOL</p>
      <button
        onClick={handlePayment}
        disabled={loading}
        className="bg-black text-white py-2 px-4 rounded hover:bg-gray-900 transition"
      >
        {loading ? (
          <span>Processing...</span>
        ) : (
          <span>Make Payment</span>
        )}
      </button>
    </div>
  );
};

export default Payment;

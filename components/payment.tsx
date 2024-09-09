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
      toast.error("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="payment-section">
      <p>Description: {description}</p>
      <p>Amount: {amount} SOL</p>
      <button
        onClick={handlePayment}
        disabled={loading}
        className="bg-black-800 text-white py-2 px-4 rounded hover:bg-black-900"
      >
        {loading ? 'Processing...' : 'Make Payment'}
      </button>
    </div>
  );
};

export default Payment;

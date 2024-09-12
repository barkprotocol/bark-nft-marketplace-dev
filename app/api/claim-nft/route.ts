import { NextApiRequest, NextApiResponse } from 'next';
import { Connection, Keypair, PublicKey, Transaction, sendAndConfirmTransaction } from '@solana/web3.js';
import { TOKEN_PROGRAM_ID, createAssociatedTokenAccountInstruction, mintTo, getOrCreateAssociatedTokenAccount } from '@solana/spl-token';
import { getEnvVar } from '@/utils/env';

// Fetch the environment variables
const SOLANA_NETWORK = getEnvVar('NEXT_PUBLIC_SOLANA_NETWORK');
const SOLANA_RPC_URL = getEnvVar('NEXT_PUBLIC_SOLANA_RPC_URL');
const NFT_PROGRAM_ID = getEnvVar('NFT_PROGRAM_ID');
const SECRET_KEY = getEnvVar('SECRET_KEY');

// Initialize Solana connection
const connection = new Connection(SOLANA_RPC_URL, 'confirmed');

// Helper function to get the keypair from the secret key
const getKeypair = (): Keypair => {
  const secretKey = Uint8Array.from(JSON.parse(SECRET_KEY));
  return Keypair.fromSecretKey(secretKey);
};

// API handler for claiming NFT
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { level, userWalletAddress } = req.body;

  if (!level || !userWalletAddress) {
    return res.status(400).json({ message: 'Missing required parameters: level and userWalletAddress' });
  }

  try {
    const keypair = getKeypair();
    const transaction = new Transaction();

    // Create PublicKey instances
    const userPublicKey = new PublicKey(userWalletAddress);

    // Create or find the associated token account
    const associatedTokenAccount = await getOrCreateAssociatedTokenAccount(
      connection,
      keypair,
      new PublicKey(NFT_PROGRAM_ID), // Assuming NFT_PROGRAM_ID is the mint address
      userPublicKey
    );

    // Add instruction to create associated token account if it does not exist
    const associatedTokenAccountInstruction = createAssociatedTokenAccountInstruction(
      keypair.publicKey, // payer
      userPublicKey, // owner
      associatedTokenAccount.address, // associated token account
      new PublicKey(NFT_PROGRAM_ID) // mint
    );

    transaction.add(associatedTokenAccountInstruction);

    // Add minting instruction here
    // Adjust the amount and mint address according to your setup
    transaction.add(
      mintTo({
        mint: new PublicKey(NFT_PROGRAM_ID),
        destination: associatedTokenAccount.address,
        amount: 1, // Number of NFTs to mint
        signers: [keypair],
        programId: TOKEN_PROGRAM_ID,
      })
    );

    // Sign and send the transaction
    const signature = await sendAndConfirmTransaction(connection, transaction, [keypair]);

    // Respond with success
    res.status(200).json({ success: true, message: 'NFT claimed successfully', signature });
  } catch (error) {
    console.error('Error claiming NFT:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}

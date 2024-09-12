import { Connection, PublicKey, SystemProgram, Transaction, sendAndConfirmTransaction, Keypair } from '@solana/web3.js';
import { TOKEN_PROGRAM_ID, createTransferInstruction, getAccount, createAccount, getAssociatedTokenAddress, createAssociatedTokenAccountInstruction } from '@solana/spl-token';
import { USDC_MINT_ADDRESS, BARK_MINT_ADDRESS } from '../constants';

// Setup the connection to Solana
const connection = new Connection(process.env.SOLANA_RPC_URL || 'https://api.devnet.solana.com', 'confirmed');

// Function to transfer SOL
export async function transferSOL(sender: Keypair, recipientPublicKey: PublicKey, amount: number) {
  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: sender.publicKey,
      toPubkey: recipientPublicKey,
      lamports: amount * 1e9, // SOL to lamports (1 SOL = 1e9 lamports)
    })
  );

  try {
    const signature = await sendAndConfirmTransaction(connection, transaction, [sender]);
    return { success: true, signature };
  } catch (error) {
    console.error('Error transferring SOL:', error);
    return { success: false, message: 'Failed to transfer SOL. Please try again.' };
  }
}

// Function to transfer SPL tokens (e.g., USDC, BARK)
export async function transferSPLToken(sender: Keypair, recipientPublicKey: PublicKey, mintAddress: PublicKey, amount: number) {
  try {
    const senderTokenAddress = await getAssociatedTokenAddress(mintAddress, sender.publicKey);
    const recipientTokenAddress = await getAssociatedTokenAddress(mintAddress, recipientPublicKey);

    const transaction = new Transaction().add(
      createTransferInstruction(senderTokenAddress, recipientTokenAddress, sender.publicKey, amount * 1e6, [], TOKEN_PROGRAM_ID)
    );

    const signature = await sendAndConfirmTransaction(connection, transaction, [sender]);
    return { success: true, signature };
  } catch (error) {
    console.error('Error transferring SPL token:', error);
    return { success: false, message: 'Failed to transfer SPL token. Please try again.' };
  }
}

// Function to get balance of SOL
export async function getSolanaBalance(publicKey: PublicKey) {
  try {
    const balance = await connection.getBalance(publicKey);
    return { success: true, balance };
  } catch (error) {
    console.error('Error getting SOL balance:', error);
    return { success: false, message: 'Failed to get SOL balance.' };
  }
}

// Function to get SPL token balance
export async function getTokenBalance(publicKey: PublicKey, mintAddress: PublicKey) {
  try {
    const tokenAddress = await getAssociatedTokenAddress(mintAddress, publicKey);
    const accountInfo = await getAccount(connection, tokenAddress);
    return { success: true, balance: accountInfo.amount.toNumber() / 1e6 }; // Convert from base units (1 USDC = 1e6 smallest units)
  } catch (error) {
    console.error('Error getting token balance:', error);
    return { success: false, message: 'Failed to get token balance.' };
  }
}

// Function to create associated token account for SPL tokens
export async function createAssociatedTokenAccount(userPublicKey: PublicKey, mintAddress: PublicKey) {
  try {
    const associatedTokenAddress = await getAssociatedTokenAddress(mintAddress, userPublicKey);

    const transaction = new Transaction().add(
      createAssociatedTokenAccountInstruction(
        userPublicKey,
        associatedTokenAddress,
        userPublicKey,
        mintAddress
      )
    );

    const signature = await sendAndConfirmTransaction(connection, transaction, [userPublicKey]);
    return { success: true, signature };
  } catch (error) {
    console.error('Error creating associated token account:', error);
    return { success: false, message: 'Failed to create associated token account.' };
  }
}

// Function to generate a new Solana wallet
export function generateNewWallet() {
  const keypair = Keypair.generate();
  return keypair;
}

// Function to get wallet public key
export function getWalletPublicKey(keypair: Keypair) {
  return keypair.publicKey;
}

// Function to create and mint an NFT
export async function mintNFT(sender: Keypair, mintAddress: PublicKey, metadataUri: string) {
  try {
    // Construct your NFT minting instructions here
    const transaction = new Transaction();
    // transaction.add(mintInstruction);

    const signature = await sendAndConfirmTransaction(connection, transaction, [sender]);
    return { success: true, signature };
  } catch (error) {
    console.error('Error minting NFT:', error);
    return { success: false, message: 'Failed to mint NFT. Please try again.' };
  }
}

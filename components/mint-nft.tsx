'use client'

import { FC, useState } from 'react'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { PublicKey, Transaction } from '@solana/web3.js'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const MintNFT: FC = () => {
  const { connection } = useConnection()
  const { publicKey, sendTransaction } = useWallet()
  const [tier, setTier] = useState('bronze')
  const [isMinting, setIsMinting] = useState(false)

  const mintNFT = async () => {
    if (!publicKey) return

    setIsMinting(true)

    try {
      // Here you would typically:
      // 1. Call your Solana program to mint the NFT
      // 2. Create and send a transaction

      // This is a placeholder for the actual minting logic
      const transaction = new Transaction()
      // Add instructions to the transaction here

      const signature = await sendTransaction(transaction, connection)
      await connection.confirmTransaction(signature, 'confirmed')

      alert(`NFT minted! Signature: ${signature}`)
    } catch (error) {
      console.error('Error minting NFT:', error)
      alert('Failed to mint NFT')
    } finally {
      setIsMinting(false)
    }
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Mint BARK NFT</CardTitle>
        <CardDescription>Choose your membership tier and mint your NFT</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
          <Select onValueChange={(value) => setTier(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select a tier" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="underdogs">Underdogs</SelectItem>
              <SelectItem value="barkers">The Peaky Barkers</SelectItem>
              <SelectItem value="sparky">Sparky Bros</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={mintNFT} disabled={!publicKey || isMinting}>
            {isMinting ? 'Minting...' : 'Mint NFT'}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default MintNFT
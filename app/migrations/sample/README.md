## SQL migration file

SQL migration file, including all necessary tables, indexes, and functions for a production-ready database schema that incorporates user management, NFT handling, transactions, and integration with Solana and Helius API. This version includes all functions and logic for creating users, adding NFTs, processing transactions, and fetching data.

To implement a creator treasury that collects a 5% fee on NFT sales, we can modify the transactions table to include a creator_fee field. This field will store the amount that goes to the creator's treasury. Additionally, we will update the add_nft function to include the creator's treasury address and modify the transaction processing logic to calculate and store the creator fee.
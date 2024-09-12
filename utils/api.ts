// utils/api.ts

export const claimNFT = async (level: string) => {
    try {
      const response = await fetch('/api/claim-nft', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ level }),
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const data = await response.json();
  
      return data; // Assuming the response contains a success flag and message
    } catch (error) {
      console.error('Error claiming NFT:', error);
      return { success: false, message: error.message };
    }
  };
  
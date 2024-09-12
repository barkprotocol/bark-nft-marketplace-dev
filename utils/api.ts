import type { MembershipLevel } from './types';

interface ClaimNFTResponse {
  success: boolean;
  message?: string;
  [key: string]: any; // Adjust according to the response structure
}

export const claimNFT = async (level: MembershipLevel): Promise<ClaimNFTResponse> => {
  try {
    const response = await fetch('/api/claim-nft', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ level }),
    });

    if (!response.ok) {
      let errorMessage = 'An unknown error occurred';

      // Handle different status codes
      switch (response.status) {
        case 400:
          errorMessage = 'Bad Request: Invalid membership level.';
          break;
        case 401:
          errorMessage = 'Unauthorized: Please log in.';
          break;
        case 500:
          errorMessage = 'Internal Server Error: Please try again later.';
          break;
        default:
          errorMessage = `Error ${response.status}: ${response.statusText}`;
      }

      throw new Error(errorMessage);
    }

    const data = await response.json();
    return { success: true, ...data };

  } catch (error) {
    const message = error instanceof Error ? error.message : 'An unexpected error occurred';
    console.error('Error claiming NFT:', message);
    return { success: false, message };
  }
};

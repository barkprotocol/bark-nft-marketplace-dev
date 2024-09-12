import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient(); // Initialize database client

// Define new membership levels and clubs
type MembershipLevel = 'underdogs' | 'peaky-barkers' | 'sparky-bros' | 'iron-clan';
type Club = 'underdogs' | 'the-peaky-barkers' | 'sparky-bros' | 'iron-clan';

// Define the structure of upgrade data
interface UpgradeData {
  level: MembershipLevel;
}

// Define a mapping from membership levels to clubs
const levelToClubMap: Record<MembershipLevel, Club> = {
  'underdogs': 'underdogs',
  'peaky-barkers': 'the-peaky-barkers',
  'sparky-bros': 'sparky-bros',
  'iron-clan': 'iron-clan',
};

// Function to upgrade membership
export async function upgradeMembership(userId: string, upgradeData: UpgradeData) {
  // Define valid membership levels
  const validLevels: MembershipLevel[] = ['underdogs', 'peaky-barkers', 'sparky-bros', 'iron-clan'];

  // Validate the membership level
  if (!validLevels.includes(upgradeData.level)) {
    throw new Error('Invalid membership level.');
  }

  // Check if the user exists
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    throw new Error('User not found.');
  }

  // Determine the associated club for the new membership level
  const newClub = levelToClubMap[upgradeData.level];

  // Perform the membership upgrade
  try {
    // Use a transaction if there are multiple operations to ensure atomicity
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { 
        membershipLevel: upgradeData.level,
        club: newClub, // Update the user's club based on the new membership level
      },
    });
    return updatedUser;
  } catch (error) {
    // Log the error with detailed information
    console.error('Error updating membership:', {
      message: error.message,
      stack: error.stack,
      userId,
      upgradeData
    });

    // Rethrow the error with a user-friendly message
    throw new Error('Failed to upgrade membership. Please try again later.');
  }
}

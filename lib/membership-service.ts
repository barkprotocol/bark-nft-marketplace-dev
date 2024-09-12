import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient(); // Initialize your database client

// Define new membership levels
type MembershipLevel = 'underdogs' | 'peaky-barkers' | 'sparky-bros';

// Define the structure of upgrade data
interface UpgradeData {
  level: MembershipLevel;
}

// Function to upgrade membership
export async function upgradeMembership(userId: string, upgradeData: UpgradeData) {
  // Define valid membership levels
  const validLevels: MembershipLevel[] = ['underdogs', 'peaky-barkers', 'sparky-bros'];

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

  // Perform the membership upgrade
  try {
    // Use a transaction if there are multiple operations to ensure atomicity
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { membershipLevel: upgradeData.level },
    });
    return updatedUser;
  } catch (error) {
    // Log the error using a custom logging service if needed
    console.error('Error updating membership:', {
      message: error.message,
      stack: error.stack,
      userId,
      upgradeData
    }); // Detailed error logging
    throw new Error('Failed to upgrade membership. Please try again later.');
  }
}

// Define valid membership levels
export type MembershipLevel = 'underdogs' | 'peaky-barkers' | 'sparky-bros' | 'iron-clan';

// Define the structure of upgrade data
export interface UpgradeData {
  level: MembershipLevel;
}

// Define the structure of upgrade request body
export interface UpgradeRequestBody {
  level: MembershipLevel;
}

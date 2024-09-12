// Define valid membership levels as a type
type MembershipLevel = 'underdogs' | 'peaky-barkers' | 'sparky-bros' | 'iron-clan';

// Update the request body interface
interface UpgradeRequestBody {
  level: MembershipLevel;
}

// Update the validation function
export const validateUpgradeRequest = (body: UpgradeRequestBody) => {
  const errors: string[] = [];

  // Check if level is provided and valid
  if (!body.level) {
    errors.push('Membership level is required.');
  } else if (!['underdogs', 'peaky-barkers', 'sparky-bros', 'iron-clan'].includes(body.level)) {
    errors.push('Invalid membership level.');
  }

  return errors;
};

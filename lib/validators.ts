interface UpgradeRequestBody {
    level: string;
  }
  
  export const validateUpgradeRequest = (body: UpgradeRequestBody) => {
    const errors: string[] = [];
    
    // Check if level is provided and valid
    if (!body.level) {
      errors.push('Membership level is required.');
    } else if (!['underdogs', 'peaky-barkers', 'sparky-bros'].includes(body.level)) {
      errors.push('Invalid membership level.');
    }
  
    return errors;
  };
  
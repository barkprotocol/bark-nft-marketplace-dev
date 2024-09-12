import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { validateUpgradeRequest } from '@/lib/validators'; // Custom validation function
import { upgradeMembership } from '@/lib/membership-service'; // Custom service function for upgrading membership
import { getLogger } from '@/lib/logger'; // Custom logger function
import rateLimiter from '@/lib/rate-limit'; // The rate limiting middleware

const logger = getLogger('membership-upgrade');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Apply rate limiting
  await new Promise((resolve) => rateLimiter(req as any, res as any, resolve));

  // Retrieve session information
  const session = await getSession({ req });

  // Check if the user is authenticated
  if (!session) {
    return res.status(401).json({ message: 'Unauthorized access. Please log in.' });
  }

  if (req.method === 'POST') {
    try {
      // Validate the request payload
      const validationErrors = validateUpgradeRequest(req.body);
      if (validationErrors.length > 0) {
        return res.status(400).json({ message: 'Invalid request data', errors: validationErrors });
      }

      // Perform membership upgrade
      const result = await upgradeMembership(session.user.id, req.body);
      return res.status(200).json({ message: 'Membership upgrade successful!', result });

    } catch (error) {
      // Log error details for debugging
      logger.error('Failed to upgrade membership', {
        error: error.message,
        stack: error.stack,
        userId: session.user.id,
        requestBody: req.body,
      });

      // Return a generic error message to the client
      return res.status(500).json({ message: 'Internal server error. Please try again later.' });
    }
  } else {
    // Handle unsupported HTTP methods
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

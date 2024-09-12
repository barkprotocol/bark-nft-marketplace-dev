import rateLimit from 'express-rate-limit';

// Define the rate limit rules
const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  headers: true, // Add rate limit headers to the response
});

export default rateLimiter;

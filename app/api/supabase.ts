import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

// Create a Supabase client using environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Define a type for the data returned from Supabase
interface MarketplaceItem {
  id: number;
  name: string;
  description: string;
  price: number;
  // Add other fields as per your table schema
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Rate limiting logic (optional)
  // await rateLimiter(req, res); 

  if (req.method === 'GET') {
    try {
      // Fetch data from Supabase
      const { data, error } = await supabase
        .from<MarketplaceItem>('marketplace')
        .select('*');

      if (error) {
        return res.status(500).json({ error: `Supabase error: ${error.message}` });
      }

      if (!data) {
        return res.status(404).json({ error: 'No data found' });
      }

      return res.status(200).json(data);
    } catch (error) {
      console.error('Server error:', error);
      return res.status(500).json({ error: 'Something went wrong on the server' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

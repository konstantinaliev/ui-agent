import { NextApiRequest, NextApiResponse } from 'next';

// Click tracking endpoint
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { clickData } = req.body;

    // Perform the click tracking logic here
    // E.g. save clickData to the database or analytics service

    console.log('Click data:', clickData);

    return res.status(200).json({ message: 'Click tracked successfully!' });
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
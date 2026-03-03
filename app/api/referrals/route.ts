import { NextApiRequest, NextApiResponse } from 'next';

let referrals: { id: number; link: string }[] = []; // In-memory store, for example purposes.
let nextId = 1;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { link } = req.body;
    if (!link) {
      return res.status(400).json({ message: 'Link is required' });
    }

    const referral = { id: nextId++, link };
    referrals.push(referral);
    return res.status(201).json(referral);
  } else if (req.method === 'GET') {
    return res.status(200).json(referrals);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
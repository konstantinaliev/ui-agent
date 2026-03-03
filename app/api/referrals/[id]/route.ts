import { NextResponse } from 'next/server';

// Mock referral data, this should ideally come from a database
const referralData = {
    '1': { id: 1, link: 'https://example.com/referral/1', description: 'Referral for User 1' },
    '2': { id: 2, link: 'https://example.com/referral/2', description: 'Referral for User 2' },
};

export async function GET(request, { params }) {
    const { id } = params;
    const referral = referralData[id];
    if (!referral) {
        return NextResponse.json({ message: 'Referral not found' }, { status: 404 });
    }
    return NextResponse.json(referral);
}
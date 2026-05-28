import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const bookingValue = Number(body.bookingValue || 0);
  const pointsToAward = Number(body.points || bookingValue);

  // Business rule: 1 point = $1 USD travel credit.
  // You can choose whether to award by booking value, percentage, manual adjustment, etc.

  return NextResponse.json({
    memberId: body.memberId,
    pointsAwarded: pointsToAward,
    usdValue: pointsToAward
  });
}

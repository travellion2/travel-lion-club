import { NextResponse } from 'next/server';

const memoryQueue: any[] = [];

export async function GET() {
  return NextResponse.json({ requests: memoryQueue });
}

export async function POST(req: Request) {
  const body = await req.json();

  const bookingRequest = {
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    status: 'New',
    ...body
  };

  memoryQueue.unshift(bookingRequest);

  // TODO: Save to Supabase table `booking_requests`.
  // TODO: Send email notification with Resend to process.env.ADMIN_EMAIL.

  return NextResponse.json({ request: bookingRequest });
}

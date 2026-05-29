import { NextResponse } from 'next/server';
import { z } from 'zod';
import { searchTravel } from '@/lib/search';

const schema = z.object({
  destination: z.string().min(1),
  dates: z.string().min(1),
  travelers: z.number().min(1),
  category: z.enum([
    'all',
    'hotel',
    'villa',
    'flight',
    'rental',
    'cruise',
    'golf',
    'jet',
    'yacht'
  ]),
  memberTier: z.enum(['Essential', 'Elite'])
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const parsed = schema.parse(body);

    const results = await searchTravel({
      destination: parsed.destination,
      dates: parsed.dates,
      travelers: parsed.travelers,
      category: parsed.category,
      memberTier: parsed.memberTier
    });

    return NextResponse.json({ results });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid search request' },
      { status: 400 }
    );
  }
}

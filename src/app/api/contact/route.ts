import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  // Log submission to server console. Replace with SMTP integration.
  console.log('Contact form submission:', data);
  return NextResponse.json({ success: true });
}
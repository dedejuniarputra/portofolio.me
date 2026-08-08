import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src', 'data', 'views.json');

function getViewsCount(): number {
  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf8');
      const parsed = JSON.parse(data);
      return typeof parsed.count === 'number' ? parsed.count : 0;
    }
  } catch (error) {
    console.error('Error reading views count:', error);
  }
  return 0;
}

export async function GET() {
  // Counting is currently paused as requested, staying fixed at starting value 0
  const count = getViewsCount();
  return NextResponse.json({ count });
}

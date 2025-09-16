import { NextRequest, NextResponse } from 'next/server';
import { generateQuestions, generateSummary } from '@/lib/openai';
import { estimateCredits } from '@/lib/utils';

export async function POST(request: NextRequest) {
  try {
    const { text, type } = await request.json();

    if (!text || !type) {
      return NextResponse.json(
        { error: 'Missing required fields: text and type' },
        { status: 400 }
      );
    }

    if (type !== 'questions' && type !== 'summary') {
      return NextResponse.json(
        { error: 'Invalid type. Must be "questions" or "summary"' },
        { status: 400 }
      );
    }

    const creditsUsed = estimateCredits(text, type);
    let content: string;

    if (type === 'questions') {
      content = await generateQuestions(text);
    } else {
      content = await generateSummary(text);
    }

    return NextResponse.json({
      content,
      creditsUsed,
      success: true,
    });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to generate content. Please try again.',
        success: false 
      },
      { status: 500 }
    );
  }
}

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
  baseURL: "https://openrouter.ai/api/v1",
  dangerouslyAllowBrowser: true,
});

export async function generateQuestions(text: string): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: 'google/gemini-2.0-flash-001',
      messages: [
        {
          role: 'system',
          content: 'You are an expert educational assistant. Generate 5-10 practice questions with answers based on the provided text. Format as: Q1: [question] A1: [answer], etc. Make questions test comprehension, analysis, and application of the material.'
        },
        {
          role: 'user',
          content: `Generate practice questions and answers for this study material:\n\n${text}`
        }
      ],
      max_tokens: 1000,
      temperature: 0.7,
    });

    return response.choices[0]?.message?.content || 'Failed to generate questions.';
  } catch (error) {
    console.error('Error generating questions:', error);
    throw new Error('Failed to generate questions. Please try again.');
  }
}

export async function generateSummary(text: string): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: 'google/gemini-2.0-flash-001',
      messages: [
        {
          role: 'system',
          content: 'You are an expert educational assistant. Create a clear, concise summary that captures the key points, main concepts, and important details from the provided text. Use bullet points and clear structure.'
        },
        {
          role: 'user',
          content: `Summarize this study material:\n\n${text}`
        }
      ],
      max_tokens: 800,
      temperature: 0.5,
    });

    return response.choices[0]?.message?.content || 'Failed to generate summary.';
  } catch (error) {
    console.error('Error generating summary:', error);
    throw new Error('Failed to generate summary. Please try again.');
  }
}

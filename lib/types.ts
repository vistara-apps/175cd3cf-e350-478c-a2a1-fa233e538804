export interface User {
  userId: string;
  farcasterId: string;
  creditsBalance: number;
  createdAt: Date;
}

export interface StudySession {
  sessionId: string;
  userId: string;
  inputText: string;
  generatedContent: string;
  contentType: 'questions' | 'summary';
  createdAt: Date;
}

export interface Transaction {
  transactionId: string;
  userId: string;
  type: 'credit_purchase' | 'content_generation';
  amount: number;
  createdAt: Date;
}

export interface GenerationRequest {
  text: string;
  type: 'questions' | 'summary';
}

export interface GenerationResponse {
  content: string;
  creditsUsed: number;
  success: boolean;
  error?: string;
}

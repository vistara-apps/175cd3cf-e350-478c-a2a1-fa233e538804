'use client';

import { useState } from 'react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { TextInput } from './ui/TextInput';
import { GenerationOutput } from './GenerationOutput';
import { CreditBalance } from './CreditBalance';
import { FileText, HelpCircle, Zap } from 'lucide-react';
import { GenerationRequest, GenerationResponse } from '@/lib/types';
import { generateQuestions, generateSummary } from '@/lib/openai';
import { estimateCredits } from '@/lib/utils';

export function StudyDashboard() {
  const [inputText, setInputText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);
  const [contentType, setContentType] = useState<'questions' | 'summary' | null>(null);
  const [credits, setCredits] = useState(5.0); // Starting credits for demo

  const handleGenerate = async (type: 'questions' | 'summary') => {
    if (!inputText.trim()) return;

    const estimatedCost = estimateCredits(inputText, type);
    if (credits < estimatedCost) {
      alert('Insufficient credits. Please purchase more credits to continue.');
      return;
    }

    setIsGenerating(true);
    setContentType(type);

    try {
      let content: string;
      if (type === 'questions') {
        content = await generateQuestions(inputText);
      } else {
        content = await generateSummary(inputText);
      }

      setGeneratedContent(content);
      setCredits(prev => prev - estimatedCost);
    } catch (error) {
      console.error('Generation error:', error);
      alert('Failed to generate content. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleReset = () => {
    setInputText('');
    setGeneratedContent(null);
    setContentType(null);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Hero Section */}
      <div className="text-center text-white mb-8">
        <h2 className="text-3xl font-semibold mb-4">
          AI-Powered Study Assistant
        </h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
          Transform your course materials into practice questions and concise summaries. 
          Upload your notes, readings, or lecture transcripts and let AI help you study smarter.
        </p>
      </div>

      {/* Credit Balance */}
      <CreditBalance credits={credits} />

      {/* Main Input Card */}
      <Card className="glass-effect border-white/20">
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-4">
            <FileText className="w-5 h-5 text-white" />
            <h3 className="text-lg font-medium text-white">Study Material Input</h3>
          </div>
          
          <TextInput
            value={inputText}
            onChange={setInputText}
            placeholder="Paste your course notes, readings, or lecture transcripts here..."
            variant="textarea"
            className="mb-4"
            disabled={isGenerating}
          />

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={() => handleGenerate('questions')}
              disabled={!inputText.trim() || isGenerating}
              className="flex-1 bg-white/20 hover:bg-white/30 text-white border-white/30"
            >
              <HelpCircle className="w-4 h-4 mr-2" />
              Generate Questions
              <span className="ml-2 text-xs opacity-75">
                (~${estimateCredits(inputText, 'questions').toFixed(2)})
              </span>
            </Button>
            
            <Button
              onClick={() => handleGenerate('summary')}
              disabled={!inputText.trim() || isGenerating}
              variant="secondary"
              className="flex-1 bg-white text-blue-900 hover:bg-white/90"
            >
              <Zap className="w-4 h-4 mr-2" />
              Summarize Text
              <span className="ml-2 text-xs opacity-75">
                (~${estimateCredits(inputText, 'summary').toFixed(2)})
              </span>
            </Button>
          </div>

          {inputText && (
            <div className="mt-3 text-sm text-white/70">
              Word count: {inputText.split(' ').length} words
            </div>
          )}
        </div>
      </Card>

      {/* Generation Output */}
      {(generatedContent || isGenerating) && (
        <GenerationOutput
          content={generatedContent}
          type={contentType}
          isLoading={isGenerating}
          onReset={handleReset}
        />
      )}

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-4 mt-8">
        <Card className="glass-effect border-white/20 p-4">
          <div className="text-center text-white">
            <HelpCircle className="w-8 h-8 mx-auto mb-2 text-white/80" />
            <h4 className="font-medium mb-1">Study Questions</h4>
            <p className="text-sm text-white/70">
              Generate practice questions to test your knowledge
            </p>
          </div>
        </Card>

        <Card className="glass-effect border-white/20 p-4">
          <div className="text-center text-white">
            <FileText className="w-8 h-8 mx-auto mb-2 text-white/80" />
            <h4 className="font-medium mb-1">Concise Summaries</h4>
            <p className="text-sm text-white/70">
              Get clear, digestible summaries of complex material
            </p>
          </div>
        </Card>

        <Card className="glass-effect border-white/20 p-4">
          <div className="text-center text-white">
            <Zap className="w-8 h-8 mx-auto mb-2 text-white/80" />
            <h4 className="font-medium mb-1">Instant Results</h4>
            <p className="text-sm text-white/70">
              AI-powered generation in seconds, not hours
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

'use client';

import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Copy, RotateCcw, FileText, HelpCircle } from 'lucide-react';
import { useState } from 'react';

interface GenerationOutputProps {
  content: string | null;
  type: 'questions' | 'summary' | null;
  isLoading: boolean;
  onReset: () => void;
}

export function GenerationOutput({ content, type, isLoading, onReset }: GenerationOutputProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!content) return;
    
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const getIcon = () => {
    if (type === 'questions') return <HelpCircle className="w-5 h-5" />;
    if (type === 'summary') return <FileText className="w-5 h-5" />;
    return <FileText className="w-5 h-5" />;
  };

  const getTitle = () => {
    if (type === 'questions') return 'Generated Study Questions';
    if (type === 'summary') return 'Generated Summary';
    return 'Generated Content';
  };

  return (
    <Card className="glass-effect border-white/20 animate-slide-up">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 text-white">
            {getIcon()}
            <h3 className="text-lg font-medium">{getTitle()}</h3>
          </div>
          
          <div className="flex items-center space-x-2">
            {content && (
              <Button
                onClick={handleCopy}
                variant="secondary"
                className="bg-white/20 hover:bg-white/30 text-white border-white/30 text-sm px-3 py-1"
              >
                <Copy className="w-4 h-4 mr-1" />
                {copied ? 'Copied!' : 'Copy'}
              </Button>
            )}
            
            <Button
              onClick={onReset}
              variant="secondary"
              className="bg-white/20 hover:bg-white/30 text-white border-white/30 text-sm px-3 py-1"
            >
              <RotateCcw className="w-4 h-4 mr-1" />
              Reset
            </Button>
          </div>
        </div>

        <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
          {isLoading ? (
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-white/80">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Generating {type}...</span>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-white/20 rounded animate-pulse"></div>
                <div className="h-4 bg-white/20 rounded animate-pulse w-5/6"></div>
                <div className="h-4 bg-white/20 rounded animate-pulse w-4/6"></div>
              </div>
            </div>
          ) : content ? (
            <div className="text-white whitespace-pre-wrap leading-relaxed">
              {content}
            </div>
          ) : (
            <div className="text-white/60 italic">
              No content generated yet.
            </div>
          )}
        </div>

        {content && (
          <div className="mt-4 text-sm text-white/70">
            Generated successfully! You can copy this content or generate new material.
          </div>
        )}
      </div>
    </Card>
  );
}

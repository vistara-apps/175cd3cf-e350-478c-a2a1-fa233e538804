'use client';

import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Coins, Plus } from 'lucide-react';
import { formatCredits } from '@/lib/utils';

interface CreditBalanceProps {
  credits: number;
}

export function CreditBalance({ credits }: CreditBalanceProps) {
  const isLowCredits = credits < 1.0;

  const handleBuyCredits = () => {
    // Future implementation: integrate with Base network for micro-transactions
    alert('Credit purchase feature coming soon! This will integrate with Base network for seamless micro-transactions.');
  };

  return (
    <Card className={`glass-effect border-white/20 ${isLowCredits ? 'ring-2 ring-yellow-400/50' : ''}`}>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white/20 rounded-lg">
              <Coins className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium">Credit Balance</h3>
              <p className="text-2xl font-bold text-white">
                ${formatCredits(credits)}
              </p>
            </div>
          </div>

          <div className="text-right">
            {isLowCredits && (
              <p className="text-yellow-300 text-sm mb-2">
                ⚠️ Low credits
              </p>
            )}
            <Button
              onClick={handleBuyCredits}
              variant="secondary"
              className="bg-white text-blue-900 hover:bg-white/90"
            >
              <Plus className="w-4 h-4 mr-1" />
              Buy Credits
            </Button>
          </div>
        </div>

        <div className="mt-3 text-sm text-white/70">
          <div className="flex justify-between">
            <span>Questions: ~$0.50 each</span>
            <span>Summaries: ~$0.10 each</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

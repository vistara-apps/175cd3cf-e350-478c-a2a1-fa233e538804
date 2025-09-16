import { ChangeEvent } from 'react';
import { cn } from '@/lib/utils';

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  variant?: 'default' | 'textarea';
  className?: string;
  disabled?: boolean;
}

export function TextInput({ 
  value, 
  onChange, 
  placeholder, 
  variant = 'default',
  className,
  disabled = false
}: TextInputProps) {
  const baseStyles = 'w-full px-4 py-3 rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-colors duration-200';

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  if (variant === 'textarea') {
    return (
      <textarea
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        rows={6}
        className={cn(baseStyles, 'resize-none', className)}
      />
    );
  }

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      disabled={disabled}
      className={cn(baseStyles, className)}
    />
  );
}

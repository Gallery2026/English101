import React, { useState } from 'react';
import { Volume2, VolumeX, RotateCcw } from 'lucide-react';
import { playAudio, stopAudio } from '../utils/speech';

interface AudioButtonProps {
  text: string;
  size?: 'sm' | 'md' | 'lg';
  showSlowOption?: boolean;
  label?: string;
  className?: string;
}

export const AudioButton: React.FC<AudioButtonProps> = ({
  text,
  size = 'md',
  showSlowOption = true,
  label,
  className = ''
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [rate, setRate] = useState<number>(0.95);

  const handlePlay = (playbackRate: number) => {
    setIsPlaying(true);
    setRate(playbackRate);
    playAudio(text, {
      rate: playbackRate,
      onEnd: () => setIsPlaying(false),
      onError: () => setIsPlaying(false)
    });
  };

  const handleStop = () => {
    stopAudio();
    setIsPlaying(false);
  };

  const sizeClasses = {
    sm: 'h-7 px-2 text-xs gap-1',
    md: 'h-8 px-3 text-xs gap-1.5',
    lg: 'h-10 px-4 text-sm gap-2'
  };

  return (
    <div className={`inline-flex items-center gap-1.5 ${className}`}>
      <button
        type="button"
        title="Listen to standard pronunciation"
        onClick={() => (isPlaying ? handleStop() : handlePlay(0.95))}
        className={`inline-flex items-center justify-center rounded-xl font-medium transition-all shadow-xs active:scale-95 ${sizeClasses[size]} ${
          isPlaying
            ? 'bg-[#8EA66B] text-white animate-pulse'
            : 'bg-[#FFDCDC] text-[#8B4444] hover:bg-[#D8A2A2] hover:text-white'
        }`}
      >
        <Volume2 className={size === 'sm' ? 'h-3.5 w-3.5' : 'h-4 w-4'} />
        <span>{label || (isPlaying ? 'Playing...' : 'Listen')}</span>
      </button>

      {showSlowOption && (
        <button
          type="button"
          title="Listen slowly (0.75x speed)"
          onClick={() => (isPlaying && rate === 0.75 ? handleStop() : handlePlay(0.72))}
          className={`inline-flex items-center justify-center rounded-xl px-2 py-1 text-xs font-semibold transition-all shadow-xs active:scale-95 ${
            isPlaying && rate === 0.72
              ? 'bg-[#8EA66B] text-white'
              : 'bg-[#FFF9D6] text-[#7A621E] hover:bg-[#F2E59E]'
          }`}
        >
          <span>🐢 Slow</span>
        </button>
      )}
    </div>
  );
};

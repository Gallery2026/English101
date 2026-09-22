import React, { useState, useEffect } from 'react';
import { Timer, Play, Pause, RotateCcw, Bell } from 'lucide-react';

export const ClassroomTimer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState<number>(120); // 2 minutes default
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [initialSeconds, setInitialSeconds] = useState<number>(120);

  useEffect(() => {
    let interval: any = null;
    if (isRunning && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0 && isRunning) {
      setIsRunning(false);
      playChime();
    }
    return () => clearInterval(interval);
  }, [isRunning, secondsLeft]);

  const playChime = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
      osc.frequency.setValueAtTime(880, audioCtx.currentTime + 0.2); // A5
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.2);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 1.2);
    } catch (e) {
      console.log('Audio chime error:', e);
    }
  };

  const setPreset = (sec: number) => {
    setIsRunning(false);
    setInitialSeconds(sec);
    setSecondsLeft(sec);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setSecondsLeft(initialSeconds);
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`;
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold shadow-xs transition-all ${
          isRunning
            ? 'bg-[#8EA66B] text-white animate-pulse'
            : secondsLeft === 0
            ? 'bg-[#D8A2A2] text-white'
            : 'bg-white border border-[#E8DFD5] text-[#4A453E] hover:bg-[#FAF8F5]'
        }`}
      >
        <Timer className="h-4 w-4" />
        <span className="font-mono tracking-wider">{formatTime(secondsLeft)}</span>
        {isRunning && <span className="h-2 w-2 rounded-full bg-white" />}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-11 z-50 w-72 rounded-2xl border border-[#E8DFD5] bg-white p-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-[#F0EAE1] pb-2 mb-3">
            <div className="flex items-center gap-1.5 font-bold text-sm text-[#2D2A26]">
              <Timer className="h-4 w-4 text-[#8EA66B]" />
              <span>Classroom Timer</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-xs text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>

          <div className="flex flex-col items-center justify-center my-3">
            <span
              className={`font-mono text-4xl font-extrabold tracking-widest ${
                secondsLeft <= 10 && secondsLeft > 0
                  ? 'text-red-500 animate-bounce'
                  : secondsLeft === 0
                  ? 'text-[#D8A2A2]'
                  : 'text-[#2D2A26]'
              }`}
            >
              {formatTime(secondsLeft)}
            </span>
            {secondsLeft === 0 && (
              <span className="mt-1 text-xs font-bold text-[#D8A2A2] flex items-center gap-1">
                <Bell className="h-3.5 w-3.5" /> Time is up! Rotate roles now.
              </span>
            )}
          </div>

          {/* Quick presets */}
          <div className="grid grid-cols-4 gap-1.5 mb-3">
            {[
              { label: '1m', sec: 60 },
              { label: '2m', sec: 120 },
              { label: '3m', sec: 180 },
              { label: '5m', sec: 300 }
            ].map((p) => (
              <button
                key={p.label}
                type="button"
                onClick={() => setPreset(p.sec)}
                className={`rounded-lg py-1 text-xs font-semibold transition-all ${
                  initialSeconds === p.sec
                    ? 'bg-[#FFDCDC] text-[#8B4444] border border-[#D8A2A2]'
                    : 'bg-[#FAF8F5] text-[#5A544C] hover:bg-[#F2ECE4]'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-2 pt-1 border-t border-[#F0EAE1]">
            <button
              type="button"
              onClick={() => setIsRunning(!isRunning)}
              className={`flex flex-1 items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-bold text-white shadow-xs transition-all ${
                isRunning
                  ? 'bg-amber-500 hover:bg-amber-600'
                  : 'bg-[#8EA66B] hover:bg-[#7D945B]'
              }`}
            >
              {isRunning ? (
                <>
                  <Pause className="h-3.5 w-3.5" /> Pause
                </>
              ) : (
                <>
                  <Play className="h-3.5 w-3.5" /> Start
                </>
              )}
            </button>
            <button
              type="button"
              onClick={resetTimer}
              title="Reset Timer"
              className="rounded-xl border border-[#E8DFD5] bg-[#FAF8F5] p-2 text-[#5A544C] hover:bg-[#F0EAE1]"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

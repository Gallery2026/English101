import React, { useState } from 'react';
import {
  Dice5,
  Coins,
  Trophy,
  RotateCcw,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  User,
  ShieldAlert,
  Volume2
} from 'lucide-react';
import { GAME_SQUARES, GAME_CARDS } from '../../data/unit1Data';
import { GameSquare } from '../../types';
import { AudioButton } from '../AudioButton';
import { TeacherNoteCard } from '../TeacherNoteCard';

interface IntroductionsGameSectionProps {
  showVietnamese: boolean;
  teacherMode: boolean;
  onNext: () => void;
  onMarkCompleted: () => void;
}

export const IntroductionsGameSection: React.FC<IntroductionsGameSectionProps> = ({
  showVietnamese,
  teacherMode,
  onNext,
  onMarkCompleted
}) => {
  const [playerTurn, setPlayerTurn] = useState<'A' | 'B'>('A');
  const [posA, setPosA] = useState<number>(1);
  const [posB, setPosB] = useState<number>(1);
  const [lastCoinResult, setLastCoinResult] = useState<'heads' | 'tails' | null>(null);
  const [isTossing, setIsTossing] = useState<boolean>(false);
  const [activeSquare, setActiveSquare] = useState<GameSquare>(GAME_SQUARES[0]);
  const [winner, setWinner] = useState<'Người chơi 1' | 'Người chơi 2' | null>(null);
  const [scoreA, setScoreA] = useState<number>(0);
  const [scoreB, setScoreB] = useState<number>(0);

  const teacherGuide = {
    objective: 'Hoạt động Game hóa (Board Game) tổng hợp toàn bộ năng lực của Unit 1: Chào hỏi, đánh vần, giới thiệu bản thân, giới thiệu bên thứ ba và phản xạ tình huống.',
    teacherSays: `Announce: "Let's play The Introductions Game from Page 11!"\nStudent A tosses the coin first. Heads = move 1 square, Tails = move 2 squares.\nOn White squares, student follows instruction. On Blue squares, partner or teacher gives prompt and student responds!\nAward 1 point for every accurate response.`,
    studentA: `Toss coin and move token.\nSpeak response clearly using Card A/B or real info.\nListen to Student B when it is B's turn.`,
    studentB: `Prompt Student A on Blue squares.\nToss coin on your turn and complete the action.`,
    teacherTip: `Đặc biệt lưu ý Square 4 (sử dụng thông tin Card B: Lesley Johnson) và Square 10 (sử dụng thông tin Card A: Stanislav Beyer).`
  };

  const handleTossCoin = () => {
    if (winner || isTossing) return;

    setIsTossing(true);
    setTimeout(() => {
      const isHeads = Math.random() > 0.5;
      const result = isHeads ? 'heads' : 'tails';
      const steps = isHeads ? 1 : 2;
      setLastCoinResult(result);

      if (playerTurn === 'A') {
        const nextPos = Math.min(15, posA + steps);
        setPosA(nextPos);
        const sq = GAME_SQUARES.find((s) => s.number === nextPos) || GAME_SQUARES[0];
        setActiveSquare(sq);
        if (nextPos === 15) {
          setWinner('Người chơi 1');
        }
      } else {
        const nextPos = Math.min(15, posB + steps);
        setPosB(nextPos);
        const sq = GAME_SQUARES.find((s) => s.number === nextPos) || GAME_SQUARES[0];
        setActiveSquare(sq);
        if (nextPos === 15) {
          setWinner('Người chơi 2');
        }
      }

      setIsTossing(false);
    }, 450);
  };

  const handleNextPlayerTurn = (pass: boolean) => {
    if (pass) {
      if (playerTurn === 'A') setScoreA((s) => s + 1);
      else setScoreB((s) => s + 1);
    }
    setPlayerTurn((prev) => (prev === 'A' ? 'B' : 'A'));
  };

  const resetGame = () => {
    setPosA(1);
    setPosB(1);
    setPlayerTurn('A');
    setLastCoinResult(null);
    setActiveSquare(GAME_SQUARES[0]);
    setWinner(null);
    setScoreA(0);
    setScoreB(0);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-3xl border border-[#E8DFD5] bg-white p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#F0EAE1] pb-4 mb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF9D6] px-3 py-1 text-xs font-bold text-[#7A621E] mb-2">
              <Dice5 className="h-3.5 w-3.5" />
              Page 11 • Talking point
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#2D2A26]">
              The Introductions Game (15 Squares)
            </h2>
            <p className="text-xs sm:text-sm text-[#70695E]">
              Bàn cờ tương tác 15 ô chuẩn Business Result Elementary. Tung đồng xu: Mặt Ngửa (Heads) tiến 1 ô, Mặt Sấp (Tails) tiến 2 ô.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-3 rounded-2xl bg-[#FAF8F5] p-2 border border-[#E8DFD5] text-xs">
              <div className="flex items-center gap-1.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#2A5288] text-white font-bold text-[10px]">
                  A
                </span>
                <span className="font-bold text-[#2A5288]">Score: {scoreA}</span>
              </div>
              <span className="text-[#8C8479]">|</span>
              <div className="flex items-center gap-1.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#3B662A] text-white font-bold text-[10px]">
                  B
                </span>
                <span className="font-bold text-[#3B662A]">Score: {scoreB}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={resetGame}
              title="Reset Game"
              className="rounded-xl border border-[#E8DFD5] bg-[#FAF8F5] p-2 text-[#5A544C] hover:bg-[#F0EAE1]"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Teacher Guide Card */}
      {teacherMode && <TeacherNoteCard guide={teacherGuide} defaultExpanded={true} />}

      {/* Winner Banner */}
      {winner && (
        <div className="rounded-3xl border border-[#8EA66B] bg-[#F4FAF2] p-6 text-center text-[#283C21] shadow-md animate-bounce">
          <Trophy className="mx-auto h-12 w-12 text-[#8EA66B] mb-2" />
          <h3 className="text-xl font-extrabold">
            🎉 CHÚC MỪNG {winner.toUpperCase()} ĐÃ VỀ ĐÍCH ĐẦU TIÊN!
          </h3>
          <p className="text-xs text-[#3B662A] mt-1">
            Cả hai học viên đã hoàn thành xuất sắc tất cả thử thách giao tiếp của Unit 1.
          </p>
          <button
            type="button"
            onClick={resetGame}
            className="mt-4 rounded-xl bg-[#8EA66B] px-4 py-2 text-xs font-bold text-white shadow-xs"
          >
            Chơi lại ván mới
          </button>
        </div>
      )}

      {/* Interactive Controls Bar: Coin Toss & Turn */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-[#E8DFD5] bg-white p-5 shadow-xs">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-[#70695E]">Lượt hiện tại:</span>
          <div
            className={`flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs font-extrabold shadow-2xs ${
              playerTurn === 'A'
                ? 'bg-[#DCE8F7] text-[#2A5288] ring-2 ring-[#2A5288]/40'
                : 'bg-[#D9ECCF] text-[#3B662A] ring-2 ring-[#3B662A]/40'
            }`}
          >
            <User className="h-4 w-4" />
            <span>Student {playerTurn}</span>
          </div>

          <div className="text-xs text-[#70695E]">
            Vị trí: <strong>Ô {playerTurn === 'A' ? posA : posB}</strong>
          </div>
        </div>

        {/* Coin Toss Action */}
        <div className="flex items-center gap-3">
          {lastCoinResult && (
            <div className="flex items-center gap-1.5 text-xs font-bold">
              <span className="text-[#70695E]">Kết quả:</span>
              <span
                className={`rounded-lg px-2 py-0.5 text-xs uppercase font-extrabold ${
                  lastCoinResult === 'heads'
                    ? 'bg-[#FFF9D6] text-[#7A621E]'
                    : 'bg-[#FFDCDC] text-[#8B4444]'
                }`}
              >
                {lastCoinResult === 'heads' ? '🪙 HEADS (+1 Ô)' : '🪙 TAILS (+2 Ô)'}
              </span>
            </div>
          )}

          <button
            type="button"
            disabled={!!winner || isTossing}
            onClick={handleTossCoin}
            className={`flex items-center gap-2 rounded-2xl px-5 py-2.5 text-xs font-extrabold text-white shadow-md transition-all active:scale-95 ${
              isTossing
                ? 'bg-amber-400 animate-spin'
                : 'bg-gradient-to-r from-[#D8A2A2] to-[#8EA66B] hover:opacity-95'
            }`}
          >
            <Coins className="h-4 w-4" />
            <span>{isTossing ? 'Đang tung xu...' : `Tung đồng xu (Student ${playerTurn})`}</span>
          </button>
        </div>
      </div>

      {/* Active Square Detail & Card Modal */}
      <div className="rounded-3xl border border-[#E8DFD5] bg-white p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#F0EAE1] pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-xl text-xs font-extrabold ${
                activeSquare.type === 'blue'
                  ? 'bg-[#DCE8F7] text-[#2A5288]'
                  : activeSquare.type === 'finish'
                  ? 'bg-[#8EA66B] text-white'
                  : 'bg-[#FFDCDC] text-[#8B4444]'
              }`}
            >
              {activeSquare.number}
            </span>
            <div>
              <h3 className="font-extrabold text-base text-[#2D2A26]">
                {activeSquare.title}: {activeSquare.type === 'blue' ? 'BLUE SQUARE (Respond!)' : 'WHITE SQUARE (Follow instruction)'}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-[#70695E]">Teacher chấm điểm:</span>
            <button
              type="button"
              onClick={() => handleNextPlayerTurn(true)}
              className="rounded-xl bg-[#8EA66B] px-3 py-1.5 text-xs font-bold text-white shadow-xs hover:bg-[#7B925A]"
            >
              ✓ Đạt (+1 Điểm)
            </button>
            <button
              type="button"
              onClick={() => handleNextPlayerTurn(false)}
              className="rounded-xl border border-[#E8DFD5] bg-[#FAF8F5] px-3 py-1.5 text-xs font-bold text-[#5A544C] hover:bg-[#F0EAE1]"
            >
              Chuyển lượt
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Instruction */}
          <div className="md:col-span-7 space-y-3">
            <div className="rounded-2xl bg-[#FAF8F5] p-4 border border-[#E8DFD5]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#A05252] block mb-1">
                Yêu cầu / Tình huống:
              </span>
              <p className="text-sm font-bold text-[#2D2A26]">
                {activeSquare.instruction}
              </p>
              {showVietnamese && (
                <p className="mt-1 text-xs text-[#70695E] italic">
                  {activeSquare.instructionVi}
                </p>
              )}
            </div>

            {/* Suggested Answer */}
            {activeSquare.suggestedAnswer && (
              <div className="rounded-2xl bg-[#F4FAF2] p-4 border border-[#D9ECCF] text-xs">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-[#3B662A]">
                    Mẫu câu tham khảo (Suggested response):
                  </span>
                  <AudioButton
                    text={activeSquare.suggestedAnswer}
                    size="sm"
                    showSlowOption={false}
                    label="Nghe"
                  />
                </div>
                <p className="text-[#283C21] font-medium italic">
                  "{activeSquare.suggestedAnswer}"
                </p>
                {showVietnamese && activeSquare.suggestedAnswerVi && (
                  <p className="text-[11px] text-[#70695E] mt-0.5">
                    ({activeSquare.suggestedAnswerVi})
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Reference Cards A & B */}
          <div className="md:col-span-5 space-y-3">
            <span className="text-[11px] font-bold text-[#70695E] uppercase tracking-wider block">
              Thẻ thông tin nhân vật (Page 11 Cards):
            </span>

            {/* Card A */}
            <div
              className={`rounded-2xl p-3.5 border text-xs transition-all ${
                activeSquare.cardRef === 'A'
                  ? 'border-[#8B4444] bg-[#FFF5F5] ring-2 ring-[#8B4444]/20'
                  : 'border-[#E8DFD5] bg-[#FAF8F5]'
              }`}
            >
              <div className="flex items-center justify-between font-bold text-[#8B4444] mb-1">
                <span>CARD A (Page 11)</span>
                {activeSquare.cardRef === 'A' && (
                  <span className="rounded bg-[#8B4444] text-white px-1.5 py-0.5 text-[10px]">
                    Cần dùng cho ô này
                  </span>
                )}
              </div>
              <p className="font-extrabold text-[#2D2A26]">{GAME_CARDS.A.name}</p>
              <p className="text-[#5A544C]">
                {GAME_CARDS.A.job} • {GAME_CARDS.A.location} ({GAME_CARDS.A.nationality})
              </p>
            </div>

            {/* Card B */}
            <div
              className={`rounded-2xl p-3.5 border text-xs transition-all ${
                activeSquare.cardRef === 'B'
                  ? 'border-[#2A5288] bg-[#F0F6FF] ring-2 ring-[#2A5288]/20'
                  : 'border-[#E8DFD5] bg-[#FAF8F5]'
              }`}
            >
              <div className="flex items-center justify-between font-bold text-[#2A5288] mb-1">
                <span>CARD B (Page 11)</span>
                {activeSquare.cardRef === 'B' && (
                  <span className="rounded bg-[#2A5288] text-white px-1.5 py-0.5 text-[10px]">
                    Cần dùng cho ô này
                  </span>
                )}
              </div>
              <p className="font-extrabold text-[#2D2A26]">{GAME_CARDS.B.name}</p>
              <p className="text-[#5A544C]">
                {GAME_CARDS.B.job} • {GAME_CARDS.B.location} ({GAME_CARDS.B.nationality})
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The 15-Square Game Board Visual */}
      <div className="rounded-3xl border border-[#E8DFD5] bg-white p-6 shadow-xs">
        <h4 className="font-bold text-sm text-[#2D2A26] mb-3 flex items-center justify-between">
          <span>Bàn cờ 15 ô (The 15 Squares Board)</span>
          <span className="text-xs font-normal text-[#70695E]">
            Ô trắng: làm theo hướng dẫn • Ô xanh: đáp lại tình huống
          </span>
        </h4>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
          {GAME_SQUARES.map((sq) => {
            const hasA = posA === sq.number;
            const hasB = posB === sq.number;
            const isSelected = activeSquare.number === sq.number;

            return (
              <div
                key={sq.number}
                onClick={() => setActiveSquare(sq)}
                className={`relative cursor-pointer rounded-2xl p-3 border transition-all min-h-[90px] flex flex-col justify-between ${
                  isSelected
                    ? 'ring-2 ring-[#8EA66B] shadow-sm'
                    : 'hover:border-[#D8A2A2]'
                } ${
                  sq.type === 'start'
                    ? 'border-[#8EA66B] bg-[#F4FAF2]'
                    : sq.type === 'finish'
                    ? 'border-[#8B4444] bg-[#FFF5F5]'
                    : sq.type === 'blue'
                    ? 'border-[#DCE8F7] bg-[#F0F6FF]'
                    : 'border-[#E8DFD5] bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`text-xs font-extrabold ${
                        sq.type === 'blue'
                          ? 'text-[#2A5288]'
                          : sq.type === 'finish'
                          ? 'text-[#8B4444]'
                          : 'text-[#5A544C]'
                      }`}
                    >
                      {sq.number === 1 ? '1 START' : sq.number === 15 ? '15 FINISH' : `Ô ${sq.number}`}
                    </span>

                    {sq.type === 'blue' && (
                      <span className="rounded bg-[#DCE8F7] px-1 text-[9px] font-bold text-[#2A5288]">
                        Blue
                      </span>
                    )}
                  </div>

                  <p className="text-[11px] font-medium text-[#2D2A26] line-clamp-2 leading-snug">
                    {sq.instruction}
                  </p>
                </div>

                {/* Tokens overlay */}
                <div className="flex items-center gap-1 mt-2">
                  {hasA && (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#2A5288] text-[10px] font-bold text-white shadow-xs">
                      A
                    </span>
                  )}
                  {hasB && (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#3B662A] text-[10px] font-bold text-white shadow-xs">
                      B
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="flex items-center justify-between pt-2">
        <button
          type="button"
          onClick={onMarkCompleted}
          className="flex items-center gap-1.5 rounded-xl border border-[#8EA66B] bg-[#EBF3E5] px-4 py-2 text-xs font-bold text-[#8EA66B] hover:bg-[#8EA66B] hover:text-white transition-all shadow-xs"
        >
          <CheckCircle2 className="h-4 w-4" />
          <span>Đánh dấu hoàn thành Game</span>
        </button>

        <button
          type="button"
          onClick={onNext}
          className="flex items-center gap-2 rounded-xl bg-[#8EA66B] px-5 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-[#7B925A] active:scale-95 transition-all"
        >
          <span>Tiếp theo: 09. Speaking</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

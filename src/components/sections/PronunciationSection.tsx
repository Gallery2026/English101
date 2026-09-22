import React, { useState } from 'react';
import {
  Mic,
  Volume2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  HelpCircle,
  RotateCcw,
  Keyboard
} from 'lucide-react';
import { WORD_STRESS_ITEMS, ALPHABET_GROUPS } from '../../data/unit1Data';
import { AudioButton } from '../AudioButton';
import { TeacherNoteCard } from '../TeacherNoteCard';
import { playAudio } from '../../utils/speech';

interface PronunciationSectionProps {
  showVietnamese: boolean;
  teacherMode: boolean;
  onNext: () => void;
  onMarkCompleted: () => void;
}

export const PronunciationSection: React.FC<PronunciationSectionProps> = ({
  showVietnamese,
  teacherMode,
  onNext,
  onMarkCompleted
}) => {
  // Spelling interactive drill
  const [spellInput, setSpellInput] = useState<string>('');
  const [spellTarget, setSpellTarget] = useState<string>('MARCEGAGLIA');
  const [spellFeedback, setSpellFeedback] = useState<string | null>(null);

  // Selected word stress card
  const [activeStressIndex, setActiveStressIndex] = useState<number | null>(null);

  const teacherGuide = {
    objective: 'Nắm vững trọng âm từ (Word Stress) giữa Quốc gia - Quốc tịch và quy luật bảng chữ cái theo nhóm âm để đánh vần tên công ty.',
    teacherSays: `Demonstrate stress contrast: "Ja-PAN" (oO) vs "Japa-NESE" (ooO), "IT-aly" (Ooo) vs "I-TAL-ian" (oOo).\nAsk Student A to pronounce Group 1 letters: A - H - J - K.\nAsk Student B to spell their partner's company name letter by letter.`,
    studentA: `Listen and tap each letter to hear pronunciation.\nSay aloud: "How do you spell your company's name?"\nListen to Student B and type the letters.`,
    studentB: `Spell aloud slowly: "It's M-A-R-C-E-G-A-G-L-I-A".\nCheck if Student A wrote it correctly.`,
    teacherTip: `Đặc biệt chú ý chữ cái 'H' (/eɪtʃ/), 'J' (/dʒeɪ/), 'G' (/dʒiː/) và 'Z' (UK: /zed/, US: /ziː/). Đừng để học viên nhầm lẫn giữa G và J.`
  };

  const handleSpellCheck = () => {
    if (spellInput.trim().toUpperCase() === spellTarget.toUpperCase()) {
      setSpellFeedback('Chính xác! Excellent spelling!');
    } else {
      setSpellFeedback(`Chưa chính xác. Đáp án đúng là: ${spellTarget}`);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-3xl border border-[#E8DFD5] bg-white p-6 shadow-xs">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FFDCDC] px-3 py-1 text-xs font-bold text-[#8B4444] mb-2">
          <Mic className="h-3.5 w-3.5" />
          Page 7 & 9 • Pronunciation & Practically Speaking
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#2D2A26]">
          Word Stress & How to Spell (Đánh vần)
        </h2>
        <p className="text-xs sm:text-sm text-[#70695E]">
          Luyện trọng âm từ (Word stress) và nắm vững quy luật phát âm bảng chữ cái tiếng Anh theo 7 nhóm nguyên âm chuẩn Oxford.
        </p>
      </div>

      {/* Teacher Guide Card */}
      {teacherMode && <TeacherNoteCard guide={teacherGuide} defaultExpanded={true} />}

      {/* 1. Word Stress Section (Page 7 - Exercise 3) */}
      <div className="rounded-3xl border border-[#E8DFD5] bg-white p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#F0EAE1] pb-3 mb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#A05252]">
              Page 7 • Exercise 3
            </span>
            <h3 className="text-lg font-bold text-[#2D2A26]">
              Trọng âm từ (Word Stress Contrast)
            </h3>
            <p className="text-xs text-[#70695E]">
              Bấm vào từng từ để nghe sự thay đổi trọng âm giữa Quốc gia và Quốc tịch tương ứng.
            </p>
          </div>
          <span className="rounded-full bg-[#EBF3E5] px-3 py-1 text-xs font-bold text-[#8EA66B]">
            Nghe & Lặp lại
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {WORD_STRESS_ITEMS.map((item, idx) => (
            <div
              key={item.word}
              onClick={() => {
                setActiveStressIndex(idx);
                playAudio(item.word);
              }}
              className={`cursor-pointer rounded-2xl border p-3.5 transition-all text-center flex flex-col justify-between ${
                activeStressIndex === idx
                  ? 'border-[#8EA66B] bg-[#F4FAF2] shadow-sm ring-2 ring-[#8EA66B]/30'
                  : 'border-[#E8DFD5] bg-[#FAF8F5] hover:border-[#D8A2A2]'
              }`}
            >
              <div>
                <span className="text-[10px] font-bold text-[#70695E] uppercase block mb-1">
                  {item.stress}
                </span>
                <h4 className="text-base font-extrabold text-[#2D2A26]">{item.word}</h4>
                <p className="font-mono text-xs text-[#8B4444] mt-0.5">{item.ipa}</p>
              </div>

              <div className="mt-2 pt-2 border-t border-[#E8DFD5]">
                <span className="rounded-md bg-white px-1.5 py-0.5 text-[10px] font-semibold text-[#8EA66B] shadow-2xs">
                  {item.note}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Practically Speaking: How to Spell (Page 9) */}
      <div className="rounded-3xl border border-[#E8DFD5] bg-white p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#F0EAE1] pb-3 mb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#A05252]">
              Page 9 • Practically Speaking
            </span>
            <h3 className="text-lg font-bold text-[#2D2A26]">
              How to Spell – 7 Nhóm Âm Bảng Chữ Cái
            </h3>
            <p className="text-xs text-[#70695E]">
              Các chữ cái trong tiếng Anh được nhóm theo âm nguyên âm chung. Nhấn vào từng chữ cái để nghe phát âm chuẩn!
            </p>
          </div>
          <span className="rounded-full bg-[#FFF9D6] px-3 py-1 text-xs font-bold text-[#7A621E]">
            Oxford Vowel Method
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ALPHABET_GROUPS.map((group) => (
            <div
              key={group.groupNumber}
              className="rounded-2xl border border-[#E8DFD5] bg-[#FAF8F5] p-4 transition-all hover:border-[#8EA66B]"
            >
              <div className="flex items-center justify-between border-b border-[#E8DFD5] pb-2 mb-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#FFDCDC] text-xs font-bold text-[#8B4444]">
                  {group.groupNumber}
                </span>
                <span className="font-mono text-xs font-bold text-[#2A5288]">
                  Âm {group.vowelSoundIPA}
                </span>
              </div>

              {showVietnamese && (
                <p className="text-[11px] text-[#70695E] mb-2 font-medium">
                  {group.explanationVi}
                </p>
              )}

              {/* Letters in this sound group */}
              <div className="flex flex-wrap gap-2">
                {group.letters.map((letter) => {
                  const letterOnly = letter.split(' ')[0];
                  return (
                    <button
                      key={letter}
                      type="button"
                      onClick={() => playAudio(letterOnly)}
                      className="flex h-9 min-w-[36px] items-center justify-center rounded-xl bg-white border border-[#E8DFD5] px-2.5 text-xs font-extrabold text-[#2D2A26] shadow-2xs hover:bg-[#8EA66B] hover:text-white hover:border-[#8EA66B] active:scale-95 transition-all"
                      title={`Click to pronounce letter ${letterOnly}`}
                    >
                      {letter}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Spelling Questions & Pair Work */}
        <div className="mt-6 rounded-2xl bg-[#FFFDF9] p-4 border border-[#F0EAE1]">
          <h4 className="font-bold text-xs text-[#8B4444] uppercase tracking-wider mb-2">
            Mẫu câu hỏi đánh vần chuẩn thương mại (Page 9):
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="flex items-center justify-between rounded-xl bg-white p-3 border border-[#E8DFD5]">
              <div>
                <p className="font-bold text-[#2D2A26]">"How do you spell that?"</p>
                {showVietnamese && (
                  <p className="text-[11px] text-[#70695E]">Bạn đánh vần từ đó như thế nào?</p>
                )}
              </div>
              <AudioButton text="How do you spell that?" size="sm" showSlowOption={false} label="Nghe" />
            </div>

            <div className="flex items-center justify-between rounded-xl bg-white p-3 border border-[#E8DFD5]">
              <div>
                <p className="font-bold text-[#2D2A26]">"Can you spell your name, please?"</p>
                {showVietnamese && (
                  <p className="text-[11px] text-[#70695E]">Bạn vui lòng đánh vần tên của mình được không?</p>
                )}
              </div>
              <AudioButton text="Can you spell your name, please?" size="sm" showSlowOption={false} label="Nghe" />
            </div>
          </div>
        </div>

        {/* Interactive Spelling Practice */}
        <div className="mt-4 rounded-2xl bg-white p-4 border border-[#E8DFD5]">
          <div className="flex items-center gap-2 mb-2 font-bold text-xs text-[#2D2A26]">
            <Keyboard className="h-4 w-4 text-[#8EA66B]" />
            <span>Thực hành đánh vần tên thương mại trong Unit 1 (Student A ↔ Student B):</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs text-[#70695E]">Chọn từ mẫu trong Unit:</span>
            {['MARCEGAGLIA', 'AGUILERA', 'WOZNIAK', 'GORSKI', 'LUKASZ', 'TIZIANA'].map((w) => (
              <button
                key={w}
                type="button"
                onClick={() => {
                  setSpellTarget(w);
                  setSpellInput('');
                  setSpellFeedback(null);
                }}
                className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-all ${
                  spellTarget === w
                    ? 'bg-[#FFDCDC] text-[#8B4444] border border-[#D8A2A2]'
                    : 'bg-[#FAF8F5] text-[#5A544C] hover:bg-[#F0EAE1]'
                }`}
              >
                {w}
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <AudioButton text={spellTarget} size="md" label="Phát âm từ" />
              <button
                type="button"
                onClick={() => {
                  const letters = spellTarget.split('').join(' - ');
                  playAudio(letters, { rate: 0.8 });
                }}
                className="rounded-xl border border-[#E8DFD5] bg-[#FAF8F5] px-3 py-2 text-xs font-semibold text-[#4A453E] hover:bg-[#F0EAE1]"
              >
                🔊 Đánh vần từng chữ cái
              </button>
            </div>

            <div className="flex flex-1 items-center gap-2 w-full">
              <input
                type="text"
                value={spellInput}
                onChange={(e) => setSpellInput(e.target.value.toUpperCase())}
                placeholder="Nhập chữ cái bạn nghe được..."
                className="w-full rounded-xl border border-[#E8DFD5] px-3 py-2 text-xs uppercase font-mono tracking-widest text-[#2D2A26] focus:border-[#8EA66B] focus:outline-none"
              />
              <button
                type="button"
                onClick={handleSpellCheck}
                className="rounded-xl bg-[#8EA66B] px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#7B925A] shrink-0"
              >
                Kiểm tra
              </button>
            </div>
          </div>

          {spellFeedback && (
            <p
              className={`mt-2 text-xs font-semibold ${
                spellFeedback.includes('Chính xác') ? 'text-[#8EA66B]' : 'text-red-600'
              }`}
            >
              {spellFeedback}
            </p>
          )}
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
          <span>Đánh dấu hoàn thành Pronunciation</span>
        </button>

        <button
          type="button"
          onClick={onNext}
          className="flex items-center gap-2 rounded-xl bg-[#8EA66B] px-5 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-[#7B925A] active:scale-95 transition-all"
        >
          <span>Tiếp theo: 04. Grammar</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

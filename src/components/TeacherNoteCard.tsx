import React, { useState } from 'react';
import { Lightbulb, ChevronDown, ChevronUp, Sparkles, BookMarked, CheckCircle2, MessageSquare } from 'lucide-react';
import { TeacherGuide } from '../types';

interface TeacherNoteCardProps {
  guide: TeacherGuide;
  defaultExpanded?: boolean;
  forceShow?: boolean;
  onAddNote?: (title: string, content: string) => void;
}

export const TeacherNoteCard: React.FC<TeacherNoteCardProps> = ({
  guide,
  defaultExpanded = true,
  onAddNote
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [savedToNotes, setSavedToNotes] = useState(false);

  const handleSaveToNote = () => {
    if (onAddNote) {
      const content = `🎯 Mục tiêu: ${guide.objective}\n\n💡 Mẹo ghi nhớ & Tránh lỗi:\n${guide.teacherTip || ''}\n\n💬 Mẫu câu tự luyện:\n${guide.teacherSays || ''}`;
      onAddNote('Trọng tâm ghi nhớ tự học', content);
      setSavedToNotes(true);
      setTimeout(() => setSavedToNotes(false), 2500);
    }
  };

  return (
    <div className="my-4 rounded-3xl border border-[#D9ECCF] bg-[#F9FCF8] p-4 text-[#2D2A26] shadow-2xs transition-all">
      <div className="flex w-full items-center justify-between text-left">
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex flex-1 items-center gap-2.5 text-left font-semibold text-[#283C21] hover:opacity-90"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-[#EBF3E5] text-[#3B662A] shadow-2xs">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#3B662A]">
              Trọng tâm kiến thức & Mẹo tự học cá nhân
            </span>
            <p className="text-xs text-[#52634D] font-medium line-clamp-1">{guide.objective}</p>
          </div>
        </button>

        <div className="flex items-center gap-2">
          {onAddNote && (
            <button
              type="button"
              onClick={handleSaveToNote}
              className={`flex items-center gap-1.5 rounded-xl px-3 py-1 text-[11px] font-bold transition-all ${
                savedToNotes
                  ? 'bg-[#8EA66B] text-white'
                  : 'bg-white border border-[#D9ECCF] text-[#3B662A] hover:bg-[#EBF3E5]'
              }`}
              title="Lưu điểm cốt lõi này vào Sổ tay Live Notes"
            >
              <BookMarked className="h-3.5 w-3.5" />
              <span>{savedToNotes ? 'Đã lưu ✓' : 'Lưu vào Live Notes'}</span>
            </button>
          )}

          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 text-xs text-[#3B662A] font-semibold pl-1"
          >
            <span>{isExpanded ? 'Thu gọn' : 'Xem ghi nhớ'}</span>
            {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="mt-3 space-y-3 pt-3 border-t border-[#D9ECCF]/60">
          {/* Key Objective summary */}
          <div className="rounded-2xl bg-white p-3.5 border border-[#E1EFD9] shadow-2xs">
            <div className="flex items-center gap-1.5 font-bold text-[#3B662A] text-xs mb-1">
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>Mục tiêu phản xạ cần đạt:</span>
            </div>
            <p className="text-xs text-[#3A4535] leading-relaxed font-medium">
              {guide.objective}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            {/* Practical Drill / Self-practice dialogue */}
            {(guide.teacherSays || guide.studentA) && (
              <div className="rounded-2xl bg-white p-3.5 border border-[#E1EFD9] shadow-2xs space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-[#2A5288]">
                  <MessageSquare className="h-3.5 w-3.5" />
                  <span>Kịch bản mẫu câu tự luyện phản xạ:</span>
                </div>
                <div className="space-y-1.5 text-[#2C3B4E] leading-relaxed text-[11.5px] font-medium bg-[#F8FAFC] p-2.5 rounded-xl border border-[#E2E8F0]">
                  {guide.teacherSays && (
                    <p className="whitespace-pre-line">
                      {guide.teacherSays
                        .replace(/Ask Student A/g, 'Tự đặt câu hỏi')
                        .replace(/instruct Student A/g, 'Luyện tập hỏi')
                        .replace(/Student B/g, 'Đối tác')
                        .replace(/Teacher/g, 'Người đối thoại')}
                    </p>
                  )}
                  {guide.studentA && (
                    <p className="whitespace-pre-line text-[#1E3A8A]">
                      💬 {guide.studentA
                        .replace(/Student A/g, 'Bạn')
                        .replace(/Student B/g, 'Đối tác')
                        .replace(/Teacher/g, 'Giáo viên')}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Study Tip & Pitfall avoidance */}
            {guide.teacherTip && (
              <div className="rounded-2xl bg-[#FFFDF0] p-3.5 border border-[#F5ECC4] shadow-2xs space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-[#7A621E]">
                  <Lightbulb className="h-3.5 w-3.5" />
                  <span>Mẹo vàng ghi nhớ & Tránh lỗi sai:</span>
                </div>
                <p className="text-[#594B20] leading-relaxed text-xs font-medium">
                  {guide.teacherTip}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

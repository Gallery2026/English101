import React, { useState } from 'react';
import { Lightbulb, ChevronDown, ChevronUp, AlertCircle, Bookmark, CheckCircle, Sparkles } from 'lucide-react';
import { StudyTip } from '../types';

interface StudyInsightCardProps {
  tip: StudyTip;
  defaultExpanded?: boolean;
  onAddNote?: (content: string) => void;
}

export const StudyInsightCard: React.FC<StudyInsightCardProps> = ({
  tip,
  defaultExpanded = true,
  onAddNote
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="my-4 rounded-3xl border border-[#D9ECCF] bg-[#F7FCF5] p-4 text-[#2D2A26] shadow-2xs transition-all">
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center justify-between text-left font-semibold text-[#283C21]"
      >
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-[#EBF3E5] text-[#3B662A] shadow-2xs">
            <Lightbulb className="h-4 w-4" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#3B662A]">
              {tip.title || 'Điểm Cốt Lõi Cần Nhớ & Mẹo Tự Học'}
            </span>
            <p className="text-xs text-[#52634D] font-medium">{tip.coreConcept}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 text-xs text-[#3B662A] font-semibold">
          <span>{isExpanded ? 'Thu gọn' : 'Xem ghi nhớ'}</span>
          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </div>
      </button>

      {isExpanded && (
        <div className="mt-3 space-y-3 pt-3 border-t border-[#D9ECCF]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            {/* Key takeaway */}
            <div className="rounded-2xl bg-white p-3.5 border border-[#E1EFD9] shadow-2xs">
              <div className="flex items-center gap-1.5 font-bold text-[#3B662A] mb-1">
                <CheckCircle className="h-3.5 w-3.5" />
                <span>Quy tắc cốt lõi (Key Takeaway)</span>
              </div>
              <p className="text-[#3A4535] leading-relaxed whitespace-pre-line font-medium">
                {tip.keyTakeaway}
              </p>
            </div>

            {/* Memory trick */}
            <div className="rounded-2xl bg-[#FFFDF0] p-3.5 border border-[#F5ECC4] shadow-2xs">
              <div className="flex items-center gap-1.5 font-bold text-[#7A621E] mb-1">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Mẹo ghi nhớ nhanh (Memory Trick)</span>
              </div>
              <p className="text-[#594B20] leading-relaxed whitespace-pre-line font-medium">
                {tip.memoryTrick}
              </p>
            </div>
          </div>

          {/* Common mistake */}
          {tip.commonMistake && (
            <div className="flex items-start gap-2 rounded-2xl bg-[#FFF5F5] p-3 border border-[#FFDCDC] text-xs text-[#8B4444]">
              <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-[#8B4444]" />
              <div>
                <span className="font-bold">Lỗi sai phổ biến cần tránh: </span>
                <span className="font-medium">{tip.commonMistake}</span>
              </div>
            </div>
          )}

          {/* Self-drill */}
          {tip.selfDrill && (
            <div className="rounded-2xl bg-white p-3 border border-[#E8DFD5] text-xs text-[#5A544C]">
              <span className="font-bold text-[#2D2A26]">🎯 Tự kiểm tra phản xạ: </span>
              <span>{tip.selfDrill}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

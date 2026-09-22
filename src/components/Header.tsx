import React from 'react';
import {
  Languages,
  BookMarked,
  Download,
  CheckCircle,
  Headphones,
  Sparkles
} from 'lucide-react';

interface HeaderProps {
  progressPercentage: number;
  showVietnamese: boolean;
  onToggleVietnamese: () => void;
  notesCount: number;
  onOpenNotes: () => void;
  onExportHTML: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  progressPercentage,
  showVietnamese,
  onToggleVietnamese,
  notesCount,
  onOpenNotes,
  onExportHTML
}) => {
  return (
    <header className="sticky top-0 z-40 border-b border-[#E8DFD5] bg-[#FAF8F5]/95 backdrop-blur-md px-4 py-2.5 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
        {/* Brand & Unit info */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFDCDC] text-[#8B4444] shadow-xs font-extrabold text-lg">
            1
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8EA66B]">
                Business Result Elementary
              </span>
              <span className="inline-flex items-center rounded-full bg-[#FFF9D6] px-2 py-0.5 text-[10px] font-extrabold text-[#7A621E]">
                Tự học & Tổng hợp cá nhân
              </span>
            </div>
            <h1 className="text-base font-extrabold text-[#2D2A26] sm:text-lg">
              Unit 1: Jobs & Companies
            </h1>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Live Notes Button */}
          <button
            type="button"
            onClick={onOpenNotes}
            className="flex items-center gap-2 rounded-xl bg-white border border-[#D8A2A2] px-3.5 py-1.5 text-xs font-bold text-[#8B4444] shadow-xs hover:bg-[#FFF5F5] transition-all"
            title="Mở sổ tay Live Notes cá nhân"
          >
            <BookMarked className="h-4 w-4" />
            <span>Live Notes</span>
            <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[#FFDCDC] px-1 text-[10px] font-extrabold text-[#8B4444]">
              {notesCount}
            </span>
          </button>

          {/* Bilingual Toggle */}
          <button
            type="button"
            onClick={onToggleVietnamese}
            className={`flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-semibold transition-all shadow-xs ${
              showVietnamese
                ? 'border-[#8EA66B] bg-[#EBF3E5] text-[#3B662A]'
                : 'border-[#E8DFD5] bg-white text-[#5A544C] hover:bg-[#FAF8F5]'
            }`}
            title="Bật/Tắt hiển thị tiếng Việt song ngữ"
          >
            <Languages className="h-4 w-4" />
            <span className="hidden sm:inline">
              {showVietnamese ? 'Song ngữ: BẬT' : 'Tiếng Anh: 100%'}
            </span>
            <span className="sm:hidden">{showVietnamese ? 'VI: ON' : 'EN'}</span>
          </button>

          {/* Print / Export */}
          <button
            type="button"
            onClick={onExportHTML}
            className="flex items-center gap-1.5 rounded-xl border border-[#E8DFD5] bg-white px-3 py-1.5 text-xs font-semibold text-[#5A544C] hover:bg-[#FAF8F5] transition-all shadow-xs"
            title="In hoặc lưu PDF giáo trình"
          >
            <Download className="h-4 w-4" />
            <span className="hidden md:inline">In / Xuất PDF</span>
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mx-auto mt-2 max-w-7xl">
        <div className="flex items-center justify-between text-[11px] text-[#70695E] mb-1">
          <span className="font-semibold">Tiến độ hoàn thành bài học Unit 1</span>
          <span className="font-mono font-bold text-[#8EA66B]">{progressPercentage}%</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#E8DFD5]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#D8A2A2] to-[#8EA66B] transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>
    </header>
  );
};

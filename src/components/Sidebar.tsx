import React from 'react';
import {
  Compass,
  BookOpen,
  Mic,
  FileText,
  CheckCircle2,
  Users,
  MessageSquare,
  Dice5,
  Volume2,
  Award,
  Headphones,
  BookMarked
} from 'lucide-react';
import { TabId } from '../types';

interface SidebarProps {
  activeTab: TabId;
  onSelectTab: (tab: TabId) => void;
  completedTabs: Record<TabId, boolean>;
  notesCount?: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onSelectTab,
  completedTabs,
  notesCount = 0
}) => {
  const navItems: { id: TabId; label: string; subLabel: string; icon: any; order: string; badge?: string }[] = [
    {
      id: 'overview',
      label: 'Tổng quan & Warm-up',
      subLabel: 'Mục tiêu & Starting Point (p.6)',
      icon: Compass,
      order: '01'
    },
    {
      id: 'vocabulary',
      label: 'Từ vựng trọng tâm',
      subLabel: 'Quốc gia, Quốc tịch, Nghề nghiệp',
      icon: BookOpen,
      order: '02'
    },
    {
      id: 'pronunciation',
      label: 'Phát âm & Đánh vần',
      subLabel: 'Trọng âm từ, a/an & Bảng chữ cái',
      icon: Mic,
      order: '03'
    },
    {
      id: 'grammar',
      label: 'Ngữ pháp cốt lõi',
      subLabel: 'Present Simple BE & Possessives',
      icon: FileText,
      order: '04'
    },
    {
      id: 'practice',
      label: 'Bài tập củng cố',
      subLabel: 'Hồ sơ Marcegaglia & Sofia Aguilera',
      icon: CheckCircle2,
      order: '05'
    },
    {
      id: 'listening',
      label: 'Audio & Video Hub',
      subLabel: 'Tracks 1.1–1.7 & Video Viewpoint',
      icon: Headphones,
      order: '06',
      badge: 'MỚI'
    },
    {
      id: 'pairwork',
      label: 'Luyện phản xạ cá nhân',
      subLabel: 'Hỏi đáp & Tường thuật ngôi thứ 3',
      icon: Users,
      order: '07'
    },
    {
      id: 'communication',
      label: 'Giao tiếp công sở',
      subLabel: 'Chào đón lễ tân, Giới thiệu & Tạm biệt',
      icon: MessageSquare,
      order: '08'
    },
    {
      id: 'game',
      label: 'Board Game phản xạ',
      subLabel: 'Thử thách 15 ô cờ tương tác',
      icon: Dice5,
      order: '09'
    },
    {
      id: 'speaking',
      label: 'Luyện nói tự do',
      subLabel: 'Thuyết trình & Profile công ty',
      icon: Volume2,
      order: '10'
    },
    {
      id: 'notes',
      label: 'Sổ tay Live Notes',
      subLabel: 'Ghi chú & Đính kèm link tài liệu',
      icon: BookMarked,
      order: '11',
      badge: notesCount > 0 ? `${notesCount}` : undefined
    },
    {
      id: 'review',
      label: 'Tổng kết & Đánh giá',
      subLabel: 'Checklist năng lực & Ôn tập Unit 1',
      icon: Award,
      order: '12'
    }
  ];

  return (
    <aside className="w-full lg:w-72 shrink-0">
      <div className="sticky top-20 rounded-3xl border border-[#E8DFD5] bg-white p-3 shadow-xs">
        <div className="mb-2 px-3 pt-2">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#8B4444]">
            Giáo trình tự học Unit 1
          </span>
          <p className="text-xs text-[#70695E]">Business Result Elementary</p>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            const isCompleted = completedTabs[item.id];

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectTab(item.id)}
                className={`group flex w-full items-center justify-between rounded-2xl p-2.5 text-left transition-all ${
                  isActive
                    ? 'bg-[#FFDCDC] text-[#8B4444] shadow-xs'
                    : 'text-[#4A453E] hover:bg-[#FAF8F5]'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-all ${
                      isActive
                        ? 'bg-[#D8A2A2] text-white shadow-xs'
                        : isCompleted
                        ? 'bg-[#EBF3E5] text-[#8EA66B]'
                        : 'bg-[#FAF8F5] text-[#8C8479]'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 truncate">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-mono font-bold opacity-60">
                        {item.order}
                      </span>
                      <span
                        className={`text-xs font-bold leading-none truncate ${
                          isActive ? 'text-[#8B4444]' : 'text-[#2D2A26]'
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                    <span className="text-[10.5px] text-[#7E776D] font-normal block mt-0.5 truncate">
                      {item.subLabel}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0 ml-1.5">
                  {item.badge && (
                    <span
                      className={`rounded-md px-1.5 py-0.5 text-[9px] font-extrabold ${
                        item.id === 'notes'
                          ? 'bg-[#FFDCDC] text-[#8B4444]'
                          : 'bg-[#EBF3E5] text-[#3B662A]'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                  {isCompleted && (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#8EA66B] text-white text-[10px] font-bold">
                      ✓
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

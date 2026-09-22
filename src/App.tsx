import React, { useState, useEffect } from 'react';
import { TabId, LiveNote } from './types';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { LiveNotesDrawer } from './components/LiveNotesDrawer';
import { OverviewSection } from './components/sections/OverviewSection';
import { VocabularySection } from './components/sections/VocabularySection';
import { PronunciationSection } from './components/sections/PronunciationSection';
import { GrammarSection } from './components/sections/GrammarSection';
import { PracticeSection } from './components/sections/PracticeSection';
import { ListeningSection } from './components/sections/ListeningSection';
import { PairWorkSection } from './components/sections/PairWorkSection';
import { BusinessCommunicationSection } from './components/sections/BusinessCommunicationSection';
import { IntroductionsGameSection } from './components/sections/IntroductionsGameSection';
import { SpeakingSection } from './components/sections/SpeakingSection';
import { LiveNotesSection } from './components/sections/LiveNotesSection';
import { ReviewSection } from './components/sections/ReviewSection';

const ORDERED_TABS: TabId[] = [
  'overview',
  'vocabulary',
  'pronunciation',
  'grammar',
  'practice',
  'listening',
  'pairwork',
  'communication',
  'game',
  'speaking',
  'notes',
  'review'
];

const INITIAL_SEEDED_NOTES: LiveNote[] = [
  {
    id: 'seed-1',
    sectionId: 'vocabulary',
    title: 'Ghi chú trọng âm Quốc gia & Quốc tịch',
    content: 'Quy tắc vàng: Hầu hết từ có đuôi -ese (Japanese, Chinese, Vietnamese) luôn nhận trọng âm chính trực tiếp vào âm tiết cuối chứa đuôi -ese (/ˌdʒæp.ənˈiːz/).\n\nTừ chỉ quốc tịch có đuôi -ian (Italian, Brazilian) thường chuyển trọng âm sang âm tiết thứ 2: Italy /ˈɪt.əl.i/ -> Italian /ɪˈtæl.jən/.',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ['vocabulary', 'pronunciation'],
    links: [
      {
        id: 'link-1',
        title: "Oxford Learner's Dictionaries - Italian",
        url: 'https://www.oxfordlearnersdictionaries.com/definition/english/italian_1'
      },
      {
        id: 'link-2',
        title: 'Cambridge Dictionary - Japanese Pronunciation',
        url: 'https://dictionary.cambridge.org/dictionary/english/japanese'
      }
    ]
  },
  {
    id: 'seed-2',
    sectionId: 'grammar',
    title: 'Quy tắc phân biệt "its" vs "it\'s"',
    content: '• its: Tính từ sở hữu chỉ vật/công ty (không bao giờ có dấu nháy\'). Ví dụ: "Its head office is in Madrid." "Its main products are steel pipes."\n• it\'s: Dạng viết tắt của "it is". Ví dụ: "It\'s a manufacturing company." "Is it a family business? - Yes, it is."',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ['grammar'],
    links: [
      {
        id: 'link-3',
        title: 'British Council - Possessive Adjectives',
        url: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/possessive-adjectives'
      }
    ]
  },
  {
    id: 'seed-3',
    sectionId: 'listening',
    title: 'Tổng kết bài nghe Viewpoint 1: Places of work',
    content: 'Các từ vựng đắt giá về không gian làm việc:\n• open plan office: văn phòng mở không vách ngăn\n• shared desks: bàn làm việc chia sẻ\n• barn conversion: nhà kho cải tạo thành văn phòng tại nông thôn\n• head of advertising production: trưởng phòng sản xuất quảng cáo',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ['listening', 'vocabulary'],
    links: [
      {
        id: 'link-4',
        title: 'Oxford Business Result Online Resources',
        url: 'https://elt.oup.com/student/businessresult/'
      }
    ]
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>(() => {
    const saved = localStorage.getItem('bre_unit1_activeTab');
    return (saved as TabId) || 'overview';
  });

  const [showVietnamese, setShowVietnamese] = useState<boolean>(() => {
    const saved = localStorage.getItem('bre_unit1_showVi');
    return saved !== null ? saved === 'true' : true;
  });

  const [completedTabs, setCompletedTabs] = useState<Record<TabId, boolean>>(() => {
    try {
      const saved = localStorage.getItem('bre_unit1_completedTabs');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Live Notes state with local storage persistence
  const [notes, setNotes] = useState<LiveNote[]>(() => {
    try {
      const saved = localStorage.getItem('bre_unit1_live_notes');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
      return INITIAL_SEEDED_NOTES;
    } catch {
      return INITIAL_SEEDED_NOTES;
    }
  });

  const [isNotesDrawerOpen, setIsNotesDrawerOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('bre_unit1_activeTab', activeTab);
  }, [activeTab]);

  useEffect(() => {
    localStorage.setItem('bre_unit1_showVi', String(showVietnamese));
  }, [showVietnamese]);

  useEffect(() => {
    localStorage.setItem('bre_unit1_completedTabs', JSON.stringify(completedTabs));
  }, [completedTabs]);

  useEffect(() => {
    localStorage.setItem('bre_unit1_live_notes', JSON.stringify(notes));
  }, [notes]);

  const progressPercentage = Math.round(
    (ORDERED_TABS.filter((tab) => completedTabs[tab]).length / ORDERED_TABS.length) * 100
  );

  const handleNextTab = () => {
    const currentIndex = ORDERED_TABS.indexOf(activeTab);
    if (currentIndex < ORDERED_TABS.length - 1) {
      const nextTab = ORDERED_TABS[currentIndex + 1];
      setActiveTab(nextTab);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleMarkCompleted = (tabToMark?: TabId) => {
    const target = tabToMark || activeTab;
    setCompletedTabs((prev) => ({
      ...prev,
      [target]: true
    }));
  };

  const handleRestartCourse = () => {
    if (window.confirm('Bạn có chắc muốn đặt lại toàn bộ tiến độ học Unit 1?')) {
      setCompletedTabs({} as any);
      setActiveTab('overview');
      localStorage.removeItem('bre_unit1_completedTabs');
      localStorage.removeItem('bre_unit1_activeTab');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleExportHTML = () => {
    window.print();
  };

  // Note management handlers
  const handleSaveNote = (noteData: Partial<LiveNote>) => {
    const now = new Date().toISOString();
    if (noteData.id && notes.some((n) => n.id === noteData.id)) {
      setNotes(
        notes.map((n) =>
          n.id === noteData.id
            ? {
                ...n,
                ...noteData,
                updatedAt: now
              }
            : n
        )
      );
    } else {
      const newNote: LiveNote = {
        id: noteData.id || Date.now().toString(),
        sectionId: noteData.sectionId || activeTab,
        title: noteData.title || `Ghi chú ${new Date().toLocaleDateString('vi-VN')}`,
        content: noteData.content || '',
        links: noteData.links || [],
        createdAt: now,
        updatedAt: now,
        tags: noteData.tags || [noteData.sectionId || activeTab]
      };
      setNotes([newNote, ...notes]);
    }
  };

  const handleDeleteNote = (id: string) => {
    setNotes(notes.filter((n) => n.id !== id));
  };

  const handleQuickAddNote = (title: string, content: string) => {
    handleSaveNote({
      title,
      content,
      sectionId: activeTab
    });
    setIsNotesDrawerOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2D2A26] font-sans selection:bg-[#FFDCDC] selection:text-[#8B4444]">
      {/* Sticky Header with Progress, Live Notes toggle, and Bilingual switcher */}
      <Header
        progressPercentage={progressPercentage}
        showVietnamese={showVietnamese}
        onToggleVietnamese={() => setShowVietnamese(!showVietnamese)}
        notesCount={notes.length}
        onOpenNotes={() => setIsNotesDrawerOpen(true)}
        onExportHTML={handleExportHTML}
      />

      {/* Main Layout Container */}
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Navigation Sidebar */}
          <div className="lg:w-72 shrink-0">
            <Sidebar
              activeTab={activeTab}
              onSelectTab={(tab) => {
                setActiveTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              completedTabs={completedTabs}
              notesCount={notes.length}
            />
          </div>

          {/* Main Content Stage */}
          <main className="flex-1 min-w-0">
            {activeTab === 'overview' && (
              <OverviewSection
                showVietnamese={showVietnamese}
                teacherMode={true}
                onNext={handleNextTab}
                onMarkCompleted={() => handleMarkCompleted('overview')}
              />
            )}

            {activeTab === 'vocabulary' && (
              <VocabularySection
                showVietnamese={showVietnamese}
                teacherMode={true}
                onNext={handleNextTab}
                onMarkCompleted={() => handleMarkCompleted('vocabulary')}
              />
            )}

            {activeTab === 'pronunciation' && (
              <PronunciationSection
                showVietnamese={showVietnamese}
                teacherMode={true}
                onNext={handleNextTab}
                onMarkCompleted={() => handleMarkCompleted('pronunciation')}
              />
            )}

            {activeTab === 'grammar' && (
              <GrammarSection
                showVietnamese={showVietnamese}
                teacherMode={true}
                onNext={handleNextTab}
                onMarkCompleted={() => handleMarkCompleted('grammar')}
              />
            )}

            {activeTab === 'practice' && (
              <PracticeSection
                showVietnamese={showVietnamese}
                teacherMode={true}
                onNext={handleNextTab}
                onMarkCompleted={() => handleMarkCompleted('practice')}
              />
            )}

            {activeTab === 'listening' && (
              <ListeningSection
                showVietnamese={showVietnamese}
                onNext={handleNextTab}
                onMarkCompleted={() => handleMarkCompleted('listening')}
                onQuickAddNote={handleQuickAddNote}
              />
            )}

            {activeTab === 'pairwork' && (
              <PairWorkSection
                showVietnamese={showVietnamese}
                teacherMode={true}
                onNext={handleNextTab}
                onMarkCompleted={() => handleMarkCompleted('pairwork')}
              />
            )}

            {activeTab === 'communication' && (
              <BusinessCommunicationSection
                showVietnamese={showVietnamese}
                teacherMode={true}
                onNext={handleNextTab}
                onMarkCompleted={() => handleMarkCompleted('communication')}
              />
            )}

            {activeTab === 'game' && (
              <IntroductionsGameSection
                showVietnamese={showVietnamese}
                teacherMode={true}
                onNext={handleNextTab}
                onMarkCompleted={() => handleMarkCompleted('game')}
              />
            )}

            {activeTab === 'speaking' && (
              <SpeakingSection
                showVietnamese={showVietnamese}
                teacherMode={true}
                onNext={handleNextTab}
                onMarkCompleted={() => handleMarkCompleted('speaking')}
              />
            )}

            {activeTab === 'notes' && (
              <LiveNotesSection
                notes={notes}
                onSaveNote={handleSaveNote}
                onDeleteNote={handleDeleteNote}
              />
            )}

            {activeTab === 'review' && (
              <ReviewSection
                showVietnamese={showVietnamese}
                teacherMode={true}
                onMarkCompleted={() => handleMarkCompleted('review')}
                onRestartCourse={handleRestartCourse}
              />
            )}
          </main>
        </div>
      </div>

      {/* Slide-out Live Notes Drawer */}
      <LiveNotesDrawer
        isOpen={isNotesDrawerOpen}
        onClose={() => setIsNotesDrawerOpen(false)}
        notes={notes}
        currentSection={activeTab}
        onSaveNote={handleSaveNote}
        onDeleteNote={handleDeleteNote}
      />
    </div>
  );
}

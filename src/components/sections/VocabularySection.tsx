import React, { useState } from 'react';
import {
  BookOpen,
  Filter,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Users,
  Eye,
  EyeOff
} from 'lucide-react';
import {
  UNIT_VOCABULARY,
  PEOPLE_IN_UNIT_1
} from '../../data/unit1Data';
import { AudioButton } from '../AudioButton';
import { TeacherNoteCard } from '../TeacherNoteCard';

interface VocabularySectionProps {
  showVietnamese: boolean;
  teacherMode: boolean;
  onNext: () => void;
  onMarkCompleted: () => void;
}

export const VocabularySection: React.FC<VocabularySectionProps> = ({
  showVietnamese: globalShowVietnamese,
  teacherMode,
  onNext,
  onMarkCompleted
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [revealViMap, setRevealViMap] = useState<Record<string, boolean>>({});

  const toggleLocalVi = (id: string) => {
    setRevealViMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredVocab = UNIT_VOCABULARY.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const teacherGuide = {
    objective: 'Học viên phát âm chuẩn IPA, hiểu nghĩa và nhớ được 8 quốc gia, 8 quốc tịch và 8 chức danh công việc xuất hiện trong Unit 1.',
    teacherSays: `Play audio for Dahlia: "Dahlia is from India. Dahlia is Indian. She is a receptionist."\nAsk Student A: "Where is Randy from?"\nStudent A answers: "Randy is from the USA."\nThen prompt Student B: "What is his nationality and job?"`,
    studentA: `Listen carefully to pronunciation.\nAnswer: "Randy is from the USA."\nTurn to Student B: "Where is Charlotte from?"`,
    studentB: `Answer: "Charlotte is from the UK. She is British and she is a Financial Director."\nSwap roles and test each other.`,
    teacherTip: `Lưu ý mạo từ "the" trong "the UK" và "the USA". Nhắc học viên "an" đứng trước "American" và "Italian" (an American company, an Italian company).`
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-3xl border border-[#E8DFD5] bg-white p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#F0EAE1] pb-4 mb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FFDCDC] px-3 py-1 text-xs font-bold text-[#8B4444] mb-2">
              <BookOpen className="h-3.5 w-3.5" />
              Page 6–7 • Working with words
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#2D2A26]">
              Countries, Nationalities & Jobs
            </h2>
            <p className="text-xs sm:text-sm text-[#70695E]">
              Tổng hợp toàn bộ từ vựng thực tế trong Unit 1 với phiên âm chuẩn IPA quốc tế và ví dụ từ sách.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {[
              { id: 'all', label: 'Tất cả từ vựng' },
              { id: 'country', label: 'Quốc gia (Countries)' },
              { id: 'nationality', label: 'Quốc tịch (Nationalities)' },
              { id: 'job', label: 'Chức danh (Jobs)' },
              { id: 'managerial', label: 'Quản lý mở rộng' }
            ].map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setSelectedCategory(f.id)}
                className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                  selectedCategory === f.id
                    ? 'bg-[#8EA66B] text-white shadow-xs'
                    : 'bg-[#FAF8F5] text-[#5A544C] hover:bg-[#F0EAE1]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tip Box a/an from Page 7 */}
        <div className="rounded-2xl border border-[#D9ECCF] bg-[#F4FAF2] p-4 text-xs text-[#283C21]">
          <div className="flex items-center gap-2 font-bold text-sm text-[#3B662A] mb-1">
            <Sparkles className="h-4 w-4" />
            <span>Tip a/an (Từ trang 7 Business Result Elementary):</span>
          </div>
          <p className="leading-relaxed">
            • Use <strong>a / an</strong> before a job or company:{' '}
            <em className="text-[#8B4444]">"I’m a receptionist with an American company."</em>
            <br />
            • Use <strong>an</strong> before a vowel sound (u, e, o, a, i):{' '}
            <em className="text-[#8B4444]">an American, an Italian</em>.
          </p>
        </div>
      </div>

      {/* Teacher Guide Card */}
      {teacherMode && <TeacherNoteCard guide={teacherGuide} defaultExpanded={true} />}

      {/* Vocabulary Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredVocab.map((item) => {
          const isViVisible = globalShowVietnamese || !!revealViMap[item.id];

          return (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-3xl border border-[#E8DFD5] bg-white p-5 shadow-xs transition-all hover:border-[#D8A2A2] hover:shadow-md"
            >
              <div>
                {/* Category tag & Listen button */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wide ${
                      item.category === 'country'
                        ? 'bg-[#FFDCDC] text-[#8B4444]'
                        : item.category === 'nationality'
                        ? 'bg-[#DCE8F7] text-[#2A5288]'
                        : item.category === 'job'
                        ? 'bg-[#D9ECCF] text-[#3B662A]'
                        : 'bg-[#FFF9D6] text-[#7A621E]'
                    }`}
                  >
                    {item.category}
                  </span>
                  <AudioButton text={item.english} size="sm" />
                </div>

                {/* English Word */}
                <h3 className="text-lg font-extrabold text-[#2D2A26] tracking-tight">
                  {item.english}
                </h3>

                {/* IPA */}
                <div className="mt-0.5 flex items-center gap-2">
                  <span className="font-mono text-xs font-semibold text-[#8B4444]">
                    {item.ipa}
                  </span>
                  {item.stressPattern && (
                    <span className="rounded-md bg-[#FAF8F5] px-1.5 py-0.5 text-[10px] text-[#70695E]">
                      Stress: {item.stressPattern}
                    </span>
                  )}
                </div>

                {/* Vietnamese Meaning */}
                <div className="mt-2 min-h-[22px]">
                  {isViVisible ? (
                    <p className="text-xs font-semibold text-[#4A453E]">
                      {item.vietnamese}
                    </p>
                  ) : (
                    <button
                      type="button"
                      onClick={() => toggleLocalVi(item.id)}
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-[#8C8479] hover:text-[#2D2A26]"
                    >
                      <Eye className="h-3 w-3" /> Xem nghĩa tiếng Việt
                    </button>
                  )}
                </div>

                {/* Example from Unit */}
                <div className="mt-3 rounded-2xl bg-[#FAF8F5] p-3 border border-[#F0EAE1]">
                  <div className="flex items-start justify-between gap-1">
                    <span className="text-[11px] font-bold text-[#8EA66B]">
                      Ví dụ gốc trong Unit 1:
                    </span>
                    <AudioButton text={item.example} size="sm" showSlowOption={false} label="Nghe" />
                  </div>
                  <p className="mt-1 text-xs font-medium text-[#2D2A26] italic">
                    "{item.example}"
                  </p>
                  {isViVisible && (
                    <p className="mt-0.5 text-[11px] text-[#70695E]">
                      "{item.exampleTranslation}"
                    </p>
                  )}
                </div>
              </div>

              {/* Local toggle if global is off */}
              {!globalShowVietnamese && (
                <div className="mt-3 pt-2 border-t border-[#F0EAE1] flex justify-end">
                  <button
                    type="button"
                    onClick={() => toggleLocalVi(item.id)}
                    className="text-[10px] text-[#8C8479] hover:underline flex items-center gap-1"
                  >
                    {revealViMap[item.id] ? (
                      <>
                        <EyeOff className="h-3 w-3" /> Ẩn nghĩa
                      </>
                    ) : (
                      <>
                        <Eye className="h-3 w-3" /> Hiện nghĩa
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* The 8 People in Unit 1 (Page 6–7 Table) */}
      <div className="rounded-3xl border border-[#E8DFD5] bg-white p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#F0EAE1] pb-4 mb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#A05252]">
              Page 6–7 • Exercise 1, 2, 4 & 5
            </span>
            <h3 className="text-lg font-bold text-[#2D2A26]">
              8 Nhân vật trong Unit 1 (The 8 People)
            </h3>
            <p className="text-xs text-[#70695E]">
              Bảng dữ liệu chuẩn xác của 8 nhân viên quốc tế trong giáo trình. Luyện tập mẫu câu: [Name] is from [Country]. He/She is [Nationality]. He/She is a/an [Job] with a/an [Nationality] company.
            </p>
          </div>
          <span className="rounded-full bg-[#FFF9D6] px-3 py-1 text-xs font-bold text-[#7A621E]">
            Luyện tập 1:2
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {PEOPLE_IN_UNIT_1.map((p, idx) => {
            const sentence = `${p.name} is from ${p.country}. She or he is ${p.nationality} and works as a ${p.jobTitle} with a ${p.companyNationality} company.`;
            return (
              <div
                key={p.name}
                className="rounded-2xl border border-[#E8DFD5] bg-[#FAF8F5] p-4 transition-all hover:border-[#8EA66B] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFDCDC] text-[11px] font-bold text-[#8B4444]">
                        {idx + 1}
                      </span>
                      <h4 className="font-extrabold text-sm text-[#2D2A26]">{p.name}</h4>
                    </div>
                    <AudioButton text={`${p.name} is from ${p.country}. ${p.name} is ${p.nationality}.`} size="sm" showSlowOption={false} label="Nghe" />
                  </div>

                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-[#70695E]">Country:</span>
                      <span className="font-semibold text-[#2D2A26]">{p.country}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#70695E]">Nationality:</span>
                      <span className="font-semibold text-[#2A5288]">{p.nationality}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#70695E]">Job Title:</span>
                      <span className="font-semibold text-[#3B662A] text-right">{p.jobTitle}</span>
                    </div>
                    <div className="flex justify-between border-t border-[#E8DFD5] pt-1 text-[11px]">
                      <span className="text-[#70695E]">Company:</span>
                      <span className="font-medium text-[#7A621E]">{p.companyNationality} company</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 rounded-xl bg-white p-2 border border-[#E8DFD5] text-[11px] text-[#4A453E]">
                  <span className="font-bold text-[#8EA66B]">Mẫu câu: </span>
                  <em>{p.name} is from {p.country}. He/She is {p.nationality}.</em>
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
          <span>Đánh dấu hoàn thành Vocabulary</span>
        </button>

        <button
          type="button"
          onClick={onNext}
          className="flex items-center gap-2 rounded-xl bg-[#8EA66B] px-5 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-[#7B925A] active:scale-95 transition-all"
        >
          <span>Tiếp theo: 03. Pronunciation & Spelling</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

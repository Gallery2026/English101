import React, { useState } from 'react';
import {
  FileText,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  BookOpen,
  Volume2
} from 'lucide-react';
import { AudioButton } from '../AudioButton';
import { TeacherNoteCard } from '../TeacherNoteCard';

interface GrammarSectionProps {
  showVietnamese: boolean;
  teacherMode: boolean;
  onNext: () => void;
  onMarkCompleted: () => void;
}

export const GrammarSection: React.FC<GrammarSectionProps> = ({
  showVietnamese,
  teacherMode,
  onNext,
  onMarkCompleted
}) => {
  const [activeGrammarTab, setActiveGrammarTab] = useState<'be' | 'possessives'>('be');

  const teacherGuide = {
    objective: 'Giúp học viên sử dụng chính xác Động từ to be ở hiện tại đơn (Khẳng định, Phủ định, Nghi vấn, Câu trả lời ngắn) và Tính từ sở hữu trong ngữ cảnh công việc.',
    teacherSays: `Highlight rule: "Yes, I am. NOT Yes, I'm." Short answers always use FULL form in positive!\nAsk Student A: "Are you Spanish?" -> Prompt: "No, I'm not."\nAsk Student B: "Is your company Italian?" -> Student B answers: "Yes, it is / No, it isn't."`,
    studentA: `Ask Student B: "Are you a receptionist?"\nListen to partner's response. Then ask: "Is your company American?"`,
    studentB: `Answer: "No, I'm not. I'm a Sales Rep."\nAnswer: "No, it isn't. My company is British."`,
    teacherTip: `Phân biệt rõ ràng "It's" (viết tắt của It is) và "Its" (tính từ sở hữu, không có dấu phẩy: "Its CEO is..."). Đây là lỗi người đi làm rất hay gặp trong email.`
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-3xl border border-[#E8DFD5] bg-white p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#F0EAE1] pb-4 mb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FFDCDC] px-3 py-1 text-xs font-bold text-[#8B4444] mb-2">
              <FileText className="h-3.5 w-3.5" />
              Page 8–9 • Language at work
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#2D2A26]">
              Present Simple: BE & Possessives
            </h2>
            <p className="text-xs sm:text-sm text-[#70695E]">
              Toàn bộ ngữ pháp chuẩn Unit 1 với ví dụ thực tế và các lưu ý ngữ dụng trong giao tiếp kinh doanh.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setActiveGrammarTab('be')}
              className={`rounded-xl px-3.5 py-2 text-xs font-bold transition-all ${
                activeGrammarTab === 'be'
                  ? 'bg-[#8EA66B] text-white shadow-xs'
                  : 'bg-[#FAF8F5] text-[#5A544C] hover:bg-[#F0EAE1]'
              }`}
            >
              1. Present Simple – BE
            </button>
            <button
              type="button"
              onClick={() => setActiveGrammarTab('possessives')}
              className={`rounded-xl px-3.5 py-2 text-xs font-bold transition-all ${
                activeGrammarTab === 'possessives'
                  ? 'bg-[#8EA66B] text-white shadow-xs'
                  : 'bg-[#FAF8F5] text-[#5A544C] hover:bg-[#F0EAE1]'
              }`}
            >
              2. Possessives (Sở hữu)
            </button>
          </div>
        </div>
      </div>

      {/* Teacher Guide Card */}
      {teacherMode && <TeacherNoteCard guide={teacherGuide} defaultExpanded={true} />}

      {/* Tab 1: Present Simple - BE */}
      {activeGrammarTab === 'be' && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-[#E8DFD5] bg-white p-6 shadow-xs">
            <div className="flex items-center justify-between border-b border-[#F0EAE1] pb-3 mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#A05252]">
                  Language Point 1 (Page 8)
                </span>
                <h3 className="text-lg font-bold text-[#2D2A26]">
                  Cấu trúc Động từ "TO BE"
                </h3>
              </div>
              <AudioButton
                text="I am. You are. He is. She is. It is. We are. They are."
                size="sm"
                label="Nghe các ngôi"
              />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[#E8DFD5] bg-[#FAF8F5] text-[#4A453E]">
                    <th className="p-3 font-bold">Chủ ngữ</th>
                    <th className="p-3 font-bold">Khẳng định (+)</th>
                    <th className="p-3 font-bold">Phủ định (-)</th>
                    <th className="p-3 font-bold">Câu hỏi (?)</th>
                    <th className="p-3 font-bold">Trả lời ngắn (Short answers)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0EAE1]">
                  <tr>
                    <td className="p-3 font-bold text-[#2A5288]">I</td>
                    <td className="p-3">
                      <strong className="text-[#8EA66B]">am</strong> / ('m)
                      <div className="text-[11px] text-[#70695E] mt-0.5">I’m from Italy.</div>
                    </td>
                    <td className="p-3">
                      <strong className="text-[#8B4444]">am not</strong> / ('m not)
                      <div className="text-[11px] text-[#70695E] mt-0.5">I’m not Spanish.</div>
                    </td>
                    <td className="p-3 font-medium">Am I ...?</td>
                    <td className="p-3">
                      <span className="text-[#8EA66B] font-bold">Yes, I am.</span>
                      <br />
                      <span className="text-[#8B4444]">No, I’m not.</span>
                    </td>
                  </tr>

                  <tr>
                    <td className="p-3 font-bold text-[#2A5288]">You / We / They</td>
                    <td className="p-3">
                      <strong className="text-[#8EA66B]">are</strong> / ('re)
                      <div className="text-[11px] text-[#70695E] mt-0.5">They are in countries all over the world.</div>
                    </td>
                    <td className="p-3">
                      <strong className="text-[#8B4444]">are not</strong> / (aren't)
                      <div className="text-[11px] text-[#70695E] mt-0.5">Its customers aren’t only Italian.</div>
                    </td>
                    <td className="p-3 font-medium">Are you / we / they ...?</td>
                    <td className="p-3">
                      <span className="text-[#8EA66B] font-bold">Yes, you/we/they are.</span>
                      <br />
                      <span className="text-[#8B4444]">No, you/we/they aren't.</span>
                    </td>
                  </tr>

                  <tr>
                    <td className="p-3 font-bold text-[#2A5288]">He / She / It</td>
                    <td className="p-3">
                      <strong className="text-[#8EA66B]">is</strong> / ('s)
                      <div className="text-[11px] text-[#70695E] mt-0.5">Marcegaglia is an Italian company.</div>
                    </td>
                    <td className="p-3">
                      <strong className="text-[#8B4444]">is not</strong> / (isn't)
                      <div className="text-[11px] text-[#70695E] mt-0.5">The family company isn’t her only job.</div>
                    </td>
                    <td className="p-3 font-medium">Is he / she / it ...?</td>
                    <td className="p-3">
                      <span className="text-[#8EA66B] font-bold">Yes, he/she/it is.</span>
                      <br />
                      <span className="text-[#8B4444]">No, he/she/it isn't.</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Tip 'm or am? */}
            <div className="mt-6 rounded-2xl border border-[#FFDCDC] bg-[#FFF9F9] p-4 text-xs text-[#5C2B2B]">
              <div className="flex items-center gap-2 font-bold text-sm text-[#8B4444] mb-1">
                <Sparkles className="h-4 w-4" />
                <span>Tip: 'm or am? (Trang 8 Business Result Elementary)</span>
              </div>
              <p className="leading-relaxed">
                • We use <strong>'m, 's or 're</strong> for speaking or for informal writing (e.g. emails to colleagues):{' '}
                <em className="font-semibold">I’m = I am, She’s = She is, They’re = They are</em>.
                <br />
                • We use <strong>am, is or are</strong> (dạng đầy đủ) cho câu trả lời ngắn khẳng định:{' '}
                <em className="text-[#8B4444] font-bold">
                  "Are you at work all the time?" → "Yes, I am." (KHÔNG ĐƯỢC DÙNG: Yes, I'm.)
                </em>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Possessives */}
      {activeGrammarTab === 'possessives' && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-[#E8DFD5] bg-white p-6 shadow-xs">
            <div className="border-b border-[#F0EAE1] pb-3 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#A05252]">
                Language Point 2 (Page 9)
              </span>
              <h3 className="text-lg font-bold text-[#2D2A26]">
                Tính từ sở hữu (Possessive Adjectives)
              </h3>
              <p className="text-xs text-[#70695E]">
                Sử dụng đúng các tính từ sở hữu xuất hiện trong đoạn văn và hội thoại Unit 1.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Table of possessives */}
              <div className="rounded-2xl border border-[#E8DFD5] bg-[#FAF8F5] p-4">
                <h4 className="font-bold text-xs text-[#2D2A26] uppercase tracking-wider mb-3">
                  Bảng quy đổi Đại từ nhân xưng → Tính từ sở hữu:
                </h4>
                <div className="space-y-2 text-xs">
                  {[
                    { sub: 'I', pos: 'my', ex: 'My company is Italian.' },
                    { sub: 'you', pos: 'your', ex: 'Is your company American?' },
                    { sub: 'he', pos: 'his', ex: 'His name was Steno.' },
                    { sub: 'she', pos: 'her', ex: 'Her brother Antonio is also CEO.' },
                    { sub: 'it', pos: 'its', ex: 'Its customers are all over the world.' },
                    { sub: 'we', pos: 'our', ex: 'Our company is a steel company.' },
                    { sub: 'they', pos: 'their', ex: 'Their father started the company.' }
                  ].map((row) => (
                    <div
                      key={row.sub}
                      className="flex items-center justify-between rounded-xl bg-white p-2.5 border border-[#E8DFD5]"
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#2A5288] w-12">{row.sub} →</span>
                        <span className="font-extrabold text-[#8EA66B] text-sm">{row.pos}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[#4A453E] italic">"{row.ex}"</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tip: it's or its? */}
              <div className="flex flex-col justify-between rounded-2xl border border-[#D9ECCF] bg-[#F4FAF2] p-5">
                <div>
                  <div className="flex items-center gap-2 font-bold text-sm text-[#3B662A] mb-2">
                    <Sparkles className="h-4 w-4" />
                    <span>Tip: it's or its? (Trang 9)</span>
                  </div>
                  <div className="space-y-3 text-xs text-[#283C21]">
                    <div className="rounded-xl bg-white p-3 border border-[#D9ECCF]">
                      <strong className="text-[#8B4444]">It is = It’s (Viết tắt của động từ to be):</strong>
                      <p className="mt-1 italic">
                        "My company is Toyota. <strong>It’s</strong> a car company."
                      </p>
                      {showVietnamese && (
                        <p className="text-[11px] text-[#70695E] mt-0.5">
                          (Công ty tôi là Toyota. Nó là một công ty ô tô.)
                        </p>
                      )}
                    </div>

                    <div className="rounded-xl bg-white p-3 border border-[#D9ECCF]">
                      <strong className="text-[#3B662A]">Its = possessive (Tính từ sở hữu - CỦA NÓ):</strong>
                      <p className="mt-1 italic">
                        "My company is Toyota. <strong>Its</strong> CEO is Akio Toyoda."
                      </p>
                      {showVietnamese && (
                        <p className="text-[11px] text-[#70695E] mt-0.5">
                          (Công ty tôi là Toyota. Tổng giám đốc CỦA NÓ là Akio Toyoda.)
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-4 rounded-xl bg-[#FFF9D6] p-3 text-[11px] text-[#7A621E] font-medium border border-[#F5ECC4]">
                  💡 <strong>Ghi nhớ nhanh:</strong> Có dấu phẩy (<code className="font-bold">'s</code>) = <strong className="font-bold">It is</strong>. Không có dấu phẩy = <strong className="font-bold">Của nó</strong>!
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Footer */}
      <div className="flex items-center justify-between pt-2">
        <button
          type="button"
          onClick={onMarkCompleted}
          className="flex items-center gap-1.5 rounded-xl border border-[#8EA66B] bg-[#EBF3E5] px-4 py-2 text-xs font-bold text-[#8EA66B] hover:bg-[#8EA66B] hover:text-white transition-all shadow-xs"
        >
          <CheckCircle2 className="h-4 w-4" />
          <span>Đánh dấu hoàn thành Grammar</span>
        </button>

        <button
          type="button"
          onClick={onNext}
          className="flex items-center gap-2 rounded-xl bg-[#8EA66B] px-5 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-[#7B925A] active:scale-95 transition-all"
        >
          <span>Tiếp theo: 05. Practice Exercises</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

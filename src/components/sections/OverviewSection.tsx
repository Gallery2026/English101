import React, { useState } from 'react';
import { Sparkles, Clock, Users, ArrowRight, CheckCircle2, MessageCircle, Target } from 'lucide-react';
import { STARTING_POINT_QUESTIONS } from '../../data/unit1Data';
import { AudioButton } from '../AudioButton';
import { TeacherNoteCard } from '../TeacherNoteCard';

interface OverviewSectionProps {
  showVietnamese: boolean;
  teacherMode: boolean;
  onNext: () => void;
  onMarkCompleted: () => void;
}

export const OverviewSection: React.FC<OverviewSectionProps> = ({
  showVietnamese,
  teacherMode,
  onNext,
  onMarkCompleted
}) => {
  const [answers, setAnswers] = useState<Record<string, { a: string; b: string }>>({
    'sp-1': { a: 'Alex', b: 'Mai' },
    'sp-2': { a: 'VinFast', b: 'FPT Software' },
    'sp-3': { a: 'Sales Rep', b: 'Personal Assistant' }
  });

  const teacherGuide = {
    objective: 'Khởi động lớp học, kích hoạt phản xạ tiếng Anh cơ bản về Tên, Công ty và Chức danh công việc.',
    teacherSays: `Ask Student A question 1: "What is your name?"\nThen instruct Student A to ask Student B question 2: "What is the name of your company?"\nInstruct Student B to ask Student A question 3: "What is your job?"`,
    studentA: `Answer Teacher's question using: "My name is..."\nTurn to Student B and ask: "What is the name of your company?"`,
    studentB: `Listen to Student A and answer: "My company is..."\nAsk Student A: "What is your job?"`,
    teacherTip: `Đảm bảo học viên dùng mạo từ "a / an" trước chức danh (ví dụ: "I'm a sales rep", "I'm an assistant"). Khen ngợi và ghi nhận ngay.`
  };

  return (
    <div className="space-y-6">
      {/* Banner / Card */}
      <div className="relative overflow-hidden rounded-3xl border border-[#F0EAE1] bg-gradient-to-br from-white via-[#FFFDF9] to-[#FFF9D6]/30 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FFDCDC] px-3 py-1 text-xs font-extrabold text-[#8B4444] mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              UNIT 1: JOBS & COMPANIES • TỰ HỌC & TỔNG HỢP CÁ NHÂN
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#2D2A26]">
              Business Result Elementary
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#5A544C] leading-relaxed">
              Tổng hợp toàn diện kiến thức trọng tâm Unit 1: Từ vựng quốc gia & nghề nghiệp, ngữ pháp động từ BE & tính từ sở hữu, audio & video Viewpoint, bài tập củng cố và sổ tay ghi chú trực tiếp.
            </p>
          </div>

          <div className="flex flex-col gap-2 rounded-2xl border border-[#E8DFD5] bg-white p-4 shadow-xs text-xs text-[#4A453E] min-w-[220px]">
            <div className="flex items-center justify-between border-b border-[#F0EAE1] pb-2">
              <span className="flex items-center gap-1.5 font-bold">
                <Clock className="h-4 w-4 text-[#8EA66B]" /> Thời lượng khuyến nghị:
              </span>
              <span className="font-bold text-[#8EA66B]">60 – 90 phút</span>
            </div>
            <div className="flex items-center justify-between border-b border-[#F0EAE1] pb-2">
              <span className="flex items-center gap-1.5 font-bold">
                <Target className="h-4 w-4 text-[#2A5288]" /> Hình thức:
              </span>
              <span className="font-bold text-[#2A5288]">Tự học & Tổng hợp</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-bold">Học phần:</span>
              <span className="text-[#8B4444] font-bold">12 Mô-đun tương tác</span>
            </div>
          </div>
        </div>
      </div>

      {/* Teacher Guide Card */}
      {teacherMode && <TeacherNoteCard guide={teacherGuide} defaultExpanded={true} />}

      {/* Starting Point (Page 6) */}
      <div className="rounded-3xl border border-[#E8DFD5] bg-white p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#F0EAE1] pb-4 mb-6">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#A05252]">
              Page 6 • Section 01
            </span>
            <h3 className="text-xl font-bold text-[#2D2A26]">
              Starting Point
            </h3>
          </div>
          <span className="rounded-full bg-[#EBF3E5] px-3 py-1 text-xs font-bold text-[#8EA66B]">
            Khởi động & Phản xạ 1:2
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {STARTING_POINT_QUESTIONS.map((q, idx) => (
            <div
              key={q.id}
              className="flex flex-col justify-between rounded-2xl border border-[#E8DFD5] bg-[#FAF8F5] p-4 transition-all hover:border-[#D8A2A2]"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#FFDCDC] text-xs font-bold text-[#8B4444]">
                    {idx + 1}
                  </span>
                  <AudioButton text={q.questionEn} size="sm" showSlowOption={false} />
                </div>

                <h4 className="text-sm font-bold text-[#2D2A26] leading-snug">
                  {q.questionEn}
                </h4>

                {showVietnamese && (
                  <p className="mt-1 text-xs text-[#70695E] italic">
                    {q.questionVi}
                  </p>
                )}

                <div className="mt-3 rounded-xl bg-white p-2.5 border border-[#E8DFD5] text-xs">
                  <span className="font-bold text-[#8EA66B]">Mẫu câu: </span>
                  <span className="text-[#2D2A26] font-medium">{q.sampleAnswerEn}</span>
                  {showVietnamese && (
                    <span className="block mt-0.5 text-[11px] text-[#70695E]">
                      ({q.sampleAnswerVi})
                    </span>
                  )}
                </div>
              </div>

              {/* Personal Practice & Answer Input */}
              <div className="mt-4 pt-3 border-t border-[#E8DFD5] space-y-2">
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-[#EBF3E5] px-2 py-0.5 text-[10px] font-bold text-[#3B662A] shrink-0">
                    Câu trả lời của bạn
                  </span>
                  <input
                    type="text"
                    value={answers[q.id]?.a || ''}
                    onChange={(e) =>
                      setAnswers({
                        ...answers,
                        [q.id]: { ...(answers[q.id] || { a: '', b: '' }), a: e.target.value }
                      })
                    }
                    placeholder="Nhập câu trả lời thực tế của bạn tại đây..."
                    className="w-full rounded-xl border border-[#E8DFD5] bg-white px-3 py-1.5 text-xs text-[#2D2A26] focus:border-[#8EA66B] focus:outline-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Suggested 60-90 Minute Class Schedule Table */}
      <div className="rounded-3xl border border-[#E8DFD5] bg-white p-6 shadow-xs">
        <h3 className="text-base font-bold text-[#2D2A26] mb-4">
          Phân bổ thời lượng chi tiết cho buổi học 1:2 (60–90 Phút)
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#E8DFD5] text-[#70695E]">
                <th className="py-2.5 font-bold">Giai đoạn</th>
                <th className="py-2.5 font-bold">Nội dung cốt lõi</th>
                <th className="py-2.5 font-bold">Thời lượng</th>
                <th className="py-2.5 font-bold">Mô hình tương tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F0EAE1] text-[#4A453E]">
              <tr>
                <td className="py-2 font-bold text-[#8B4444]">01. Warm-up</td>
                <td className="py-2">Starting point: Name, Company, Job</td>
                <td className="py-2 font-semibold">5–7 mins</td>
                <td className="py-2">Teacher → A, Teacher → B, A ↔ B</td>
              </tr>
              <tr>
                <td className="py-2 font-bold text-[#8B4444]">02. Vocabulary</td>
                <td className="py-2">Countries, Nationalities, Job titles (Pages 6–7)</td>
                <td className="py-2 font-semibold">12–15 mins</td>
                <td className="py-2">Pronounce, IPA, 🔊 Listen & Repeat</td>
              </tr>
              <tr>
                <td className="py-2 font-bold text-[#8B4444]">03. Pronunciation</td>
                <td className="py-2">Stress (Japan/Japanese), a/an, Alphabet sounds</td>
                <td className="py-2 font-semibold">10–12 mins</td>
                <td className="py-2">Spelling drill, A spells → B writes</td>
              </tr>
              <tr>
                <td className="py-2 font-bold text-[#8B4444]">04. Grammar</td>
                <td className="py-2">Present Simple BE & Possessives (Pages 8–9)</td>
                <td className="py-2 font-semibold">15–18 mins</td>
                <td className="py-2">Structure breakdown, 'm vs am, its vs it's</td>
              </tr>
              <tr>
                <td className="py-2 font-bold text-[#8B4444]">05. Practice</td>
                <td className="py-2">Marcegaglia text, verb choices, Sofia Aguilera</td>
                <td className="py-2 font-semibold">10–12 mins</td>
                <td className="py-2">Individual check + peer compare A ↔ B</td>
              </tr>
              <tr>
                <td className="py-2 font-bold text-[#8B4444]">06. Pair Work</td>
                <td className="py-2">Personal info exchange & Report partner (Page 7)</td>
                <td className="py-2 font-semibold">10–12 mins</td>
                <td className="py-2">A asks B → B asks A → Report to Teacher</td>
              </tr>
              <tr>
                <td className="py-2 font-bold text-[#8B4444]">07. Communication</td>
                <td className="py-2">Saying hello, introducing, saying goodbye (Page 10)</td>
                <td className="py-2 font-semibold">10–15 mins</td>
                <td className="py-2">Triad roleplay (Teacher + Student A + Student B)</td>
              </tr>
              <tr>
                <td className="py-2 font-bold text-[#8B4444]">08. The Game</td>
                <td className="py-2">The Introductions Game (15 Squares - Page 11)</td>
                <td className="py-2 font-semibold">10–12 mins</td>
                <td className="py-2">Interactive coin toss & role cards A & B</td>
              </tr>
              <tr>
                <td className="py-2 font-bold text-[#8B4444]">09. Review</td>
                <td className="py-2">Consolidation, Quick Test & Feedback</td>
                <td className="py-2 font-semibold">5–7 mins</td>
                <td className="py-2">Teacher feedback & takeaway summary</td>
              </tr>
            </tbody>
          </table>
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
          <span>Đánh dấu hoàn thành Warm-up</span>
        </button>

        <button
          type="button"
          onClick={onNext}
          className="flex items-center gap-2 rounded-xl bg-[#8EA66B] px-5 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-[#7B925A] active:scale-95 transition-all"
        >
          <span>Tiếp theo: 02. Vocabulary</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import {
  Volume2,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  MessageCircle,
  HelpCircle
} from 'lucide-react';
import { AudioButton } from '../AudioButton';
import { TeacherNoteCard } from '../TeacherNoteCard';

interface SpeakingSectionProps {
  showVietnamese: boolean;
  teacherMode: boolean;
  onNext: () => void;
  onMarkCompleted: () => void;
}

export const SpeakingSection: React.FC<SpeakingSectionProps> = ({
  showVietnamese,
  teacherMode,
  onNext,
  onMarkCompleted
}) => {
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1);

  const teacherGuide = {
    objective: 'Xây dựng phản xạ nói tự nhiên, kết hợp toàn diện: Chào hỏi, nêu chức danh kèm mạo từ (a/an), quốc gia/quốc tịch, sở hữu cách, đánh vần tên công ty và tạm biệt.',
    teacherSays: `Guide students through 3 progressive rounds:\nRound 1: Model the dialogue with Student A first.\nRound 2: Have Student A and Student B practice with full prompts displayed.\nRound 3: Hide prompt details! Have students talk freely using real or simulated info.`,
    studentA: `Deliver your company presentation and roleplay with partner.\nIn Round 3: Speak spontaneously without looking at support text.`,
    studentB: `Engage with Student A, ask questions ("How do you spell that?", "Are you from...?"), and respond professionally.`,
    teacherTip: `Tập trung nhận xét độ trôi chảy (fluency) trước, sau đó chỉnh sửa phát âm trọng âm từ và mạo từ a/an.`
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-3xl border border-[#E8DFD5] bg-white p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#F0EAE1] pb-4 mb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FFDCDC] px-3 py-1 text-xs font-bold text-[#8B4444] mb-2">
              <Volume2 className="h-3.5 w-3.5" />
              Unit 1 Communicative Speaking
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#2D2A26]">
              Business Networking Simulation (Luyện nói 3 Vòng)
            </h2>
            <p className="text-xs sm:text-sm text-[#70695E]">
              Áp dụng tổng hợp: Giới thiệu bản thân, chức danh, công ty, quốc tịch, đánh vần và lời chào tạm biệt.
            </p>
          </div>

          {/* Steps */}
          <div className="flex items-center gap-1.5 rounded-2xl bg-[#FAF8F5] p-1.5 border border-[#E8DFD5]">
            {[
              { id: 1, label: 'Round 1: Quan sát mẫu' },
              { id: 2, label: 'Round 2: Luyện tập cặp' },
              { id: 3, label: 'Round 3: Nói tự do' }
            ].map((step) => (
              <button
                key={step.id}
                type="button"
                onClick={() => setActiveStep(step.id as any)}
                className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                  activeStep === step.id
                    ? 'bg-[#8EA66B] text-white shadow-xs'
                    : 'text-[#5A544C] hover:bg-[#F0EAE1]'
                }`}
              >
                {step.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Teacher Guide Card */}
      {teacherMode && <TeacherNoteCard guide={teacherGuide} defaultExpanded={true} />}

      {/* Round 1: Model Example */}
      {activeStep === 1 && (
        <div className="rounded-3xl border border-[#E8DFD5] bg-white p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-[#F0EAE1] pb-3">
            <div>
              <span className="text-xs font-bold text-[#8EA66B] uppercase tracking-wider">
                Round 1 • Scaffolding & Model Dialogue
              </span>
              <h3 className="text-base font-bold text-[#2D2A26]">
                Hội thoại mẫu giữa 2 chuyên gia kinh doanh
              </h3>
            </div>
            <AudioButton
              text="A: Hello. My name is Alex. Pleased to meet you. B: Nice to meet you, Alex. I'm Barbara. A: Where are you from, Barbara? B: I'm from Italy. My company is Marcegaglia. We make steel pipes. What about you? A: I'm from Vietnam. I'm a sales rep with an American company. B: How do you spell your company's name? A: It's A-B-C. B: Well, nice meeting you! Have a good journey. A: Thanks. See you soon!"
              size="sm"
              label="Nghe toàn bộ hội thoại"
            />
          </div>

          <div className="space-y-3 text-xs leading-relaxed">
            <div className="rounded-2xl bg-[#F8FAFC] p-4 border border-[#DCE8F7]">
              <div className="flex items-center justify-between font-bold text-[#2A5288] mb-1">
                <span>👤 Bạn (Speaker 1):</span>
                <span className="text-[10px] uppercase font-semibold text-[#64748B]">Greeting & Name</span>
              </div>
              <p className="text-[#1E293B] text-sm">
                "Hello. My name is <strong>Alex</strong>. Pleased to meet you."
              </p>
              {showVietnamese && (
                <p className="text-[11px] text-[#64748B] mt-1 italic">
                  Xin chào. Tôi tên là Alex. Rất hân hạnh được gặp bạn.
                </p>
              )}
            </div>

            <div className="rounded-2xl bg-[#F8FAF6] p-4 border border-[#D9ECCF]">
              <div className="flex items-center justify-between font-bold text-[#3B662A] mb-1">
                <span>👤 Đối tác (Speaker 2):</span>
                <span className="text-[10px] uppercase font-semibold text-[#64748B]">Response & Origin</span>
              </div>
              <p className="text-[#1E293B] text-sm">
                "Nice to meet you, Alex. I’m <strong>Barbara</strong>. I’m from <strong>Italy</strong>. My company is <strong>Marcegaglia</strong>. It’s an Italian company. What about you?"
              </p>
              {showVietnamese && (
                <p className="text-[11px] text-[#64748B] mt-1 italic">
                  Rất vui được gặp bạn, Alex. Tôi là Barbara. Tôi đến từ Ý. Công ty của tôi là Marcegaglia. Đó là một công ty của Ý. Còn bạn thì sao?
                </p>
              )}
            </div>

            <div className="rounded-2xl bg-[#F8FAFC] p-4 border border-[#DCE8F7]">
              <div className="flex items-center justify-between font-bold text-[#2A5288] mb-1">
                <span>👤 Bạn (Speaker 1):</span>
                <span className="text-[10px] uppercase font-semibold text-[#64748B]">Job & Nationality</span>
              </div>
              <p className="text-[#1E293B] text-sm">
                "I’m from <strong>Vietnam</strong>. I’m a <strong>Sales Rep</strong> with an <strong>American company</strong>."
              </p>
              {showVietnamese && (
                <p className="text-[11px] text-[#64748B] mt-1 italic">
                  Tôi đến từ Việt Nam. Tôi là đại diện bán hàng tại một công ty Mỹ.
                </p>
              )}
            </div>

            <div className="rounded-2xl bg-[#F8FAF6] p-4 border border-[#D9ECCF]">
              <div className="flex items-center justify-between font-bold text-[#3B662A] mb-1">
                <span>👤 Speaker B (Student B):</span>
                <span className="text-[10px] uppercase font-semibold text-[#64748B]">Spelling Question</span>
              </div>
              <p className="text-[#1E293B] text-sm">
                "How do you spell your company’s name?"
              </p>
              {showVietnamese && (
                <p className="text-[11px] text-[#64748B] mt-1 italic">
                  Bạn đánh vần tên công ty của mình như thế nào?
                </p>
              )}
            </div>

            <div className="rounded-2xl bg-[#FFF9F9] p-4 border border-[#FFDCDC]">
              <div className="flex items-center justify-between font-bold text-[#8B4444] mb-1">
                <span>👥 Farewell & Goodbye:</span>
                <span className="text-[10px] uppercase font-semibold text-[#64748B]">Saying Goodbye</span>
              </div>
              <p className="text-[#1E293B] text-sm">
                <strong>B:</strong> "Well, nice meeting you! Have a good journey."<br />
                <strong>A:</strong> "Thanks. See you soon! Goodbye."
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Round 2: Guided Pair Practice */}
      {activeStep === 2 && (
        <div className="rounded-3xl border border-[#E8DFD5] bg-white p-6 shadow-xs space-y-4">
          <div className="border-b border-[#F0EAE1] pb-3">
            <span className="text-xs font-bold text-[#2A5288] uppercase tracking-wider">
              Round 2 • Guided Practice (Luyện tập có dàn ý)
            </span>
            <h3 className="text-base font-bold text-[#2D2A26]">
              Luyện nói theo dàn ý & thay thế thông tin nghề nghiệp của bạn
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#F8FAFC] p-4 border border-[#DCE8F7] text-xs space-y-2">
              <h4 className="font-bold text-[#2A5288] text-sm">Lượt 1: Bạn chủ động mở đầu</h4>
              <p>1. Chào và tự giới thiệu tên: <em>"Hello. My name is [Tên bạn]..."</em></p>
              <p>2. Nêu quốc gia và chức vụ: <em>"I'm from [Nước] and I'm a/an [Nghề nghiệp]..."</em></p>
              <p>3. Hỏi lại đối tác về công ty và đánh vần: <em>"How do you spell your company?"</em></p>
              <p>4. Tạm biệt: <em>"Have a good journey / See you soon!"</em></p>
            </div>

            <div className="rounded-2xl bg-[#F8FAF6] p-4 border border-[#D9ECCF] text-xs space-y-2">
              <h4 className="font-bold text-[#3B662A] text-sm">Lượt 2: Bạn phản hồi đối tác</h4>
              <p>1. Đáp lời chào: <em>"Pleased to meet you / Nice to meet you..."</em></p>
              <p>2. Nêu quốc gia & công ty: <em>"My company is [Tên công ty]. It's a/an [Quốc tịch] company."</em></p>
              <p>3. Đánh vần chữ cái: <em>"That's [Spell letters: A-B-C...]"</em></p>
              <p>4. Tạm biệt: <em>"Nice meeting you, too. Goodbye!"</em></p>
            </div>
          </div>

          <div className="rounded-2xl bg-[#FFF9D6] p-3 text-xs text-[#7A621E] font-medium border border-[#F5ECC4]">
            ⏱️ <strong>Mẹo luyện tập:</strong> Hãy luyện nói to thành tiếng không nhìn giấy sau khi ghi nhớ các mẫu câu trên.
          </div>
        </div>
      )}

      {/* Round 3: Autonomous Speaking */}
      {activeStep === 3 && (
        <div className="rounded-3xl border border-[#E8DFD5] bg-white p-6 shadow-xs space-y-4">
          <div className="border-b border-[#F0EAE1] pb-3">
            <span className="text-xs font-bold text-[#8B4444] uppercase tracking-wider">
              Round 3 • Free & Autonomous Speaking (Nói tự do)
            </span>
            <h3 className="text-base font-bold text-[#2D2A26]">
              Thực hiện hội thoại kinh doanh hoàn chỉnh mà không cần nhìn gợi ý
            </h3>
          </div>

          <div className="rounded-2xl bg-[#FAF8F5] p-5 border border-[#E8DFD5] text-center space-y-3">
            <p className="text-sm font-semibold text-[#2D2A26]">
              Hai học viên bắt tay giả định, giao tiếp mắt và thực hiện toàn bộ quy trình:
            </p>
            <div className="inline-flex flex-wrap justify-center gap-2 text-xs">
              <span className="rounded-full bg-white border border-[#E8DFD5] px-3 py-1 font-bold text-[#8B4444]">
                1. Chào hỏi chuẩn
              </span>
              <span className="rounded-full bg-white border border-[#E8DFD5] px-3 py-1 font-bold text-[#2A5288]">
                2. Chức danh + a/an
              </span>
              <span className="rounded-full bg-white border border-[#E8DFD5] px-3 py-1 font-bold text-[#8EA66B]">
                3. Quốc tịch công ty
              </span>
              <span className="rounded-full bg-white border border-[#E8DFD5] px-3 py-1 font-bold text-[#7A621E]">
                4. Đánh vần tên
              </span>
              <span className="rounded-full bg-white border border-[#E8DFD5] px-3 py-1 font-bold text-[#A05252]">
                5. Chào tạm biệt
              </span>
            </div>

            <p className="text-xs text-[#70695E] italic mt-2">
              👩🏫 Giáo viên lắng nghe, ghi chép và cho điểm nhận xét sau khi 2 học viên kết thúc.
            </p>
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
          <span>Đánh dấu hoàn thành Speaking</span>
        </button>

        <button
          type="button"
          onClick={onNext}
          className="flex items-center gap-2 rounded-xl bg-[#8EA66B] px-5 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-[#7B925A] active:scale-95 transition-all"
        >
          <span>Tiếp theo: 10. Unit 1 Review</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

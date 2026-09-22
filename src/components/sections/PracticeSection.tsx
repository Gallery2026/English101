import React, { useState } from 'react';
import {
  CheckCircle2,
  HelpCircle,
  RotateCcw,
  ArrowRight,
  Sparkles,
  Eye,
  EyeOff,
  Building2,
  FileCheck
} from 'lucide-react';
import {
  MARCEGAGLIA_TEXT,
  MARCEGAGLIA_INTERVIEW_QUESTIONS,
  SOFIA_AGUILERA_PROFILE,
  SOFIA_INTERVIEW_GAPS
} from '../../data/unit1Data';
import { AudioButton } from '../AudioButton';
import { TeacherNoteCard } from '../TeacherNoteCard';

interface PracticeSectionProps {
  showVietnamese: boolean;
  teacherMode: boolean;
  onNext: () => void;
  onMarkCompleted: () => void;
}

export const PracticeSection: React.FC<PracticeSectionProps> = ({
  showVietnamese,
  teacherMode,
  onNext,
  onMarkCompleted
}) => {
  // Exercise 1 Profile inputs
  const [profileInput, setProfileInput] = useState({
    headOffice: '',
    products: '',
    ceo: ''
  });
  const [showProfileAnswer, setShowProfileAnswer] = useState(false);

  // Exercise 3 Verb choices
  const [selectedVerbs, setSelectedVerbs] = useState<Record<number, string>>({});
  const [checkedVerbs, setCheckedVerbs] = useState(false);
  const [showVerbsSolution, setShowVerbsSolution] = useState(false);

  // Exercise 7 Sofia interview inputs
  const [sofiaInputs, setSofiaInputs] = useState<Record<number, string>>({});
  const [checkedSofia, setCheckedSofia] = useState(false);
  const [showSofiaSolution, setShowSofiaSolution] = useState(false);

  const teacherGuide = {
    objective: 'Ứng dụng chính xác thì Hiện tại đơn của TO BE và Tính từ sở hữu vào văn bản kinh doanh và phỏng vấn công ty thực tế.',
    teacherSays: `First, have Student A read aloud paragraph 1 of Marcegaglia. Have Student B complete the company profile.\nIn the interview (Exercise 3), have Student A play Interviewer (A) and Student B play Respondent (B).\nIn Exercise 7, Student B plays Interviewer, Student A plays Sofia Aguilera.`,
    studentA: `Read aloud Marcegaglia text.\nRoleplay Interviewer A in Exercise 3.\nCheck verb forms: "Is Marcegaglia a family company?"`,
    studentB: `Read aloud response: "Yes, it is... they are the CEOs."\nCheck possessive adjectives in Sofia's profile: my, his, her, our, their.`,
    teacherTip: `Lưu ý câu 4 của Sofia: "And our daughter is the Sales Manager" - cả 'our' hoặc 'my' đều chấp nhận được.`
  };

  const handleVerbSelect = (id: number, option: string) => {
    setSelectedVerbs((prev) => ({ ...prev, [id]: option }));
    setCheckedVerbs(false);
  };

  const handleResetVerbs = () => {
    setSelectedVerbs({});
    setCheckedVerbs(false);
    setShowVerbsSolution(false);
  };

  const handleCheckVerbs = () => {
    setCheckedVerbs(true);
  };

  const handleSofiaInput = (id: number, val: string) => {
    setSofiaInputs((prev) => ({ ...prev, [id]: val }));
    setCheckedSofia(false);
  };

  const handleResetSofia = () => {
    setSofiaInputs({});
    setCheckedSofia(false);
    setShowSofiaSolution(false);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-3xl border border-[#E8DFD5] bg-white p-6 shadow-xs">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FFDCDC] px-3 py-1 text-xs font-bold text-[#8B4444] mb-2">
          <FileCheck className="h-3.5 w-3.5" />
          Page 8–9 • Practice Exercises
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#2D2A26]">
          Interactive Reading & Grammar Practice
        </h2>
        <p className="text-xs sm:text-sm text-[#70695E]">
          Các bài tập tương tác chuẩn hóa từ sách: Hồ sơ công ty Marcegaglia, phỏng vấn chọn động từ to be và hoàn thành đoạn hội thoại với tính từ sở hữu.
        </p>
      </div>

      {/* Teacher Guide Card */}
      {teacherMode && <TeacherNoteCard guide={teacherGuide} defaultExpanded={true} />}

      {/* 1. Exercise 1: Company Profile Marcegaglia (Page 8) */}
      <div className="rounded-3xl border border-[#E8DFD5] bg-white p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#F0EAE1] pb-3 mb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#A05252]">
              Page 8 • Exercise 1
            </span>
            <h3 className="text-lg font-bold text-[#2D2A26]">
              Đọc văn bản & Hoàn thành hồ sơ công ty Marcegaglia
            </h3>
          </div>
          <AudioButton text={MARCEGAGLIA_TEXT.bodyEn} size="sm" label="Nghe toàn bài" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Article Text */}
          <div className="lg:col-span-7 rounded-2xl bg-[#FAF8F5] p-5 border border-[#E8DFD5]">
            <div className="flex items-center gap-2 mb-3">
              <Building2 className="h-5 w-5 text-[#8B4444]" />
              <h4 className="font-extrabold text-base tracking-wider text-[#8B4444]">
                {MARCEGAGLIA_TEXT.title}
              </h4>
            </div>

            <p className="text-xs leading-relaxed text-[#2D2A26] whitespace-pre-line font-medium">
              {MARCEGAGLIA_TEXT.bodyEn}
            </p>

            {showVietnamese && (
              <div className="mt-4 pt-3 border-t border-[#E8DFD5] text-[11px] text-[#70695E] leading-relaxed italic">
                {MARCEGAGLIA_TEXT.bodyVi}
              </div>
            )}
          </div>

          {/* Profile Form */}
          <div className="lg:col-span-5 rounded-2xl bg-white p-5 border border-[#E8DFD5] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#F0EAE1] pb-2 mb-3">
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#2D2A26]">
                  Company Profile
                </h4>
                <button
                  type="button"
                  onClick={() => setShowProfileAnswer(!showProfileAnswer)}
                  className="text-[11px] font-bold text-[#8EA66B] hover:underline"
                >
                  {showProfileAnswer ? 'Ẩn đáp án' : 'Xem đáp án mẫu'}
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="font-bold text-[#70695E] block mb-1">Company name:</label>
                  <input
                    type="text"
                    disabled
                    value="Marcegaglia"
                    className="w-full rounded-xl bg-[#FAF8F5] border border-[#E8DFD5] px-3 py-2 font-semibold text-[#2D2A26]"
                  />
                </div>

                <div>
                  <label className="font-bold text-[#70695E] block mb-1">Head office:</label>
                  <input
                    type="text"
                    placeholder="Near Milan, Italy..."
                    value={showProfileAnswer ? MARCEGAGLIA_TEXT.profile.headOffice : profileInput.headOffice}
                    onChange={(e) => setProfileInput({ ...profileInput, headOffice: e.target.value })}
                    className="w-full rounded-xl border border-[#E8DFD5] px-3 py-2 text-[#2D2A26] focus:border-[#8EA66B] focus:outline-none"
                  />
                  {showProfileAnswer && (
                    <span className="text-[10px] text-[#8EA66B] font-bold mt-0.5 block">
                      ✓ near Milan, Italy
                    </span>
                  )}
                </div>

                <div>
                  <label className="font-bold text-[#70695E] block mb-1">Products:</label>
                  <input
                    type="text"
                    placeholder="Steel pipes..."
                    value={showProfileAnswer ? MARCEGAGLIA_TEXT.profile.products : profileInput.products}
                    onChange={(e) => setProfileInput({ ...profileInput, products: e.target.value })}
                    className="w-full rounded-xl border border-[#E8DFD5] px-3 py-2 text-[#2D2A26] focus:border-[#8EA66B] focus:outline-none"
                  />
                  {showProfileAnswer && (
                    <span className="text-[10px] text-[#8EA66B] font-bold mt-0.5 block">
                      ✓ steel pipes
                    </span>
                  )}
                </div>

                <div>
                  <label className="font-bold text-[#70695E] block mb-1">CEO:</label>
                  <input
                    type="text"
                    placeholder="Antonio Marcegaglia and Emma Marcegaglia..."
                    value={showProfileAnswer ? MARCEGAGLIA_TEXT.profile.ceo : profileInput.ceo}
                    onChange={(e) => setProfileInput({ ...profileInput, ceo: e.target.value })}
                    className="w-full rounded-xl border border-[#E8DFD5] px-3 py-2 text-[#2D2A26] focus:border-[#8EA66B] focus:outline-none"
                  />
                  {showProfileAnswer && (
                    <span className="text-[10px] text-[#8EA66B] font-bold mt-0.5 block">
                      ✓ Antonio Marcegaglia and his sister Emma
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#F0EAE1] text-[11px] text-[#70695E]">
              💡 <strong>Luyện phản xạ tự học:</strong> Tự đọc to câu hỏi và câu trả lời: <em>"What are its products?" → "Its main products are steel pipes."</em>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Exercise 3: Marcegaglia Interview Verbs (Page 8) */}
      <div className="rounded-3xl border border-[#E8DFD5] bg-white p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#F0EAE1] pb-3 mb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#A05252]">
              Page 8 • Exercise 3
            </span>
            <h3 className="text-lg font-bold text-[#2D2A26]">
              Phỏng vấn về Marcegaglia: Chọn dạng đúng của TO BE
            </h3>
            <p className="text-xs text-[#70695E]">
              Đọc đoạn phỏng vấn giữa Interviewer (A) và Respondent (B). Bấm chọn động từ đúng in nghiêng.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCheckVerbs}
              className="rounded-xl bg-[#8EA66B] px-3.5 py-1.5 text-xs font-bold text-white shadow-xs hover:bg-[#7B925A]"
            >
              Kiểm tra
            </button>
            <button
              type="button"
              onClick={() => setShowVerbsSolution(!showVerbsSolution)}
              className="rounded-xl border border-[#E8DFD5] bg-[#FAF8F5] px-3 py-1.5 text-xs font-bold text-[#5A544C] hover:bg-[#F0EAE1]"
            >
              {showVerbsSolution ? 'Ẩn đáp án' : 'Hiện đáp án'}
            </button>
            <button
              type="button"
              onClick={handleResetVerbs}
              title="Làm lại"
              className="rounded-xl border border-[#E8DFD5] p-1.5 text-[#5A544C] hover:bg-[#F0EAE1]"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="space-y-3 text-xs leading-relaxed">
          {MARCEGAGLIA_INTERVIEW_QUESTIONS.map((item) => {
            const isSelected = selectedVerbs[item.id];
            const isCorrect = isSelected === item.correct;

            return (
              <div
                key={item.id}
                className={`rounded-xl p-3 border transition-all ${
                  checkedVerbs
                    ? isCorrect
                      ? 'bg-[#F4FAF2] border-[#8EA66B]'
                      : 'bg-[#FFF5F5] border-red-300'
                    : 'bg-[#FAF8F5] border-[#E8DFD5]'
                }`}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-md px-1.5 py-0.5 text-[10px] font-bold ${
                      item.speaker === 'A'
                        ? 'bg-[#DCE8F7] text-[#2A5288]'
                        : 'bg-[#FFDCDC] text-[#8B4444]'
                    }`}
                  >
                    Speaker {item.speaker}
                  </span>

                  <span>{item.textBefore}</span>

                  <div className="inline-flex gap-1">
                    {item.options.map((opt) => {
                      const active = isSelected === opt;
                      const isOptionCorrect = opt === item.correct;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => handleVerbSelect(item.id, opt)}
                          className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-all ${
                            showVerbsSolution && isOptionCorrect
                              ? 'bg-[#8EA66B] text-white ring-2 ring-[#8EA66B]'
                              : active
                              ? checkedVerbs
                                ? isCorrect
                                  ? 'bg-[#8EA66B] text-white'
                                  : 'bg-red-500 text-white'
                                : 'bg-[#2D2A26] text-white'
                              : 'bg-white border border-[#E8DFD5] text-[#2D2A26] hover:bg-[#F0EAE1]'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  <span>{item.textAfter}</span>
                </div>

                {checkedVerbs && !isCorrect && (
                  <div className="mt-1 text-[11px] font-bold text-red-600">
                    Đáp án đúng: <span className="underline">{item.correct}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Exercise 7: Sofia Aguilera Profile & Interview (Page 9) */}
      <div className="rounded-3xl border border-[#E8DFD5] bg-white p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#F0EAE1] pb-3 mb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#A05252]">
              Page 9 • Exercise 7
            </span>
            <h3 className="text-lg font-bold text-[#2D2A26]">
              Phỏng vấn Sofia Aguilera: Điền Tính từ sở hữu
            </h3>
            <p className="text-xs text-[#70695E]">
              Sử dụng các từ sở hữu: <em>your, my, his, her, its, our, their</em> để điền vào chỗ trống.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setCheckedSofia(true)}
              className="rounded-xl bg-[#8EA66B] px-3.5 py-1.5 text-xs font-bold text-white shadow-xs hover:bg-[#7B925A]"
            >
              Kiểm tra
            </button>
            <button
              type="button"
              onClick={() => setShowSofiaSolution(!showSofiaSolution)}
              className="rounded-xl border border-[#E8DFD5] bg-[#FAF8F5] px-3 py-1.5 text-xs font-bold text-[#5A544C] hover:bg-[#F0EAE1]"
            >
              {showSofiaSolution ? 'Ẩn đáp án' : 'Hiện đáp án'}
            </button>
            <button
              type="button"
              onClick={handleResetSofia}
              title="Làm lại"
              className="rounded-xl border border-[#E8DFD5] p-1.5 text-[#5A544C] hover:bg-[#F0EAE1]"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Sofia Card */}
          <div className="md:col-span-4 rounded-2xl bg-[#FAF8F5] p-4 border border-[#E8DFD5]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8EA66B] block mb-2">
              Profile in Unit 1
            </span>
            <h4 className="font-extrabold text-base text-[#2D2A26]">
              {SOFIA_AGUILERA_PROFILE.name}
            </h4>
            <div className="mt-2 space-y-1 text-xs">
              <p><strong>Country:</strong> {SOFIA_AGUILERA_PROFILE.country}</p>
              <p><strong>Company:</strong> {SOFIA_AGUILERA_PROFILE.companyName}</p>
              <p><strong>Job:</strong> {SOFIA_AGUILERA_PROFILE.job}</p>
              <p><strong>Customers:</strong> {SOFIA_AGUILERA_PROFILE.customers}</p>
            </div>
          </div>

          {/* Interview gaps */}
          <div className="md:col-span-8 rounded-2xl bg-white p-4 border border-[#E8DFD5] space-y-3 text-xs leading-relaxed">
            {SOFIA_INTERVIEW_GAPS.map((gap) => {
              const userVal = sofiaInputs[gap.id]?.trim().toLowerCase() || '';
              const isMatch =
                userVal === gap.correct.toLowerCase() ||
                (gap.alternative && userVal === gap.alternative.toLowerCase());

              return (
                <div key={gap.id} className="flex flex-wrap items-center gap-1.5 py-1">
                  <span className="font-bold text-[#8B4444]">{gap.speaker}:</span>
                  <span>{gap.before}</span>
                  <input
                    type="text"
                    value={showSofiaSolution ? gap.correct : sofiaInputs[gap.id] || ''}
                    onChange={(e) => handleSofiaInput(gap.id, e.target.value)}
                    placeholder={`[${gap.id}]`}
                    className={`w-20 rounded-lg border px-2 py-1 text-center font-bold text-xs ${
                      checkedSofia
                        ? isMatch
                          ? 'border-[#8EA66B] bg-[#F4FAF2] text-[#3B662A]'
                          : 'border-red-400 bg-[#FFF5F5] text-red-600'
                        : 'border-[#E8DFD5] bg-[#FAF8F5] text-[#2D2A26] focus:border-[#8EA66B]'
                    }`}
                  />
                  <span>{gap.after}</span>
                  {checkedSofia && !isMatch && !showSofiaSolution && (
                    <span className="text-[10px] font-bold text-red-600">
                      (Đúng: {gap.correct})
                    </span>
                  )}
                </div>
              );
            })}
          </div>
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
          <span>Đánh dấu hoàn thành Practice</span>
        </button>

        <button
          type="button"
          onClick={onNext}
          className="flex items-center gap-2 rounded-xl bg-[#8EA66B] px-5 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-[#7B925A] active:scale-95 transition-all"
        >
          <span>Tiếp theo: 06. Pair Work 1:2</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

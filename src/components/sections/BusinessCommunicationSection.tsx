import React, { useState } from 'react';
import {
  MessageSquare,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  RotateCcw,
  Volume2,
  Calendar
} from 'lucide-react';
import {
  VISITOR_BOARD_EXERCISE,
  EXPRESSIONS_MATCHING,
  GOODBYE_CONVERSATION
} from '../../data/unit1Data';
import { AudioButton } from '../AudioButton';
import { TeacherNoteCard } from '../TeacherNoteCard';

interface BusinessCommunicationSectionProps {
  showVietnamese: boolean;
  teacherMode: boolean;
  onNext: () => void;
  onMarkCompleted: () => void;
}

export const BusinessCommunicationSection: React.FC<BusinessCommunicationSectionProps> = ({
  showVietnamese,
  teacherMode,
  onNext,
  onMarkCompleted
}) => {
  // Visitor board state
  const [visitorInputs, setVisitorInputs] = useState<Record<number, string>>({
    1: '',
    2: '',
    3: ''
  });
  const [showVisitorAnswers, setShowVisitorAnswers] = useState(false);

  // Expression matching state
  const [selectedMatches, setSelectedMatches] = useState<Record<number, string>>({});
  const [checkedMatches, setCheckedMatches] = useState(false);
  const [showMatchesSolution, setShowMatchesSolution] = useState(false);

  // Goodbye gap-fill state
  const [goodbyeInputs, setGoodbyeInputs] = useState<Record<number, string>>({
    1: '',
    2: '',
    3: ''
  });
  const [checkedGoodbye, setCheckedGoodbye] = useState(false);
  const [showGoodbyeSolution, setShowGoodbyeSolution] = useState(false);

  // Triad role rotation
  const [triadRound, setTriadRound] = useState<1 | 2 | 3>(1);

  const teacherGuide = {
    objective: 'Trang bị kỹ năng chào hỏi, tự giới thiệu, giới thiệu người thứ ba và nói lời tạm biệt trong môi trường kinh doanh chuẩn quốc tế.',
    teacherSays: `Facilitate the 3-person triad roleplay (Exercise 4):\nRound 1: Student A = Colleague 1, Student B = Colleague 2, Teacher = Visitor (C).\nRound 2: Swap! Student B = Colleague 1, Teacher = Colleague 2, Student A = Visitor.\nRound 3: Student A & B perform together while Teacher observes.`,
    studentA: `Practice expression: "Hello. My name is...", "This is my colleague..."\nRespond with: "Pleased to meet you / Nice to meet you."`,
    studentB: `Introduce third person: "Do you know...?", "This is my assistant..."\nPractice farewell: "Have a good journey. See you soon."`,
    teacherTip: `Giải thích sự khác nhau tinh tế: "How do you do?" là lời chào trang trọng (không phải câu hỏi thăm sức khỏe, câu đáp lại cũng là "How do you do?"), còn "How are you?" mới trả lời "I'm fine, thanks."`
  };

  const matchOptions = [
    { id: 'a', text: 'Pleased to meet you.' },
    { id: 'b', text: 'No. How do you do?' },
    { id: 'c', text: 'How do you do, Mr Gorski?' },
    { id: 'd', text: 'I’m fine.' },
    { id: 'e', text: 'Nice to meet you.' },
    { id: 'f', text: 'And you.' }
  ];

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-3xl border border-[#E8DFD5] bg-white p-6 shadow-xs">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FFDCDC] px-3 py-1 text-xs font-bold text-[#8B4444] mb-2">
          <MessageSquare className="h-3.5 w-3.5" />
          Page 10 • Business communication
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#2D2A26]">
          Saying Hello and Goodbye
        </h2>
        <p className="text-xs sm:text-sm text-[#70695E]">
          Chào hỏi đối tác tại lễ tân, giới thiệu đồng nghiệp và nói lời tạm biệt chuyên nghiệp trong giao thương.
        </p>
      </div>

      {/* Teacher Guide Card */}
      {teacherMode && <TeacherNoteCard guide={teacherGuide} defaultExpanded={true} />}

      {/* 1. Visitor Board at Reception (Exercise 1) */}
      <div className="rounded-3xl border border-[#E8DFD5] bg-white p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#F0EAE1] pb-3 mb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#A05252]">
              Page 10 • Exercise 1
            </span>
            <h3 className="text-lg font-bold text-[#2D2A26]">
              Visitor Board at Reception (Bảng đón khách tại lễ tân)
            </h3>
            <p className="text-xs text-[#70695E]">
              Hai vị khách đang ở quầy lễ tân: Alek Gorski và Elzbieta Wozniak đến thăm bà Maria Da Rocha.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowVisitorAnswers(!showVisitorAnswers)}
            className="rounded-xl border border-[#E8DFD5] bg-[#FAF8F5] px-3 py-1.5 text-xs font-bold text-[#5A544C] hover:bg-[#F0EAE1]"
          >
            {showVisitorAnswers ? 'Ẩn đáp án' : 'Hiện đáp án'}
          </button>
        </div>

        <div className="mx-auto max-w-lg rounded-2xl border-4 border-[#4A453E] bg-[#2D2A26] p-6 text-white shadow-lg">
          <div className="flex items-center justify-between border-b border-gray-600 pb-2 mb-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#FFDCDC]">
              <Calendar className="h-4 w-4" />
              <span>{VISITOR_BOARD_EXERCISE.date}</span>
            </div>
            <span className="text-[10px] uppercase font-bold text-gray-400">RECEPTION</span>
          </div>

          <div className="space-y-4 font-mono text-center">
            <h4 className="text-sm font-bold tracking-wider text-[#FFF9D6]">
              {VISITOR_BOARD_EXERCISE.welcomeHeader}
            </h4>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-center gap-2">
                <span>MR ALEK</span>
                <input
                  type="text"
                  placeholder="GORSKI"
                  value={showVisitorAnswers ? 'GORSKI' : visitorInputs[1]}
                  onChange={(e) => setVisitorInputs({ ...visitorInputs, 1: e.target.value.toUpperCase() })}
                  className="w-32 rounded bg-black/50 border border-gray-500 px-2 py-1 text-center font-bold text-[#FFF9D6] uppercase focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-center gap-2">
                <span>MS</span>
                <input
                  type="text"
                  placeholder="ELZBIETA"
                  value={showVisitorAnswers ? 'ELZBIETA' : visitorInputs[2]}
                  onChange={(e) => setVisitorInputs({ ...visitorInputs, 2: e.target.value.toUpperCase() })}
                  className="w-32 rounded bg-black/50 border border-gray-500 px-2 py-1 text-center font-bold text-[#FFF9D6] uppercase focus:outline-none"
                />
                <span>WOZNIAK</span>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-600">
              <span className="text-xs text-gray-400 block mb-1">VISITING:</span>
              <div className="flex items-center justify-center gap-2 text-xs">
                <span>MRS</span>
                <input
                  type="text"
                  placeholder="MARIA"
                  value={showVisitorAnswers ? 'MARIA' : visitorInputs[3]}
                  onChange={(e) => setVisitorInputs({ ...visitorInputs, 3: e.target.value.toUpperCase() })}
                  className="w-32 rounded bg-black/50 border border-gray-500 px-2 py-1 text-center font-bold text-[#8EA66B] uppercase focus:outline-none"
                />
                <span>DA ROCHA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Match Expressions 1-6 to Responses a-f (Exercise 2) */}
      <div className="rounded-3xl border border-[#E8DFD5] bg-white p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#F0EAE1] pb-3 mb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#A05252]">
              Page 10 • Exercise 2 & 3
            </span>
            <h3 className="text-lg font-bold text-[#2D2A26]">
              Ghép câu giao tiếp (1–6) với câu đối đáp tương ứng (a–f)
            </h3>
            <p className="text-xs text-[#70695E]">
              Chọn chữ cái (a, b, c, d, e, f) tương ứng cho mỗi câu chào hỏi kinh doanh.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setCheckedMatches(true)}
              className="rounded-xl bg-[#8EA66B] px-3.5 py-1.5 text-xs font-bold text-white shadow-xs hover:bg-[#7B925A]"
            >
              Kiểm tra
            </button>
            <button
              type="button"
              onClick={() => setShowMatchesSolution(!showMatchesSolution)}
              className="rounded-xl border border-[#E8DFD5] bg-[#FAF8F5] px-3 py-1.5 text-xs font-bold text-[#5A544C] hover:bg-[#F0EAE1]"
            >
              {showMatchesSolution ? 'Ẩn đáp án' : 'Hiện đáp án'}
            </button>
            <button
              type="button"
              onClick={() => {
                setSelectedMatches({});
                setCheckedMatches(false);
                setShowMatchesSolution(false);
              }}
              title="Làm lại"
              className="rounded-xl border border-[#E8DFD5] p-1.5 text-[#5A544C] hover:bg-[#F0EAE1]"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Reference bank of responses a-f */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 mb-4 p-3 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD5] text-xs">
          {matchOptions.map((opt) => (
            <div key={opt.id} className="flex items-center gap-1.5 bg-white p-2 rounded-xl border border-[#E8DFD5]">
              <span className="font-bold text-[#8B4444] uppercase">{opt.id}.</span>
              <span className="font-medium text-[#2D2A26]">{opt.text}</span>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          {EXPRESSIONS_MATCHING.map((item) => {
            const isSelected = selectedMatches[item.id];
            const isCorrect = isSelected === item.correctResponseId;

            return (
              <div
                key={item.id}
                className={`rounded-2xl p-3.5 border transition-all text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                  checkedMatches
                    ? isCorrect
                      ? 'bg-[#F4FAF2] border-[#8EA66B]'
                      : 'bg-[#FFF5F5] border-red-300'
                    : 'bg-[#FAF8F5] border-[#E8DFD5]'
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFDCDC] text-[11px] font-bold text-[#8B4444]">
                      {item.id}
                    </span>
                    <span className="font-bold text-[#2D2A26]">{item.expression}</span>
                    <AudioButton text={item.expression} size="sm" showSlowOption={false} label="Nghe" />
                  </div>
                  {showVietnamese && (
                    <p className="mt-1 text-[11px] text-[#70695E] italic pl-7">
                      {item.vietnamese}
                    </p>
                  )}
                  <span className="mt-1.5 inline-block rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold text-[#8C8479] border border-[#E8DFD5] ml-7">
                    {item.category}
                  </span>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center">
                  <span className="text-[#70695E] font-medium">Chọn đáp án:</span>
                  <select
                    value={showMatchesSolution ? item.correctResponseId : selectedMatches[item.id] || ''}
                    onChange={(e) => {
                      setSelectedMatches({ ...selectedMatches, [item.id]: e.target.value });
                      setCheckedMatches(false);
                    }}
                    className={`rounded-xl border px-3 py-1.5 font-bold text-xs ${
                      checkedMatches
                        ? isCorrect
                          ? 'border-[#8EA66B] bg-[#EBF3E5] text-[#3B662A]'
                          : 'border-red-400 bg-[#FFF5F5] text-red-600'
                        : 'border-[#E8DFD5] bg-white text-[#2D2A26]'
                    }`}
                  >
                    <option value="">-- Chọn --</option>
                    {matchOptions.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.id}. {opt.text}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. 3-Person Triad Role-play (Exercises 4 & 5) */}
      <div className="rounded-3xl border border-[#E8DFD5] bg-white p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#F0EAE1] pb-3 mb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#A05252]">
              Page 10 • Exercises 4 & 5
            </span>
            <h3 className="text-lg font-bold text-[#2D2A26]">
              Hội thoại nhóm 3 người (1 Giáo viên + 2 Học viên)
            </h3>
            <p className="text-xs text-[#70695E]">
              Phân vai thực hành tình huống: Đồng nghiệp A gặp Đồng nghiệp B và giới thiệu Khách C.
            </p>
          </div>

          <div className="flex gap-1.5">
            <button
              type="button"
              onClick={() => setTriadRound(1)}
              className={`rounded-xl px-3 py-1 text-xs font-bold transition-all ${
                triadRound === 1
                  ? 'bg-[#8EA66B] text-white'
                  : 'bg-[#FAF8F5] text-[#5A544C] hover:bg-[#F0EAE1]'
              }`}
            >
              Lượt 1
            </button>
            <button
              type="button"
              onClick={() => setTriadRound(2)}
              className={`rounded-xl px-3 py-1 text-xs font-bold transition-all ${
                triadRound === 2
                  ? 'bg-[#8EA66B] text-white'
                  : 'bg-[#FAF8F5] text-[#5A544C] hover:bg-[#F0EAE1]'
              }`}
            >
              Lượt 2 (Đổi vai)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="rounded-2xl border border-[#DCE8F7] bg-[#F8FAFC] p-4 text-xs">
            <div className="font-bold text-[#2A5288] mb-1">
              {triadRound === 1 ? '👤 Nhân vật 1 (Maria Da Rocha)' : '👤 Bạn đóng vai (Maria)'}
            </div>
            <p className="text-[#334155]">Chào Alek (người quen cũ):</p>
            <p className="font-bold text-[#1E293B] mt-2 italic">
              "Alek! It’s good to see you again. How are you?"
            </p>
          </div>

          <div className="rounded-2xl border border-[#D9ECCF] bg-[#F8FAF6] p-4 text-xs">
            <div className="font-bold text-[#3B662A] mb-1">
              {triadRound === 1 ? '👤 Nhân vật 2 (Alek Gorski)' : '👤 Bạn đóng vai (Alek)'}
            </div>
            <p className="text-[#283C21]">Đáp lời và giới thiệu trợ lý Elzbieta:</p>
            <p className="font-bold text-[#1E293B] mt-2 italic">
              "And you, Maria! I’m fine, thanks. Do you know Elzbieta? This is my assistant, Elzbieta Wozniak."
            </p>
          </div>

          <div className="rounded-2xl border border-[#FFDCDC] bg-[#FFF9F9] p-4 text-xs">
            <div className="font-bold text-[#8B4444] mb-1">
              {triadRound === 1 ? '👤 Nhân vật 3 (Elzbieta Wozniak)' : '👤 Bạn đóng vai (Elzbieta)'}
            </div>
            <p className="text-[#5C2B2B]">Chào trang trọng lần đầu gặp:</p>
            <p className="font-bold text-[#1E293B] mt-2 italic">
              "How do you do? / Nice to meet you, Maria."
            </p>
          </div>
        </div>
      </div>

      {/* 4. Saying Goodbye Dialogue (Exercises 6 & 7) */}
      <div className="rounded-3xl border border-[#E8DFD5] bg-white p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#F0EAE1] pb-3 mb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#A05252]">
              Page 10 • Exercises 6 & 7
            </span>
            <h3 className="text-lg font-bold text-[#2D2A26]">
              Nói lời tạm biệt (Saying Goodbye Conversation)
            </h3>
            <p className="text-xs text-[#70695E]">
              Điền các cụm từ: <em>Have a good journey</em>, <em>See you soon</em>, <em>Nice meeting you</em> vào đoạn hội thoại.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowGoodbyeSolution(!showGoodbyeSolution)}
            className="rounded-xl border border-[#E8DFD5] bg-[#FAF8F5] px-3 py-1.5 text-xs font-bold text-[#5A544C] hover:bg-[#F0EAE1]"
          >
            {showGoodbyeSolution ? 'Ẩn đáp án' : 'Hiện đáp án'}
          </button>
        </div>

        <div className="space-y-3 rounded-2xl bg-[#FAF8F5] p-5 border border-[#E8DFD5] text-xs leading-relaxed max-w-2xl mx-auto">
          {GOODBYE_CONVERSATION.map((line, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="font-bold text-[#8B4444] w-16 shrink-0">{line.speaker}:</span>
              {line.line ? (
                <span className="text-[#2D2A26] font-medium">{line.line}</span>
              ) : (
                <div className="flex flex-wrap items-center gap-1">
                  <span>{line.before}</span>
                  <span className="rounded-lg bg-white border border-[#E8DFD5] px-2.5 py-1 font-bold text-[#8EA66B]">
                    {showGoodbyeSolution ? line.correct : `[${line.correct}]`}
                  </span>
                  <span>{line.after}</span>
                </div>
              )}
            </div>
          ))}
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
          <span>Đánh dấu hoàn thành Communication</span>
        </button>

        <button
          type="button"
          onClick={onNext}
          className="flex items-center gap-2 rounded-xl bg-[#8EA66B] px-5 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-[#7B925A] active:scale-95 transition-all"
        >
          <span>Tiếp theo: 08. The Introductions Game</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

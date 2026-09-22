import React, { useState } from 'react';
import {
  Award,
  CheckCircle2,
  Sparkles,
  RotateCcw,
  BookOpen,
  CheckSquare,
  HelpCircle,
  Trophy
} from 'lucide-react';
import { TeacherNoteCard } from '../TeacherNoteCard';

interface ReviewSectionProps {
  showVietnamese: boolean;
  teacherMode: boolean;
  onMarkCompleted: () => void;
  onRestartCourse: () => void;
}

export const ReviewSection: React.FC<ReviewSectionProps> = ({
  showVietnamese,
  teacherMode,
  onMarkCompleted,
  onRestartCourse
}) => {
  // Quiz states
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  // Can-do checklist
  const [canDoList, setCanDoList] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: true,
    4: true,
    5: true
  });

  const teacherGuide = {
    objective: 'Đánh giá mức độ tiếp thu (Learning Outcomes Assessment) của cả 2 học viên, củng cố các lỗi thường gặp và tổng kết kết quả buổi học 60–90 phút.',
    teacherSays: `Congratulate both students on completing Unit 1!\nHave both students take the 5-question quick mastery check.\nGo through each Can-Do statement and ask Student A & B to demonstrate in 1 sentence.\nAward the Unit 1 Completion Certificate.`,
    studentA: `Complete the quick quiz and tick your Can-Do statements.\nGive a 30-second final self-introduction to celebrate completion.`,
    studentB: `Complete the quiz and verify answers with your partner.`,
    teacherTip: `Nhắc lại quy tắc vàng: Trong câu trả lời ngắn khẳng định luôn dùng "Yes, I am" (không bao giờ dùng Yes, I'm).`
  };

  const quizQuestions = [
    {
      id: 1,
      question: 'Câu trả lời ngắn đúng cho câu hỏi: "Are you at work all the time?" là gì?',
      options: ['Yes, I’m.', 'Yes, I am.', 'Yes, I be.'],
      correctIndex: 1,
      explanation: 'Quy tắc trang 8: Không dùng dạng rút gọn (’m, ’s, ’re) cho câu trả lời ngắn khẳng định.'
    },
    {
      id: 2,
      question: 'Chọn từ đúng: "Toyota is a Japanese company. ___ customers are all over the world."',
      options: ['It’s', 'Its', 'His'],
      correctIndex: 1,
      explanation: 'Quy tắc trang 9: "Its" là tính từ sở hữu (của nó). "It’s" là viết tắt của It is.'
    },
    {
      id: 3,
      question: 'Mẫu câu nào dùng để GIỚI THIỆU NGƯỜI THỨ BA trong giao tiếp kinh doanh?',
      options: [
        'How do you do, Mr Gorski?',
        'This is my assistant, Elzbieta Wozniak.',
        'Nice meeting you.'
      ],
      correctIndex: 1,
      explanation: 'Trang 10: "This is my assistant / colleague [Tên]" dùng để giới thiệu người khác.'
    },
    {
      id: 4,
      question: 'Quốc tịch tương ứng của "Poland" là gì?',
      options: ['Polish', 'Polander', 'Polanese'],
      correctIndex: 0,
      explanation: 'Trang 6: Poland -> Polish (như Elzbieta Wozniak, Stanislav Beyer).'
    },
    {
      id: 5,
      question: 'Khi đối tác lần đầu gặp mặt và nói: "How do you do?", câu đáp lại trang trọng chuẩn là gì?',
      options: ['I’m fine, thank you.', 'How do you do?', 'Yes, I do.'],
      correctIndex: 1,
      explanation: 'Trang 10: "How do you do?" là lời chào trang trọng, câu đáp lại chính xác cũng là "How do you do?".'
    }
  ];

  const handleSelectQuiz = (qId: number, optIdx: number) => {
    if (quizSubmitted) return;
    setQuizAnswers({ ...quizAnswers, [qId]: optIdx });
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correctIndex) score += 1;
    });
    return score;
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-3xl border border-[#E8DFD5] bg-white p-6 shadow-xs">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#EBF3E5] px-3 py-1 text-xs font-bold text-[#8EA66B] mb-2">
          <Award className="h-3.5 w-3.5" />
          Unit 1 Summary & Evaluation
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#2D2A26]">
          Tổng kết & Đánh giá Năng lực Unit 1
        </h2>
        <p className="text-xs sm:text-sm text-[#70695E]">
          Củng cố toàn bộ kiến thức, kiểm tra trắc nghiệm nhanh và bảng đánh giá chuẩn đầu ra (Can-Do Statements).
        </p>
      </div>

      {/* Teacher Guide Card */}
      {teacherMode && <TeacherNoteCard guide={teacherGuide} defaultExpanded={true} />}

      {/* 3 Pillars Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Pillar 1: Vocabulary */}
        <div className="rounded-3xl border border-[#E8DFD5] bg-white p-5 shadow-xs">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#A05252] block mb-1">
            Pillar 1
          </span>
          <h3 className="font-bold text-sm text-[#2D2A26] mb-2">Từ vựng nghề nghiệp & Quốc gia</h3>
          <ul className="space-y-1.5 text-xs text-[#5A544C]">
            <li>• Phân biệt rõ Country (Italy) vs Nationality (Italian).</li>
            <li>• Luôn dùng mạo từ <strong>a/an</strong> trước chức danh (a receptionist, an engineer).</li>
            <li>• Thuộc 7 nhóm chữ cái nguyên âm để đánh vần chuẩn xác.</li>
          </ul>
        </div>

        {/* Pillar 2: Grammar */}
        <div className="rounded-3xl border border-[#E8DFD5] bg-white p-5 shadow-xs">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#2A5288] block mb-1">
            Pillar 2
          </span>
          <h3 className="font-bold text-sm text-[#2D2A26] mb-2">Động từ TO BE & Sở hữu</h3>
          <ul className="space-y-1.5 text-xs text-[#5A544C]">
            <li>• I am / You are / He is / She is / It is / We are / They are.</li>
            <li>• Câu trả lời ngắn khẳng định dùng dạng đầy đủ: <em>Yes, I am</em>.</li>
            <li>• Phân biệt <strong>It's</strong> (It is) vs <strong>Its</strong> (của nó).</li>
          </ul>
        </div>

        {/* Pillar 3: Communication */}
        <div className="rounded-3xl border border-[#E8DFD5] bg-white p-5 shadow-xs">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#3B662A] block mb-1">
            Pillar 3
          </span>
          <h3 className="font-bold text-sm text-[#2D2A26] mb-2">Giao tiếp chào hỏi & Tạm biệt</h3>
          <ul className="space-y-1.5 text-xs text-[#5A544C]">
            <li>• Tự giới thiệu: <em>"Hello. My name is..."</em></li>
            <li>• Giới thiệu người khác: <em>"This is my assistant..."</em></li>
            <li>• Chào tạm biệt: <em>"Have a good journey / See you soon!"</em></li>
          </ul>
        </div>
      </div>

      {/* Quick Mastery Quiz (5 Questions) */}
      <div className="rounded-3xl border border-[#E8DFD5] bg-white p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#F0EAE1] pb-3 mb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#A05252]">
              Quick Knowledge Check
            </span>
            <h3 className="text-lg font-bold text-[#2D2A26]">
              Bài kiểm tra trắc nghiệm nhanh Unit 1 (5 Câu)
            </h3>
          </div>

          <div className="flex items-center gap-2">
            {!quizSubmitted ? (
              <button
                type="button"
                onClick={() => setQuizSubmitted(true)}
                className="rounded-xl bg-[#8EA66B] px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#7B925A]"
              >
                Nộp bài & Chấm điểm
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setQuizSubmitted(false);
                  setQuizAnswers({});
                }}
                className="flex items-center gap-1.5 rounded-xl border border-[#E8DFD5] bg-[#FAF8F5] px-3 py-1.5 text-xs font-bold text-[#5A544C] hover:bg-[#F0EAE1]"
              >
                <RotateCcw className="h-4 w-4" />
                <span>Làm lại trắc nghiệm</span>
              </button>
            )}
          </div>
        </div>

        {quizSubmitted && (
          <div className="mb-4 rounded-2xl bg-[#F4FAF2] p-4 border border-[#8EA66B] text-center">
            <h4 className="text-base font-extrabold text-[#283C21]">
              Kết quả: {calculateScore()} / {quizQuestions.length} Điểm
            </h4>
            <p className="text-xs text-[#3B662A] mt-0.5">
              {calculateScore() >= 4
                ? 'Xuất sắc! Học viên đã nắm vững toàn bộ nội dung cốt lõi của Unit 1.'
                : 'Khá tốt! Hãy ôn lại các điểm ngữ pháp cần lưu ý phía dưới.'}
            </p>
          </div>
        )}

        <div className="space-y-4">
          {quizQuestions.map((q, idx) => {
            const isUserCorrect = quizAnswers[q.id] === q.correctIndex;
            return (
              <div
                key={q.id}
                className="rounded-2xl border border-[#E8DFD5] bg-[#FAF8F5] p-4 text-xs"
              >
                <p className="font-bold text-[#2D2A26] mb-2 text-sm">
                  Câu {idx + 1}: {q.question}
                </p>

                <div className="space-y-1.5">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = quizAnswers[q.id] === optIdx;
                    const isOptionCorrect = optIdx === q.correctIndex;

                    return (
                      <button
                        key={optIdx}
                        type="button"
                        onClick={() => handleSelectQuiz(q.id, optIdx)}
                        className={`w-full text-left rounded-xl p-2.5 font-medium transition-all flex items-center justify-between ${
                          quizSubmitted
                            ? isOptionCorrect
                              ? 'bg-[#EBF3E5] border border-[#8EA66B] text-[#283C21] font-bold'
                              : isSelected
                              ? 'bg-red-100 border border-red-300 text-red-700'
                              : 'bg-white border border-[#E8DFD5] text-[#70695E]'
                            : isSelected
                            ? 'bg-[#FFDCDC] border border-[#D8A2A2] text-[#8B4444] font-bold'
                            : 'bg-white border border-[#E8DFD5] text-[#2D2A26] hover:bg-[#F0EAE1]'
                        }`}
                      >
                        <span>{opt}</span>
                        {quizSubmitted && isOptionCorrect && (
                          <span className="text-[#8EA66B] font-bold text-xs">✓ Đáp án đúng</span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {quizSubmitted && (
                  <p className="mt-2 text-[11px] text-[#70695E] italic pt-1 border-t border-[#E8DFD5]">
                    💡 {q.explanation}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Can-Do Statements Checklist */}
      <div className="rounded-3xl border border-[#E8DFD5] bg-white p-6 shadow-xs">
        <h3 className="text-base font-bold text-[#2D2A26] mb-3">
          Chuẩn đầu ra của học viên (Can-Do Statements)
        </h3>

        <div className="space-y-2 text-xs">
          {[
            {
              id: 1,
              statement: 'Tôi có thể giới thiệu tên, quốc gia, quốc tịch và chức vụ của mình kèm mạo từ a/an.'
            },
            {
              id: 2,
              statement: 'Tôi có thể giới thiệu công ty của mình, trụ sở chính và quốc tịch công ty.'
            },
            {
              id: 3,
              statement: 'Tôi có thể sử dụng chính xác Động từ to be và Tính từ sở hữu (my, your, his, her, its, our, their).'
            },
            {
              id: 4,
              statement: 'Tôi có thể phát âm bảng chữ cái theo nhóm âm và đánh vần tên người, tên công ty chuẩn xác.'
            },
            {
              id: 5,
              statement: 'Tôi có thể chào hỏi đối tác tại lễ tân, giới thiệu đồng nghiệp đi cùng và tạm biệt lịch sự.'
            }
          ].map((item) => (
            <label
              key={item.id}
              className="flex items-center gap-3 rounded-2xl bg-[#FAF8F5] p-3 border border-[#E8DFD5] cursor-pointer hover:bg-[#F0EAE1] transition-all"
            >
              <input
                type="checkbox"
                checked={canDoList[item.id] || false}
                onChange={(e) => setCanDoList({ ...canDoList, [item.id]: e.target.checked })}
                className="h-4 w-4 rounded text-[#8EA66B] focus:ring-[#8EA66B]"
              />
              <span className="font-semibold text-[#2D2A26]">{item.statement}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Certificate of Completion Card */}
      <div className="rounded-3xl border-2 border-[#8EA66B] bg-gradient-to-br from-[#FFFDF9] to-[#F4FAF2] p-8 text-center shadow-md">
        <Trophy className="mx-auto h-12 w-12 text-[#8EA66B] mb-2" />
        <h3 className="font-extrabold text-xl text-[#2D2A26] tracking-wider uppercase">
          Certificate of Completion
        </h3>
        <p className="text-xs text-[#70695E] mt-1">
          Chứng chỉ hoàn thành bài học tương tác
        </p>

        <div className="my-4 inline-block rounded-2xl bg-white border border-[#E8DFD5] px-6 py-3 shadow-2xs">
          <p className="text-sm font-bold text-[#8B4444]">
            BUSINESS RESULT ELEMENTARY — UNIT 1: COMPANIES
          </p>
          <p className="text-xs text-[#5A544C] mt-1">
            Lớp học 1:2 • Thời lượng 60–90 phút • Trình độ Elementary (A1–A2)
          </p>
        </div>

        <p className="text-xs text-[#8EA66B] font-bold">
          ✓ Đã hoàn thành xuất sắc toàn bộ 10 phần bài học chuẩn Oxford University Press
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={onMarkCompleted}
            className="flex items-center gap-2 rounded-xl bg-[#8EA66B] px-5 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-[#7B925A] active:scale-95 transition-all"
          >
            <CheckCircle2 className="h-4 w-4" />
            <span>Hoàn thành bài giảng</span>
          </button>

          <button
            type="button"
            onClick={onRestartCourse}
            className="flex items-center gap-2 rounded-xl border border-[#E8DFD5] bg-white px-4 py-2.5 text-xs font-bold text-[#5A544C] hover:bg-[#FAF8F5] transition-all"
          >
            <RotateCcw className="h-4 w-4" />
            <span>Học lại từ đầu (Reset)</span>
          </button>
        </div>
      </div>
    </div>
  );
};

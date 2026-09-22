import React, { useState } from 'react';
import {
  Users,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Repeat,
  Volume2
} from 'lucide-react';
import { AudioButton } from '../AudioButton';
import { TeacherNoteCard } from '../TeacherNoteCard';

interface PairWorkSectionProps {
  showVietnamese: boolean;
  teacherMode: boolean;
  onNext: () => void;
  onMarkCompleted: () => void;
}

export const PairWorkSection: React.FC<PairWorkSectionProps> = ({
  showVietnamese,
  teacherMode,
  onNext,
  onMarkCompleted
}) => {
  const [round, setRound] = useState<1 | 2 | 3>(1);

  // Profile cards data (Textbook Page 7 & Page 134)
  const [cardA, setCardA] = useState({
    name: 'Stanislav Beyer',
    country: 'Poland',
    nationality: 'Polish',
    city: 'Warsaw',
    job: 'Marketing Assistant',
    companyNationality: 'Japanese electronics firm'
  });

  const [cardB, setCardB] = useState({
    name: 'Raquel Santos',
    country: 'Brazil',
    nationality: 'Brazilian',
    city: 'Sao Paulo',
    job: 'Civil Engineer',
    companyNationality: 'German construction firm'
  });

  const selfStudyGuide = {
    objective: 'Luyện phản xạ phỏng vấn thông tin công việc của đối tác và kỹ năng tường thuật lại cho người thứ ba ở ngôi He/She & His/Her (Page 7, Ex 8, 9 & 10).',
    teacherSays: `Bước 1: Luyện hỏi đối tác: "Where are you from?" và "What is your job?"\nBước 2: Luyện trả lời lưu loát: "I'm from... I'm a/an..."\nBước 3: Luyện nói ngôi thứ 3: "He's from Poland. His job is... His company is..."`,
    studentA: `Mẫu câu hỏi: "Where are you from?", "What is your nationality?", "What is your job?", "Is your company Italian?"`,
    teacherTip: `Lưu ý phát âm đuôi /z/ ở 'He's' và 'She's'. Phân biệt chính xác: 'His' (của anh ấy) vs 'Her' (của cô ấy).`
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-3xl border border-[#E8DFD5] bg-white p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#F0EAE1] pb-4 mb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#DCE8F7] px-3 py-1 text-xs font-bold text-[#2A5288] mb-2">
              <Users className="h-3.5 w-3.5" />
              Page 7 • Exercises 8, 9 & 10
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#2D2A26]">
              Luyện phản xạ hỏi đáp & Tường thuật ngôi thứ 3
            </h2>
            <p className="text-xs sm:text-sm text-[#70695E]">
              Thực hành 3 bước chuẩn giáo trình: Hỏi phỏng vấn đối tác, Trả lời theo hồ sơ nhân vật, và Tường thuật lại với đại từ He/She & tính từ sở hữu His/Her.
            </p>
          </div>

          {/* Round Selector */}
          <div className="flex items-center gap-1 rounded-2xl bg-[#FAF8F5] p-1.5 border border-[#E8DFD5]">
            <button
              type="button"
              onClick={() => setRound(1)}
              className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                round === 1
                  ? 'bg-[#2A5288] text-white shadow-xs'
                  : 'text-[#5A544C] hover:bg-[#F0EAE1]'
              }`}
            >
              Bước 1: Hỏi đối tác (Card B)
            </button>
            <button
              type="button"
              onClick={() => setRound(2)}
              className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                round === 2
                  ? 'bg-[#3B662A] text-white shadow-xs'
                  : 'text-[#5A544C] hover:bg-[#F0EAE1]'
              }`}
            >
              Bước 2: Đóng vai trả lời (Card A)
            </button>
            <button
              type="button"
              onClick={() => setRound(3)}
              className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                round === 3
                  ? 'bg-[#8B4444] text-white shadow-xs'
                  : 'text-[#5A544C] hover:bg-[#F0EAE1]'
              }`}
            >
              Bước 3: Tường thuật ngôi thứ 3
            </button>
          </div>
        </div>
      </div>

      {/* Self Study Guide Card */}
      {teacherMode && <TeacherNoteCard guide={selfStudyGuide} defaultExpanded={true} />}

      {/* Information Cards (Page 7 - Exercise 8) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card A */}
        <div
          className={`rounded-3xl border p-5 transition-all shadow-xs ${
            round === 2
              ? 'border-[#2A5288] bg-[#F8FAFC] ring-2 ring-[#2A5288]/20'
              : 'border-[#E8DFD5] bg-white'
          }`}
        >
          <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-[#DCE8F7] text-xs font-extrabold text-[#2A5288]">
                A
              </span>
              <h3 className="font-extrabold text-sm text-[#2A5288]">
                Hồ sơ Nhân vật A: {cardA.name}
              </h3>
            </div>
            <AudioButton
              text={`My name is ${cardA.name}. I am from ${cardA.city} in ${cardA.country}. I'm ${cardA.nationality}. I am a ${cardA.job}. My company is a ${cardA.companyNationality}.`}
            />
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex justify-between py-1 border-b border-[#F1F5F9]">
              <span className="text-[#70695E]">Họ tên:</span>
              <span className="font-bold text-[#2D2A26]">{cardA.name}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#F1F5F9]">
              <span className="text-[#70695E]">Quốc gia & Thành phố:</span>
              <span className="font-bold text-[#2D2A26]">{cardA.city}, {cardA.country}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#F1F5F9]">
              <span className="text-[#70695E]">Quốc tịch:</span>
              <span className="font-bold text-[#2A5288]">{cardA.nationality}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#F1F5F9]">
              <span className="text-[#70695E]">Chức vụ:</span>
              <span className="font-bold text-[#2D2A26]">{cardA.job}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-[#70695E]">Công ty:</span>
              <span className="font-bold text-[#2D2A26]">{cardA.companyNationality}</span>
            </div>
          </div>
        </div>

        {/* Card B */}
        <div
          className={`rounded-3xl border p-5 transition-all shadow-xs ${
            round === 1 || round === 3
              ? 'border-[#3B662A] bg-[#F7FCF5] ring-2 ring-[#3B662A]/20'
              : 'border-[#E8DFD5] bg-white'
          }`}
        >
          <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-[#D9ECCF] text-xs font-extrabold text-[#3B662A]">
                B
              </span>
              <h3 className="font-extrabold text-sm text-[#3B662A]">
                Hồ sơ Nhân vật B: {cardB.name}
              </h3>
            </div>
            <AudioButton
              text={`My name is ${cardB.name}. I am from ${cardB.city} in ${cardB.country}. I'm ${cardB.nationality}. I am a ${cardB.job}. My company is a ${cardB.companyNationality}.`}
            />
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex justify-between py-1 border-b border-[#F1F5F9]">
              <span className="text-[#70695E]">Họ tên:</span>
              <span className="font-bold text-[#2D2A26]">{cardB.name}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#F1F5F9]">
              <span className="text-[#70695E]">Quốc gia & Thành phố:</span>
              <span className="font-bold text-[#2D2A26]">{cardB.city}, {cardB.country}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#F1F5F9]">
              <span className="text-[#70695E]">Quốc tịch:</span>
              <span className="font-bold text-[#3B662A]">{cardB.nationality}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#F1F5F9]">
              <span className="text-[#70695E]">Chức vụ:</span>
              <span className="font-bold text-[#2D2A26]">{cardB.job}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-[#70695E]">Công ty:</span>
              <span className="font-bold text-[#2D2A26]">{cardB.companyNationality}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Dialogue Stage based on active Round */}
      <div className="rounded-3xl border border-[#E8DFD5] bg-white p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-[#F0EAE1] pb-3">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-[#8EA66B]" />
            <h3 className="text-base font-bold text-[#2D2A26]">
              {round === 1 && 'Bước 1: Luyện hỏi phỏng vấn đối tác (Hỏi thông tin Thẻ B)'}
              {round === 2 && 'Bước 2: Đóng vai Thẻ A trả lời phỏng vấn lưu loát'}
              {round === 3 && 'Bước 3: Luyện tường thuật thông tin cho người thứ ba (He / She & His / Her)'}
            </h3>
          </div>
        </div>

        {/* Round 1 Content */}
        {round === 1 && (
          <div className="space-y-3 text-xs">
            <p className="text-[#70695E]">
              💡 Hãy tự đọc to các câu hỏi sau, sau đó nghe câu trả lời mẫu từ đối tác B (Raquel Santos):
            </p>

            <div className="space-y-2">
              <div className="rounded-2xl bg-[#FAF8F5] p-3.5 border border-[#E8DFD5] flex items-center justify-between">
                <div>
                  <span className="font-bold text-[#2A5288]">Bạn hỏi: </span>
                  <span className="font-semibold text-[#2D2A26]">"Where are you from, Raquel?"</span>
                  {showVietnamese && <p className="text-[11px] text-[#70695E]">(Bạn đến từ đâu?)</p>}
                </div>
                <AudioButton text="Where are you from, Raquel?" />
              </div>

              <div className="rounded-2xl bg-[#F7FCF5] p-3.5 border border-[#D9ECCF] flex items-center justify-between">
                <div>
                  <span className="font-bold text-[#3B662A]">Đối tác B đáp: </span>
                  <span className="font-semibold text-[#2D2A26]">"I'm from Sao Paulo in Brazil. I'm Brazilian."</span>
                  {showVietnamese && <p className="text-[11px] text-[#70695E]">(Tôi đến từ Sao Paulo ở Brazil. Tôi là người Brazil.)</p>}
                </div>
                <AudioButton text="I'm from Sao Paulo in Brazil. I'm Brazilian." />
              </div>

              <div className="rounded-2xl bg-[#FAF8F5] p-3.5 border border-[#E8DFD5] flex items-center justify-between">
                <div>
                  <span className="font-bold text-[#2A5288]">Bạn hỏi tiếp: </span>
                  <span className="font-semibold text-[#2D2A26]">"And what is your job?"</span>
                  {showVietnamese && <p className="text-[11px] text-[#70695E]">(Và công việc của bạn là gì?)</p>}
                </div>
                <AudioButton text="And what is your job?" />
              </div>

              <div className="rounded-2xl bg-[#F7FCF5] p-3.5 border border-[#D9ECCF] flex items-center justify-between">
                <div>
                  <span className="font-bold text-[#3B662A]">Đối tác B đáp: </span>
                  <span className="font-semibold text-[#2D2A26]">"I'm a civil engineer. My company is a German construction firm."</span>
                  {showVietnamese && <p className="text-[11px] text-[#70695E]">(Tôi là kỹ sư xây dựng. Công ty tôi là công ty xây dựng của Đức.)</p>}
                </div>
                <AudioButton text="I'm a civil engineer. My company is a German construction firm." />
              </div>
            </div>
          </div>
        )}

        {/* Round 2 Content */}
        {round === 2 && (
          <div className="space-y-3 text-xs">
            <p className="text-[#70695E]">
              💡 Hãy đóng vai Stanislav Beyer (Thẻ A) và trả lời to rõ ràng các câu hỏi của đối tác:
            </p>

            <div className="space-y-2">
              <div className="rounded-2xl bg-[#FAF8F5] p-3.5 border border-[#E8DFD5] flex items-center justify-between">
                <div>
                  <span className="font-bold text-[#70695E]">Đối tác hỏi: </span>
                  <span className="font-semibold text-[#2D2A26]">"What is your name and where are you from?"</span>
                </div>
                <AudioButton text="What is your name and where are you from?" />
              </div>

              <div className="rounded-2xl bg-[#F8FAFC] p-3.5 border border-[#DCE8F7] flex items-center justify-between">
                <div>
                  <span className="font-bold text-[#2A5288]">Bạn đáp (Card A): </span>
                  <span className="font-semibold text-[#2D2A26]">"My name is Stanislav. I'm from Warsaw in Poland. I'm Polish."</span>
                  {showVietnamese && <p className="text-[11px] text-[#70695E]">(Tên tôi là Stanislav. Tôi đến từ Warsaw, Ba Lan. Tôi là người Ba Lan.)</p>}
                </div>
                <AudioButton text="My name is Stanislav. I'm from Warsaw in Poland. I'm Polish." />
              </div>

              <div className="rounded-2xl bg-[#FAF8F5] p-3.5 border border-[#E8DFD5] flex items-center justify-between">
                <div>
                  <span className="font-bold text-[#70695E]">Đối tác hỏi: </span>
                  <span className="font-semibold text-[#2D2A26]">"What is your job and company?"</span>
                </div>
                <AudioButton text="What is your job and company?" />
              </div>

              <div className="rounded-2xl bg-[#F8FAFC] p-3.5 border border-[#DCE8F7] flex items-center justify-between">
                <div>
                  <span className="font-bold text-[#2A5288]">Bạn đáp (Card A): </span>
                  <span className="font-semibold text-[#2D2A26]">"I'm a marketing assistant. My company is a Japanese electronics company."</span>
                  {showVietnamese && <p className="text-[11px] text-[#70695E]">(Tôi là trợ lý marketing. Công ty tôi là công ty điện tử của Nhật Bản.)</p>}
                </div>
                <AudioButton text="I'm a marketing assistant. My company is a Japanese electronics company." />
              </div>
            </div>
          </div>
        )}

        {/* Round 3 Content */}
        {round === 3 && (
          <div className="space-y-3 text-xs">
            <p className="text-[#70695E]">
              💡 Kỹ năng đắt giá nhất Unit 1: Thuyết trình giới thiệu đối tác cho người thứ ba. Chú ý sử dụng đúng <strong>He's / She's</strong> và <strong>His / Her</strong>!
            </p>

            <div className="space-y-3">
              {/* Report Card B (Raquel) */}
              <div className="rounded-2xl bg-[#FFFDF9] p-4 border border-[#F0EAE1] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#8B4444] text-xs">
                    Mẫu tường thuật về Raquel Santos (Ngôi She & Her):
                  </span>
                  <AudioButton text="This is Raquel Santos. She is from Sao Paulo in Brazil. She's Brazilian. She's a civil engineer. Her company is a German construction firm." />
                </div>
                <p className="text-sm font-semibold text-[#2D2A26] leading-relaxed">
                  "This is Raquel Santos. She is from Sao Paulo in Brazil. She's Brazilian. She's a civil engineer. Her company is a German construction firm."
                </p>
                {showVietnamese && (
                  <p className="text-[11px] text-[#70695E] italic">
                    (Đây là Raquel Santos. Cô ấy đến từ Sao Paulo, Brazil. Cô ấy là người Brazil. Cô ấy là kỹ sư xây dựng. Công ty của cô ấy là một hãng xây dựng của Đức.)
                  </p>
                )}
              </div>

              {/* Report Card A (Stanislav) */}
              <div className="rounded-2xl bg-[#F8FAFC] p-4 border border-[#E2E8F0] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#2A5288] text-xs">
                    Mẫu tường thuật về Stanislav Beyer (Ngôi He & His):
                  </span>
                  <AudioButton text="This is Stanislav Beyer. He is from Warsaw in Poland. He's Polish. He is a marketing assistant. His company is a Japanese electronics company." />
                </div>
                <p className="text-sm font-semibold text-[#2D2A26] leading-relaxed">
                  "This is Stanislav Beyer. He is from Warsaw in Poland. He's Polish. He is a marketing assistant. His company is a Japanese electronics company."
                </p>
                {showVietnamese && (
                  <p className="text-[11px] text-[#70695E] italic">
                    (Đây là Stanislav Beyer. Anh ấy đến từ Warsaw, Ba Lan. Anh ấy là người Ba Lan. Anh ấy là trợ lý marketing. Công ty của anh ấy là công ty điện tử Nhật Bản.)
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Footer */}
      <div className="flex items-center justify-between pt-2">
        <button
          type="button"
          onClick={onMarkCompleted}
          className="flex items-center gap-1.5 rounded-xl border border-[#8EA66B] bg-[#EBF3E5] px-4 py-2 text-xs font-bold text-[#8EA66B] hover:bg-[#8EA66B] hover:text-white transition-all shadow-xs"
        >
          <CheckCircle2 className="h-4 w-4" />
          <span>Đánh dấu hoàn thành phần Luyện phản xạ</span>
        </button>

        <button
          type="button"
          onClick={onNext}
          className="flex items-center gap-2 rounded-xl bg-[#8EA66B] px-5 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-[#7B925A] active:scale-95 transition-all"
        >
          <span>Tiếp theo: 08. Giao tiếp công sở</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

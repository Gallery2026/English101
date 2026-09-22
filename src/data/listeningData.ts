import { ListeningTrack } from '../types';

export const UNIT1_LISTENING_TRACKS: ListeningTrack[] = [
  // ==========================================
  // 1. TEXTBOOK AUDIO TRACKS (Unit 1 Page 6-11)
  // ==========================================
  {
    id: 'track-1-1-jobs',
    title: 'Textbook Track 1.1 • Page 6: People, Jobs & Companies',
    subtitle: 'Nghe 4 nhân vật giới thiệu về nghề nghiệp và công ty của họ',
    trackCode: 'Track 1.1',
    category: 'textbook-audio',
    description: 'Bài nghe mở đầu trang 6: 4 nhân vật (Antonio, Sofia, Alek, Elzbieta) nói về công việc, quốc tịch và công ty của họ. Khớp từng nhân vật với nghề nghiệp chính xác.',
    duration: '1:10',
    fullAudioText: `Antonio: Hello, my name is Antonio. I'm from Italy. I'm the Managing Director of Marcegaglia. It's a manufacturing company near Milan. We produce steel pipes.
Sofia: Hi, I'm Sofia. I'm from Spain. I work as a civil engineer for Ferrovial, a large construction company in Madrid.
Alek: Good morning. My name is Alek. I'm from Poland. I'm a sales representative for a chemical company in Warsaw.
Elzbieta: Hello, I'm Elzbieta. I'm also Polish. I work as a personal assistant to the director at a pharmaceuticals company in Krakow.`,
    transcript: [
      {
        id: 1,
        speaker: 'Antonio',
        en: "Hello, my name is Antonio. I'm from Italy. I'm the Managing Director of Marcegaglia. It's a manufacturing company near Milan. We produce steel pipes.",
        vi: 'Xin chào, tên tôi là Antonio. Tôi đến từ Ý. Tôi là Tổng giám đốc điều hành của Marcegaglia. Đó là một công ty sản xuất gần Milan. Chúng tôi sản xuất ống thép.',
        time: '0:05',
        keyVocab: [
          { word: 'Managing Director', ipa: '/ˈmæn.ɪ.dʒɪŋ daɪˈrek.tər/', vi: 'Tổng giám đốc điều hành' },
          { word: 'manufacturing company', ipa: '/ˌmæn.jəˈfæk.tʃə.rɪŋ ˈkʌm.pə.ni/', vi: 'công ty sản xuất' },
          { word: 'steel pipes', ipa: '/stiːl paɪps/', vi: 'ống thép' }
        ]
      },
      {
        id: 2,
        speaker: 'Sofia',
        en: "Hi, I'm Sofia. I'm from Spain. I work as a civil engineer for Ferrovial, a large construction company in Madrid.",
        vi: 'Chào bạn, tôi là Sofia. Tôi đến từ Tây Ban Nha. Tôi là kỹ sư xây dựng làm việc cho Ferrovial, một công ty xây dựng lớn tại Madrid.',
        time: '0:22',
        keyVocab: [
          { word: 'civil engineer', ipa: '/ˌsɪv.əl en.dʒɪˈnɪər/', vi: 'kỹ sư công trình / dân dụng' },
          { word: 'construction company', ipa: '/kənˈstrʌk.ʃən ˈkʌm.pə.ni/', vi: 'công ty xây dựng' }
        ]
      },
      {
        id: 3,
        speaker: 'Alek',
        en: "Good morning. My name is Alek. I'm from Poland. I'm a sales representative for a chemical company in Warsaw.",
        vi: 'Chào buổi sáng. Tên tôi là Alek. Tôi đến từ Ba Lan. Tôi là đại diện bán hàng cho một công ty hóa chất tại Warsaw.',
        time: '0:38',
        keyVocab: [
          { word: 'sales representative', ipa: '/seɪlz ˌrep.rɪˈzen.tə.tɪv/', vi: 'đại diện bán hàng' },
          { word: 'chemical company', ipa: '/ˈkem.ɪ.kəl ˈkʌm.pə.ni/', vi: 'công ty hóa chất' }
        ]
      },
      {
        id: 4,
        speaker: 'Elzbieta',
        en: "Hello, I'm Elzbieta. I'm also Polish. I work as a personal assistant to the director at a pharmaceuticals company in Krakow.",
        vi: 'Xin chào, tôi là Elzbieta. Tôi cũng là người Ba Lan. Tôi làm trợ lý cá nhân cho giám đốc tại một công ty dược phẩm ở Krakow.',
        time: '0:52',
        keyVocab: [
          { word: 'personal assistant', ipa: '/ˌpɜː.sən.əl əˈsɪs.tənt/', vi: 'trợ lý riêng / thư ký' },
          { word: 'pharmaceuticals company', ipa: '/ˌfɑː.məˈsjuː.tɪ.kəlz ˈkʌm.pə.ni/', vi: 'công ty dược phẩm' }
        ]
      }
    ],
    questions: [
      {
        id: 1,
        question: 'Antonio giữ chức vụ gì tại công ty Marcegaglia?',
        options: ['Civil engineer', 'Managing Director', 'Sales representative'],
        correctIndex: 1,
        explanation: 'Antonio nói: "I\'m the Managing Director of Marcegaglia."'
      },
      {
        id: 2,
        question: 'Công ty Ferrovial của Sofia hoạt động trong lĩnh vực nào?',
        options: ['Construction (Xây dựng)', 'Chemicals (Hóa chất)', 'Pharmaceuticals (Dược phẩm)'],
        correctIndex: 0,
        explanation: 'Sofia nói: "Ferrovial, a large construction company in Madrid."'
      },
      {
        id: 3,
        question: 'Elzbieta làm việc tại thành phố nào của Ba Lan?',
        options: ['Warsaw', 'Milan', 'Krakow'],
        correctIndex: 2,
        explanation: 'Elzbieta nói: "at a pharmaceuticals company in Krakow."'
      }
    ],
    vocabHighlights: [
      { word: 'Managing Director', ipa: '/ˈmæn.ɪ.dʒɪŋ daɪˈrek.tər/', meaning: 'Tổng giám đốc điều hành' },
      { word: 'civil engineer', ipa: '/ˌsɪv.əl en.dʒɪˈnɪər/', meaning: 'Kỹ sư xây dựng' },
      { word: 'sales representative', ipa: '/seɪlz ˌrep.rɪˈzen.tə.tɪv/', meaning: 'Đại diện kinh doanh' },
      { word: 'personal assistant (PA)', ipa: '/ˌpɜː.sən.əl əˈsɪs.tənt/', meaning: 'Trợ lý cá nhân' }
    ]
  },
  {
    id: 'track-1-2-stress',
    title: 'Textbook Track 1.2 • Page 7: Word Stress in Countries & Nationalities',
    subtitle: 'Luyện nghe sự chuyển dịch trọng âm giữa Quốc gia và Quốc tịch',
    trackCode: 'Track 1.2',
    category: 'textbook-audio',
    description: 'Bài nghe trọng âm trang 7: Nghe và phân biệt vị trí nhấn trọng âm giữa tên nước và quốc tịch (ví dụ: PO-land vs PO-lish; I-ta-ly vs I-TA-lian; Ja-PAN vs Ja-pa-NESE).',
    duration: '0:50',
    fullAudioText: `Number one: Poland. Polish.
Number two: Italy. Italian.
Number three: Brazil. Brazilian.
Number four: Japan. Japanese.
Number five: Spain. Spanish.
Number six: Germany. German.
Number seven: Russia. Russian.
Number eight: France. French.`,
    transcript: [
      {
        id: 1,
        speaker: 'Audio',
        en: 'Poland [PO-land] — Polish [PO-lish]. Stress is on the first syllable for both.',
        vi: 'Ba Lan (PO-land) — Người Ba Lan (PO-lish). Trọng âm đều rơi vào âm tiết đầu.',
        keyVocab: [{ word: 'Poland / Polish', ipa: '/ˈpəʊ.lənd/ • /ˈpɒl.ɪʃ/', vi: 'Ba Lan / người Ba Lan' }]
      },
      {
        id: 2,
        speaker: 'Audio',
        en: 'Italy [I-ta-ly] — Italian [i-TAL-ian]. Notice the stress shifts to the second syllable in Italian!',
        vi: 'Nước Ý (I-ta-ly nhấn âm 1) — Người Ý (i-TAL-ian nhấn âm 2). Trọng âm dịch chuyển!',
        keyVocab: [{ word: 'Italy / Italian', ipa: '/ˈɪt.əl.i/ • /ɪˈtæl.jən/', vi: 'Ý / người Ý' }]
      },
      {
        id: 3,
        speaker: 'Audio',
        en: 'Brazil [bra-ZIL] — Brazilian [bra-ZIL-ian]. Stress stays on the syllable with "ZIL".',
        vi: 'Brazil (bra-ZIL) — Người Brazil (bra-ZIL-ian). Nhấn vào âm ZIL.',
        keyVocab: [{ word: 'Brazil / Brazilian', ipa: '/brəˈzɪl/ • /brəˈzɪl.jən/', vi: 'Brazil / người Brazil' }]
      },
      {
        id: 4,
        speaker: 'Audio',
        en: 'Japan [ja-PAN] — Japanese [ja-pa-NESE]. The ending -ESE always takes the primary stress!',
        vi: 'Nhật Bản (ja-PAN nhấn âm 2) — Người Nhật (ja-pa-NESE nhấn vào đuôi NESE)!',
        keyVocab: [{ word: 'Japan / Japanese', ipa: '/dʒəˈpæn/ • /ˌdʒæp.ənˈiːz/', vi: 'Nhật Bản / người Nhật' }]
      },
      {
        id: 5,
        speaker: 'Audio',
        en: 'Spain [Spain] — Spanish [SPAN-ish]. Germany [GER-ma-ny] — German [GER-man].',
        vi: 'Tây Ban Nha — Người TBN. Nước Đức — Người Đức.',
        keyVocab: [{ word: 'Spain / Spanish', ipa: '/speɪn/ • /ˈspæn.ɪʃ/', vi: 'Tây Ban Nha' }]
      }
    ],
    questions: [
      {
        id: 1,
        question: 'Từ nào có trọng âm rơi vào âm tiết THỨ HAI?',
        options: ['Italy', 'Italian', 'Poland'],
        correctIndex: 1,
        explanation: 'Italian phát âm là /ɪˈtæl.jən/ với trọng âm rơi vào âm thứ hai (-tal-).'
      },
      {
        id: 2,
        question: 'Các từ có đuôi "-ese" như Japanese, Chinese có quy tắc trọng âm gì?',
        options: ['Nhấn vào âm đầu tiên', 'Nhấn trực tiếp vào đuôi "-ese"', 'Không có trọng âm'],
        correctIndex: 1,
        explanation: 'Đuôi "-ese" luôn nhận trọng âm chính (/ˌdʒæp.ənˈiːz/).'
      }
    ],
    vocabHighlights: [
      { word: 'Italy -> Italian', ipa: '/ˈɪt.əl.i/ -> /ɪˈtæl.jən/', meaning: 'Chuyển trọng âm từ âm 1 sang âm 2' },
      { word: 'Japan -> Japanese', ipa: '/dʒəˈpæn/ -> /ˌdʒæp.ənˈiːz/', meaning: 'Trọng âm rơi vào vần cuối -ese' }
    ]
  },
  {
    id: 'track-1-3-marcegaglia',
    title: 'Textbook Track 1.3 • Page 8: Marcegaglia Company Profile',
    subtitle: 'Bài nghe phỏng vấn về tập đoàn Marcegaglia & Động từ TO BE',
    trackCode: 'Track 1.3',
    category: 'textbook-audio',
    description: 'Phỏng vấn chuẩn trang 8 giáo trình: Các câu hỏi và trả lời ngắn với TO BE (Is it...? Yes, it is / No, it isn\'t; Are they...? Yes, they are / No, they aren\'t).',
    duration: '1:15',
    fullAudioText: `Interviewer: Is Marcegaglia a family company?
Spokesperson: Yes, it is. Antonio and Emma are the CEOs. They are brother and sister.
Interviewer: And is their company only in Italy?
Spokesperson: No, it isn't. It's an Italian company, but they're in countries all over the world.
Interviewer: Are its customers only in Italy?
Spokesperson: No, its customers aren't only Italian. They're all over the world.
Interviewer: What are its main products?
Spokesperson: Its main products are steel pipes. It's a very successful business.`,
    transcript: [
      {
        id: 1,
        speaker: 'Interviewer',
        en: 'Is Marcegaglia a family company?',
        vi: 'Marcegaglia có phải là một công ty gia đình không?',
        time: '0:05',
        keyVocab: [{ word: 'family company', ipa: '/ˈfæm.əl.i ˈkʌm.pə.ni/', vi: 'công ty gia đình' }]
      },
      {
        id: 2,
        speaker: 'Spokesperson',
        en: 'Yes, it is. Antonio and Emma are the CEOs. They are brother and sister.',
        vi: 'Đúng vậy. Antonio và Emma là các Tổng giám đốc điều hành. Họ là hai anh em ruột.',
        time: '0:15',
        keyVocab: [{ word: 'CEOs', ipa: '/ˌsiː.iːˈəʊz/', vi: 'Tổng giám đốc điều hành' }]
      },
      {
        id: 3,
        speaker: 'Interviewer',
        en: 'And is their company only in Italy?',
        vi: 'Và công ty của họ chỉ có ở Ý thôi sao?',
        time: '0:25',
        keyVocab: [{ word: 'only in Italy', ipa: '/ˈəʊn.li ɪn ˈɪt.əl.i/', vi: 'chỉ ở nước Ý' }]
      },
      {
        id: 4,
        speaker: 'Spokesperson',
        en: "No, it isn't. It's an Italian company, but they're in countries all over the world. Its customers aren't only Italian.",
        vi: 'Không. Đó là một công ty Ý, nhưng họ có mặt ở các quốc gia trên toàn thế giới. Khách hàng của công ty không chỉ là người Ý.',
        time: '0:38',
        keyVocab: [{ word: 'all over the world', ipa: '/ɔːl ˈəʊ.vər ðə wɜːld/', vi: 'khắp nơi trên thế giới' }]
      },
      {
        id: 5,
        speaker: 'Interviewer',
        en: 'What are its main products?',
        vi: 'Sản phẩm chính của nó là gì?',
        time: '0:50',
        keyVocab: [{ word: 'main products', ipa: '/meɪn ˈprɒd.ʌkts/', vi: 'sản phẩm chính' }]
      },
      {
        id: 6,
        speaker: 'Spokesperson',
        en: "Its main products are steel pipes. It's a very successful business.",
        vi: 'Sản phẩm chính của công ty là các loại ống thép. Đó là một doanh nghiệp rất thành công.',
        time: '0:58',
        keyVocab: [{ word: 'steel pipes', ipa: '/stiːl paɪps/', vi: 'ống thép' }]
      }
    ],
    questions: [
      {
        id: 1,
        question: 'Câu trả lời ngắn đúng cho câu "Is Marcegaglia a family company?" là:',
        options: ['Yes, it is.', "Yes, it's.", 'Yes, they are.'],
        correctIndex: 0,
        explanation: 'Quy tắc vàng: Trong câu trả lời ngắn khẳng định KHÔNG ĐƯỢC viết tắt (phải là "Yes, it is", không nói "Yes, it\'s").'
      },
      {
        id: 2,
        question: 'Khách hàng của Marcegaglia đến từ đâu?',
        options: ['Only in Italy', 'Only in Europe', 'All over the world'],
        correctIndex: 2,
        explanation: 'Spokesperson khẳng định: "They\'re all over the world."'
      }
    ],
    vocabHighlights: [
      { word: 'steel pipes', ipa: '/stiːl paɪps/', meaning: 'Ống thép xây dựng & công nghiệp' },
      { word: 'brother and sister', ipa: '/ˈbrʌð.ər ənd ˈsɪs.tər/', meaning: 'Anh em ruột' },
      { word: 'its main products', ipa: '/ɪts meɪn ˈprɒd.ʌkts/', meaning: 'Các sản phẩm chính của nó (tính từ sở hữu its)' }
    ]
  },
  {
    id: 'track-1-4-sofia',
    title: 'Textbook Track 1.4 • Page 9: Possessive Adjectives Interview',
    subtitle: 'Phỏng vấn Sofia Aguilera về dự án và đồng nghiệp tại Ferrovial',
    trackCode: 'Track 1.4',
    category: 'textbook-audio',
    description: 'Bài nghe trang 9: Nghe và điền các tính từ sở hữu (my, your, his, her, its, our, their) vào đoạn phỏng vấn Sofia Aguilera.',
    duration: '1:00',
    fullAudioText: `Interviewer: What is your job, Sofia?
Sofia: I'm a civil engineer. My company is Ferrovial.
Interviewer: Where is its head office?
Sofia: Its head office is in Madrid, Spain.
Interviewer: And who is your project director?
Sofia: His name is Carlos. Our team works on high-speed train bridges.
Interviewer: Are your clients only in Spain?
Sofia: No, their projects are across Europe. Her colleagues in design are French and Spanish.`,
    transcript: [
      {
        id: 1,
        speaker: 'Interviewer',
        en: 'What is your job, Sofia?',
        vi: 'Công việc của bạn là gì, Sofia?',
        time: '0:05',
        keyVocab: [{ word: 'your job', ipa: '/jɔːr dʒɒb/', vi: 'công việc của bạn' }]
      },
      {
        id: 2,
        speaker: 'Sofia',
        en: "I'm a civil engineer. My company is Ferrovial.",
        vi: 'Tôi là kỹ sư xây dựng. Công ty của tôi là Ferrovial.',
        time: '0:15',
        keyVocab: [{ word: 'My company', ipa: '/maɪ ˈkʌm.pə.ni/', vi: 'Công ty của tôi' }]
      },
      {
        id: 3,
        speaker: 'Interviewer',
        en: 'Where is its head office?',
        vi: 'Trụ sở chính của nó ở đâu?',
        time: '0:25',
        keyVocab: [{ word: 'its head office', ipa: '/ɪts ˌhed ˈɒf.ɪs/', vi: 'trụ sở chính của nó' }]
      },
      {
        id: 4,
        speaker: 'Sofia',
        en: "Its head office is in Madrid, Spain. Our team works on high-speed train bridges.",
        vi: 'Trụ sở chính của nó ở Madrid, Tây Ban Nha. Đội ngũ của chúng tôi làm việc về cầu tàu cao tốc.',
        time: '0:35',
        keyVocab: [{ word: 'Our team', ipa: '/aʊər tiːm/', vi: 'Đội ngũ của chúng tôi' }]
      },
      {
        id: 5,
        speaker: 'Interviewer',
        en: 'Are your clients only in Spain?',
        vi: 'Khách hàng của bạn chỉ ở Tây Ban Nha thôi sao?',
        time: '0:45',
        keyVocab: [{ word: 'your clients', ipa: '/jɔːr ˈklaɪ.ənts/', vi: 'khách hàng của bạn' }]
      },
      {
        id: 6,
        speaker: 'Sofia',
        en: 'No, their projects are across Europe.',
        vi: 'Không, các dự án của họ nằm khắp châu Âu.',
        time: '0:52',
        keyVocab: [{ word: 'their projects', ipa: '/ðeər ˈprɒdʒ.ekts/', vi: 'các dự án của họ' }]
      }
    ],
    questions: [
      {
        id: 1,
        question: 'Tính từ sở hữu dùng cho "company" (vật / tổ chức số ít) là:',
        options: ['her', 'its', 'their'],
        correctIndex: 1,
        explanation: '"Its" là tính từ sở hữu thay thế cho danh từ chỉ vật hoặc công ty số ít (Its head office).'
      },
      {
        id: 2,
        question: 'Khi nói "của chúng tôi", ta dùng tính từ sở hữu nào?',
        options: ['our', 'your', 'their'],
        correctIndex: 0,
        explanation: '"Our team" có nghĩa là đội ngũ của chúng tôi.'
      }
    ],
    vocabHighlights: [
      { word: 'its head office', ipa: '/ɪts ˌhed ˈɒf.ɪs/', meaning: 'Trụ sở chính của nó (không có dấu nháy\')' },
      { word: 'our team', ipa: '/aʊər tiːm/', meaning: 'Đội ngũ của chúng tôi' },
      { word: 'their projects', ipa: '/ðeər ˈprɒdʒ.ekts/', meaning: 'Các dự án của họ' }
    ]
  },
  {
    id: 'track-1-5-spelling',
    title: 'Textbook Track 1.5 • Page 9: Practically Speaking - How to spell',
    subtitle: 'Hội thoại hỏi và đánh vần tên trong công việc & Bảng chữ cái',
    trackCode: 'Track 1.5',
    category: 'textbook-audio',
    description: 'Bài nghe trang 9: Cách hỏi và đánh vần họ tên khách ghé thăm tại quầy lễ tân ("Could you spell your surname, please?").',
    duration: '0:45',
    fullAudioText: `Receptionist: Good afternoon. Could I have your surname, please?
Visitor: Yes, of course. It's Gorski.
Receptionist: How do you spell that?
Visitor: G - O - R - S - K - I.
Receptionist: Thank you. And your first name?
Visitor: Alek. That's A - L - E - K.
Receptionist: Thank you, Mr Gorski. Please take a seat.`,
    transcript: [
      {
        id: 1,
        speaker: 'Receptionist',
        en: 'Good afternoon. Could I have your surname, please?',
        vi: 'Xin chào buổi chiều. Xin vui lòng cho tôi biết họ của bạn?',
        keyVocab: [{ word: 'surname', ipa: '/ˈsɜː.neɪm/', vi: 'họ' }]
      },
      {
        id: 2,
        speaker: 'Visitor',
        en: "Yes, of course. It's Gorski.",
        vi: 'Vâng, tất nhiên rồi. Họ của tôi là Gorski.',
        keyVocab: []
      },
      {
        id: 3,
        speaker: 'Receptionist',
        en: 'How do you spell that?',
        vi: 'Bạn đánh vần từ đó như thế nào?',
        keyVocab: [{ word: 'How do you spell that?', ipa: '/haʊ duː juː spel ðæt/', vi: 'Đánh vần từ đó thế nào?' }]
      },
      {
        id: 4,
        speaker: 'Visitor',
        en: 'G - O - R - S - K - I.',
        vi: 'G - O - R - S - K - I.',
        keyVocab: []
      },
      {
        id: 5,
        speaker: 'Receptionist',
        en: 'Thank you. And your first name?',
        vi: 'Cảm ơn bạn. Còn tên của bạn?',
        keyVocab: [{ word: 'first name', ipa: '/ˈfɜːst ˌneɪm/', vi: 'tên (gọi)' }]
      },
      {
        id: 6,
        speaker: 'Visitor',
        en: "Alek. That's A - L - E - K.",
        vi: 'Alek. Đánh vần là A - L - E - K.',
        keyVocab: []
      }
    ],
    questions: [
      {
        id: 1,
        question: 'Câu nào dùng để hỏi cách đánh vần một từ?',
        options: ['What does that mean?', 'How do you spell that?', 'Where do you spell?'],
        correctIndex: 1,
        explanation: 'Cụm từ chuẩn quốc tế trong sách là "How do you spell that?"'
      }
    ],
    vocabHighlights: [
      { word: 'Could I have your surname?', ipa: '/kʊd aɪ hæv jɔːr ˈsɜː.neɪm/', meaning: 'Xin vui lòng cho tôi biết họ của bạn?' },
      { word: 'How do you spell that?', ipa: '/haʊ duː juː spel ðæt/', meaning: 'Bạn đánh vần từ đó thế nào?' }
    ]
  },
  {
    id: 'track-1-6-reception',
    title: 'Textbook Track 1.6 • Page 10: Business Communication at Reception',
    subtitle: 'Hội thoại chào đón đối tác và giới thiệu bên thứ 3 tại quầy lễ tân',
    trackCode: 'Track 1.6',
    category: 'textbook-audio',
    description: 'Bài nghe trang 10: Cuộc gặp gỡ trang trọng giữa Alek Gorski, trợ lý Elzbieta Wozniak, trợ lý Eva và bà Maria Da Rocha.',
    duration: '1:00',
    fullAudioText: `Alek: Hello. My name is Alek Gorski.
Eva: How do you do, Mr Gorski? I'm Eva, Maria Da Rocha's assistant.
Alek: Pleased to meet you, Eva. This is my assistant, Elzbieta Wozniak.
Eva: Nice to meet you, Elzbieta.
Elzbieta: Nice to meet you, too.
Maria Da Rocha: Alek! It's good to see you again. How are you?
Alek: And you, Maria! I'm fine, thanks. Do you know Elzbieta?
Maria Da Rocha: No. How do you do, Elzbieta?
Elzbieta: How do you do?`,
    transcript: [
      {
        id: 1,
        speaker: 'Alek Gorski',
        en: 'Hello. My name is Alek Gorski.',
        vi: 'Xin chào. Tên tôi là Alek Gorski.',
        keyVocab: []
      },
      {
        id: 2,
        speaker: 'Eva (Assistant)',
        en: "How do you do, Mr Gorski? I'm Eva, Maria Da Rocha's assistant.",
        vi: 'Kính chào ông Gorski. Tôi là Eva, trợ lý của bà Maria Da Rocha.',
        keyVocab: [{ word: "Maria Da Rocha's assistant", ipa: '/məˈriː.əz əˈsɪs.tənt/', vi: 'trợ lý của bà Maria' }]
      },
      {
        id: 3,
        speaker: 'Alek Gorski',
        en: 'Pleased to meet you, Eva. This is my assistant, Elzbieta Wozniak.',
        vi: 'Rất hân hạnh được gặp cô, Eva. Đây là trợ lý của tôi, Elzbieta Wozniak.',
        keyVocab: [{ word: 'This is my assistant', ipa: '/ðɪs ɪz maɪ əˈsɪs.tənt/', vi: 'Đây là trợ lý của tôi' }]
      },
      {
        id: 4,
        speaker: 'Maria Da Rocha',
        en: "Alek! It's good to see you again. How are you?",
        vi: 'Alek! Thật vui được gặp lại anh. Anh khỏe không?',
        keyVocab: [{ word: 'good to see you again', ipa: '/ɡʊd tə siː juː əˈɡen/', vi: 'rất vui được gặp lại bạn' }]
      },
      {
        id: 5,
        speaker: 'Alek Gorski',
        en: "And you, Maria! I'm fine, thanks. Do you know Elzbieta?",
        vi: 'Tôi cũng vậy, Maria! Tôi khỏe, cảm ơn. Chị đã biết Elzbieta chưa?',
        keyVocab: [{ word: 'Do you know...?', ipa: '/duː juː nəʊ/', vi: 'Bạn có biết... chưa?' }]
      },
      {
        id: 6,
        speaker: 'Maria Da Rocha',
        en: 'No. How do you do, Elzbieta?',
        vi: 'Chưa. Chào cô Elzbieta.',
        keyVocab: [{ word: 'How do you do?', ipa: '/haʊ duː juː duː/', vi: 'Chào trang trọng lần đầu gặp' }]
      },
      {
        id: 7,
        speaker: 'Elzbieta',
        en: 'How do you do?',
        vi: 'Kính chào bà.',
        keyVocab: []
      }
    ],
    questions: [
      {
        id: 1,
        question: 'Khi ai đó chào bạn "How do you do?", câu đáp lại chuẩn trang trọng là:',
        options: ["I'm fine, thank you.", 'How do you do?', 'Yes, I do.'],
        correctIndex: 1,
        explanation: 'Trong tiếng Anh công sở chuẩn Oxford, đáp lại "How do you do?" chính là "How do you do?".'
      }
    ],
    vocabHighlights: [
      { word: 'Pleased to meet you', ipa: '/pliːzd tə miːt juː/', meaning: 'Rất hân hạnh được gặp bạn' },
      { word: 'This is my assistant...', ipa: '/ðɪs ɪz maɪ əˈsɪs.tənt/', meaning: 'Mẫu câu chuẩn để giới thiệu người thứ ba' }
    ]
  },
  {
    id: 'track-1-7-goodbye',
    title: 'Textbook Track 1.7 • Page 10: Saying Goodbye to Visitors',
    subtitle: 'Mẫu câu tiễn khách và chúc thượng lộ bình an',
    trackCode: 'Track 1.7',
    category: 'textbook-audio',
    description: 'Bài nghe trang 10: Các đoạn hội thoại khi kết thúc buổi làm việc và tiễn đối tác ra về.',
    duration: '0:40',
    fullAudioText: `Maria: Well, thank you very much for coming, Alek.
Alek: Thank you for having us, Maria. It was a very productive meeting.
Maria: Have a good journey back to Warsaw!
Alek: Thanks. See you soon in Poland!
Eva: Goodbye, Elzbieta. Nice meeting you.
Elzbieta: Nice meeting you too, Eva. Goodbye!`,
    transcript: [
      {
        id: 1,
        speaker: 'Maria',
        en: 'Well, thank you very much for coming, Alek.',
        vi: 'Cảm ơn anh rất nhiều vì đã đến, Alek.',
        keyVocab: [{ word: 'thank you for coming', ipa: '/θæŋk juː fər ˈkʌm.ɪŋ/', vi: 'cảm ơn vì đã đến' }]
      },
      {
        id: 2,
        speaker: 'Alek',
        en: 'Thank you for having us, Maria. It was a very productive meeting.',
        vi: 'Cảm ơn chị đã đón tiếp chúng tôi, Maria. Đó là một cuộc họp rất hiệu quả.',
        keyVocab: [{ word: 'productive meeting', ipa: '/prəˈdʌk.tɪv ˈmiː.tɪŋ/', vi: 'cuộc họp hiệu quả' }]
      },
      {
        id: 3,
        speaker: 'Maria',
        en: 'Have a good journey back to Warsaw!',
        vi: 'Chúc anh có chuyến đi trở về Warsaw thượng lộ bình an!',
        keyVocab: [{ word: 'Have a good journey', ipa: '/hæv ə ɡʊd ˈdʒɜː.ni/', vi: 'chúc thượng lộ bình an' }]
      },
      {
        id: 4,
        speaker: 'Alek',
        en: 'Thanks. See you soon in Poland!',
        vi: 'Cảm ơn chị. Hẹn sớm gặp lại chị ở Ba Lan!',
        keyVocab: [{ word: 'See you soon', ipa: '/siː juː suːn/', vi: 'hẹn sớm gặp lại' }]
      },
      {
        id: 5,
        speaker: 'Eva',
        en: 'Goodbye, Elzbieta. Nice meeting you.',
        vi: 'Tạm biệt Elzbieta. Rất vui được gặp cô.',
        keyVocab: [{ word: 'Nice meeting you', ipa: '/naɪs ˈmiː.tɪŋ juː/', vi: 'rất vui vì đã gặp bạn' }]
      }
    ],
    questions: [
      {
        id: 1,
        question: 'Khi tiễn một vị khách sắp lên máy bay hoặc tàu về nước, câu chúc phù hợp nhất là:',
        options: ['Have a good journey!', 'How are you?', 'Do you know Warsaw?'],
        correctIndex: 0,
        explanation: '"Have a good journey!" là lời chúc thượng lộ bình an.'
      }
    ],
    vocabHighlights: [
      { word: 'Have a good journey', ipa: '/hæv ə ɡʊd ˈdʒɜː.ni/', meaning: 'Chúc chuyến đi bình an' },
      { word: 'Nice meeting you', ipa: '/naɪs ˈmiː.tɪŋ juː/', meaning: 'Rất vui vì đã được gặp bạn (khi chia tay)' }
    ]
  },

  // ==========================================
  // 2. VIDEO TRACKS (Viewpoint 1: Places of Work)
  // ==========================================
  {
    id: 'video-vp1-01',
    title: "Viewpoint 1 • Video 01: Places of Work (Full Interview)",
    subtitle: "What's your job? • What type of company? • What type of place?",
    trackCode: 'Video 01',
    category: 'viewpoint-video',
    videoUrl: '',
    description: 'Video phỏng vấn thực tế 5 nhân vật: Nicole (thực tập sinh xuất bản), Barry (trưởng sản xuất quảng cáo báo chí), Caroline (biên tập viên xuất bản toàn cầu), Henry (chuyên gia sách cổ tại Oxford) và Mark (giáo viên trung học tại Hồng Kông). Trả lời 3 câu hỏi chính.',
    duration: '2:58',
    fullAudioText: `Question 1: What's your job?
Nicole: Right now, I'm an intern. I'm working at a large publishing company for ten weeks.
Barry: I'm head of advertising production.
Caroline: My job is a production editor.
Henry: I work as a rare book specialist at Blackwell's bookshop in Oxford.
Mark: My job is a teacher. So I'm a secondary school teacher in a town called Stanley in Hong Kong. Chemistry's my main topic, a little bit of physics, a little bit of biology sometimes comes in.

Question 2: What type of company do you work for?
Nicole: It's a publishing company, so they make textbooks, and also books that people read in their free time.
Barry: It's a large UK newspaper organisation.
Caroline: I work for a large global publishing company.
Henry: It's a bookseller.
Mark: So it's a school, it's an interesting school in Hong Kong. It's a school that local Hong Kongers go to, but it's based on an English public school, so it's a very sort of weird and quirky, little bit of Harry Potter combined with a lot of China.

Question 3: What type of place do you work in?
Nicole: My workplace is an office, and it's an open-plan office. So there are many people in one room sharing desks. Sometimes it's noisy, but I like to talk to my co-workers.
Barry: It's a very nice environment. It's an open-plan office, and very peaceful, very quiet, and very technical, able with computers and printers and everything we need to do our job.
Caroline: I work in a busy open-plan office in the centre of town, and there are about 40 other employees in my department. It's quite a lot of chatter, lots of phones ringing.
Henry: So I work within a shop, but at a desk, so it sort of has a slightly office-y feel, but it's nice to be surrounded by books.
Mark: It's quite a beautiful campus right by the ocean looking over the South China Sea on a hill. So very, very pretty campus. School is quite old in Hong Kong terms, so over a hundred years old and good history, good traditions, and my colleagues are fun to work with.`,
    transcript: [
      // --- Phần 1: What's your job? ---
      {
        id: 1,
        speaker: 'Nicole',
        en: "Right now, I'm an intern. I'm working at a large publishing company for ten weeks.",
        vi: 'Hiện tại tôi là một thực tập sinh. Tôi đang làm việc tại một công ty xuất bản lớn trong 10 tuần.',
        time: '0:12',
        keyVocab: [
          { word: 'intern', ipa: '/ˈɪn.tɜːn/', vi: 'thực tập sinh' },
          { word: 'publishing company', ipa: '/ˈpʌb.lɪ.ʃɪŋ ˈkʌm.pə.ni/', vi: 'công ty xuất bản' }
        ]
      },
      {
        id: 2,
        speaker: 'Barry',
        en: "I'm head of advertising production.",
        vi: 'Tôi là trưởng bộ phận sản xuất quảng cáo.',
        time: '0:20',
        keyVocab: [
          { word: 'head of advertising production', ipa: '/hed əv ˈæd.və.taɪ.zɪŋ prəˈdʌk.ʃən/', vi: 'trưởng bộ phận sản xuất quảng cáo' }
        ]
      },
      {
        id: 3,
        speaker: 'Caroline',
        en: 'My job is a production editor.',
        vi: 'Công việc của tôi là biên tập viên sản xuất.',
        time: '0:23',
        keyVocab: [
          { word: 'production editor', ipa: '/prəˈdʌk.ʃən ˈed.ɪ.tər/', vi: 'biên tập viên sản xuất' }
        ]
      },
      {
        id: 4,
        speaker: 'Henry',
        en: "I work as a rare book specialist at Blackwell's bookshop in Oxford.",
        vi: "Tôi là chuyên gia sách hiếm tại hiệu sách Blackwell's ở Oxford.",
        time: '0:25',
        keyVocab: [
          { word: 'rare book specialist', ipa: '/reər bʊk ˈspeʃ.əl.ɪst/', vi: 'chuyên gia sách cổ / quý hiếm' }
        ]
      },
      {
        id: 5,
        speaker: 'Mark',
        en: "My job is a teacher. So I'm a secondary school teacher in a town called Stanley in Hong Kong. Chemistry's my main topic, a little bit of physics, a little bit of biology sometimes comes in.",
        vi: 'Công việc của tôi là giáo viên. Tôi là giáo viên trung học cơ sở tại thị trấn Stanley ở Hồng Kông. Hóa học là môn chính của tôi, đôi khi có thêm một chút vật lý và sinh học.',
        time: '0:30',
        keyVocab: [
          { word: 'secondary school teacher', ipa: '/ˈsek.ən.dri skuːl ˈtiː.tʃər/', vi: 'giáo viên cấp 2 / trung học' },
          { word: 'chemistry', ipa: '/ˈkem.ɪ.stri/', vi: 'hóa học' }
        ]
      },

      // --- Phần 2: What type of company do you work for? ---
      {
        id: 6,
        speaker: 'Nicole',
        en: 'It’s a publishing company, so they make textbooks, and also books that people read in their free time.',
        vi: 'Đó là một công ty xuất bản, họ làm sách giáo khoa và cả những cuốn sách mọi người đọc lúc rảnh rỗi.',
        time: '0:52',
        keyVocab: [
          { word: 'textbooks', ipa: '/ˈtekst.bʊks/', vi: 'sách giáo khoa' },
          { word: 'free time', ipa: '/friː taɪm/', vi: 'thời gian rảnh rỗi' }
        ]
      },
      {
        id: 7,
        speaker: 'Barry',
        en: "It's a large UK newspaper organisation.",
        vi: 'Đó là một tòa soạn / tổ chức báo chí lớn của Vương quốc Anh.',
        time: '1:01',
        keyVocab: [
          { word: 'newspaper organisation', ipa: '/ˈnjuːzˌpeɪ.pər ˌɔː.ɡən.aɪˈzeɪ.ʃən/', vi: 'tổ chức / tòa soạn báo' }
        ]
      },
      {
        id: 8,
        speaker: 'Caroline',
        en: 'I work for a large global publishing company.',
        vi: 'Tôi làm việc cho một tập đoàn xuất bản toàn cầu lớn.',
        time: '1:05',
        keyVocab: [
          { word: 'global', ipa: '/ˈɡləʊ.bəl/', vi: 'toàn cầu' }
        ]
      },
      {
        id: 9,
        speaker: 'Henry',
        en: "It's a bookseller.",
        vi: 'Đó là một đơn vị kinh doanh / phân phối sách.',
        time: '1:09',
        keyVocab: [
          { word: 'bookseller', ipa: '/ˈbʊkˌsel.ər/', vi: 'người bán sách / hiệu sách' }
        ]
      },
      {
        id: 10,
        speaker: 'Mark',
        en: "So it's a school, it's an interesting school in Hong Kong. It's a school that local Hong Kongers go to, but it's based on an English public school, so it's a very sort of weird and quirky, little bit of Harry Potter combined with a lot of China.",
        vi: 'Đó là một ngôi trường rất thú vị ở Hồng Kông. Học sinh địa phương học ở đây, nhưng trường được xây dựng theo mô hình trường công lập Anh, khá độc đáo, pha trộn một chút phong cách Harry Potter với văn hóa Trung Hoa.',
        time: '1:12',
        keyVocab: [
          { word: 'quirky', ipa: '/ˈkwɜː.ki/', vi: 'kỳ quặc, độc đáo thú vị' },
          { word: 'combined with', ipa: '/kəmˈbaɪnd wɪð/', vi: 'kết hợp với' }
        ]
      },

      // --- Phần 3: What type of place do you work in? ---
      {
        id: 11,
        speaker: 'Nicole',
        en: "My workplace is an office, and it's an open-plan office. So there are many people in one room sharing desks. Sometimes it's noisy, but I like to talk to my co-workers.",
        vi: 'Nơi làm việc của tôi là văn phòng mở. Rất nhiều người trong một phòng ngồi chung bàn. Đôi khi ồn ào nhưng tôi thích trò chuyện cùng các đồng nghiệp.',
        time: '1:34',
        keyVocab: [
          { word: 'open-plan office', ipa: '/ˌəʊ.pən ˈplæn ˈɒf.ɪs/', vi: 'văn phòng mở (không vách ngăn)' },
          { word: 'co-workers', ipa: '/ˈkəʊˌwɜː.kərz/', vi: 'các đồng nghiệp' }
        ]
      },
      {
        id: 12,
        speaker: 'Barry',
        en: "It's a very nice environment. It's an open-plan office, and very peaceful, very quiet, and very technical, able with computers and printers and everything we need to do our job.",
        vi: 'Đó là một môi trường rất tuyệt vời. Một văn phòng mở rất thanh bình, rất yên tĩnh và đầy đủ tiện nghi kỹ thuật với máy tính, máy in và mọi thứ chúng tôi cần để làm việc.',
        time: '1:52',
        keyVocab: [
          { word: 'environment', ipa: '/ɪnˈvaɪ.rən.mənt/', vi: 'môi trường' },
          { word: 'peaceful', ipa: '/ˈpiːs.fəl/', vi: 'yên bình' }
        ]
      },
      {
        id: 13,
        speaker: 'Caroline',
        en: 'I work in a busy open-plan office in the centre of town, and there are about 40 other employees in my department. It’s quite a lot of chatter, lots of phones ringing.',
        vi: 'Tôi làm việc trong một văn phòng mở bận rộn ở trung tâm thị trấn, có khoảng 40 nhân viên khác trong phòng tôi. Có khá nhiều tiếng trò chuyện và tiếng chuông điện thoại reo.',
        time: '2:04',
        keyVocab: [
          { word: 'employees', ipa: '/ɪmˈplɔɪ.iːz/', vi: 'nhân viên' },
          { word: 'chatter', ipa: '/ˈtʃæt.ər/', vi: 'tiếng trò chuyện rôm rả' }
        ]
      },
      {
        id: 14,
        speaker: 'Henry',
        en: "So I work within a shop, but at a desk, so it sort of has a slightly office-y feel, but it's nice to be surrounded by books.",
        vi: 'Tôi làm việc bên trong hiệu sách nhưng ngồi tại bàn, nên có cảm giác hơi giống văn phòng một chút, và thật tuyệt khi được bao quanh bởi sách.',
        time: '2:19',
        keyVocab: [
          { word: 'surrounded by', ipa: '/səˈraʊn.dɪd baɪ/', vi: 'được bao quanh bởi' }
        ]
      },
      {
        id: 15,
        speaker: 'Mark',
        en: "It's quite a beautiful campus right by the ocean looking over the South China Sea on a hill. So very, very pretty campus. School is quite old in Hong Kong terms, so over a hundred years old and good history, good traditions, and my colleagues are fun to work with.",
        vi: 'Đó là một khuôn viên rất đẹp ngay sát biển, nhìn ra Biển Đông trên một sườn đồi. Ngôi trường khá lâu đời theo tiêu chuẩn Hồng Kông, hơn 100 năm tuổi với bề dày lịch sử, truyền thống tốt đẹp, và các đồng nghiệp của tôi rất vui vẻ khi làm việc cùng.',
        time: '2:31',
        keyVocab: [
          { word: 'campus', ipa: '/ˈkæm.pəs/', vi: 'khuôn viên trường' },
          { word: 'colleagues', ipa: '/ˈkɒl.iːɡz/', vi: 'đồng nghiệp' }
        ]
      }
    ],
    questions: [
      {
        id: 1,
        question: 'Barry làm việc tại loại tổ chức nào?',
        options: ['A publishing company', 'A large UK newspaper organisation', 'A rare bookshop'],
        correctIndex: 1,
        explanation: 'Barry nói ở 1:01: "It\'s a large UK newspaper organisation."'
      },
      {
        id: 2,
        question: 'Công việc chính của Caroline là gì?',
        options: ['Production editor', 'Sales manager', 'Civil engineer'],
        correctIndex: 0,
        explanation: 'Caroline nói ở 0:23: "My job is a production editor."'
      },
      {
        id: 3,
        question: 'Khuôn viên trường học của Mark nằm ở vị trí nào?',
        options: ['In the centre of town', 'Right by the ocean looking over the South China Sea on a hill', 'Inside an office building'],
        correctIndex: 1,
        explanation: 'Mark mô tả ở 2:31: "It\'s quite a beautiful campus right by the ocean looking over the South China Sea on a hill."'
      }
    ],
    vocabHighlights: [
      { word: 'publishing company', ipa: '/ˈpʌb.lɪ.ʃɪŋ ˈkʌm.pə.ni/', meaning: 'Công ty xuất bản sách' },
      { word: 'production editor', ipa: '/prəˈdʌk.ʃən ˈed.ɪ.tər/', meaning: 'Biên tập viên sản xuất bản thảo' },
      { word: 'open-plan office', ipa: '/ˌəʊ.pən ˈplæn ˈɒf.ɪs/', meaning: 'Văn phòng mở không vách ngăn' },
      { word: 'intern', ipa: '/ˈɪn.tɜːn/', meaning: 'Thực tập sinh' },
      { word: 'colleagues / co-workers', ipa: '/ˈkɒl.iːɡz / ˈkəʊˌwɜː.kərz/', meaning: 'Đồng nghiệp' }
    ]
  },
  {
    id: 'video-vp1-02',
    title: 'Viewpoint 1 • Video 02: What type of place do you work in?',
    subtitle: 'Văn phòng mở (Open plan office) & Môi trường làm việc thực tế',
    trackCode: 'Video 02',
    category: 'viewpoint-video',
    videoUrl: 'https://www.youtube.com/embed/videoseries?list=PL3y-2Zc2y-s3-W5K_P9_7g_Lw5Mv6D2nN',
    description: 'Các nhân vật chia sẻ về không gian làm việc: Văn phòng mở (Open plan office), chia sẻ bàn làm việc (shared desks), sự yên tĩnh vs tiếng ồn, và khuôn viên trường học.',
    duration: '1:10',
    fullAudioText: `Question: What type of place do you work in?
Nicole: My workplace is an office and it's an open plan office. So there are many people in one room sharing desks. Sometimes it's noisy, but I like to talk to my co-workers.
Barry: It's a very nice environment. It's an open plan office, very peaceful, very quiet, very technical with computers and printers and everything we need to do our job.
Caroline: I work in a busy open plan office in the centre of town, and there are about 40 other employees in my department. It's quite a lot of chatter, lots of phones ringing.
Henry: I work within a shop, but at a desk, so it has a slightly officey feel, but it's nice to be surrounded by books.
Mark: It's quite a beautiful campus right by the ocean looking over the South China Sea on a hill. It's over a hundred years old and colleagues are fun to work with.`,
    transcript: [
      {
        id: 1,
        speaker: 'Nicole',
        en: "My workplace is an office and it's an open plan office. So there are many people in one room sharing desks. Sometimes it's noisy, but I like to talk to my co-workers.",
        vi: 'Nơi làm việc của tôi là văn phòng mở. Rất nhiều người trong một phòng dùng chung bàn. Đôi khi ồn ào nhưng tôi thích trò chuyện với đồng nghiệp.',
        time: '0:15',
        keyVocab: [{ word: 'open plan office', ipa: '/ˌəʊ.pən ˈplæn ˈɒf.ɪs/', vi: 'văn phòng không vách ngăn' }]
      },
      {
        id: 2,
        speaker: 'Barry',
        en: "It's an open plan office, very peaceful, very quiet, and very technical with computers and printers.",
        vi: 'Đó là văn phòng mở, rất thanh bình, rất yên tĩnh và đầy đủ máy tính, máy in.',
        time: '0:35',
        keyVocab: [{ word: 'peaceful', ipa: '/ˈpiːs.fəl/', vi: 'yên bình' }]
      },
      {
        id: 3,
        speaker: 'Caroline',
        en: 'I work in a busy open plan office in the centre of town, and there are about 40 other employees in my department.',
        vi: 'Tôi làm việc trong văn phòng mở bận rộn ở trung tâm thị trấn, có khoảng 40 nhân viên khác trong phòng tôi.',
        time: '0:50',
        keyVocab: [{ word: 'department', ipa: '/dɪˈpɑːt.mənt/', vi: 'phòng ban' }]
      },
      {
        id: 4,
        speaker: 'Mark',
        en: "It's quite a beautiful campus right by the ocean looking over the South China Sea on a hill.",
        vi: 'Đó là khuôn viên rất đẹp ngay cạnh biển nhìn ra Biển Đông trên ngọn đồi.',
        time: '1:05',
        keyVocab: [{ word: 'campus', ipa: '/ˈkæm.pəs/', vi: 'khuôn viên trường' }]
      }
    ],
    questions: [
      {
        id: 1,
        question: 'Cả Nicole, Barry và Caroline đều làm việc tại dạng văn phòng nào?',
        options: ['Home office', 'Open plan office', 'Factory warehouse'],
        correctIndex: 1,
        explanation: 'Cả ba người đều làm việc trong "an open plan office".'
      }
    ],
    vocabHighlights: [
      { word: 'open plan office', ipa: '/ˌəʊ.pən ˈplæn ˈɒf.ɪs/', meaning: 'Văn phòng mở hiện đại' },
      { word: 'co-workers', ipa: '/ˈkəʊˌwɜː.kərz/', meaning: 'Các bạn đồng nghiệp' }
    ]
  },
  {
    id: 'video-vp1-03-05',
    title: 'Viewpoint 1 • Video 03–05: Tom Sutherland Visiting Offices',
    subtitle: 'Nhà thiết kế web tìm văn phòng: Trung tâm thị trấn vs Nhà kho ngoại ô',
    trackCode: 'Video 03–05',
    category: 'viewpoint-video',
    videoUrl: 'https://www.youtube.com/embed/videoseries?list=PL3y-2Zc2y-s3-W5K_P9_7g_Lw5Mv6D2nN',
    description: 'Tom Sutherland là một web designer. Doanh nghiệp của anh ấy đang mở rộng và anh ấy cần thuê văn phòng cho bản thân và nhân viên mới. Anh ấy đi khảo sát 2 địa điểm: Văn phòng 1 (trung tâm thị trấn) và Văn phòng 2 (nhà kho cải tạo ở nông thôn).',
    duration: '2:15',
    fullAudioText: `Narrator: Tom Sutherland is a web designer. He designs websites for companies. At the moment, he works from home.
Tom: My business is getting quite big now. I have a lot of different clients and I can't do the work alone anymore. I have to start employing some staff, so I need an office for me and my staff.
Narrator: Tom has two locations to visit today. The first location is here, an office in the centre of town. In these offices, there are desks, chairs, and phones.
Tom: It's very modern and it's small, but it has everything I need at the moment: two rooms, an office and a meeting room, and all the furniture. But it's near a main road, so there's a lot of noise. And there's no parking.
Narrator: The second location is a barn conversion in the countryside, five kilometres from the centre of town. The barn conversion is very large, but there's no furniture or phone.
Tom: It's really nice. It has space, light, a lot of character, very quiet, a good place to be creative. But there's no furniture, so that would add to the cost. I need to go and think about this before I make a decision.`,
    transcript: [
      {
        id: 1,
        speaker: 'Narrator',
        en: 'Tom Sutherland is a web designer. He designs websites for companies. At the moment, he works from home.',
        vi: 'Tom Sutherland là nhà thiết kế web. Anh ấy thiết kế trang web cho các công ty. Hiện tại, anh làm việc tại nhà.',
        time: '0:12',
        keyVocab: [{ word: 'web designer', ipa: '/web dɪˈzaɪ.nər/', vi: 'thiết kế web' }]
      },
      {
        id: 2,
        speaker: 'Tom Sutherland',
        en: "My business is getting quite big now. I have a lot of different clients and I can't do the work alone anymore. I need an office for me and my staff.",
        vi: 'Doanh nghiệp của tôi đang phát triển khá lớn. Tôi có nhiều khách hàng và không thể làm việc một mình được nữa. Tôi cần văn phòng cho tôi và nhân viên.',
        time: '0:38',
        keyVocab: [{ word: 'clients', ipa: '/ˈklaɪ.ənts/', vi: 'khách hàng' }]
      },
      {
        id: 3,
        speaker: 'Tom (Location 1)',
        en: "Location 1 is in the centre of town. It's very modern with desks, chairs, and phones, but it's near a main road, so there's a lot of noise, and no parking.",
        vi: 'Địa điểm 1 ở trung tâm thị trấn. Rất hiện đại với bàn ghế, điện thoại, nhưng nó gần đường lớn nên ồn ào và không có chỗ đỗ xe.',
        time: '1:30',
        keyVocab: [
          { word: 'furniture', ipa: '/ˈfɜː.nɪ.tʃər/', vi: 'nội thất' },
          { word: 'no parking', ipa: '/nəʊ ˈpɑː.kɪŋ/', vi: 'không có chỗ đỗ xe' }
        ]
      },
      {
        id: 4,
        speaker: 'Tom (Location 2)',
        en: "The second location is a barn conversion in the countryside. It has space, light, a lot of character, very quiet, but there's no furniture or phone.",
        vi: 'Địa điểm 2 là một nhà kho cải tạo ở vùng nông thôn. Nó có không gian, ánh sáng, nhiều nét độc đáo, rất yên tĩnh, nhưng chưa có đồ nội thất hay điện thoại.',
        time: '2:10',
        keyVocab: [
          { word: 'barn conversion', ipa: '/bɑːn kənˈvɜː.ʃən/', vi: 'nhà kho cải tạo thành văn phòng' },
          { word: 'creative', ipa: '/kriˈeɪ.tɪv/', vi: 'sáng tạo' }
        ]
      }
    ],
    questions: [
      {
        id: 1,
        question: 'Tại sao Tom Sutherland cần tìm văn phòng mới?',
        options: ['He wants to change his job', 'His business is getting big and he needs to employ staff', 'He moved to another city'],
        correctIndex: 1,
        explanation: 'Tom giải thích: "My business is getting quite big now... I have to start employing some staff, so I need an office."'
      },
      {
        id: 2,
        question: 'Nhược điểm của địa điểm 2 (Barn conversion) là gì?',
        options: ['Too noisy', 'No furniture or phone', 'No windows'],
        correctIndex: 1,
        explanation: 'Tom nói: "there\'s no furniture, so that would add to the cost."'
      }
    ],
    vocabHighlights: [
      { word: 'web designer', ipa: '/web dɪˈzaɪ.nər/', meaning: 'Nhà thiết kế trang web' },
      { word: 'barn conversion', ipa: '/bɑːn kənˈvɜː.ʃən/', meaning: 'Nhà kho cải tạo thành văn phòng độc đáo' },
      { word: 'add to the cost', ipa: '/æd tə ðə kɒst/', meaning: 'Làm tăng thêm chi phí' }
    ]
  },

  // ==========================================
  // 3. BONUS VIEWPOINT VIDEOS (Uploaded by user)
  // ==========================================
  {
    id: 'video-vp2-01',
    title: 'Viewpoint 2 • Video 01: How do you communicate at work?',
    subtitle: 'Khảo sát cách giao tiếp nơi công sở: Email, Họp trực tiếp & Điện thoại',
    trackCode: 'Viewpoint 2',
    category: 'viewpoint-video',
    videoUrl: 'https://www.youtube.com/embed/videoseries?list=PL3y-2Zc2y-s3-W5K_P9_7g_Lw5Mv6D2nN',
    description: 'Các nhân vật (Rachel, Talitha, Barry, Stacey) chia sẻ phương thức giao tiếp ưa chuộng tại công sở: Họp trực tiếp (Face-to-face), Email, và mạng xã hội công việc.',
    duration: '1:30',
    fullAudioText: `Question: How do you normally communicate with people at work?
Rachel: I send a lot of emails every day. I also make a lot of phone calls, but the way I prefer to communicate is in meetings because you sit with the people and you have conversations. That's the fastest way to make decisions.
Talitha: I prefer to communicate face-to-face, but we also communicate via email, and we have an instant messaging system called Lync which we use as well.
Barry: We use a number of different methods: email, Google chat, telephone, or face-to-face.
Stacey: I often use social media for communicating at work. I write blogs, and I also read blogs by other people. I use Facebook and Twitter.`,
    transcript: [
      {
        id: 1,
        speaker: 'Rachel',
        en: "I send a lot of emails every day, but the way I prefer to communicate is in meetings because that's the fastest way to make decisions.",
        vi: 'Tôi gửi rất nhiều email mỗi ngày, nhưng cách tôi thích giao tiếp hơn là trong các cuộc họp vì đó là cách nhanh nhất để đưa ra quyết định.',
        keyVocab: [{ word: 'make decisions', ipa: '/meɪk dɪˈsɪʒ.ənz/', vi: 'ra quyết định' }]
      },
      {
        id: 2,
        speaker: 'Talitha',
        en: 'I prefer to communicate face-to-face, but we also communicate via email and instant messaging.',
        vi: 'Tôi thích giao tiếp trực tiếp mặt đối mặt hơn, nhưng chúng tôi cũng trao đổi qua email và tin nhắn nhanh.',
        keyVocab: [{ word: 'face-to-face', ipa: '/ˌfeɪs.təˈfeɪs/', vi: 'mặt đối mặt / trực tiếp' }]
      }
    ],
    questions: [
      {
        id: 1,
        question: 'Theo Rachel, tại sao họp trực tiếp lại là cách giao tiếp tốt nhất?',
        options: ['It is cheaper', "It's the fastest way to make decisions", 'She does not like typing'],
        correctIndex: 1,
        explanation: 'Rachel khẳng định: "that\'s the fastest way to make decisions."'
      }
    ],
    vocabHighlights: [
      { word: 'face-to-face', ipa: '/ˌfeɪs.təˈfeɪs/', meaning: 'Gặp gỡ trực tiếp mặt đối mặt' },
      { word: 'instant messaging', ipa: '/ˌɪn.stənt ˈmes.ɪ.dʒɪŋ/', meaning: 'Nhắn tin nhanh' }
    ]
  },
  {
    id: 'video-vp4-01',
    title: 'Viewpoint 4 • Video 01–03: A Business Trip (Hotel & Restaurant)',
    subtitle: 'Tình huống công tác: Nhận phòng khách sạn, yêu cầu lễ tân & thanh toán',
    trackCode: 'Viewpoint 4',
    category: 'viewpoint-video',
    videoUrl: 'https://www.youtube.com/embed/videoseries?list=PL3y-2Zc2y-s3-W5K_P9_7g_Lw5Mv6D2nN',
    description: 'Bà Patricia Reyes đi công tác: Check-in tại khách sạn, phòng 105, kết nối wifi, gọi taxi, và dùng bữa trưa cùng đối tác kinh doanh.',
    duration: '2:00',
    fullAudioText: `Receptionist: Good afternoon.
Patricia: Hi, I have a reservation.
Receptionist: What's your name, please?
Patricia: Miss Patricia Reyes.
Receptionist: Yes, for two nights. Could I have your credit card, please?
Patricia: Sure.
Receptionist: Here is your room key. You're on the first floor, room 105. Breakfast is between 7 and 9.30. Would you like a wake-up call?
Patricia: Yes, please. At seven. And I will need the internet.
Receptionist: The password is on the card.
Waiter: Table for two?
Partner: Yes, please.
Waiter: Can I get you some drinks?
Patricia: I'll have some sparkling water, please. And the lasagna with a side salad.
Partner: And I'll have the pizza, please.`,
    transcript: [
      {
        id: 1,
        speaker: 'Patricia',
        en: "Hi, I have a reservation. Miss Patricia Reyes.",
        vi: 'Xin chào, tôi có đặt phòng trước. Tên tôi là Patricia Reyes.',
        keyVocab: [{ word: 'reservation', ipa: '/ˌrez.əˈveɪ.ʃən/', vi: 'sự đặt chỗ trước' }]
      },
      {
        id: 2,
        speaker: 'Receptionist',
        en: "Here is your room key. You're on the first floor, room 105.",
        vi: 'Đây là chìa khóa phòng của cô. Cô ở tầng 1, phòng 105.',
        keyVocab: [{ word: 'room key', ipa: '/ruːm kiː/', vi: 'chìa khóa phòng' }]
      },
      {
        id: 3,
        speaker: 'Patricia (Restaurant)',
        en: "I'll have some sparkling water, please. And the lasagna.",
        vi: 'Cho tôi nước khoáng có ga và món lasagna.',
        keyVocab: [{ word: 'sparkling water', ipa: '/ˌspɑː.klɪŋ ˈwɔː.tər/', vi: 'nước có ga' }]
      }
    ],
    questions: [
      {
        id: 1,
        question: 'Patricia Reyes ở phòng số mấy trong khách sạn?',
        options: ['Room 205', 'Room 105', 'Room 110'],
        correctIndex: 1,
        explanation: 'Lễ tân thông báo: "You\'re on the first floor, room 105."'
      }
    ],
    vocabHighlights: [
      { word: 'have a reservation', ipa: '/hæv ə ˌrez.əˈveɪ.ʃən/', meaning: 'Đã đặt phòng/bàn trước' },
      { word: 'wake-up call', ipa: '/ˈweɪk.ʌp kɔːl/', meaning: 'Cuộc gọi báo thức của khách sạn' }
    ]
  }
];

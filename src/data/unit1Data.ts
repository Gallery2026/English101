import { VocabularyItem, AlphabetGroup, GameSquare, ProfileCard } from '../types';

export const STARTING_POINT_QUESTIONS = [
  {
    id: 'sp-1',
    questionEn: 'What is your name?',
    questionVi: 'Tên của bạn là gì?',
    sampleAnswerEn: 'My name is ... / I’m ...',
    sampleAnswerVi: 'Tên tôi là ... / Tôi là ...'
  },
  {
    id: 'sp-2',
    questionEn: 'What is the name of your company?',
    questionVi: 'Tên công ty của bạn là gì?',
    sampleAnswerEn: 'My company is ... / The name of my company is ...',
    sampleAnswerVi: 'Công ty của tôi là ... / Tên công ty tôi là ...'
  },
  {
    id: 'sp-3',
    questionEn: 'What is your job?',
    questionVi: 'Công việc / Chức danh của bạn là gì?',
    sampleAnswerEn: 'I’m a / an ...',
    sampleAnswerVi: 'Tôi là (chức danh) ...'
  }
];

export const UNIT_VOCABULARY: VocabularyItem[] = [
  // Countries
  {
    id: 'c-1',
    category: 'country',
    english: 'India',
    ipa: '/ˈɪn.di.ə/',
    vietnamese: 'Nước Ấn Độ',
    example: 'Dahlia is from India.',
    exampleTranslation: 'Dahlia đến từ Ấn Độ.',
    stressPattern: 'Oo'
  },
  {
    id: 'c-2',
    category: 'country',
    english: 'the UK',
    ipa: '/ðə juː ˈkeɪ/',
    vietnamese: 'Vương quốc Anh',
    example: 'Charlotte is from the UK.',
    exampleTranslation: 'Charlotte đến từ Vương quốc Anh.'
  },
  {
    id: 'c-3',
    category: 'country',
    english: 'Japan',
    ipa: '/dʒəˈpæn/',
    vietnamese: 'Nước Nhật Bản',
    example: 'Yuko is from Japan.',
    exampleTranslation: 'Yuko đến từ Nhật Bản.',
    stressPattern: 'oO'
  },
  {
    id: 'c-4',
    category: 'country',
    english: 'Poland',
    ipa: '/ˈpəʊ.lənd/',
    vietnamese: 'Nước Ba Lan',
    example: 'Lukasz is from Poland.',
    exampleTranslation: 'Lukasz đến từ Ba Lan.',
    stressPattern: 'Oo'
  },
  {
    id: 'c-5',
    category: 'country',
    english: 'Brazil',
    ipa: '/brəˈzɪl/',
    vietnamese: 'Nước Brazil',
    example: 'Raquel is from Brazil.',
    exampleTranslation: 'Raquel đến từ Brazil.',
    stressPattern: 'oO'
  },
  {
    id: 'c-6',
    category: 'country',
    english: 'the USA',
    ipa: '/ðə juː es ˈeɪ/',
    vietnamese: 'Nước Mỹ (Hoa Kỳ)',
    example: 'Randy is from the USA.',
    exampleTranslation: 'Randy đến từ nước Mỹ.'
  },
  {
    id: 'c-7',
    category: 'country',
    english: 'Italy',
    ipa: '/ˈɪt.əl.i/',
    vietnamese: 'Nước Ý',
    example: 'Tiziana is from Italy.',
    exampleTranslation: 'Tiziana đến từ nước Ý.',
    stressPattern: 'Ooo'
  },
  {
    id: 'c-8',
    category: 'country',
    english: 'South Africa',
    ipa: '/ˌsaʊθ ˈæf.rɪ.kə/',
    vietnamese: 'Nước Nam Phi',
    example: 'Jacob is from South Africa.',
    exampleTranslation: 'Jacob đến từ Nam Phi.',
    stressPattern: 'o Oo'
  },

  // Nationalities
  {
    id: 'n-1',
    category: 'nationality',
    english: 'Indian',
    ipa: '/ˈɪn.di.ən/',
    vietnamese: 'Người / Thuộc về Ấn Độ',
    example: 'Dahlia is Indian.',
    exampleTranslation: 'Dahlia là người Ấn Độ.',
    stressPattern: 'Oo'
  },
  {
    id: 'n-2',
    category: 'nationality',
    english: 'British',
    ipa: '/ˈbrɪt.ɪʃ/',
    vietnamese: 'Người / Thuộc về nước Anh',
    example: 'Charlotte is British.',
    exampleTranslation: 'Charlotte là người Anh.',
    stressPattern: 'Oo'
  },
  {
    id: 'n-3',
    category: 'nationality',
    english: 'Japanese',
    ipa: '/ˌdʒæp.ənˈiːz/',
    vietnamese: 'Người / Thuộc về Nhật Bản',
    example: 'Yuko is Japanese.',
    exampleTranslation: 'Yuko là người Nhật Bản.',
    stressPattern: 'ooO'
  },
  {
    id: 'n-4',
    category: 'nationality',
    english: 'Polish',
    ipa: '/ˈpɒl.ɪʃ/',
    vietnamese: 'Người / Thuộc về Ba Lan',
    example: 'Lukasz is Polish.',
    exampleTranslation: 'Lukasz là người Ba Lan.',
    stressPattern: 'Oo'
  },
  {
    id: 'n-5',
    category: 'nationality',
    english: 'Brazilian',
    ipa: '/brəˈzɪl.jən/',
    vietnamese: 'Người / Thuộc về Brazil',
    example: 'Raquel is Brazilian.',
    exampleTranslation: 'Raquel là người Brazil.',
    stressPattern: 'oOo'
  },
  {
    id: 'n-6',
    category: 'nationality',
    english: 'American',
    ipa: '/əˈmer.ɪ.kən/',
    vietnamese: 'Người / Thuộc về Mỹ',
    example: 'Randy is American.',
    exampleTranslation: 'Randy là người Mỹ.',
    stressPattern: 'oOoo'
  },
  {
    id: 'n-7',
    category: 'nationality',
    english: 'Italian',
    ipa: '/ɪˈtæl.jən/',
    vietnamese: 'Người / Thuộc về nước Ý',
    example: 'Marcegaglia is an Italian company.',
    exampleTranslation: 'Marcegaglia là một công ty của Ý.',
    stressPattern: 'oOo'
  },
  {
    id: 'n-8',
    category: 'nationality',
    english: 'South African',
    ipa: '/ˌsaʊθ ˈæf.rɪ.kən/',
    vietnamese: 'Người / Thuộc về Nam Phi',
    example: 'Jacob is South African.',
    exampleTranslation: 'Jacob là người Nam Phi.',
    stressPattern: 'o Ooo'
  },

  // Jobs
  {
    id: 'j-1',
    category: 'job',
    english: 'Receptionist',
    ipa: '/rɪˈsep.ʃən.ɪst/',
    vietnamese: 'Nhân viên lễ tân',
    example: 'I’m a receptionist with an American company.',
    exampleTranslation: 'Tôi là nhân viên lễ tân tại một công ty Mỹ.'
  },
  {
    id: 'j-2',
    category: 'job',
    english: 'Sales Rep',
    ipa: '/ˈseɪlz rep/',
    vietnamese: 'Đại diện bán hàng (Sales Representative)',
    example: 'Randy is a Sales Rep.',
    exampleTranslation: 'Randy là một đại diện bán hàng.'
  },
  {
    id: 'j-3',
    category: 'job',
    english: 'Financial Director',
    ipa: '/faɪˌnæn.ʃəl daɪˈrek.tər/',
    vietnamese: 'Giám đốc tài chính',
    example: 'Charlotte is a Financial Director.',
    exampleTranslation: 'Charlotte là Giám đốc tài chính.'
  },
  {
    id: 'j-4',
    category: 'job',
    english: 'Chief Executive Officer',
    ipa: '/ˌtʃiːf ɪɡˌzek.jə.tɪv ˈɒf.ɪ.sər/',
    vietnamese: 'Tổng giám đốc điều hành (CEO)',
    example: 'Antonio Marcegaglia and his sister Emma are the Chief Executive Officers.',
    exampleTranslation: 'Antonio Marcegaglia và em gái Emma là các Tổng giám đốc điều hành.'
  },
  {
    id: 'j-5',
    category: 'job',
    english: 'Personal Assistant',
    ipa: '/ˌpɜː.sən.əl əˈsɪs.tənt/',
    vietnamese: 'Trợ lý cá nhân (PA)',
    example: 'Raquel is a Personal Assistant.',
    exampleTranslation: 'Raquel là một trợ lý cá nhân.'
  },
  {
    id: 'j-6',
    category: 'job',
    english: 'Technician',
    ipa: '/tekˈnɪʃ.ən/',
    vietnamese: 'Kỹ thuật viên',
    example: 'Yuko is a technician.',
    exampleTranslation: 'Yuko là một kỹ thuật viên.'
  },
  {
    id: 'j-7',
    category: 'job',
    english: 'Human Resources Manager',
    ipa: '/ˌhjuː.mən rɪˈzɔː.sɪz ˈmæn.ɪ.dʒər/',
    vietnamese: 'Trưởng phòng / Giám đốc Nhân sự (HR Manager)',
    example: 'Tiziana is a Human Resources Manager.',
    exampleTranslation: 'Tiziana là Trưởng phòng Nhân sự.'
  },
  {
    id: 'j-8',
    category: 'job',
    english: 'Team Leader',
    ipa: '/ˈtiːm ˌliː.dər/',
    vietnamese: 'Trưởng nhóm',
    example: 'Lukasz is a Team Leader.',
    exampleTranslation: 'Lukasz là một Trưởng nhóm.'
  },

  // Compound Job Titles (Exercise 7)
  {
    id: 'm-1',
    category: 'managerial',
    english: 'Marketing Director',
    ipa: '/ˈmɑː.kɪ.tɪŋ daɪˈrek.tər/',
    vietnamese: 'Giám đốc Tiếp thị / Marketing',
    example: 'Think of other directors: marketing director.',
    exampleTranslation: 'Nghĩ về các giám đốc khác: giám đốc marketing.'
  },
  {
    id: 'm-2',
    category: 'managerial',
    english: 'Sales Assistant',
    ipa: '/ˈseɪlz əˌsɪs.tənt/',
    vietnamese: 'Trợ lý bán hàng',
    example: 'Think of other assistants: sales assistant.',
    exampleTranslation: 'Nghĩ về các trợ lý khác: trợ lý bán hàng.'
  },
  {
    id: 'm-3',
    category: 'managerial',
    english: 'Technical Manager',
    ipa: '/ˈtek.nɪ.kəl ˈmæn.ɪ.dʒər/',
    vietnamese: 'Trưởng phòng kỹ thuật',
    example: 'My husband is the Technical Manager.',
    exampleTranslation: 'Chồng tôi là Trưởng phòng kỹ thuật.'
  }
];

export const PEOPLE_IN_UNIT_1 = [
  {
    name: 'Dahlia',
    country: 'India',
    nationality: 'Indian',
    jobTitle: 'Receptionist',
    companyNationality: 'Indian'
  },
  {
    name: 'Raquel',
    country: 'Brazil',
    nationality: 'Brazilian',
    jobTitle: 'Personal Assistant',
    companyNationality: 'American'
  },
  {
    name: 'Randy',
    country: 'the USA',
    nationality: 'American',
    jobTitle: 'Sales Rep',
    companyNationality: 'American'
  },
  {
    name: 'Lukasz',
    country: 'Poland',
    nationality: 'Polish',
    jobTitle: 'Team Leader',
    companyNationality: 'Polish'
  },
  {
    name: 'Tiziana',
    country: 'Italy',
    nationality: 'Italian',
    jobTitle: 'Human Resources Manager',
    companyNationality: 'Italian'
  },
  {
    name: 'Charlotte',
    country: 'the UK',
    nationality: 'British',
    jobTitle: 'Financial Director',
    companyNationality: 'British'
  },
  {
    name: 'Yuko',
    country: 'Japan',
    nationality: 'Japanese',
    jobTitle: 'Technician',
    companyNationality: 'Japanese'
  },
  {
    name: 'Jacob',
    country: 'South Africa',
    nationality: 'South African',
    jobTitle: 'Chief Executive Officer',
    companyNationality: 'South African'
  }
];

export const WORD_STRESS_ITEMS = [
  { word: 'Japan', ipa: '/dʒəˈpæn/', stress: '2nd syllable', note: 'Stress on -PAN' },
  { word: 'Japanese', ipa: '/ˌdʒæp.ənˈiːz/', stress: '3rd syllable', note: 'Stress moves to -NESE' },
  { word: 'British', ipa: '/ˈbrɪt.ɪʃ/', stress: '1st syllable', note: 'Stress on BRI-' },
  { word: 'Italy', ipa: '/ˈɪt.əl.i/', stress: '1st syllable', note: 'Stress on I-' },
  { word: 'Italian', ipa: '/ɪˈtæl.jən/', stress: '2nd syllable', note: 'Stress moves to -TAL-' },
  { word: 'India', ipa: '/ˈɪn.di.ə/', stress: '1st syllable', note: 'Stress on IN-' },
  { word: 'American', ipa: '/əˈmer.ɪ.kən/', stress: '2nd syllable', note: 'Stress on -MER-' },
  { word: 'Brazilian', ipa: '/brəˈzɪl.jən/', stress: '2nd syllable', note: 'Stress on -ZIL-' },
  { word: 'Polish', ipa: '/ˈpɒl.ɪʃ/', stress: '1st syllable', note: 'Stress on PO-' },
  { word: 'Africa', ipa: '/ˈæf.rɪ.kə/', stress: '1st syllable', note: 'Stress on AF-' }
];

export const ALPHABET_GROUPS: AlphabetGroup[] = [
  {
    groupNumber: 1,
    vowelSound: '/eɪ/ (như "say")',
    vowelSoundIPA: '/eɪ/',
    letters: ['A', 'H', 'J', 'K'],
    explanationVi: 'Các chữ cái có âm nguyên âm đôi /eɪ/'
  },
  {
    groupNumber: 2,
    vowelSound: '/iː/ (như "see")',
    vowelSoundIPA: '/iː/',
    letters: ['B', 'C', 'D', 'E', 'G', 'P', 'T', 'V', 'Z (UK: /zed/)'],
    explanationVi: 'Các chữ cái có âm nguyên âm dài /iː/'
  },
  {
    groupNumber: 3,
    vowelSound: '/e/ (như "pen")',
    vowelSoundIPA: '/e/',
    letters: ['F', 'L', 'M', 'N', 'S', 'X', 'Z (UK: /zed/)'],
    explanationVi: 'Các chữ cái bắt đầu bằng âm nguyên âm ngắn /e/'
  },
  {
    groupNumber: 4,
    vowelSound: '/aɪ/ (như "my")',
    vowelSoundIPA: '/aɪ/',
    letters: ['I', 'Y'],
    explanationVi: 'Các chữ cái có âm nguyên âm đôi /aɪ/'
  },
  {
    groupNumber: 5,
    vowelSound: '/əʊ/ (như "go")',
    vowelSoundIPA: '/əʊ/',
    letters: ['O'],
    explanationVi: 'Chữ cái có âm nguyên âm đôi /əʊ/'
  },
  {
    groupNumber: 6,
    vowelSound: '/uː/ (như "too")',
    vowelSoundIPA: '/uː/',
    letters: ['Q', 'U', 'W'],
    explanationVi: 'Các chữ cái có âm nguyên âm /uː/'
  },
  {
    groupNumber: 7,
    vowelSound: '/ɑː/ (như "car")',
    vowelSoundIPA: '/ɑː/',
    letters: ['R'],
    explanationVi: 'Chữ cái có âm nguyên âm dài /ɑː/'
  }
];

export const MARCEGAGLIA_TEXT = {
  title: 'MARCEGAGLIA',
  bodyEn: `Marcegaglia is an Italian company and one of its main products is steel pipes. The company’s head office is in Italy, near Milan, but its customers aren’t only Italian. They are in countries all over the world. Marcegaglia is a family company. Antonio Marcegaglia and his sister Emma are the Chief Executive Officers. For Emma, the family company isn’t her only job. She is also the leader of the oil and gas company Eni.`,
  bodyVi: `Marcegaglia là một công ty của Ý và một trong những sản phẩm chính của công ty là ống thép. Trụ sở chính của công ty nằm ở Ý, gần Milan, nhưng khách hàng của công ty không chỉ có người Ý. Họ ở các quốc gia trên toàn thế giới. Marcegaglia là một công ty gia đình. Antonio Marcegaglia và em gái Emma là các Tổng giám đốc điều hành. Đối với Emma, công ty gia đình không phải là công việc duy nhất của cô. Cô cũng là người đứng đầu công ty dầu khí Eni.`,
  profile: {
    companyName: 'Marcegaglia',
    headOffice: 'near Milan, Italy',
    products: 'steel pipes',
    ceo: 'Antonio Marcegaglia and his sister Emma'
  }
};

export const MARCEGAGLIA_INTERVIEW_QUESTIONS = [
  {
    id: 1,
    speaker: 'A',
    textBefore: 'So, ',
    options: ['is', 'are'],
    correct: 'is',
    textAfter: ' Marcegaglia a family company?'
  },
  {
    id: 2,
    speaker: 'B',
    textBefore: 'Yes, it ',
    options: ['is', 'am'],
    correct: 'is',
    textAfter: '. Steno Marcegaglia started the company in 1959, and his children Antonio and Emma '
  },
  {
    id: 3,
    speaker: 'B',
    textBefore: '',
    options: ['is', 'are'],
    correct: 'are',
    textAfter: ' the CEOs.'
  },
  {
    id: 4,
    speaker: 'A',
    textBefore: '',
    options: ['Is', 'Are'],
    correct: 'Are',
    textAfter: ' they from a big family?'
  },
  {
    id: 5,
    speaker: 'B',
    textBefore: 'No, they ',
    options: ["'s", "'re"],
    correct: "'re",
    textAfter: ' from a small family, but Marcegaglia '
  },
  {
    id: 6,
    speaker: 'B',
    textBefore: '',
    options: ["isn't", "'m not"],
    correct: "isn't",
    textAfter: ' a small company. It '
  },
  {
    id: 7,
    speaker: 'B',
    textBefore: '',
    options: ["'s", "'re"],
    correct: "'s",
    textAfter: ' a multi-billion euro company with 7,000 employees.'
  },
  {
    id: 8,
    speaker: 'A',
    textBefore: 'And ',
    options: ['is', 'are'],
    correct: 'are',
    textAfter: ' all the employees in Italy?'
  },
  {
    id: 9,
    speaker: 'B',
    textBefore: 'They ',
    options: ['is', 'are'],
    correct: 'are',
    textAfter: ' in Italy and in many other countries, too, such as Brazil and China.'
  }
];

export const SOFIA_AGUILERA_PROFILE = {
  name: 'Sofia Aguilera',
  country: 'Mexico',
  companyName: 'Webmex Solutions',
  job: 'Managing Director',
  customers: 'Small businesses'
};

export const SOFIA_INTERVIEW_GAPS = [
  { id: 1, speaker: 'Interviewer', before: 'Is ', correct: 'your', after: ' business a family company?' },
  { id: 2, speaker: 'Sofia', before: 'Yes, it is. ', correct: 'My', after: ' husband is the Technical Manager. ' },
  { id: 3, speaker: 'Sofia', before: '', correct: 'His', after: ' name is Orial. And ' },
  { id: 4, speaker: 'Sofia', before: '', correct: 'our', alternative: 'my', after: ' daughter is the Sales Manager. ' },
  { id: 5, speaker: 'Sofia', before: '', correct: 'Her', after: ' name is Martina.' },
  { id: 6, speaker: 'Sofia (cont.)', before: 'Is it an IT company? \nSofia: Yes, it is. ', correct: 'Our', after: ' customers are small businesses. We work with ' },
  { id: 7, speaker: 'Sofia (cont.)', before: '', correct: 'their', after: ' websites.' }
];

export const VISITOR_BOARD_EXERCISE = {
  date: 'FRIDAY 12TH SEPTEMBER',
  welcomeHeader: 'WELCOME TODAY TO:',
  gaps: [
    { id: 1, label: 'MR ALEK', answer: 'GORSKI', prompt: 'Surname of Alek' },
    { id: 2, label: 'MS', answer: 'ELZBIETA', prompt: 'First name of Ms Wozniak' },
    { id: 3, label: 'VISITING: MRS', answer: 'MARIA', prompt: 'First name of Mrs Da Rocha' }
  ]
};

export const EXPRESSIONS_MATCHING = [
  {
    id: 1,
    expression: 'Hello. My name is Alek Gorski.',
    vietnamese: 'Xin chào. Tôi tên là Alek Gorski.',
    correctResponseId: 'c',
    correctResponse: 'How do you do, Mr Gorski?',
    correctResponseVi: 'Rất hân hạnh được gặp ngài, ông Gorski.',
    category: 'Saying hello and introducing yourself'
  },
  {
    id: 2,
    expression: 'I’m Eva, Maria Da Rocha’s assistant.',
    vietnamese: 'Tôi là Eva, trợ lý của Maria Da Rocha.',
    correctResponseId: 'a',
    correctResponse: 'Pleased to meet you.',
    correctResponseVi: 'Rất vui được gặp bạn.',
    category: 'Saying hello and introducing yourself'
  },
  {
    id: 3,
    expression: 'This is my assistant, Elzbieta Wozniak.',
    vietnamese: 'Đây là trợ lý của tôi, Elzbieta Wozniak.',
    correctResponseId: 'e',
    correctResponse: 'Nice to meet you.',
    correctResponseVi: 'Rất vui được gặp bạn.',
    category: 'Introducing someone'
  },
  {
    id: 4,
    expression: 'It’s good to see you again.',
    vietnamese: 'Rất vui được gặp lại bạn.',
    correctResponseId: 'f',
    correctResponse: 'And you.',
    correctResponseVi: 'Tôi cũng vậy (cũng rất vui được gặp lại bạn).',
    category: 'Saying hello to someone you know'
  },
  {
    id: 5,
    expression: 'How are you?',
    vietnamese: 'Bạn khỏe không?',
    correctResponseId: 'd',
    correctResponse: 'I’m fine.',
    correctResponseVi: 'Tôi khỏe, cảm ơn.',
    category: 'Saying hello to someone you know'
  },
  {
    id: 6,
    expression: 'Do you know Elzbieta?',
    vietnamese: 'Bạn đã biết Elzbieta chưa?',
    correctResponseId: 'b',
    correctResponse: 'No. How do you do?',
    correctResponseVi: 'Chưa. Rất hân hạnh được gặp bạn.',
    category: 'Introducing someone'
  }
];

export const GOODBYE_CONVERSATION = [
  {
    speaker: 'Maria',
    before: '',
    correct: 'Have a good journey',
    after: ', Alek.'
  },
  {
    speaker: 'Alek',
    line: 'Yes, goodbye, Maria.'
  },
  {
    speaker: 'Maria',
    before: '',
    correct: 'Nice meeting you',
    after: ', Elzbieta.'
  },
  {
    speaker: 'Elzbieta',
    line: 'Nice meeting you, too.'
  },
  {
    speaker: 'Maria',
    before: 'Bye. ',
    correct: 'See you soon',
    after: '.'
  },
  {
    speaker: 'Alek',
    line: 'Thanks. Bye.'
  }
];

export const GAME_CARDS: Record<'A' | 'B', ProfileCard> = {
  A: {
    id: 'A',
    name: 'Mr Stanislav Beyer',
    job: 'Marketing Assistant',
    location: 'Warsaw, Poland',
    country: 'Poland',
    nationality: 'Polish',
    companyOrDept: 'Marketing Department'
  },
  B: {
    id: 'B',
    name: 'Ms Lesley Johnson',
    job: 'Technical Engineer',
    location: 'Middlesex, UK',
    country: 'the UK',
    nationality: 'British',
    companyOrDept: 'Engineering'
  }
};

export const GAME_SQUARES: GameSquare[] = [
  {
    number: 1,
    type: 'start',
    title: 'START',
    instruction: 'Introduce yourself – give your name, job and nationality.',
    instructionVi: 'Giới thiệu bản thân – nêu tên, công việc và quốc tịch.',
    suggestedAnswer: 'Hello, my name is [Name]. I’m a [Job] and I’m [Nationality].',
    suggestedAnswerVi: 'Xin chào, tên tôi là ... Tôi là ... và tôi là người ...'
  },
  {
    number: 2,
    type: 'white',
    title: 'Square 2',
    instruction: 'Ask how your partner is.',
    instructionVi: 'Hỏi thăm đối tác của bạn khỏe không.',
    suggestedAnswer: 'How are you? / How are you doing?',
    suggestedAnswerVi: 'Bạn khỏe không?'
  },
  {
    number: 3,
    type: 'white',
    title: 'Square 3',
    instruction: 'How do you spell your name?',
    instructionVi: 'Bạn đánh vần tên mình như thế nào?',
    suggestedAnswer: 'It’s [Spell letter by letter, e.g. T-H-A-N-H].',
    suggestedAnswerVi: 'Đánh vần từng chữ cái tên của bạn.'
  },
  {
    number: 4,
    type: 'white',
    title: 'Square 4',
    instruction: 'Introduce yourself with the information on card B.',
    instructionVi: 'Tự giới thiệu bản thân bằng thông tin trên Thẻ B.',
    cardRef: 'B',
    suggestedAnswer: 'Hello. I’m Lesley Johnson. I’m a Technical Engineer from Middlesex in the UK. I’m British.',
    suggestedAnswerVi: 'Xin chào, tôi là Lesley Johnson. Tôi là Kỹ sư Kỹ thuật đến từ Middlesex, Vương quốc Anh. Tôi là người Anh.'
  },
  {
    number: 5,
    type: 'blue',
    title: 'Square 5 (Prompt: Blue)',
    instruction: 'Partner says: "Hello, my name’s Annie Da Silva." -> You respond!',
    instructionVi: 'Đối tác nói: "Xin chào, tôi là Annie Da Silva." -> Bạn hãy đáp lại!',
    suggestedAnswer: 'Nice to meet you, Annie. / Pleased to meet you, Ms Da Silva. My name is...',
    suggestedAnswerVi: 'Rất vui được gặp bạn, Annie / Hân hạnh được gặp bạn.'
  },
  {
    number: 6,
    type: 'white',
    title: 'Square 6',
    instruction: 'Spell your company’s name.',
    instructionVi: 'Đánh vần tên công ty của bạn.',
    suggestedAnswer: 'My company is [Company]. That’s [Spell letters].',
    suggestedAnswerVi: 'Công ty tôi là ... Đánh vần là ...'
  },
  {
    number: 7,
    type: 'blue',
    title: 'Square 7 (Prompt: Blue)',
    instruction: 'Partner asks: "Are you French?" -> You respond!',
    instructionVi: 'Đối tác hỏi: "Bạn có phải là người Pháp không?" -> Bạn hãy đáp lại!',
    suggestedAnswer: 'No, I’m not. I’m Vietnamese / British / etc.',
    suggestedAnswerVi: 'Không, tôi không phải. Tôi là người Việt Nam.'
  },
  {
    number: 8,
    type: 'white',
    title: 'Square 8',
    instruction: 'Ask your partner: name? job? nationality?',
    instructionVi: 'Hỏi đối tác của bạn: tên? công việc? quốc tịch?',
    suggestedAnswer: 'What is your name? What is your job? Where are you from / What is your nationality?',
    suggestedAnswerVi: 'Tên bạn là gì? Công việc của bạn là gì? Bạn là người nước nào?'
  },
  {
    number: 9,
    type: 'blue',
    title: 'Square 9 (Prompt: Blue)',
    instruction: 'Partner asks: "Are you from Japan?" -> You respond!',
    instructionVi: 'Đối tác hỏi: "Bạn có đến từ Nhật Bản không?" -> Bạn hãy đáp lại!',
    suggestedAnswer: 'No, I’m not. I’m from Vietnam / Poland / Italy. (Or: Yes, I am.)',
    suggestedAnswerVi: 'Không, tôi không phải. Tôi đến từ Việt Nam.'
  },
  {
    number: 10,
    type: 'white',
    title: 'Square 10',
    instruction: 'Introduce the person on card A to your partner.',
    instructionVi: 'Giới thiệu người trên Thẻ A cho đối tác của bạn.',
    cardRef: 'A',
    suggestedAnswer: 'This is Stanislav Beyer. He’s a Marketing Assistant from Warsaw in Poland. He’s Polish.',
    suggestedAnswerVi: 'Đây là Stanislav Beyer. Anh ấy là Trợ lý Marketing đến từ Warsaw, Ba Lan. Anh ấy là người Ba Lan.'
  },
  {
    number: 11,
    type: 'white',
    title: 'Square 11',
    instruction: 'Tell your partner about your boss – name, job, nationality.',
    instructionVi: 'Nói với đối tác về sếp của bạn – tên, công việc, quốc tịch.',
    suggestedAnswer: 'My boss is [Name]. He/She is the [Job title, e.g. Managing Director]. He’s/She’s [Nationality].',
    suggestedAnswerVi: 'Sếp của tôi là ... Anh/Cô ấy là ... Anh/Cô ấy là người ...'
  },
  {
    number: 12,
    type: 'white',
    title: 'Square 12',
    instruction: 'Introduce your partner to a customer.',
    instructionVi: 'Giới thiệu đối tác của bạn với một khách hàng.',
    suggestedAnswer: 'Mr/Ms [Customer], this is my colleague [Partner Name]. He’s/She’s our [Job title].',
    suggestedAnswerVi: 'Chào ông/bà [Khách hàng], đây là đồng nghiệp của tôi [Tên đối tác]. Anh ấy/Cô ấy là [Chức vụ] của chúng tôi.'
  },
  {
    number: 13,
    type: 'blue',
    title: 'Square 13 (Prompt: Blue)',
    instruction: 'Partner says: "Goodbye." -> You respond!',
    instructionVi: 'Đối tác chào tạm biệt: "Goodbye." -> Bạn hãy đáp lại!',
    suggestedAnswer: 'Goodbye. Have a good journey! / See you soon! / Nice meeting you!',
    suggestedAnswerVi: 'Tạm biệt. Chúc bạn thượng lộ bình an! / Hẹn sớm gặp lại bạn!'
  },
  {
    number: 14,
    type: 'white',
    title: 'Square 14',
    instruction: 'Tell your partner about your colleagues – names, jobs, nationalities.',
    instructionVi: 'Kể cho đối tác về các đồng nghiệp của bạn – tên, chức vụ, quốc tịch.',
    suggestedAnswer: 'My colleagues are [Name 1] and [Name 2]. They’re [Jobs]. They’re [Nationality].',
    suggestedAnswerVi: 'Đồng nghiệp của tôi là ... Họ là ... Họ là người ...'
  },
  {
    number: 15,
    type: 'finish',
    title: '15 FINISH',
    instruction: 'CONGRATULATIONS! You reached FINISH! Summarize your achievements in Unit 1.',
    instructionVi: 'CHÚC MỪNG! Bạn đã về đích thành công!',
    suggestedAnswer: 'We completed all Unit 1 communication goals!',
    suggestedAnswerVi: 'Chúng ta đã hoàn thành toàn bộ mục tiêu giao tiếp của Unit 1!'
  }
];

export type TabId = 
  | 'overview'
  | 'vocabulary'
  | 'pronunciation'
  | 'grammar'
  | 'practice'
  | 'listening'
  | 'pairwork'
  | 'communication'
  | 'game'
  | 'speaking'
  | 'notes'
  | 'review';

export interface VocabularyItem {
  id: string;
  category: 'country' | 'nationality' | 'job' | 'managerial';
  english: string;
  ipa: string;
  vietnamese: string;
  example: string;
  exampleTranslation: string;
  stressPattern?: string; // e.g., "oO" or "Oo"
  notes?: string;
}

export interface AlphabetGroup {
  groupNumber: number;
  vowelSound: string;
  vowelSoundIPA: string;
  letters: string[];
  explanationVi: string;
}

export interface StudyTip {
  title?: string;
  coreConcept: string;
  keyTakeaway: string;
  memoryTrick: string;
  commonMistake: string;
  selfDrill?: string;
}

export interface TeacherGuide {
  objective: string;
  teacherSays?: string;
  studentA?: string;
  studentB?: string;
  teacherTip?: string;
}

export interface VisitorBoardData {
  date: string;
  visitor1Name: string;
  visitor1Surname: string;
  visitor2Title: string;
  visitor2Surname: string;
  hostTitle: string;
  hostName: string;
}

export interface GameSquare {
  number: number;
  type: 'start' | 'white' | 'blue' | 'finish';
  title: string;
  instruction: string;
  instructionVi: string;
  cardRef?: 'A' | 'B';
  suggestedAnswer?: string;
  suggestedAnswerVi?: string;
}

export interface ProfileCard {
  id: 'A' | 'B';
  name: string;
  job: string;
  location: string;
  country: string;
  nationality: string;
  companyOrDept: string;
}

// Live Note with direct link attachment
export interface NoteLink {
  id: string;
  title: string;
  url: string;
  description?: string;
}

export interface LiveNote {
  id: string;
  sectionId: TabId;
  title: string;
  content: string;
  links: NoteLink[];
  createdAt: string;
  updatedAt: string;
  tags: string[];
}

// Listening & Video Hub
export interface TranscriptLine {
  id: number;
  speaker: string;
  en: string;
  vi: string;
  time?: string;
  keyVocab?: { word: string; ipa: string; vi: string }[];
}

export interface ListeningQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ListeningTrack {
  id: string;
  title: string;
  subtitle: string;
  trackCode: string;
  category: 'textbook-audio' | 'viewpoint-video';
  description: string;
  duration?: string;
  videoUrl?: string;
  audioUrl?: string;
  fullAudioText: string;
  transcript: TranscriptLine[];
  questions: ListeningQuestion[];
  vocabHighlights: { word: string; ipa: string; meaning: string }[];
}

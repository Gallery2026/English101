/**
 * Speech synthesis utility using the standard Web Speech API.
 * Preferred voice: British English (en-GB) or US English (en-US).
 */

let speechSynth: SpeechSynthesis | null = null;
let voices: SpeechSynthesisVoice[] = [];

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  speechSynth = window.speechSynthesis;
  
  const loadVoices = () => {
    voices = speechSynth?.getVoices() || [];
  };

  loadVoices();
  if (speechSynth.onvoiceschanged !== undefined) {
    speechSynth.onvoiceschanged = loadVoices;
  }
}

export const playAudio = (
  text: string,
  options?: {
    rate?: number; // 1.0 is normal, 0.75 is slow
    lang?: string;
    onEnd?: () => void;
    onError?: (err: any) => void;
  }
): boolean => {
  if (!speechSynth) {
    console.warn('Speech synthesis not supported on this browser.');
    return false;
  }

  try {
    speechSynth.cancel(); // Stop any pending utterance
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Choose British English voice if available, otherwise any English voice
    const preferredVoices = voices.filter(
      (v) => v.lang.startsWith('en-GB') || v.lang.startsWith('en-US') || v.lang.startsWith('en')
    );
    const gbVoice = preferredVoices.find((v) => v.lang.startsWith('en-GB'));
    if (gbVoice) {
      utterance.voice = gbVoice;
    } else if (preferredVoices.length > 0) {
      utterance.voice = preferredVoices[0];
    }

    utterance.lang = options?.lang || (gbVoice ? 'en-GB' : 'en-US');
    utterance.rate = options?.rate || 0.95;
    utterance.pitch = 1.0;

    if (options?.onEnd) {
      utterance.onend = options.onEnd;
    }
    if (options?.onError) {
      utterance.onerror = options.onError;
    }

    speechSynth.speak(utterance);
    return true;
  } catch (err) {
    console.error('Error playing speech:', err);
    if (options?.onError) {
      options.onError(err);
    }
    return false;
  }
};

export const stopAudio = () => {
  if (speechSynth) {
    speechSynth.cancel();
  }
};

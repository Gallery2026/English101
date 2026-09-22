import React, { useState, useRef, useEffect } from 'react';
import {
  Headphones,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  CheckCircle2,
  Video,
  FileText,
  Sparkles,
  ArrowRight,
  BookMarked,
  Upload,
  Link2,
  ShieldCheck,
  AlertCircle,
  Film,
  Check,
  VolumeX
} from 'lucide-react';
import { UNIT1_LISTENING_TRACKS } from '../../data/listeningData';
import { ListeningTrack, TranscriptLine } from '../../types';
import { playAudio, stopAudio } from '../../utils/speech';
import {
  saveVideoFile,
  getAllVideos,
  deleteVideo,
  matchFileNameToTrackId
} from '../../utils/videoStorage';

interface ListeningSectionProps {
  showVietnamese: boolean;
  onNext: () => void;
  onMarkCompleted: () => void;
  onQuickAddNote?: (title: string, content: string) => void;
}

// Convert "M:SS" or "[M:SS]" to seconds
const parseTimeToSeconds = (timeStr?: string): number => {
  if (!timeStr) return 0;
  const cleaned = timeStr.replace(/[\[\]]/g, '').trim();
  const parts = cleaned.split(':');
  if (parts.length === 2) {
    const mins = parseInt(parts[0], 10) || 0;
    const secs = parseInt(parts[1], 10) || 0;
    return mins * 60 + secs;
  }
  if (parts.length === 3) {
    const hrs = parseInt(parts[0], 10) || 0;
    const mins = parseInt(parts[1], 10) || 0;
    const secs = parseInt(parts[2], 10) || 0;
    return hrs * 3600 + mins * 60 + secs;
  }
  return 0;
};

export const ListeningSection: React.FC<ListeningSectionProps> = ({
  showVietnamese,
  onNext,
  onMarkCompleted,
  onQuickAddNote
}) => {
  const [activeTrackIndex, setActiveTrackIndex] = useState<number>(0);
  const currentTrack: ListeningTrack = UNIT1_LISTENING_TRACKS[activeTrackIndex];
  const isVideoTrack = currentTrack.category === 'viewpoint-video';

  // Playback states
  const [isPlayingAll, setIsPlayingAll] = useState<boolean>(false);
  const [playbackRate, setPlaybackRate] = useState<number>(1.0);
  const [playingLineId, setPlayingLineId] = useState<number | null>(null);

  // Video element ref & states
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoCurrentTime, setVideoCurrentTime] = useState<number>(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);

  // User custom video/audio uploaded or pasted (persisted in IndexedDB and state)
  const [customMediaMap, setCustomMediaMap] = useState<Record<string, { url: string; fileName: string; isFile: boolean }>>(() => {
    try {
      const saved = localStorage.getItem('bre_unit1_custom_media');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [showUrlInput, setShowUrlInput] = useState<boolean>(false);
  const [inputUrl, setInputUrl] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const multiFileInputRef = useRef<HTMLInputElement | null>(null);

  // Quiz states
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  // Load stored videos from IndexedDB on component mount
  useEffect(() => {
    let isMounted = true;
    getAllVideos().then((records) => {
      if (!isMounted) return;
      const loadedMap: Record<string, { url: string; fileName: string; isFile: boolean }> = {};
      Object.entries(records).forEach(([trackId, rec]) => {
        try {
          const blobUrl = URL.createObjectURL(rec.blob);
          loadedMap[trackId] = {
            url: blobUrl,
            fileName: rec.fileName,
            isFile: true
          };
        } catch (e) {
          console.warn('Could not make blob URL:', e);
        }
      });
      if (Object.keys(loadedMap).length > 0) {
        setCustomMediaMap((prev) => ({ ...prev, ...loadedMap }));
      }
    }).catch((err) => {
      console.warn('Error loading videos from IndexedDB:', err);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  // Active video source (user custom file/url or default)
  const currentCustomMedia = customMediaMap[currentTrack.id];
  const activeVideoSrc = currentCustomMedia?.url || currentTrack.videoUrl || '';
  const isDirectVideoFile = activeVideoSrc.startsWith('blob:') ||
    activeVideoSrc.startsWith('data:') ||
    activeVideoSrc.endsWith('.mp4') ||
    activeVideoSrc.endsWith('.webm') ||
    activeVideoSrc.endsWith('.mov') ||
    activeVideoSrc.endsWith('.m4v') ||
    activeVideoSrc.endsWith('.mp3');

  // Stop everything when switching tracks
  useEffect(() => {
    stopAudio();
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsPlayingAll(false);
    setIsVideoPlaying(false);
    setPlayingLineId(null);
    setUserAnswers({});
    setQuizSubmitted(false);
    setShowUrlInput(false);
    setInputUrl('');
  }, [activeTrackIndex]);

  // Adjust playback rate on video element when changed
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  // Process video files (support single or batch)
  const processUploadedFiles = async (files: FileList | File[]) => {
    if (!files || files.length === 0) return;
    const trackIds = UNIT1_LISTENING_TRACKS.map((t) => t.id);
    const updated = { ...customMediaMap };

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      let targetId = currentTrack.id;
      if (files.length > 1) {
        targetId = matchFileNameToTrackId(file.name, trackIds) || currentTrack.id;
      }
      const objectUrl = URL.createObjectURL(file);
      updated[targetId] = {
        url: objectUrl,
        fileName: file.name,
        isFile: true
      };

      try {
        await saveVideoFile(targetId, file, file.name);
      } catch (err) {
        console.warn('Could not save video to IndexedDB:', err);
      }
    }

    setCustomMediaMap(updated);
  };

  // Handle local video file upload from user
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      processUploadedFiles(files);
    }
  };

  // Handle drag & drop on video viewport
  const handleDropFiles = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processUploadedFiles(e.dataTransfer.files);
    }
  };

  // Handle custom URL submission
  const handleSaveCustomUrl = () => {
    if (!inputUrl.trim()) return;
    const updated = {
      ...customMediaMap,
      [currentTrack.id]: {
        url: inputUrl.trim(),
        fileName: inputUrl.trim(),
        isFile: false
      }
    };
    setCustomMediaMap(updated);
    try {
      localStorage.setItem('bre_unit1_custom_media', JSON.stringify(updated));
    } catch {
      // ignore
    }
    setShowUrlInput(false);
    setInputUrl('');
  };

  // Reset to default video
  const handleResetMedia = async () => {
    const updated = { ...customMediaMap };
    delete updated[currentTrack.id];
    setCustomMediaMap(updated);
    try {
      await deleteVideo(currentTrack.id);
      localStorage.setItem('bre_unit1_custom_media', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  // Track video time update and highlight matching transcript line
  const handleVideoTimeUpdate = () => {
    if (!videoRef.current) return;
    const time = videoRef.current.currentTime;
    setVideoCurrentTime(time);

    // Find the closest transcript line
    for (let i = currentTrack.transcript.length - 1; i >= 0; i--) {
      const line = currentTrack.transcript[i];
      const lineSec = parseTimeToSeconds(line.time);
      if (time >= lineSec) {
        setPlayingLineId(line.id);
        break;
      }
    }
  };

  // Play full track
  const handlePlayFullTrack = () => {
    if (isVideoTrack) {
      if (videoRef.current && isDirectVideoFile) {
        if (isVideoPlaying) {
          videoRef.current.pause();
          setIsVideoPlaying(false);
          setIsPlayingAll(false);
        } else {
          videoRef.current.playbackRate = playbackRate;
          videoRef.current.play().catch((err) => console.warn('Video play error:', err));
          setIsVideoPlaying(true);
          setIsPlayingAll(true);
        }
      } else {
        // When no direct video file is loaded yet: play speech audio of full text
        if (isPlayingAll) {
          stopAudio();
          setIsPlayingAll(false);
          setPlayingLineId(null);
        } else {
          setIsPlayingAll(true);
          playAudio(currentTrack.fullAudioText, {
            rate: playbackRate,
            onEnd: () => {
              setIsPlayingAll(false);
              setPlayingLineId(null);
            }
          });
        }
      }
    } else {
      // For textbook audio tracks
      if (isPlayingAll) {
        stopAudio();
        setIsPlayingAll(false);
        setPlayingLineId(null);
      } else {
        setIsPlayingAll(true);
        playAudio(currentTrack.fullAudioText, {
          rate: playbackRate,
          onEnd: () => {
            setIsPlayingAll(false);
            setPlayingLineId(null);
          }
        });
      }
    }
  };

  // Jump video directly to line timestamp
  const handleSeekVideoLine = (line: TranscriptLine, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    stopAudio();
    setPlayingLineId(line.id);

    if (videoRef.current && isDirectVideoFile) {
      const targetSec = parseTimeToSeconds(line.time);
      videoRef.current.currentTime = targetSec;
      videoRef.current.playbackRate = playbackRate;
      videoRef.current.play().catch((err) => console.warn('Play error:', err));
      setIsVideoPlaying(true);
      setIsPlayingAll(true);
    } else {
      // If video file is not loaded, play speech audio immediately
      playAudio(line.en, {
        rate: playbackRate,
        onEnd: () => setPlayingLineId(null)
      });
    }
  };

  // Play line pronunciation directly using clear British English synthesis
  const handleSpeakLine = (line: TranscriptLine, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (videoRef.current && !videoRef.current.paused) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
    stopAudio();
    setPlayingLineId(line.id);
    playAudio(line.en, {
      rate: playbackRate,
      onEnd: () => setPlayingLineId(null)
    });
  };

  // Click on line card: if video loaded, seek and play; otherwise speak line
  const handleLineClick = (line: TranscriptLine) => {
    if (isVideoTrack && videoRef.current && isDirectVideoFile) {
      handleSeekVideoLine(line);
    } else {
      handleSpeakLine(line);
    }
  };

  const handleSelectQuiz = (qId: number, optionIdx: number) => {
    if (quizSubmitted) return;
    setUserAnswers({ ...userAnswers, [qId]: optionIdx });
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-3xl border border-[#E8DFD5] bg-white p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#F0EAE1] pb-4 mb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#DCE8F7] px-3 py-1 text-xs font-bold text-[#2A5288] mb-2">
              <Headphones className="h-3.5 w-3.5" />
              Luyện nghe & Xem video thực tế
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#2D2A26]">
              Audio & Viewpoint Video Hub
            </h2>
            <p className="text-xs sm:text-sm text-[#70695E]">
              Tích hợp đầy đủ các bài nghe giáo trình Unit 1 và video tình huống thực tế Viewpoint 1 (Places of work). Có phụ đề song ngữ, chỉnh tốc độ và bài tập hiểu.
            </p>
          </div>

          {/* Speed controls */}
          <div className="flex items-center gap-1 rounded-2xl bg-[#FAF8F5] p-1.5 border border-[#E8DFD5] text-xs font-bold">
            <span className="text-[#70695E] px-2">Tốc độ:</span>
            {[
              { val: 0.8, label: '0.8x (Chậm)' },
              { val: 1.0, label: '1.0x (Chuẩn)' },
              { val: 1.2, label: '1.2x (Nhanh)' }
            ].map((speed) => (
              <button
                key={speed.val}
                type="button"
                onClick={() => setPlaybackRate(speed.val)}
                className={`rounded-xl px-2.5 py-1 transition-all ${
                  playbackRate === speed.val
                    ? 'bg-[#2D2A26] text-white shadow-2xs'
                    : 'text-[#5A544C] hover:bg-[#F0EAE1]'
                }`}
              >
                {speed.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tracks Selector Navigation */}
        <div className="flex flex-wrap gap-2">
          {UNIT1_LISTENING_TRACKS.map((track, idx) => (
            <button
              key={track.id}
              type="button"
              onClick={() => setActiveTrackIndex(idx)}
              className={`flex items-center gap-2 rounded-2xl px-3.5 py-2 text-xs font-bold transition-all ${
                activeTrackIndex === idx
                  ? 'bg-[#8EA66B] text-white shadow-xs'
                  : 'bg-[#FAF8F5] text-[#5A544C] border border-[#E8DFD5] hover:bg-[#F0EAE1]'
              }`}
            >
              {track.category === 'viewpoint-video' ? (
                <Video className="h-3.5 w-3.5" />
              ) : (
                <Headphones className="h-3.5 w-3.5" />
              )}
              <span>{track.trackCode}: {track.title.split(':')[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Active Track Player & Overview */}
      <div className="rounded-3xl border border-[#E8DFD5] bg-white p-6 shadow-xs space-y-5">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#F0EAE1] pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`rounded-lg px-2 py-0.5 text-[10px] font-extrabold uppercase ${
                isVideoTrack ? 'bg-[#DCE8F7] text-[#2A5288]' : 'bg-[#FFDCDC] text-[#8B4444]'
              }`}>
                {currentTrack.trackCode}
              </span>
              <span className="text-xs text-[#70695E] font-medium">Thời lượng: {currentTrack.duration}</span>
              {isVideoTrack && (
                <span className="flex items-center gap-1 rounded-md bg-[#EBF3E5] px-2 py-0.5 text-[10px] font-bold text-[#3B662A]">
                  <Film className="h-3 w-3" />
                  Video Người Bản Ngữ
                </span>
              )}
            </div>
            <h3 className="text-lg font-bold text-[#2D2A26]">{currentTrack.title}</h3>
            <p className="text-xs text-[#5A544C] mt-0.5">{currentTrack.description}</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePlayFullTrack}
              className={`flex items-center gap-2 rounded-2xl px-5 py-2.5 text-xs font-extrabold text-white shadow-md transition-all active:scale-95 ${
                (isVideoTrack ? isVideoPlaying : isPlayingAll)
                  ? 'bg-amber-600 animate-pulse'
                  : 'bg-[#8EA66B] hover:bg-[#7B925A]'
              }`}
            >
              {(isVideoTrack ? isVideoPlaying : isPlayingAll) ? (
                <>
                  <Pause className="h-4 w-4" />
                  <span>Đang phát {isVideoTrack ? 'Video' : 'toàn bài'} (Bấm để Dừng)</span>
                </>
              ) : (
                <>
                  <Play className="h-4 w-4 fill-current" />
                  <span>{isVideoTrack ? 'Phát Video Bản Ngữ' : 'Nghe Toàn Bộ Audio'} ({playbackRate}x)</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* ============================================================ */}
        {/* NATIVE VIDEO PLAYER VIEWPORT (For Viewpoint Video Tracks)     */}
        {/* ============================================================ */}
        {isVideoTrack && (
          <div className="rounded-2xl border-2 border-[#8EA66B]/40 bg-[#F7FAF5] p-4 sm:p-5 space-y-4 shadow-xs">
            {/* Native Voice Guarantee Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-white p-3 border border-[#D5E5CE]">
              <div className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EBF3E5] text-[#3B662A]">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-[#2D2A26]">
                    🎙️ Giọng Bản Ngữ Chuẩn Xác (Native English Voice & Video Sync)
                  </p>
                  <p className="text-[11px] text-[#70695E]">
                    Lời thoại và mốc thời gian đã được căn chuẩn từng giây theo video gốc Oxford. Bạn có thể nghe phát âm từng câu hoặc xem trực tiếp từ video.
                  </p>
                </div>
              </div>

              {/* Video customizer controls */}
              <div className="flex flex-wrap items-center gap-2">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept="video/*,audio/*"
                  className="hidden"
                />
                <input
                  type="file"
                  ref={multiFileInputRef}
                  onChange={handleFileUpload}
                  accept="video/*,audio/*"
                  multiple
                  className="hidden"
                />

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  title="Tải lên tệp video .mp4 cho bài này"
                  className="flex items-center gap-1.5 rounded-xl border border-[#8EA66B] bg-[#EBF3E5] px-3 py-1.5 text-xs font-bold text-[#3B662A] hover:bg-[#8EA66B] hover:text-white transition-all shadow-2xs"
                >
                  <Upload className="h-3.5 w-3.5" />
                  <span>Tải video bài này</span>
                </button>

                <button
                  type="button"
                  onClick={() => multiFileInputRef.current?.click()}
                  title="Tải nhiều tệp video cùng lúc (tự động phân loại Video 01, Video 02, Video 03...)"
                  className="flex items-center gap-1.5 rounded-xl border border-[#E8DFD5] bg-white px-3 py-1.5 text-xs font-semibold text-[#5A544C] hover:bg-[#F0EAE1] transition-all"
                >
                  <Film className="h-3.5 w-3.5" />
                  <span>Tải nhiều video</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowUrlInput(!showUrlInput)}
                  title="Dán đường dẫn video YouTube hoặc MP4 trực tiếp"
                  className="flex items-center gap-1.5 rounded-xl border border-[#E8DFD5] bg-white px-3 py-1.5 text-xs font-semibold text-[#5A544C] hover:bg-[#F0EAE1] transition-all"
                >
                  <Link2 className="h-3.5 w-3.5" />
                  <span>Dán link</span>
                </button>

                {currentCustomMedia && (
                  <button
                    type="button"
                    onClick={handleResetMedia}
                    title="Xóa video đã tải và trở về trạng thái mặc định"
                    className="flex items-center gap-1 rounded-xl border border-[#E8DFD5] bg-white px-2.5 py-1.5 text-xs font-semibold text-[#8B4444] hover:bg-red-50 transition-all"
                  >
                    <RotateCcw className="h-3 w-3" />
                    <span>Đặt lại</span>
                  </button>
                )}
              </div>
            </div>

            {/* URL input field if opened */}
            {showUrlInput && (
              <div className="flex items-center gap-2 rounded-xl bg-white p-3 border border-[#E8DFD5] animate-in fade-in duration-200">
                <input
                  type="text"
                  placeholder="Dán link video trực tiếp (MP4 URL)..."
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  className="flex-1 rounded-lg border border-[#E8DFD5] px-3 py-1.5 text-xs focus:border-[#8EA66B] focus:outline-none"
                />
                <button
                  type="button"
                  onClick={handleSaveCustomUrl}
                  className="rounded-lg bg-[#8EA66B] px-3.5 py-1.5 text-xs font-bold text-white hover:bg-[#7B925A]"
                >
                  Áp dụng
                </button>
              </div>
            )}

            {/* Custom file notice */}
            {currentCustomMedia && (
              <div className="flex items-center justify-between text-xs rounded-xl bg-[#EBF3E5] px-3 py-1.5 text-[#3B662A] font-medium">
                <span className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-[#3B662A]" />
                  <span>Đang phát video tệp gốc: <strong>{currentCustomMedia.fileName}</strong> (Lưu tự động vào trình duyệt)</span>
                </span>
                <span className="text-[10px] text-[#70695E]">Âm thanh gốc từ người bản ngữ</span>
              </div>
            )}

            {/* Video Viewport Container & Dropzone */}
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragOver(true);
              }}
              onDragLeave={() => setIsDragOver(false)}
              onDrop={handleDropFiles}
              className={`relative overflow-hidden rounded-2xl bg-black border transition-all aspect-video max-h-[460px] flex items-center justify-center ${
                isDragOver ? 'border-[#8EA66B] ring-4 ring-[#8EA66B]/30' : 'border-[#2D2A26]/20 shadow-sm'
              }`}
            >
              {isDirectVideoFile ? (
                <video
                  ref={videoRef}
                  src={activeVideoSrc}
                  controls
                  playsInline
                  preload="metadata"
                  onTimeUpdate={handleVideoTimeUpdate}
                  onPlay={() => setIsVideoPlaying(true)}
                  onPause={() => setIsVideoPlaying(false)}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="p-8 text-center text-white space-y-3 max-w-lg">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 mx-auto text-[#8EA66B]">
                    <Film className="h-7 w-7" />
                  </div>
                  <h4 className="font-bold text-base text-white">
                    Trình phát Video & Luyện nghe Bản ngữ: {currentTrack.trackCode}
                  </h4>
                  <p className="text-xs text-white/75 leading-relaxed">
                    Kéo và thả tệp video <strong>.mp4 / .webm</strong> của bạn vào đây hoặc bấm nút bên dưới để chọn tệp. Video sẽ được lưu vĩnh viễn trong trình duyệt.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-[#8EA66B] hover:bg-[#7B925A] px-4 py-2 text-xs font-bold text-white shadow-sm transition-all"
                    >
                      <Upload className="h-4 w-4" />
                      <span>Chọn tệp video từ máy tính</span>
                    </button>
                    <button
                      type="button"
                      onClick={handlePlayFullTrack}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-white/15 hover:bg-white/25 px-4 py-2 text-xs font-semibold text-white transition-all"
                    >
                      <Volume2 className="h-4 w-4" />
                      <span>{isPlayingAll ? 'Dừng phát' : 'Nghe toàn bài ngay'}</span>
                    </button>
                  </div>
                  <p className="text-[11px] text-[#8EA66B] pt-1">
                    💡 Bạn có thể bấm vào bất kỳ câu nào bên dưới để nghe phát âm chuẩn ngay lập tức!
                  </p>
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-between text-[11px] text-[#70695E] pt-1 gap-2">
              <span>
                💡 <em>Mẹo: Bấm <strong>"Phát âm"</strong> để nghe rõ từng từ, hoặc bấm <strong>"Xem video [mm:ss]"</strong> để video nhảy ngay đến đoạn nhân vật nói câu đó!</em>
              </span>
              {videoRef.current && (
                <span className="font-mono text-[#3B662A] font-bold">
                  Thời điểm video: {Math.floor(videoCurrentTime / 60)}:{('0' + Math.floor(videoCurrentTime % 60)).slice(-2)} / {currentTrack.duration}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Synchronized Transcript Lines */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-[#70695E] uppercase tracking-wider">
              {isVideoTrack
                ? 'Lời thoại video chi tiết (Căn chuẩn 100% theo video gốc Oxford):'
                : 'Lời thoại chi tiết (Bấm vào từng câu để nghe phát âm riêng biệt):'}
            </h4>
            {isVideoTrack && (
              <span className="rounded-full bg-[#EBF3E5] text-[#3B662A] px-2.5 py-0.5 text-[10px] font-bold">
                ✓ 15 lượt đối thoại theo 3 chủ đề câu hỏi
              </span>
            )}
          </div>

          <div className="space-y-2.5">
            {currentTrack.transcript.map((line) => {
              const isLinePlaying = playingLineId === line.id;

              return (
                <div
                  key={line.id}
                  onClick={() => handleLineClick(line)}
                  className={`cursor-pointer rounded-2xl p-4 border transition-all text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
                    isLinePlaying
                      ? 'border-[#8EA66B] bg-[#F4FAF2] ring-2 ring-[#8EA66B]/40 shadow-xs'
                      : 'border-[#E8DFD5] bg-[#FAF8F5] hover:border-[#D8A2A2]'
                  }`}
                >
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${
                        isLinePlaying ? 'bg-[#8EA66B] text-white' : 'bg-[#EBF3E5] text-[#3B662A]'
                      }`}>
                        {line.id}
                      </span>
                      <span className="font-extrabold text-[#8B4444] text-xs">{line.speaker}:</span>
                      {line.time && (
                        <span className="font-mono text-[10px] text-[#2A5288] bg-[#DCE8F7] px-1.5 py-0.5 rounded font-bold">
                          [{line.time}]
                        </span>
                      )}
                      {isLinePlaying && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#8EA66B] animate-pulse">
                          <Volume2 className="h-3 w-3" />
                          Đang phát
                        </span>
                      )}
                    </div>

                    <p className="text-sm font-semibold text-[#2D2A26] leading-relaxed pl-7">
                      "{line.en}"
                    </p>

                    {showVietnamese && (
                      <p className="text-[11px] text-[#70695E] italic pl-7 leading-relaxed">
                        {line.vi}
                      </p>
                    )}

                    {line.keyVocab && line.keyVocab.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pl-7 pt-1">
                        {line.keyVocab.map((kv) => (
                          <span
                            key={kv.word}
                            className="rounded-md bg-white border border-[#E8DFD5] px-2 py-0.5 text-[10px] font-semibold text-[#2A5288]"
                          >
                            <strong>{kv.word}</strong> <span className="font-mono text-[#70695E]">{kv.ipa}</span>: {kv.vi}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 self-end sm:self-center shrink-0">
                    <button
                      type="button"
                      onClick={(e) => handleSpeakLine(line, e)}
                      title="Nghe phát âm chuẩn câu này bằng giọng Anh bản ngữ"
                      className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        isLinePlaying
                          ? 'bg-[#8EA66B] text-white shadow-xs'
                          : 'bg-white border border-[#E8DFD5] text-[#5A544C] hover:bg-[#F0EAE1]'
                      }`}
                    >
                      <Volume2 className="h-3.5 w-3.5" />
                      <span>Phát âm</span>
                    </button>

                    {isVideoTrack && line.time && (
                      <button
                        type="button"
                        onClick={(e) => handleSeekVideoLine(line, e)}
                        title={`Xem đoạn video gốc tại thời điểm [${line.time}]`}
                        className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold bg-[#EBF3E5] border border-[#CDE1C4] text-[#3B662A] hover:bg-[#8EA66B] hover:text-white transition-all shadow-2xs"
                      >
                        <Video className="h-3.5 w-3.5" />
                        <span>Xem [{line.time}]</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Vocabulary Highlights */}
        {currentTrack.vocabHighlights && currentTrack.vocabHighlights.length > 0 && (
          <div className="rounded-2xl bg-[#FFFDF9] p-4 border border-[#F0EAE1] space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-[#8B4444] uppercase tracking-wider text-[11px]">
                Từ vựng đắt giá từ bài nghe/video này:
              </h4>
              {onQuickAddNote && (
                <button
                  type="button"
                  onClick={() => {
                    const vocabSummary = currentTrack.vocabHighlights
                      .map((v) => `• ${v.word} (${v.ipa}): ${v.meaning}`)
                      .join('\n');
                    onQuickAddNote(
                      `Từ vựng ${currentTrack.trackCode}: ${currentTrack.title.split(':')[0]}`,
                      vocabSummary
                    );
                  }}
                  className="flex items-center gap-1 text-[11px] font-bold text-[#8EA66B] hover:underline"
                >
                  <BookMarked className="h-3.5 w-3.5" />
                  <span>Lưu toàn bộ từ vựng vào Live Notes</span>
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
              {currentTrack.vocabHighlights.map((v) => (
                <div key={v.word} className="rounded-xl bg-white p-2.5 border border-[#E8DFD5]">
                  <p className="font-bold text-[#2D2A26]">{v.word}</p>
                  <p className="font-mono text-[10px] text-[#8B4444]">{v.ipa}</p>
                  <p className="text-[11px] text-[#5A544C] mt-0.5">{v.meaning}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Comprehension Quiz */}
        {currentTrack.questions && currentTrack.questions.length > 0 && (
          <div className="rounded-2xl bg-[#FAF8F5] p-5 border border-[#E8DFD5] space-y-4 text-xs">
            <div className="flex items-center justify-between border-b border-[#E8DFD5] pb-2">
              <h4 className="font-bold text-sm text-[#2D2A26]">
                Kiểm tra mức độ hiểu bài nghe ({currentTrack.questions.length} câu)
              </h4>
              {!quizSubmitted ? (
                <button
                  type="button"
                  onClick={() => setQuizSubmitted(true)}
                  className="rounded-xl bg-[#8EA66B] px-3.5 py-1.5 font-bold text-white shadow-2xs hover:bg-[#7B925A]"
                >
                  Kiểm tra đáp án
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setQuizSubmitted(false);
                    setUserAnswers({});
                  }}
                  className="flex items-center gap-1 font-bold text-[#70695E] hover:underline"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Làm lại</span>
                </button>
              )}
            </div>

            <div className="space-y-3">
              {currentTrack.questions.map((q, idx) => {
                const userAns = userAnswers[q.id];
                const isCorrect = userAns === q.correctIndex;

                return (
                  <div key={q.id} className="rounded-xl bg-white p-3.5 border border-[#E8DFD5] space-y-2">
                    <p className="font-bold text-[#2D2A26]">
                      Câu {idx + 1}: {q.question}
                    </p>

                    <div className="space-y-1.5">
                      {q.options.map((opt, optIdx) => {
                        const isSelected = userAns === optIdx;
                        const isOptionCorrect = optIdx === q.correctIndex;

                        return (
                          <button
                            key={optIdx}
                            type="button"
                            onClick={() => handleSelectQuiz(q.id, optIdx)}
                            className={`w-full text-left rounded-xl p-2 font-medium transition-all flex items-center justify-between ${
                              quizSubmitted
                                ? isOptionCorrect
                                  ? 'bg-[#EBF3E5] border border-[#8EA66B] text-[#283C21] font-bold'
                                  : isSelected
                                  ? 'bg-red-50 border border-red-300 text-red-700'
                                  : 'bg-[#FAF8F5] text-[#70695E]'
                                : isSelected
                                ? 'bg-[#FFDCDC] border border-[#D8A2A2] text-[#8B4444] font-bold'
                                : 'bg-[#FAF8F5] text-[#2D2A26] hover:bg-[#F0EAE1]'
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
                      <p className="text-[11px] text-[#70695E] italic pt-1 border-t border-[#F0EAE1]">
                        💡 {q.explanation}
                      </p>
                    )}
                  </div>
                );
              })}
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
          <span>Đánh dấu hoàn thành phần Nghe</span>
        </button>

        <button
          type="button"
          onClick={onNext}
          className="flex items-center gap-2 rounded-xl bg-[#8EA66B] px-5 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-[#7B925A] active:scale-95 transition-all"
        >
          <span>Tiếp theo: 07. Luyện nói cá nhân</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

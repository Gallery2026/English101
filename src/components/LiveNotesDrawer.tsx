import React, { useState } from 'react';
import {
  X,
  Plus,
  Link as LinkIcon,
  Trash2,
  ExternalLink,
  Save,
  BookMarked,
  Tag,
  Copy,
  Check,
  Search,
  Sparkles
} from 'lucide-react';
import { LiveNote, NoteLink, TabId } from '../types';

interface LiveNotesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  notes: LiveNote[];
  currentSection: TabId;
  onSaveNote: (note: Partial<LiveNote>) => void;
  onDeleteNote: (id: string) => void;
}

export const LiveNotesDrawer: React.FC<LiveNotesDrawerProps> = ({
  isOpen,
  onClose,
  notes,
  currentSection,
  onSaveNote,
  onDeleteNote
}) => {
  const [activeTab, setActiveTab] = useState<'create' | 'list'>('create');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Form state
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [noteSection, setNoteSection] = useState<TabId>(currentSection);
  const [links, setLinks] = useState<NoteLink[]>([]);

  // Link input fields
  const [linkTitle, setLinkTitle] = useState('');
  const [linkUrl, setLinkUrl] = useState('');
  const [isAddingLink, setIsAddingLink] = useState(false);

  if (!isOpen) return null;

  const handleAddLink = () => {
    if (!linkUrl.trim()) return;
    const formattedUrl = linkUrl.startsWith('http://') || linkUrl.startsWith('https://')
      ? linkUrl.trim()
      : `https://${linkUrl.trim()}`;

    const newLink: NoteLink = {
      id: Date.now().toString(),
      title: linkTitle.trim() || formattedUrl,
      url: formattedUrl
    };

    setLinks([...links, newLink]);
    setLinkTitle('');
    setLinkUrl('');
    setIsAddingLink(false);
  };

  const handleRemoveLink = (id: string) => {
    setLinks(links.filter((l) => l.id !== id));
  };

  const handleSave = () => {
    if (!noteTitle.trim() && !noteContent.trim() && links.length === 0) return;

    onSaveNote({
      id: Date.now().toString(),
      sectionId: noteSection,
      title: noteTitle.trim() || `Ghi chú ${new Date().toLocaleDateString('vi-VN')}`,
      content: noteContent.trim(),
      links,
      tags: [noteSection]
    });

    // Reset form
    setNoteTitle('');
    setNoteContent('');
    setLinks([]);
    setActiveTab('list');
  };

  const handleCopyNote = (note: LiveNote) => {
    const text = `${note.title}\n(${note.sectionId.toUpperCase()})\n\n${note.content}\n\nLiên kết:\n${note.links
      .map((l) => `- ${l.title}: ${l.url}`)
      .join('\n')}`;
    navigator.clipboard.writeText(text);
    setCopiedId(note.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredNotes = notes.filter(
    (n) =>
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.links.some((l) => l.title.toLowerCase().includes(searchQuery.toLowerCase()) || l.url.includes(searchQuery))
  );

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      <div className="flex h-full w-full max-w-md flex-col bg-[#FAF8F5] shadow-2xl border-l border-[#E8DFD5] text-[#2D2A26]">
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-[#E8DFD5] bg-white px-5 py-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#FFDCDC] text-[#8B4444]">
              <BookMarked className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-[#2D2A26]">Live Notes Cá Nhân</h3>
              <p className="text-[11px] text-[#70695E]">Ghi chú & chèn link trực tiếp</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex rounded-xl bg-[#FAF8F5] p-1 border border-[#E8DFD5] text-xs">
              <button
                type="button"
                onClick={() => setActiveTab('create')}
                className={`rounded-lg px-2.5 py-1 font-bold transition-all ${
                  activeTab === 'create'
                    ? 'bg-[#8EA66B] text-white shadow-2xs'
                    : 'text-[#5A544C] hover:text-[#2D2A26]'
                }`}
              >
                + Thêm
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('list')}
                className={`rounded-lg px-2.5 py-1 font-bold transition-all ${
                  activeTab === 'list'
                    ? 'bg-[#8EA66B] text-white shadow-2xs'
                    : 'text-[#5A544C] hover:text-[#2D2A26]'
                }`}
              >
                Đã lưu ({notes.length})
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl p-1.5 text-[#70695E] hover:bg-[#F0EAE1] transition-all"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-5">
          {activeTab === 'create' ? (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-[#5A544C] block mb-1">
                  Chủ đề / Tiêu đề ghi chú:
                </label>
                <input
                  type="text"
                  placeholder="Ví dụ: Quy tắc trọng âm, Link website Marcegaglia..."
                  value={noteTitle}
                  onChange={(e) => setNoteTitle(e.target.value)}
                  className="w-full rounded-2xl border border-[#E8DFD5] bg-white px-3.5 py-2.5 text-xs font-semibold text-[#2D2A26] focus:border-[#8EA66B] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#5A544C] block mb-1">
                  Phần học liên quan:
                </label>
                <select
                  value={noteSection}
                  onChange={(e) => setNoteSection(e.target.value as TabId)}
                  className="w-full rounded-2xl border border-[#E8DFD5] bg-white px-3.5 py-2 text-xs font-medium text-[#2D2A26]"
                >
                  <option value="overview">01. Overview & Warm-up</option>
                  <option value="vocabulary">02. Vocabulary (Từ vựng)</option>
                  <option value="pronunciation">03. Pronunciation & Spelling</option>
                  <option value="grammar">04. Grammar (TO BE & Sở hữu)</option>
                  <option value="practice">05. Practice Exercises</option>
                  <option value="listening">06. Listening & Video Hub</option>
                  <option value="pairwork">07. Speaking & Self-Drill</option>
                  <option value="communication">08. Business Communication</option>
                  <option value="game">09. Introductions Game</option>
                  <option value="review">10. Review & Can-Do</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-[#5A544C] block mb-1">
                  Nội dung ghi chú:
                </label>
                <textarea
                  rows={6}
                  placeholder="Viết tóm tắt kiến thức, ví dụ hay, cấu trúc cần nhớ tại đây..."
                  value={noteContent}
                  onChange={(e) => setNoteContent(e.target.value)}
                  className="w-full rounded-2xl border border-[#E8DFD5] bg-white p-3.5 text-xs leading-relaxed text-[#2D2A26] focus:border-[#8EA66B] focus:outline-none resize-none"
                />
              </div>

              {/* Chèn liên kết trực tiếp */}
              <div className="rounded-2xl border border-[#E8DFD5] bg-white p-3.5 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#2A5288]">
                    <LinkIcon className="h-4 w-4" />
                    <span>Liên kết đính kèm ({links.length})</span>
                  </div>
                  {!isAddingLink && (
                    <button
                      type="button"
                      onClick={() => setIsAddingLink(true)}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#8EA66B] hover:underline"
                    >
                      <Plus className="h-3 w-3" />
                      <span>Chèn link</span>
                    </button>
                  )}
                </div>

                {isAddingLink && (
                  <div className="rounded-xl bg-[#FAF8F5] p-3 border border-[#E8DFD5] space-y-2 text-xs mt-2">
                    <input
                      type="text"
                      placeholder="Tên hiển thị (Ví dụ: Tra từ điển Oxford, Bài báo gốc)"
                      value={linkTitle}
                      onChange={(e) => setLinkTitle(e.target.value)}
                      className="w-full rounded-xl border border-[#E8DFD5] bg-white px-2.5 py-1.5 text-xs focus:outline-none focus:border-[#8EA66B]"
                    />
                    <input
                      type="url"
                      placeholder="https://oxfordlearnersdictionaries.com/..."
                      value={linkUrl}
                      onChange={(e) => setLinkUrl(e.target.value)}
                      className="w-full rounded-xl border border-[#E8DFD5] bg-white px-2.5 py-1.5 text-xs font-mono focus:outline-none focus:border-[#8EA66B]"
                    />
                    <div className="flex justify-end gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => setIsAddingLink(false)}
                        className="rounded-lg px-2.5 py-1 text-[11px] font-semibold text-[#70695E] hover:bg-[#F0EAE1]"
                      >
                        Hủy
                      </button>
                      <button
                        type="button"
                        onClick={handleAddLink}
                        className="rounded-lg bg-[#8EA66B] px-3 py-1 text-[11px] font-bold text-white hover:bg-[#7B925A]"
                      >
                        Lưu Link
                      </button>
                    </div>
                  </div>
                )}

                {/* Attached Links List */}
                {links.length > 0 && (
                  <div className="space-y-1.5 pt-1">
                    {links.map((link) => (
                      <div
                        key={link.id}
                        className="flex items-center justify-between rounded-xl bg-[#F4F9FF] px-2.5 py-1.5 border border-[#DCE8F7] text-xs"
                      >
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 font-bold text-[#2A5288] hover:underline truncate max-w-[280px]"
                        >
                          <ExternalLink className="h-3 w-3 shrink-0" />
                          <span className="truncate">{link.title}</span>
                        </a>
                        <button
                          type="button"
                          onClick={() => handleRemoveLink(link.id)}
                          className="text-red-500 hover:text-red-700 p-1"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action save */}
              <button
                type="button"
                onClick={handleSave}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#8EA66B] py-3 text-xs font-bold text-white shadow-xs hover:bg-[#7B925A] active:scale-98 transition-all"
              >
                <Save className="h-4 w-4" />
                <span>Lưu Ghi Chú Này</span>
              </button>
            </div>
          ) : (
            /* Notes List */
            <div className="space-y-3">
              {/* Search Bar */}
              <div className="relative mb-3">
                <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-[#70695E]" />
                <input
                  type="text"
                  placeholder="Tìm kiếm trong ghi chú..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-2xl border border-[#E8DFD5] bg-white pl-8 pr-3 py-2 text-xs focus:outline-none focus:border-[#8EA66B]"
                />
              </div>

              {filteredNotes.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-[#E8DFD5] p-6 text-center text-xs text-[#70695E]">
                  <p className="font-semibold">Chưa có ghi chú nào.</p>
                  <p className="mt-1">Bấm nút "+ Thêm" để tạo ghi chú và lưu liên kết học tập của bạn.</p>
                </div>
              ) : (
                filteredNotes.map((n) => (
                  <div
                    key={n.id}
                    className="rounded-2xl border border-[#E8DFD5] bg-white p-4 text-xs space-y-2.5 shadow-2xs"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-extrabold text-[#2D2A26] text-sm">{n.title}</h4>
                        <span className="inline-block rounded-md bg-[#FAF8F5] px-1.5 py-0.5 text-[10px] font-bold text-[#8EA66B] border border-[#E8DFD5] mt-1">
                          #{n.sectionId}
                        </span>
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => handleCopyNote(n)}
                          title="Sao chép ghi chú"
                          className="rounded-lg p-1 text-[#70695E] hover:bg-[#FAF8F5]"
                        >
                          {copiedId === n.id ? (
                            <Check className="h-3.5 w-3.5 text-[#8EA66B]" />
                          ) : (
                            <Copy className="h-3.5 w-3.5" />
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={() => onDeleteNote(n.id)}
                          title="Xóa ghi chú"
                          className="rounded-lg p-1 text-red-400 hover:text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>

                    {n.content && (
                      <p className="text-[#5A544C] leading-relaxed whitespace-pre-line font-medium bg-[#FAF8F5] p-2.5 rounded-xl border border-[#F0EAE1]">
                        {n.content}
                      </p>
                    )}

                    {/* Render clickable links */}
                    {n.links && n.links.length > 0 && (
                      <div className="space-y-1 pt-1 border-t border-[#F0EAE1]">
                        <span className="text-[10px] font-bold uppercase text-[#70695E] tracking-wider block">
                          Liên kết đính kèm:
                        </span>
                        {n.links.map((link) => (
                          <a
                            key={link.id}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs font-bold text-[#2A5288] hover:text-[#1D3A63] hover:underline"
                          >
                            <ExternalLink className="h-3 w-3 shrink-0" />
                            <span className="truncate">{link.title}</span>
                          </a>
                        ))}
                      </div>
                    )}

                    <div className="text-[10px] text-[#A39C91] pt-1">
                      {new Date(n.updatedAt).toLocaleString('vi-VN')}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

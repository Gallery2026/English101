import React, { useState } from 'react';
import {
  BookMarked,
  Plus,
  Link as LinkIcon,
  Trash2,
  ExternalLink,
  Save,
  Search,
  Copy,
  Check,
  Download,
  Share2,
  FolderOpen,
  Sparkles
} from 'lucide-react';
import { LiveNote, NoteLink, TabId } from '../../types';

interface LiveNotesSectionProps {
  notes: LiveNote[];
  onSaveNote: (note: Partial<LiveNote>) => void;
  onDeleteNote: (id: string) => void;
}

export const LiveNotesSection: React.FC<LiveNotesSectionProps> = ({
  notes,
  onSaveNote,
  onDeleteNote
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Form states
  const [isCreating, setIsCreating] = useState(false);
  const [title, setTitle] = useState('');
  const [sectionId, setSectionId] = useState<TabId>('vocabulary');
  const [content, setContent] = useState('');
  const [links, setLinks] = useState<NoteLink[]>([]);

  // Link inputs
  const [linkTitle, setLinkTitle] = useState('');
  const [linkUrl, setLinkUrl] = useState('');
  const [isAddingLink, setIsAddingLink] = useState(false);

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

  const handleSave = () => {
    if (!title.trim() && !content.trim() && links.length === 0) return;

    onSaveNote({
      id: Date.now().toString(),
      sectionId,
      title: title.trim() || `Ghi chú ${new Date().toLocaleDateString('vi-VN')}`,
      content: content.trim(),
      links,
      tags: [sectionId]
    });

    setTitle('');
    setContent('');
    setLinks([]);
    setIsCreating(false);
  };

  const handleCopyNote = (note: LiveNote) => {
    const text = `${note.title}\n[Mục: ${note.sectionId.toUpperCase()}]\n\n${note.content}\n\nLiên kết:\n${note.links
      .map((l) => `- ${l.title}: ${l.url}`)
      .join('\n')}`;
    navigator.clipboard.writeText(text);
    setCopiedId(note.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleExportMarkdown = () => {
    const text = `# GHI CHÚ TỰ HỌC - BUSINESS RESULT ELEMENTARY UNIT 1
Xuất ngày: ${new Date().toLocaleString('vi-VN')}

${notes
  .map(
    (n) => `## ${n.title} [${n.sectionId.toUpperCase()}]
${n.content}

### Liên kết đính kèm:
${n.links.map((l) => `- [${l.title}](${l.url})`).join('\n')}

---`
  )
  .join('\n\n')}`;

    const blob = new Blob([text], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `BRE_Unit1_Notes_${Date.now()}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const filteredNotes = notes.filter((n) => {
    const matchesFilter = selectedFilter === 'all' || n.sectionId === selectedFilter;
    const matchesSearch =
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.links.some((l) => l.title.toLowerCase().includes(searchQuery.toLowerCase()) || l.url.includes(searchQuery));
    return matchesFilter && matchesSearch;
  });

  const allLinksCount = notes.reduce((acc, n) => acc + (n.links?.length || 0), 0);

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-3xl border border-[#E8DFD5] bg-white p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#F0EAE1] pb-4 mb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FFDCDC] px-3 py-1 text-xs font-bold text-[#8B4444] mb-2">
              <BookMarked className="h-3.5 w-3.5" />
              Sổ tay học tập cá nhân
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#2D2A26]">
              Live Notes & Kho Liên Kết Tài Liệu
            </h2>
            <p className="text-xs sm:text-sm text-[#70695E]">
              Tổng hợp kiến thức tự học riêng, ghi lại điểm ngữ pháp, phát âm và chèn trực tiếp các đường link tài liệu tham khảo.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsCreating(true)}
              className="flex items-center gap-1.5 rounded-2xl bg-[#8EA66B] px-4 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-[#7B925A] active:scale-95 transition-all"
            >
              <Plus className="h-4 w-4" />
              <span>Tạo Ghi Chú Mới</span>
            </button>

            {notes.length > 0 && (
              <button
                type="button"
                onClick={handleExportMarkdown}
                className="flex items-center gap-1.5 rounded-2xl border border-[#E8DFD5] bg-[#FAF8F5] px-3.5 py-2.5 text-xs font-bold text-[#5A544C] hover:bg-[#F0EAE1] transition-all"
              >
                <Download className="h-4 w-4" />
                <span>Tải Markdown (.md)</span>
              </button>
            )}
          </div>
        </div>

        {/* Stats strip */}
        <div className="flex flex-wrap gap-4 text-xs font-semibold text-[#70695E]">
          <div>
            📝 Tổng số ghi chú: <strong className="text-[#2D2A26]">{notes.length}</strong>
          </div>
          <div>•</div>
          <div>
            🔗 Tổng liên kết đã lưu: <strong className="text-[#2A5288]">{allLinksCount}</strong>
          </div>
          <div>•</div>
          <div>
            ⚡ Tự động đồng bộ: <strong className="text-[#8EA66B]">Trình duyệt của bạn</strong>
          </div>
        </div>
      </div>

      {/* Quick Add Form Modal / Box */}
      {isCreating && (
        <div className="rounded-3xl border border-[#8EA66B] bg-white p-6 shadow-md transition-all">
          <div className="flex items-center justify-between border-b border-[#F0EAE1] pb-3 mb-4">
            <h3 className="text-base font-extrabold text-[#2D2A26]">Soạn Ghi Chú Mới</h3>
            <button
              type="button"
              onClick={() => setIsCreating(false)}
              className="text-xs text-[#70695E] hover:underline"
            >
              Đóng form
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-8 space-y-3">
              <div>
                <label className="text-xs font-bold text-[#5A544C] block mb-1">
                  Tiêu đề ghi chú:
                </label>
                <input
                  type="text"
                  placeholder="Ví dụ: Quy tắc to be khi nói ngắn, Trang web công ty Ý..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full rounded-2xl border border-[#E8DFD5] bg-white px-3.5 py-2.5 text-xs font-bold text-[#2D2A26] focus:border-[#8EA66B] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#5A544C] block mb-1">
                  Nội dung ghi chú:
                </label>
                <textarea
                  rows={5}
                  placeholder="Viết kiến thức đúc kết, câu ví dụ hay, cấu trúc cần lưu ý..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full rounded-2xl border border-[#E8DFD5] bg-white p-3.5 text-xs leading-relaxed text-[#2D2A26] focus:border-[#8EA66B] focus:outline-none resize-none"
                />
              </div>
            </div>

            <div className="md:col-span-4 space-y-3">
              <div>
                <label className="text-xs font-bold text-[#5A544C] block mb-1">
                  Phần học liên quan:
                </label>
                <select
                  value={sectionId}
                  onChange={(e) => setSectionId(e.target.value as TabId)}
                  className="w-full rounded-2xl border border-[#E8DFD5] bg-white px-3 py-2 text-xs font-bold text-[#2D2A26]"
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

              {/* Chèn link trực tiếp */}
              <div className="rounded-2xl border border-[#E8DFD5] bg-[#FAF8F5] p-3.5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#2A5288]">Chèn liên kết trực tiếp</span>
                  {!isAddingLink && (
                    <button
                      type="button"
                      onClick={() => setIsAddingLink(true)}
                      className="text-[11px] font-bold text-[#8EA66B] hover:underline"
                    >
                      + Thêm Link
                    </button>
                  )}
                </div>

                {isAddingLink && (
                  <div className="rounded-xl bg-white p-2.5 border border-[#E8DFD5] space-y-2 text-xs">
                    <input
                      type="text"
                      placeholder="Tên link (Ví dụ: Từ điển Cambridge)"
                      value={linkTitle}
                      onChange={(e) => setLinkTitle(e.target.value)}
                      className="w-full rounded-lg border border-[#E8DFD5] px-2 py-1 text-xs"
                    />
                    <input
                      type="url"
                      placeholder="https://..."
                      value={linkUrl}
                      onChange={(e) => setLinkUrl(e.target.value)}
                      className="w-full rounded-lg border border-[#E8DFD5] px-2 py-1 text-xs font-mono"
                    />
                    <div className="flex justify-end gap-1 pt-1">
                      <button
                        type="button"
                        onClick={() => setIsAddingLink(false)}
                        className="px-2 py-1 text-[11px] text-[#70695E]"
                      >
                        Hủy
                      </button>
                      <button
                        type="button"
                        onClick={handleAddLink}
                        className="rounded bg-[#8EA66B] px-2.5 py-1 text-[11px] font-bold text-white"
                      >
                        Lưu
                      </button>
                    </div>
                  </div>
                )}

                {links.length > 0 && (
                  <div className="space-y-1">
                    {links.map((link) => (
                      <div
                        key={link.id}
                        className="flex items-center justify-between rounded-lg bg-white px-2 py-1 border border-[#E8DFD5] text-[11px]"
                      >
                        <span className="truncate font-medium text-[#2A5288]">{link.title}</span>
                        <button
                          type="button"
                          onClick={() => setLinks(links.filter((l) => l.id !== link.id))}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={handleSave}
                className="w-full flex items-center justify-center gap-1.5 rounded-2xl bg-[#8EA66B] py-2.5 text-xs font-bold text-white shadow-xs hover:bg-[#7B925A]"
              >
                <Save className="h-4 w-4" />
                <span>Lưu Ghi Chú</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#E8DFD5] bg-white p-4">
        <div className="flex flex-wrap items-center gap-1.5 text-xs font-bold">
          <span className="text-[#70695E] mr-1">Lọc mục:</span>
          {[
            { id: 'all', label: 'Tất cả' },
            { id: 'vocabulary', label: 'Từ vựng' },
            { id: 'pronunciation', label: 'Phát âm' },
            { id: 'grammar', label: 'Ngữ pháp' },
            { id: 'listening', label: 'Nghe' },
            { id: 'communication', label: 'Giao tiếp' }
          ].map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setSelectedFilter(f.id)}
              className={`rounded-xl px-3 py-1.5 transition-all ${
                selectedFilter === f.id
                  ? 'bg-[#2D2A26] text-white'
                  : 'bg-[#FAF8F5] text-[#5A544C] hover:bg-[#F0EAE1]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-[#70695E]" />
          <input
            type="text"
            placeholder="Tìm theo từ khóa hoặc link..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-[#E8DFD5] bg-[#FAF8F5] pl-8 pr-3 py-1.5 text-xs focus:outline-none focus:border-[#8EA66B]"
          />
        </div>
      </div>

      {/* Notes Grid */}
      {filteredNotes.length === 0 ? (
        <div className="rounded-3xl border-2 border-dashed border-[#E8DFD5] bg-white p-12 text-center text-xs text-[#70695E]">
          <BookMarked className="mx-auto h-10 w-10 text-[#D8A2A2] mb-2" />
          <h4 className="text-sm font-bold text-[#2D2A26]">Chưa có ghi chú nào phù hợp</h4>
          <p className="mt-1">
            Bấm nút <strong>"Tạo Ghi Chú Mới"</strong> hoặc dùng thanh trượt nhanh để lưu kiến thức tự học của bạn.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredNotes.map((note) => (
            <div
              key={note.id}
              className="rounded-3xl border border-[#E8DFD5] bg-white p-5 text-xs space-y-3 shadow-xs hover:border-[#8EA66B] transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="rounded-md bg-[#FAF8F5] border border-[#E8DFD5] px-2 py-0.5 text-[10px] font-extrabold text-[#8EA66B] uppercase">
                      #{note.sectionId}
                    </span>
                    <h3 className="font-extrabold text-sm text-[#2D2A26] mt-1.5">
                      {note.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => handleCopyNote(note)}
                      title="Sao chép ghi chú"
                      className="rounded-lg p-1 text-[#70695E] hover:bg-[#FAF8F5]"
                    >
                      {copiedId === note.id ? (
                        <Check className="h-3.5 w-3.5 text-[#8EA66B]" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => onDeleteNote(note.id)}
                      title="Xóa ghi chú"
                      className="rounded-lg p-1 text-red-400 hover:text-red-600 hover:bg-red-50"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

                {note.content && (
                  <p className="text-[#4A453E] leading-relaxed whitespace-pre-line font-medium bg-[#FAF8F5] p-3 rounded-2xl border border-[#F0EAE1]">
                    {note.content}
                  </p>
                )}

                {/* Clickable Links with preview */}
                {note.links && note.links.length > 0 && (
                  <div className="space-y-1.5 pt-2 border-t border-[#F0EAE1]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#70695E] block">
                      Liên kết đính kèm ({note.links.length}):
                    </span>
                    <div className="space-y-1">
                      {note.links.map((link) => (
                        <a
                          key={link.id}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between rounded-xl bg-[#F4F9FF] px-3 py-2 border border-[#DCE8F7] hover:bg-[#EBF3FC] transition-all group"
                        >
                          <div className="flex items-center gap-2 truncate max-w-[80%]">
                            <ExternalLink className="h-3.5 w-3.5 text-[#2A5288] shrink-0" />
                            <span className="font-bold text-[#2A5288] group-hover:underline truncate">
                              {link.title}
                            </span>
                          </div>
                          <span className="font-mono text-[10px] text-[#64748B] shrink-0">
                            {new URL(link.url).hostname}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-[#F0EAE1] text-[10px] text-[#70695E] flex items-center justify-between">
                <span>Cập nhật: {new Date(note.updatedAt).toLocaleString('vi-VN')}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

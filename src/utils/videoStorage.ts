// IndexedDB helper for storing and retrieving user-uploaded video blobs permanently
const DB_NAME = 'BusinessResultVideoDB';
const STORE_NAME = 'viewpoint_videos';
const DB_VERSION = 1;

export interface StoredVideoRecord {
  trackId: string;
  blob: Blob;
  fileName: string;
  size: number;
  updatedAt: number;
}

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') {
      reject(new Error('IndexedDB is not supported in this environment'));
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'trackId' });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function saveVideoFile(trackId: string, file: File | Blob, fileName: string): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);

    const record: StoredVideoRecord = {
      trackId,
      blob: file,
      fileName,
      size: file.size,
      updatedAt: Date.now()
    };

    store.put(record);

    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function getVideoFile(trackId: string): Promise<StoredVideoRecord | null> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const request = store.get(trackId);

      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(request.error);
    });
  } catch {
    return null;
  }
}

export async function getAllVideos(): Promise<Record<string, StoredVideoRecord>> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const request = store.openCursor();
      const results: Record<string, StoredVideoRecord> = {};

      request.onsuccess = (e) => {
        const cursor = (e.target as IDBRequest<IDBCursorWithValue>).result;
        if (cursor) {
          results[cursor.key as string] = cursor.value;
          cursor.continue();
        } else {
          resolve(results);
        }
      };

      request.onerror = () => reject(request.error);
    });
  } catch {
    return {};
  }
}

export async function deleteVideo(trackId: string): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    store.delete(trackId);

    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function clearAllVideos(): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    store.clear();

    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

// Auto-match file name to track ID
export function matchFileNameToTrackId(fileName: string, trackIds: string[]): string | null {
  const lower = fileName.toLowerCase();

  // Try direct code matching
  if (lower.includes('viewpoint 1') || lower.includes('vp1') || lower.includes('viewpoint1')) {
    if (lower.includes('video 01') || lower.includes('video 1') || lower.includes('video01')) return 'video-vp1-01';
    if (lower.includes('video 02') || lower.includes('video 2') || lower.includes('video02')) return 'video-vp1-02';
    if (lower.includes('video 03') || lower.includes('video 3') || lower.includes('video03')) return 'video-vp1-03';
    if (lower.includes('video 04') || lower.includes('video 4') || lower.includes('video04')) return 'video-vp1-04';
    if (lower.includes('video 05') || lower.includes('video 5') || lower.includes('video05')) return 'video-vp1-05';
  }

  if (lower.includes('viewpoint 2') || lower.includes('vp2') || lower.includes('viewpoint2')) {
    if (lower.includes('video 01') || lower.includes('video 1') || lower.includes('video01')) return 'video-vp2-01';
    if (lower.includes('video 02') || lower.includes('video 2') || lower.includes('video02')) return 'video-vp2-02';
  }

  if (lower.includes('viewpoint 3') || lower.includes('vp3') || lower.includes('viewpoint3')) {
    if (lower.includes('video 01') || lower.includes('video 1') || lower.includes('video01')) return 'video-vp3-01';
    if (lower.includes('video 02') || lower.includes('video 2') || lower.includes('video02')) return 'video-vp3-02';
  }

  if (lower.includes('viewpoint 4') || lower.includes('vp4') || lower.includes('viewpoint4')) {
    if (lower.includes('video 01') || lower.includes('video 1') || lower.includes('video01')) return 'video-vp4-01';
    if (lower.includes('video 02') || lower.includes('video 2') || lower.includes('video02')) return 'video-vp4-02';
  }

  // Fallback check against trackIds
  for (const tid of trackIds) {
    const cleanId = tid.replace('video-', '').replace(/-/g, ' ');
    if (lower.includes(cleanId)) return tid;
  }

  return null;
}

/**
 * SuperMemo SM-2 Spaced Repetition Engine
 * Manages item review schedules, ease factors, intervals, and localStorage persistence.
 */

export interface SRSCardState {
  id: string;
  repetitions: number;
  interval: number; // in days
  easeFactor: number;
  nextReviewDate: number; // timestamp in ms
  lastReviewDate: number; // timestamp in ms
  history: number[]; // history of quality scores (0-5)
}

export type ReviewQuality = 0 | 1 | 2 | 3 | 4 | 5; // 0=Again, 1=Hard, 3=Good, 5=Easy

const SRS_STORAGE_KEY = 'learn_korean_srs_data_v1';
const DEFAULT_EASE_FACTOR = 2.5;

export function calculateSM2(card: SRSCardState | null, quality: ReviewQuality): SRSCardState {
  const now = Date.now();
  let repetitions = card ? card.repetitions : 0;
  let interval = card ? card.interval : 0;
  let easeFactor = card ? card.easeFactor : DEFAULT_EASE_FACTOR;
  const history = card ? [...card.history, quality] : [quality];

  if (quality >= 3) {
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * easeFactor);
    }
    repetitions += 1;
  } else {
    repetitions = 0;
    interval = 1;
  }

  // Calculate new Ease Factor
  easeFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  if (easeFactor < 1.3) easeFactor = 1.3;

  const nextReviewDate = now + interval * 24 * 60 * 60 * 1000;

  return {
    id: card ? card.id : 'unknown',
    repetitions,
    interval,
    easeFactor,
    nextReviewDate,
    lastReviewDate: now,
    history,
  };
}

export function getAllSRSStates(): Record<string, SRSCardState> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(SRS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.error('Failed to parse SRS storage', e);
    return {};
  }
}

export function saveSRSState(id: string, quality: ReviewQuality): SRSCardState {
  const all = getAllSRSStates();
  const current = all[id] || { id, repetitions: 0, interval: 0, easeFactor: DEFAULT_EASE_FACTOR, nextReviewDate: 0, lastReviewDate: 0, history: [] };
  const updated = calculateSM2(current, quality);
  updated.id = id;
  all[id] = updated;

  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(SRS_STORAGE_KEY, JSON.stringify(all));
    } catch (e) {
      console.error('Failed to write SRS storage', e);
    }
  }

  return updated;
}

export function getDueCardIds(allIds: string[]): string[] {
  const all = getAllSRSStates();
  const now = Date.now();

  return allIds.filter(id => {
    const state = all[id];
    if (!state) return true; // new card is due
    return state.nextReviewDate <= now;
  });
}

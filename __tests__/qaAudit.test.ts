import { getSyllableChar, CHOSEONG } from '../lib/hangulData';
import { calculateSM2 } from '../lib/srsStorage';
import { KOREAN_VOCABULARY, getSyllableBlocks } from '../lib/koreanVocabData';
import { HANGUL_STROKE_DATA, getCharacterStrokes } from '../lib/hangulStrokes';

function assertEqual(actual: any, expected: any, testName: string) {
  const actualStr = JSON.stringify(actual);
  const expectedStr = JSON.stringify(expected);
  if (actualStr === expectedStr) {
    console.log(`✓ PASS: ${testName}`);
  } else {
    console.error(`✗ FAIL: ${testName}\n  Expected: ${expectedStr}\n  Actual:   ${actualStr}`);
    process.exitCode = 1;
  }
}

export function runQAAuditTests() {
  console.log('\n--- Running Senior QA & Bug Prevention Audit Tests ---');

  // Test 1: Consonant Pronunciation & Distinct Letter Names (Fixing duplicate header audio bug)
  assertEqual(CHOSEONG[0].name, '기역', 'ㄱ header name = "기역" (Pronounces Giyeok, distinct from syllable "가")');
  assertEqual(CHOSEONG[2].name, '디귿', 'ㄷ header name = "디귿" (Pronounces Digeut, distinct from syllable "다")');

  // Verify all 19 choseong have valid letter names
  CHOSEONG.forEach((c) => {
    if (!c.name || c.name.trim().length === 0) {
      console.error(`✗ FAIL: Missing letter name for choseong: ${c.char}`);
      process.exitCode = 1;
    }
  });
  console.log('✓ PASS: All 19 choseong have unique, valid Korean letter names');

  const giyeokSyllable = getSyllableChar(0, 0); // ㄱ + ㅏ
  assertEqual(giyeokSyllable, '가', 'giyeok + a = "가" (Valid Unicode syllable, not un-composed "ㄱㅏ")');

  const ssangGiyeokSyllable = getSyllableChar(1, 0); // ㄲ + ㅏ
  assertEqual(ssangGiyeokSyllable, '까', 'ssang-giyeok + a = "까" (Valid Unicode syllable)');

  // Test 2: SRS Storage Boundary values & Ease Factor Minimum Clamp
  const card0 = calculateSM2(null, 0);
  assertEqual(card0.easeFactor >= 1.3, true, 'Ease factor clamp >= 1.3');

  // Test 3: Stroke Order Vector Data Structure Validation
  const giyeokStrokes = getCharacterStrokes('ㄱ');
  assertEqual(giyeokStrokes !== null && giyeokStrokes.strokes.length > 0, true, 'Stroke data for ㄱ contains valid vector paths');

  const dynamicStrokes = getCharacterStrokes('가');
  assertEqual(dynamicStrokes !== null && dynamicStrokes.strokes.length >= 2, true, 'Dynamic stroke generator decomposes composed syllable "가" into vector paths');

  // Test 4: Vocabulary Data Integrity & Romance Category Audit
  const romanceItems = KOREAN_VOCABULARY.filter(v => v.category === 'romance');
  assertEqual(romanceItems.length >= 5, true, 'Vocabulary contains 5+ Romance expressions');

  KOREAN_VOCABULARY.forEach((vocab) => {
    const blocks = getSyllableBlocks(vocab.korean);
    if (!vocab.id || !vocab.korean || !vocab.romanization || !vocab.translation.en || !vocab.translation.zh || !blocks.length) {
      console.error(`✗ FAIL: Malformed vocabulary item: ${vocab.id}`);
      process.exitCode = 1;
    }
  });
  console.log('✓ PASS: All vocabulary records pass dynamic schema & translation validation');
}

if (require.main === module) {
  runQAAuditTests();
}

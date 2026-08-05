import { getSyllableChar, CHOSEONG } from '../lib/hangulData';
import { calculateSM2 } from '../lib/srsStorage';
import { KOREAN_VOCABULARY } from '../lib/koreanVocabData';

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

  const giyeokSyllable = getSyllableChar(0, 0); // ㄱ + ㅏ
  assertEqual(giyeokSyllable, '가', 'giyeok + a = "가" (Valid Unicode syllable, not un-composed "ㄱㅏ")');

  const ssangGiyeokSyllable = getSyllableChar(1, 0); // ㄲ + ㅏ
  assertEqual(ssangGiyeokSyllable, '까', 'ssang-giyeok + a = "까" (Valid Unicode syllable)');

  // Test 2: SRS Storage Boundary values & Ease Factor Minimum Clamp
  const card0 = calculateSM2(null, 0);
  assertEqual(card0.easeFactor >= 1.3, true, 'Ease factor clamp >= 1.3');

  // Test 3: Vocabulary Data Integrity Audit
  assertEqual(KOREAN_VOCABULARY.length >= 10, true, 'K-Culture Vocabulary contains 10+ entries');
  KOREAN_VOCABULARY.forEach((vocab) => {
    if (!vocab.id || !vocab.korean || !vocab.romanization || !vocab.syllables.length) {
      console.error(`✗ FAIL: Malformed vocabulary item: ${vocab.id}`);
      process.exitCode = 1;
    }
  });
  console.log('✓ PASS: All vocabulary records pass schema validation');
}

if (require.main === module) {
  runQAAuditTests();
}

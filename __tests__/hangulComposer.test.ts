import { composeHangul, decomposeHangul, isHangulSyllable, composeJamoSequence } from '../lib/hangulComposer';

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

export function runHangulComposerTests() {
  console.log('\n--- Running Hangul Composer Unit Tests ---');

  // Test 1: Simple composition
  assertEqual(composeHangul('ㄱ', 'ㅏ'), '가', 'Compose ㄱ + ㅏ = 가');
  assertEqual(composeHangul('ㄱ', 'ㅏ', 'ㄴ'), '간', 'Compose ㄱ + ㅏ + ㄴ = 간');
  assertEqual(composeHangul('ㅎ', 'ㅏ', 'ㄴ'), '한', 'Compose ㅎ + ㅏ + ㄴ = 한');
  assertEqual(composeHangul('ㄹ', 'ㅠ'), '류', 'Compose ㄹ + ㅠ = 류');
  assertEqual(composeHangul('ㄱ', 'ㅘ'), '과', 'Compose ㄱ + ㅘ = 과 (Complex Vowel)');
  assertEqual(composeHangul('ㅎ', 'ㅘ', 'ㄴ'), '환', 'Compose ㅎ + ㅘ + ㄴ = 환');

  // Test 2: Automaton Sequence Composition
  assertEqual(composeJamoSequence(['ㄱ', 'ㅏ']), '가', 'Sequence ㄱ + ㅏ = 가');
  assertEqual(composeJamoSequence(['ㄱ', 'ㅏ', 'ㄴ']), '간', 'Sequence ㄱ + ㅏ + ㄴ = 간');
  assertEqual(composeJamoSequence(['ㄱ', 'ㅗ', 'ㅏ']), '과', 'Sequence ㄱ + ㅗ + ㅏ = 과 (Complex Vowel)');
  assertEqual(composeJamoSequence(['ㄷ', 'ㅏ', 'ㄹ', 'ㄱ']), '닭', 'Sequence ㄷ + ㅏ + ㄹ + ㄱ = 닭 (Compound Batchim)');
  assertEqual(composeJamoSequence(['ㅅ', 'ㅏ', 'ㄹ', 'ㅁ']), '삶', 'Sequence ㅅ + ㅏ + ㄹ + ㅁ = 삶 (Compound Batchim)');
  assertEqual(composeJamoSequence(['ㄱ', 'ㅏ', 'ㅂ', 'ㅅ']), '값', 'Sequence ㄱ + ㅏ + ㅂ + ㅅ = 값 (Compound Batchim)');

  // Test 3: Simple & Compound decomposition
  assertEqual(decomposeHangul('가'), { initial: 'ㄱ', medial: 'ㅏ', final: '' }, 'Decompose 가');
  assertEqual(decomposeHangul('간'), { initial: 'ㄱ', medial: 'ㅏ', final: 'ㄴ' }, 'Decompose 간');
  assertEqual(decomposeHangul('한'), { initial: 'ㅎ', medial: 'ㅏ', final: 'ㄴ' }, 'Decompose 한');
  assertEqual(decomposeHangul('닭'), { initial: 'ㄷ', medial: 'ㅏ', final: 'ㄺ' }, 'Decompose 닭');
  assertEqual(decomposeHangul('삶'), { initial: 'ㅅ', medial: 'ㅏ', final: 'ㄻ' }, 'Decompose 삶');

  // Test 4: Syllable detection & boundaries
  assertEqual(isHangulSyllable('한'), true, 'isHangulSyllable("한") == true');
  assertEqual(isHangulSyllable('A'), false, 'isHangulSyllable("A") == false');
  assertEqual(isHangulSyllable('ㄱ'), false, 'isHangulSyllable("ㄱ") == false (pure consonant)');
  assertEqual(isHangulSyllable(''), false, 'isHangulSyllable("") == false (empty string)');
}

if (require.main === module) {
  runHangulComposerTests();
}

import { mapKeyToHangul, DUBEOLSIK_MAP } from '../lib/dubeolsikMap';

function assertEqual(actual: any, expected: any, testName: string) {
  if (actual === expected) {
    console.log(`✓ PASS: ${testName}`);
  } else {
    console.error(`✗ FAIL: ${testName}\n  Expected: ${expected}\n  Actual:   ${actual}`);
    process.exitCode = 1;
  }
}

export function runDubeolsikTests() {
  console.log('\n--- Running Dubeolsik Keyboard Mapping Unit Tests ---');

  // Test 1: Standard lowercase keys
  assertEqual(mapKeyToHangul('r'), 'ㄱ', 'qwerty key r -> ㄱ');
  assertEqual(mapKeyToHangul('s'), 'ㄴ', 'qwerty key s -> ㄴ');
  assertEqual(mapKeyToHangul('e'), 'ㄷ', 'qwerty key e -> ㄷ');
  assertEqual(mapKeyToHangul('f'), 'ㄹ', 'qwerty key f -> ㄹ');
  assertEqual(mapKeyToHangul('a'), 'ㅁ', 'qwerty key a -> ㅁ');
  assertEqual(mapKeyToHangul('q'), 'ㅂ', 'qwerty key q -> ㅂ');
  assertEqual(mapKeyToHangul('t'), 'ㅅ', 'qwerty key t -> ㅅ');
  assertEqual(mapKeyToHangul('d'), 'ㅇ', 'qwerty key d -> ㅇ');

  // Test 2: Vowels
  assertEqual(mapKeyToHangul('k'), 'ㅏ', 'qwerty key k -> ㅏ');
  assertEqual(mapKeyToHangul('h'), 'ㅗ', 'qwerty key h -> ㅗ');
  assertEqual(mapKeyToHangul('n'), 'ㅜ', 'qwerty key n -> ㅜ');
  assertEqual(mapKeyToHangul('m'), 'ㅡ', 'qwerty key m -> ㅡ');
  assertEqual(mapKeyToHangul('l'), 'ㅣ', 'qwerty key l -> ㅣ');

  // Test 3: Uppercase / Shift key combinations (Tense consonants & Complex vowels)
  assertEqual(mapKeyToHangul('R'), 'ㄲ', 'qwerty key R (Shift+r) -> ㄲ');
  assertEqual(mapKeyToHangul('E'), 'ㄸ', 'qwerty key E (Shift+e) -> ㄸ');
  assertEqual(mapKeyToHangul('Q'), 'ㅃ', 'qwerty key Q (Shift+q) -> ㅃ');
  assertEqual(mapKeyToHangul('T'), 'ㅆ', 'qwerty key T (Shift+t) -> ㅆ');
  assertEqual(mapKeyToHangul('W'), 'ㅉ', 'qwerty key W (Shift+w) -> ㅉ');
  assertEqual(mapKeyToHangul('O'), 'ㅒ', 'qwerty key O (Shift+o) -> ㅒ');
  assertEqual(mapKeyToHangul('P'), 'ㅖ', 'qwerty key P (Shift+p) -> ㅖ');

  // Test 4: Special keys & Digits
  assertEqual(mapKeyToHangul('1'), null, 'digit key 1 -> null');
  assertEqual(mapKeyToHangul('!'), null, 'symbol key ! -> null');
  assertEqual(mapKeyToHangul('Space'), null, 'Space key -> null');
  assertEqual(mapKeyToHangul('Backspace'), null, 'Backspace key -> null');
}

if (require.main === module) {
  runDubeolsikTests();
}

import { mapKeyToHangul } from '../lib/dubeolsikMap';

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

  assertEqual(mapKeyToHangul('r'), 'ㄱ', 'qwert key r -> ㄱ');
  assertEqual(mapKeyToHangul('R'), 'ㄲ', 'qwert key R -> ㄲ');
  assertEqual(mapKeyToHangul('k'), 'ㅏ', 'qwert key k -> ㅏ');
  assertEqual(mapKeyToHangul('q'), 'ㅂ', 'qwert key q -> ㅂ');
  assertEqual(mapKeyToHangul('Q'), 'ㅃ', 'qwert key Q -> ㅃ');
  assertEqual(mapKeyToHangul('1'), null, 'key 1 -> null');
}

if (require.main === module) {
  runDubeolsikTests();
}

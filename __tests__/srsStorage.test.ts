import { calculateSM2, ReviewQuality } from '../lib/srsStorage';

function assertEqual(actual: any, expected: any, testName: string) {
  if (actual === expected) {
    console.log(`✓ PASS: ${testName}`);
  } else {
    console.error(`✗ FAIL: ${testName}\n  Expected: ${expected}\n  Actual:   ${actual}`);
    process.exitCode = 1;
  }
}

export function runSRSTests() {
  console.log('\n--- Running SRS SM-2 Unit Tests ---');

  // Test 1: First review (Good = 3)
  const card1 = calculateSM2(null, 3 as ReviewQuality);
  assertEqual(card1.repetitions, 1, 'First good review -> repetitions = 1');
  assertEqual(card1.interval, 1, 'First good review -> interval = 1 day');

  // Test 2: Second review (Easy = 5)
  const card2 = calculateSM2(card1, 5 as ReviewQuality);
  assertEqual(card2.repetitions, 2, 'Second good review -> repetitions = 2');
  assertEqual(card2.interval, 6, 'Second review -> interval = 6 days');

  // Test 3: Failure reset (Again = 0)
  const card3 = calculateSM2(card2, 0 as ReviewQuality);
  assertEqual(card3.repetitions, 0, 'Failed review -> repetitions reset to 0');
  assertEqual(card3.interval, 1, 'Failed review -> interval reset to 1 day');
}

if (require.main === module) {
  runSRSTests();
}

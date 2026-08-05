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

  // Test 3: Consecutive Easy reviews (repetition = 3)
  const card3 = calculateSM2(card2, 5 as ReviewQuality);
  assertEqual(card3.repetitions, 3, 'Third review -> repetitions = 3');
  assertEqual(card3.interval > 6, true, 'Third review -> interval grows > 6 days');

  // Test 4: Failure reset (Again = 0)
  const card4 = calculateSM2(card3, 0 as ReviewQuality);
  assertEqual(card4.repetitions, 0, 'Failed review -> repetitions reset to 0');
  assertEqual(card4.interval, 1, 'Failed review -> interval reset to 1 day');

  // Test 5: Multiple failures ease factor clamp check (must stay >= 1.3)
  let clampedCard = calculateSM2(null, 0);
  for (let i = 0; i < 10; i++) {
    clampedCard = calculateSM2(clampedCard, 0);
  }
  assertEqual(clampedCard.easeFactor >= 1.3, true, 'Multiple failures -> easeFactor clamped >= 1.3');
}

if (require.main === module) {
  runSRSTests();
}

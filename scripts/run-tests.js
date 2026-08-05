const { execSync } = require('child_process');

console.log('====================================');
console.log(' Running LearnKorean Automated Tests');
console.log('====================================');

try {
  // Use npx tsx or npx ts-node to execute TypeScript test files
  execSync('npx tsx __tests__/hangulComposer.test.ts', { stdio: 'inherit' });
  execSync('npx tsx __tests__/srsStorage.test.ts', { stdio: 'inherit' });
  execSync('npx tsx __tests__/dubeolsikMap.test.ts', { stdio: 'inherit' });
  execSync('npx tsx __tests__/qaAudit.test.ts', { stdio: 'inherit' });
  console.log('\n✅ All automated tests passed successfully!\n');
} catch (error) {
  console.error('\n❌ Test suite failed.', error.message);
  process.exit(1);
}

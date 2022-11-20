import { describe, expect, it } from 'vitest';
import { getMoonScore } from '../utils/moonScore';

describe('getMoonScore', () => {
  it('should return blank for score 0', () => {
    const score = getMoonScore(0);
    expect(score).toBe('');
  });

  // TODO: Add missing test cases here
  // for ALL possible outputs of this helper function
  // Tip: don't repeat implementation details in the test
  // just rely on inputs/outputs

  it('should render 5 full moons if score 100', () => {
    const score = getMoonScore(100);

    // {n} matches the previous regex token exactly n times
    expect(score).toMatch(/^(🌕){5}$/);
  });
});

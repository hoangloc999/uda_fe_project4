
// https://knowledge.udacity.com/questions/174638
 import "babel-polyfill";
// Import the js file to test
import { handleSubmit } from "../src/client/js/formHandler"
import { polarityChecker } from "../src/client/js/formHandler"

describe("Testing the submit functionality", () => {
      test("Testing the handleSubmit() function", () => {
             expect(handleSubmit).toBeDefined();
  })});
    

describe('polarityChecker', () => {
test('returns correct polarity for P+', () => {
      expect(polarityChecker('P+')).toBe('STRONG POSITIVE');
});

test('returns correct polarity for P', () => {
      expect(polarityChecker('P')).toBe('POSITIVE');
});

test('returns correct polarity for NEW', () => {
      expect(polarityChecker('NEW')).toBe('NEUTRAL');
});

test('returns correct polarity for N', () => {
      expect(polarityChecker('N')).toBe('NEGATIVE');
});

test('returns correct polarity for N+', () => {
      expect(polarityChecker('N+')).toBe('STRONG NEGATIVE');
});

test('returns correct polarity for NONE', () => {
      expect(polarityChecker('NONE')).toBe('NO SENTIMENT');
});
});
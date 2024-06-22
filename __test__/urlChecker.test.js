// Import the js file to test
import { checkForURL } from "../src/client/js/urlChecker"

describe('checkForURL', () => {
    test('returns 1 for a valid HTTP URL', () => {
        expect(checkForURL('http://example.com')).toBe(1);
    });

    test('returns 1 for a valid HTTPS URL', () => {
        expect(checkForURL('https://example.com')).toBe(1);
    });

    test('returns 1 for a URL without protocol', () => {
        expect(checkForURL('www.example.com')).toBe(1);
    });

    test('returns 0 for an invalid URL', () => {
        expect(checkForURL('invalid_url')).toBe(0);
    });
});
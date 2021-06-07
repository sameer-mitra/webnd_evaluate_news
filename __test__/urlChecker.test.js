import { checkUrl } from '../src/client/js/urlChecker';

describe('Testing URL validation.', () => {
  test('Testing an incorrect URL with a space', () => {
    const url = 'http://www.google .com';
    expect(checkUrl(url)).toBeFalsy();
  });
  test('Testing a correct URL', () => {
    const url = 'http://www.google.com';
    expect(checkUrl(url)).toBeTruthy();
  });
});
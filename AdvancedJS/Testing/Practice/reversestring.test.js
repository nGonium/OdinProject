import { reverseString } from "./funcs";

describe('Reverse string', () => {
  it('reverses lowercase', () => {
    expect(
      reverseString('all lowercase'))
      .toBe('esacrewol lla')
  })
  it('reverses mixed characters', () => {
    expect(
      reverseString('a0rt1c @! V4LV3'))
      .toBe('3VL4V !@ c1tr0a')
  })
  it('returns single letter', () => {
    expect(
      reverseString('a'))
      .toBe('a')
  })
  it('returns empty string', () => {
    expect(
      reverseString(''))
      .toBe('')
  })
})
import { capitalize } from './funcs'

describe('Capitalize', () => {
  it('works on empty string', () => {
    const res = capitalize('')
    expect(res).toBe('')
  })
  it('only letter', () => {
    const res = capitalize('a')
    expect(res).toBe('A')
  })
  it('returns already capitalized', () => {
    const res = capitalize('Already capitalized')
    expect(res).toBe('Already capitalized')
  })
  it('first in long string', () => {
    const res = capitalize('all lowercase')
    expect(res).toBe('All lowercase')
  })
  it('ignores numbers', () => {
    const res = capitalize('Ignores 123 numbers')
    expect(res).toBe('Ignores 123 numbers')
  })
  it('only first char and lowercases the rest', () => {
    const res = capitalize('chANge tHE reST')
    expect(res).toBe('Change the rest')
  })
})
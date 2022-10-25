import { calculator } from "./funcs";
const { add, subtract, divide, multiply } = calculator
describe('Add', () => {
  it('Positives correctly', () => {
    expect(add(1, 4)).toBe(5)
  })
  it('Negative correctly', () => {
    expect(add(-2, -4)).toBe(-6)
  })
  it('Positives with negatives correctly', () => {
    expect(add(-2, 8)).toBe(6)
  })
  it('floating point correctly', () => {
    expect(add(0.58, -0.18)).toBeCloseTo(0.4)
  })
})
describe('Subtract', () => {
  it('Positives correctly', () => {
    expect(subtract(1, 4)).toBe(-3)
  })
  it('Negative correctly', () => {
    expect(subtract(-2, -4)).toBe(2)
  })
  it('Positives with negatives correctly', () => {
    expect(subtract(-2, 8)).toBe(-10)
  })
  it('floating point correctly', () => {
    expect(subtract(0.58, -0.18)).toBeCloseTo(0.76)
  })
})
describe('Divide', () => {
  it('Positives correctly', () => {
    expect(divide(4, 2)).toBe(2)
  })
  it('Negative correctly', () => {
    expect(divide(-4, -2)).toBe(2)
  })
  it('Positives with negatives correctly', () => {
    expect(divide(-8, 2)).toBe(-4)
  })
  it('floating point correctly', () => {
    expect(divide(0.58, -0.2)).toBeCloseTo(-2.9)
  })
})
describe('Multiply', () => {
  it('Positives correctly', () => {
    expect(multiply(1, 4)).toBe(4)
  })
  it('Negative correctly', () => {
    expect(multiply(-2, -4)).toBe(8)
  })
  it('Positives with negatives correctly', () => {
    expect(multiply(-2, 8)).toBe(-16)
  })
  it('floating point correctly', () => {
    expect(multiply(0.58, -0.18)).toBeCloseTo(-.1044)
  })
})
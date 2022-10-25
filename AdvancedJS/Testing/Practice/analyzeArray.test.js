import { analyzeArray } from "./funcs";

describe('Empty array', () => {
  const arr = []
  const res = analyzeArray(arr)
  it('correct average', () => {
    expect(res.average).toBeUndefined
  })
  it('correct min', () => {
    expect(res.min).toBeUndefined
  })
  it('correct max', () => {
    expect(res.max).toBeUndefined
  })
  it('correct length', () => {
    expect(res.length).toBe(0)
  })
})

describe('Array of positives', () => {
  const arr = [4,8,20,12]
  const res = analyzeArray(arr)
  it('correct average', () => {
    expect(res.average).toBe(11)
  })
  it('correct min', () => {
    expect(res.min).toBe(4)
  })
  it('correct max', () => {
    expect(res.max).toBe(20)
  })
  it('correct length', () => {
    expect(res.length).toBe(4)
  })
})

describe('Array of mixed positive/negative', () => {
  const arr = [4,-8,20,-12]
  const res = analyzeArray(arr)
  it('correct average', () => {
    expect(res.average).toBe(1)
  })
  it('correct min', () => {
    expect(res.min).toBe(-12)
  })
  it('correct max', () => {
    expect(res.max).toBe(20)
  })
  it('correct length', () => {
    expect(res.length).toBe(4)
  })
})

describe('Array of floats', () => {
  const arr = [4.8,-8.6,20.4,-12.2]
  const res = analyzeArray(arr)
  it('correct average', () => {
    expect(res.average).toBeCloseTo(1.1)
  })
  it('correct min', () => {
    expect(res.min).toBe(-12.2)
  })
  it('correct max', () => {
    expect(res.max).toBe(20.4)
  })
  it('correct length', () => {
    expect(res.length).toBe(4)
  })
})
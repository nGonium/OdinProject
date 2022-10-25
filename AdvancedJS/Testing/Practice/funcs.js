// @param {string} text
const capitalize = (text) => {
  return text.substring(0, 1).toUpperCase() + text.substring(1).toLowerCase()
}

const reverseString = (text) => {
  let output = ''
  for (const char of text) {
    output = char + output
  }
  return output
}

const calculator = {
  add: (num1, num2) => {
    return num1 + num2
  },
  subtract: (num1, num2) => {
    return num1 - num2
  },
  divide: (num1, num2) => {
    return num1 / num2
  },
  multiply: (num1, num2) => {
    return num1 * num2
  },
}

const caeserCipher = (text, shift) => {
  const shiftLetter = (char, shift) => {
    const charCode = char.charCodeAt()
    if (charCode > 64 && charCode <= 90) {
      const encoded = charCode - 65 + shift % 26
      return encoded.fromCharCode(encoded)
    } else if (charCode > 96 && charCode <= 122) {
      const encoded = charCode - 97 + shift % 26
      return encoded.fromCharCode(encoded)
    } else {
      return char
    }
  }

  for (let char of text) {
    shiftLetter(char, shift)
  }
}

const analyzeArray = (arr) => {
  const sum = arr.reduce((prev, num) => prev + num, 0)
  if (arr.length === 0) {
    return {
      length: arr.length,
      average: undefined,
      min: undefined,
      max: undefined,
    }
  }
  return {
    length: arr.length,
    average: sum / arr.length,
    min: arr.reduce((prev, current) => current < prev ? current : prev),
    max: arr.reduce((prev, current) => current > prev ? current : prev),
  }
}

// export default capitalize
export {
  capitalize,
  reverseString,
  calculator,
  caeserCipher,
  analyzeArray
}
import string from '@/helpers/string'

describe('string helper', () => {
  describe('pnr()', () => {
    test('replaces substring to a string defined in an object', () => {
      expect(string.pnr('Hello %name%', { '%name%': 'tridev' })).toBe('Hello tridev')
    })
  })

  describe('ucfirst()', () => {
    test('transforms first letter to uppercase', () => {
      expect(string.ucfirst('tridev')).toBe('tridev')
    })
  })

  describe('snakeToPascalCase()', () => {
    test('transforms snake_case string to PascalCase', () => {
      expect(string.snakeToPascalCase('tridev')).toBe('tridev')
      expect(string.snakeToPascalCase('this_is_tridev')).toBe('ThisIstridev')
    })
  })

  describe('random()', () => {
    test('generates a random string with a length defined by a given number', () => {
      const s = string.random(6)
      expect(typeof s).toBe('string')
      expect(s.length).toBe(6)
    })
  })

  describe('removeAccents()', () => {
    test('removes accents', () => {
      expect(string.removeAccents('àâèéêëîïôöûüùÛÜç')).toBe('aaeeeeiioouuuUUc')
    })
  })

  describe('removeEndPunctuation()', () => {
    test('removes end-punctuation', () => {
      expect(string.removeEndPunctuation('Who are you?')).toBe('Who are you')
      expect(string.removeEndPunctuation('This is great.')).toBe('This is great')
      expect(string.removeEndPunctuation('This string has no punctuation')).toBe('This string has no punctuation')
    })
  })
})

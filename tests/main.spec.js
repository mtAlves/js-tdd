import { expect } from 'chai'
import FizzBuzz from '../src/main.js'

describe('Main', () => {

  it('should return Fizz when multiple of 3', () => {
    expect(FizzBuzz(3)).to.be.equals('Fizz')
    expect(FizzBuzz(6)).to.be.equals('Fizz')
  })

  it('should return Fizz when multiple of 5', () => {
    expect(FizzBuzz(5)).to.be.equals('Buzz')
    expect(FizzBuzz(10)).to.be.equals('Buzz')
  })

  it('should return FizzBuzz when multiple of 3 and 5', () => {
    expect(FizzBuzz(15)).to.be.equals('FizzBuzz')
    expect(FizzBuzz(30)).to.be.equals('FizzBuzz')
  })

  it('should return the number when non-multiple', () => {
    expect(FizzBuzz(7)).to.be.equals(7)
    expect(FizzBuzz(14)).to.be.equals(14)    
  })
})

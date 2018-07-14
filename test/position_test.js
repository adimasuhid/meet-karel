import assert from 'assert'
import Position from '../lib/position.js'

describe('Position', () => {
  describe('coordinates', () => {
    it('returns object with x and y', () => {
      const coordinates = { x: 1, y: 2 }
      const position = new Position(coordinates) 
      assert.equal(coordinates.x, position.coordinates().x)
      assert.equal(coordinates.y, position.coordinates().y)
    })
  })

  describe('moveUp', () => {})
  describe('moveLeft', () => {})
  describe('moveRight', () => {})
  describe('moveDown', () => {})
})

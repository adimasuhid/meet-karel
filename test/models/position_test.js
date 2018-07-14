import assert from 'assert'
import Position from '../../lib/models/position.js'

describe('Position', () => {
  it('does not save negative numbers', () => {
    const position = new Position({ x: -1, y: 2 })
    assert.deepEqual(position.coordinates(), { x: 0, y: 2 })

    position.moveLeft()

    assert.deepEqual(position.coordinates(), { x: 0, y: 2 })
  })

  describe('#coordinates', () => {
    it('returns object with x and y', () => {
      const coordinates = { x: 1, y: 2 }
      const position = new Position(coordinates)
      assert.deepEqual(coordinates, position.coordinates())
    })
  })

  describe('#moveUp', () => {
    it('reduces Y by a step', () => {
      const position = new Position({ x: 1, y: 2 })
      assert.deepEqual(position.moveUp(), { x: 1, y: 1 })
    })
  })

  describe('#moveDown', () => {
    it('increments Y by a step', () => {
      const position = new Position({ x: 1, y: 2 })
      assert.deepEqual(position.moveDown(), { x: 1, y: 3 })
    })
  })

  describe('#moveLeft', () => {
    it('reduces X by a step', () => {
      const position = new Position({ x: 1, y: 2 })
      assert.deepEqual(position.moveLeft(), { x: 0, y: 2 })
    })
  })

  describe('#moveRight', () => {
    it('increments X by a step', () => {
      const position = new Position({ x: 1, y: 2 })
      assert.deepEqual(position.moveRight(), { x: 2, y: 2 })
    })
  })
})

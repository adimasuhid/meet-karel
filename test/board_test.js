import assert from 'assert'
import _ from 'underscore'
import Board from '../lib/board.js'

describe('Board', () => {
  describe('#constructor', () => {
    describe('boulders', () => {
      it('creates boulders from count', () => {
        const board = new Board({ width: 10, height: 5, boulderCount: 3 })

        assert.equal(board.boulders().length, 3)
      })

      it('creates boulders from position', () => {
        const coord = { x: 1, y: 2 }
        const board = new Board({ width: 10, height: 5, boulders: [coord] })

        assert.equal(board.boulders().length, 1)
        assert.deepEqual(board.boulders()[0].coordinates(), coord)
      })
    })

    describe('walls', () => {
      it('creates 8 walls given a 3x3 board', () => {
        const board = new Board({ width: 3, height: 3, boulderCount: 0 })

        // 0-0 1-0 2-0
        // 0-1     2-1
        // 0-2 1-2 2-2

        const wallCoords = _.map(board.walls(), (wall) => wall.coordinates())
        assert.deepEqual(wallCoords, [
          { x: 0, y: 0 },
          { x: 1, y: 0 },
          { x: 2, y: 0 },
          { x: 0, y: 1 },
          { x: 2, y: 1 },
          { x: 0, y: 2 },
          { x: 1, y: 2 },
          { x: 2, y: 2 }
        ])

        assert.equal(board.walls().length, 8)
      })

      it('creates 14 walls given a 5x4 board', () => {
        const board = new Board({ width: 5, height: 4, boulderCount: 1 })

        assert.equal(board.walls().length, 14)
      })
    })

    describe('karel', () => {
      it('creates Karel', () => {
        const board = new Board({ width: 5, height: 4, boulderCount: 1 })

        assert(board.karel() != null)
      })
    })

    describe('getModelFromPosition', () => {
      it('returns model when available', () => {
        const board = new Board({ width: 5, height: 4, boulderCount: 1 })
        const coord = { x: 1, y: 1 }

        assert.deepEqual(board.getModelFromPosition(coord), board.karel())
      })

      it('returns null when empty', () => {
        const board = new Board({ width: 5, height: 4, boulderCount: 0 })
        const coord = { x: 1, y: 2 }

        assert.deepEqual(board.getModelFromPosition(coord), null)
      })
    })
  })
})

import assert from 'assert'
import Tree from '../../lib/models/tree.js'

describe('Tree', () => {
  describe('#canBePickedUp', () => {
    it('returns false', () => {
      const tree = new Tree({ x: 1, y: 2 })

      assert(!tree.canBePickedUp())
    })
  })

  describe('#direction', () => {
    it('returns south', () => {
      const tree = new Tree({ x: 1, y: 2 })

      assert.equal(tree.direction(), 'S')
    })
  })
})

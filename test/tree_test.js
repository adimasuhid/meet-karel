import assert from 'assert'
import Tree from '../lib/tree.js'

describe('Tree', () => {
  describe('#canBePickedUp', () => {
    it('returns false', () => {
      const tree = new Tree({ x: 1, y: 2 })

      assert(!tree.canBePickedUp())
    })
  })
})

import assert from 'assert'
import Boulder from '../lib/boulder.js'

describe('Boulder', () => {
  describe('#canBePickedUp', () => {
    it('returns true', () => {
      const boulder = new Boulder({ x: 1, y: 2 })

      assert(boulder.canBePickedUp())
    })
  })
})

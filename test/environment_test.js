import assert from 'assert'
import Environment from '../lib/environment.js'

describe('Environment', () => {
  describe('#constructor', () => {
    it('creates boulders', () => {
      const environment = new Environment({ width: 10, height: 5, boulderCount: 3 }) 

      assert.equal(environment.boulders().length, 3)
    })
  })
})

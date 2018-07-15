import assert from 'assert'
import Environment from '../lib/environment.js'

describe('Environment', () => {
  describe('#constructor', () => {
    it('creates boulders', () => {
      const environment = new Environment({ width: 10, height: 5, boulderCount: 3 }) 

      assert.equal(environment.boulders().length, 3)
    })


    describe('#walls', () => {
      it('creates 8 walls given a 3x3 board', () => {
        const environment = new Environment({ width: 3, height: 3, boulderCount: 1 }) 
        
        assert.equal(environment.walls().length, 8)
      })
    
      it('creates 14 walls given a 5x4 board', () => {
        const environment = new Environment({ width: 5, height: 4, boulderCount: 1 }) 
        
        assert.equal(environment.walls().length, 14)
      })
    })
  })
})

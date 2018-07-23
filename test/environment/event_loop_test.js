import assert from 'assert'
import EventLoop from '../../lib/environment/event_loop.js'

describe('EventLoop', () => {
  it('works', (done) => {
    const eventLoop = new EventLoop({ speed: 5 })
    let sentence = 'quick'

    eventLoop.enqueue(() => { sentence = sentence + 'brown' })
    eventLoop.enqueue(() => { sentence = sentence + 'fox' })
    eventLoop.enqueue(() => { sentence = sentence + 'jumps' })
    eventLoop.enqueue(() => {
      eventLoop.stop()
      assert.equal(sentence, 'quickbrownfoxjumps')
      done()
    })

    eventLoop.execute()
  })
})

import Board from './Board.js'

describe('Model', () => {
    describe('Board', () => {
        const instance = new Board()
        test('The count of the columns should be 8', () => {
            expect(instance.fields.length).toBe(8)
        })
    })
})
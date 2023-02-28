import store from './store'

describe('tests for store', () => {
  it('Should initially the store empyy', () => {
    const state = store.getState().photos
    expect(state.photos).toEqual([])
    expect(state.currentPhoto).toEqual(undefined)
  })
})

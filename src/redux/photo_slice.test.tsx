import photoSlice, {
  initialState,
  setPhotos,
  setCurrentPhoto,
  updatePhotoState,
  deleteCurrentPhoto,
} from './photo_slice'
import { sortPhotosByDate } from 'utilities/utils'
import dataJson from 'mocks/data.json'

describe('tests photoSlice initialization', () => {
  test('initialize photoSlice with initialValue', () => {
    const photoSliceInital = photoSlice(initialState, { type: 'unknown' })
    expect(photoSliceInital).toBe(initialState)
  })
})

describe('tests photoSlice operations', () => {
  test('check the photos are sorted before storing it in the statee', () => {
    const sortedPhotos = sortPhotosByDate(dataJson)

    // set photos
    let stateAfterAction = photoSlice(initialState, setPhotos(dataJson))
    expect(stateAfterAction.photos).toStrictEqual(sortedPhotos)
    expect(stateAfterAction.currentPhoto).toStrictEqual(sortedPhotos[0])

    // set current photo
    const id = 'ee8a0ebd-a73d-4b99-b3a0-65ca065c979d'
    stateAfterAction = photoSlice(stateAfterAction, setCurrentPhoto({ id }))
    expect(stateAfterAction.currentPhoto).toStrictEqual(sortedPhotos[2])

    // toggle favorite
    expect(stateAfterAction.currentPhoto?.favorited).toBe(false)
    stateAfterAction = photoSlice(stateAfterAction, updatePhotoState())
    expect(stateAfterAction.currentPhoto?.favorited).toBe(true)

    // delete current
    expect(stateAfterAction.currentPhoto).toBeDefined()
    expect(stateAfterAction.photos).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: 'ee8a0ebd-a73d-4b99-b3a0-65ca065c979d',
        }),
      ]),
    )
    stateAfterAction = photoSlice(stateAfterAction, deleteCurrentPhoto())
    expect(stateAfterAction.currentPhoto).not.toBeDefined()
    expect.not.arrayContaining([
      expect.objectContaining({
        id: 'ee8a0ebd-a73d-4b99-b3a0-65ca065c979d',
      }),
    ])
  })
})

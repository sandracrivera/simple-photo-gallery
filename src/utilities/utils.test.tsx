import { formatBytes, formatDate, sortPhotosByDate } from './utils'
import { PhotoInfo } from 'redux/types'
import dataJson from 'mocks/data.json'

describe('test for utility functions', () => {
  it('should convert size to kb, mb, etc', () => {
    let size = formatBytes(1024)
    expect(size).toBe('1 KB')

    size = formatBytes(23322)
    expect(size).toBe('22.78 KB')

    size = formatBytes(4812732)
    expect(size).toBe('4.59 MB')
  })

  it('should format date', () => {
    expect(formatDate('2017-07-15T08:23:20.462Z')).toBe('July 15, 2017')
    expect(formatDate('2022-10-30T10:19:17.504Z')).toBe('October 30, 2022')
  })

  it('should sort photos by date', () => {
    const photos = dataJson as PhotoInfo[]

    // defaul order
    expect(photos[0].createdAt).toBe('2017-07-15T08:23:20.462Z')
    expect(photos[1].createdAt).toBe('2015-09-21T05:49:02.644Z')
    expect(photos[2].createdAt).toBe('2017-01-07T05:33:01.797Z')

    // descended order after sorted
    const sortedPhotos = sortPhotosByDate(photos)
    expect(sortedPhotos[0].createdAt).toBe('2018-04-06T05:00:10.540Z')
    expect(sortedPhotos[1].createdAt).toBe('2017-07-15T08:23:20.462Z')
    expect(sortedPhotos[2].createdAt).toBe('2017-01-07T05:33:01.797Z')
  })
})

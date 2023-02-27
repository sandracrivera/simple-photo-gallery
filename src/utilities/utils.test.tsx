import '@testing-library/jest-dom'
import { formatBytes, formatDate } from './utils'

describe('test utility functions', () => {
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
})

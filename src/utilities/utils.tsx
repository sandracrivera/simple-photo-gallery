import { PhotoInfo } from 'redux/types'

export function formatBytes(bytes: number, decimals = 2) {
  if (!+bytes) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}

export function formatDate(dateString: string) {
  const date = new Date(dateString)
  if (date instanceof Date && isFinite(date.getTime())) {
    const longMonth = date.toLocaleString('en-us', { month: 'long' })
    const day = date.getDate()
    const year = date.getFullYear()
    return `${longMonth} ${day}, ${year}`
  }
  return ''
}

export function sortPhotosByDate(photos: PhotoInfo[]): PhotoInfo[] {
  return [...photos].sort(function (a: PhotoInfo, b: PhotoInfo) {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  })
}

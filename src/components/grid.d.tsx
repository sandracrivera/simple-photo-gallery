import { PhotoInfo } from 'redux/types'

export type gridProps = {
  photos: PhotoInfo[]
  onClick?: (id: string) => void
}

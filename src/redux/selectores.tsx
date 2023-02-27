import { PhotoInfo } from './types'

import { useSelector } from 'react-redux'
import { RootState } from 'redux/store'

export const getFavoritedPhotos = () =>
  useSelector((state: RootState) =>
    state.photos.photos.filter((photo: PhotoInfo) => photo.favorited === true),
  )

export const getAllPhotos = () => useSelector((state: RootState) => state.photos.photos)

export const getCurrentPhoto = () => useSelector((state: RootState) => state.photos.currentPhoto)

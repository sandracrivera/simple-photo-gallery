import InitialState, { UpdatePhotoAction } from 'redux/initial_state'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { PhotoInfo } from 'redux/types'
import { sortPhotosByDate } from 'utilities/utils'

export const initialState: InitialState = {
  photos: [],
  currentPhoto: undefined,
}

export const photoSlice = createSlice({
  name: UpdatePhotoAction,
  initialState: initialState,
  reducers: {
    setPhotos: (state, action: PayloadAction<PhotoInfo[]>) => {
      state.photos = sortPhotosByDate(action.payload)
      // selected as default the first photo that is not favorite
      state.currentPhoto = state.photos.find((photo) => photo.favorited === false)
    },

    updatePhotoState: (state) => {
      const photoToUpdate = state.photos.find((photo) => photo.id === state.currentPhoto?.id)
      if (photoToUpdate) {
        const isFavorited = !photoToUpdate.favorited
        photoToUpdate.favorited = isFavorited
        if (state.currentPhoto) state.currentPhoto.favorited = isFavorited
      }
    },

    setCurrentPhoto: (state, action: PayloadAction<{ id: string }>) => {
      const currentPhoto = state.photos.find((photo) => photo.id === action.payload.id)
      if (currentPhoto) {
        state.currentPhoto = currentPhoto
      }
    },

    deleteCurrentPhoto: (state) => {
      state.photos = state.photos.filter((photo) => photo.id !== state.currentPhoto?.id)
      state.currentPhoto = undefined
    },
  },
})

export const { setPhotos, setCurrentPhoto, updatePhotoState, deleteCurrentPhoto } =
  photoSlice.actions
export default photoSlice.reducer

import { configureStore } from '@reduxjs/toolkit'
import photoReducer from 'redux/photo_slice'

const store = configureStore({
  reducer: {
    photos: photoReducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>

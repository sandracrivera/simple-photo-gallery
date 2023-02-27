import { PhotoInfo } from './types'

const UpdatePhotoAction = 'updatePhoto'

interface InitialState {
  photos: PhotoInfo[]
  currentPhoto?: PhotoInfo
}

export default InitialState
export { UpdatePhotoAction }

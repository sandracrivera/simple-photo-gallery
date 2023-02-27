import api from './api'
import { PhotoInfo } from 'redux/types'

class PhotoService {
  getAll() {
    return api.get<PhotoInfo[]>('/images.json')
  }
}

export default new PhotoService()

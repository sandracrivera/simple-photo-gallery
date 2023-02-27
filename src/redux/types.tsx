export interface PhotoInfo {
  id: string
  url: string
  filename: string
  description?: string
  uploadedBy: string
  createdAt: string
  updatedAt: string
  dimensions: Dimensions
  resolution: Dimensions
  sizeInBytes: number
  sharedWith: SharedWith[]
  favorited: boolean
}

export interface Dimensions {
  height: number
  width: number
}

export interface SharedWith {
  id: string
  name: string
  avatar: string
}

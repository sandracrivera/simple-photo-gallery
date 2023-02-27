import React, { MouseEvent } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import Photo from './photo'
import PhotoHeader from './photo_header'
import FavoriteIcon from './favorite_icon'
import PhotoInformationItem from './photo_information_item'
import { deleteCurrentPhoto, updatePhotoState } from 'redux/photo_slice'
import { getCurrentPhoto } from 'redux/selectores'

import { formatDate } from 'utilities/utils'

const PhotoDetail: React.FC = () => {
  const dispatch = useDispatch()
  const currentPhoto = getCurrentPhoto()
  if (!currentPhoto) return null

  const handleDelete = (e: MouseEvent) => {
    e.preventDefault()
    if (confirm('Are you sure you want to delete this photo?')) {
      dispatch(deleteCurrentPhoto())
    }
  }

  const handleFavoriteToggle = (e: MouseEvent) => {
    e.preventDefault()
    dispatch(updatePhotoState())
  }

  return (
    <div>
      <Photo id={currentPhoto.id} url={currentPhoto.url} filename={currentPhoto.filename} />
      <PhotoHeader
        filename={currentPhoto.filename}
        sizeInBytes={currentPhoto.sizeInBytes}
        bigText={true}
      >
        <FavoriteIcon favorited={currentPhoto.favorited} onClick={handleFavoriteToggle} />
      </PhotoHeader>
      <Information>
        <h2>Information</h2>
        <PhotoInformationItem label='Uploaded by' info={currentPhoto.uploadedBy} />
        <PhotoInformationItem label='Created' info={formatDate(currentPhoto.createdAt)} />
        <PhotoInformationItem label='Last modified' info={formatDate(currentPhoto.updatedAt)} />
        <PhotoInformationItem
          label='Dimensions'
          info={`${currentPhoto.dimensions.width} x ${currentPhoto.dimensions.height}`}
        />
        <PhotoInformationItem
          label='Resolution'
          info={`${currentPhoto.resolution.width} x ${currentPhoto.resolution.height}`}
        />
      </Information>
      {currentPhoto.description && (
        <Description>
          <h2>Description</h2>
          <p>{currentPhoto.description}</p>
        </Description>
      )}
      <Button onClick={handleDelete}>Delete</Button>
    </div>
  )
}

const Information = styled.div`
  margin-top: 3.2rem;

  h2 {
    border-bottom: 1px solid ${({ theme }) => theme.palette.gray35};
    padding: 1rem 0;
  }
`

const Description = styled.div`
  margin-top: 4rem;

  p {
    margin: 1rem 0 0;
    color: ${({ theme }) => theme.palette.gray};
    line-height: 1.5;
  }
`

const Button = styled.button`
  background: none; /* Green */
  border: 1px solid ${({ theme }) => theme.palette.gray35};
  padding: 1.5rem 0;
  display: block;
  width: 100%;
  margin-top: 3rem;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.palette.purple};
    color: ${({ theme }) => theme.palette.white};
    font-weight: bold;
  }
`

export default PhotoDetail

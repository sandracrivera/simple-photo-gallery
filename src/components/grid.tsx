import React from 'react'
import styled from 'styled-components'

import Photo from './photo'
import PhotoHeader from './photo_header'
import { getCurrentPhoto } from 'redux/selectores'
import { gridProps } from './grid.d'

const Grid: React.FC<gridProps> = ({ photos, onClick }: gridProps) => {
  const currentPhoto = getCurrentPhoto()

  return (
    <Container>
      {photos.map((photo) => (
        <PhotoItem key={photo.id}>
          <Photo
            id={photo.id}
            url={photo.url}
            filename={photo.filename}
            isSelected={currentPhoto && currentPhoto.id === photo.id}
            onClick={onClick}
          />
          <PhotoHeader filename={photo.filename} sizeInBytes={photo.sizeInBytes} />
        </PhotoItem>
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(17rem, 0.5fr));
  grid-gap: 3.3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.screenMD}) {
    grid-template-columns: repeat(2, minmax(17rem, 0.5fr));
    grid-gap: 1rem;
  }
`

const PhotoItem = styled.div`
  min-width: 0;
  font-size: 1.2rem;

  figure {
    height: 15rem;

    img {
      &.selected {
        outline: 2px solid ${({ theme }) => theme.palette.purple};
        outline-offset: 0.1rem;
      }

      &:hover {
        cursor: pointer;
      }
    }
  }
`

export default Grid

import React from 'react'
import styled from 'styled-components'

import { photoProps } from './photo.d'

const Photo: React.FC<photoProps> = ({
  id,
  url,
  filename,
  isSelected = false,
  onClick,
}: photoProps) => {
  return (
    <Figure isSelected={isSelected}>
      <img
        src={url}
        alt={filename}
        onClick={() => {
          console.log('inside')
          if (onClick) onClick(id)
        }}
        loading='lazy'
      />
    </Figure>
  )
}

const Figure = styled.figure<{ isSelected: boolean }>`
  margin: 0;
  padding: 0;
  border-radius: 1rem;
  position: relative;
  cursor: pointer;

  ${(props) =>
    props.isSelected &&
    `
      &::before {
        // fix outline + border radius issue in safari
        content: '';
        position: absolute;
        top: -4px; // border: 2px + offset: 2px
        right: -4px; // border: 2px + offset: 2px
        bottom: -4px; // border: 2px + offset: 2px
        left: -4px; // border: 2px + offset: 2px
        border: 2px solid ${props.theme.palette.purple};
        border-radius: 1.2rem;
        pointer-events: none;
      }
    `}

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }
`

export default Photo

import React from 'react'
import styled from 'styled-components'

import { formatBytes } from 'utilities/utils'
import { photoHeaderProps } from './photo_header.d'

const PhotoHeader: React.FC<photoHeaderProps> = ({
  children,
  filename,
  bigText = false,
  sizeInBytes,
}: photoHeaderProps) => {
  return (
    <Container>
      <Header bigText={bigText}>
        <span>{filename}</span>
        {children}
      </Header>
      <span>{formatBytes(sizeInBytes)}</span>
    </Container>
  )
}

const Container = styled.div`
  padding-top: 0.8rem;

  span {
    color: ${({ theme }) => theme.palette.gray};
    font-size: 1.7rem;
  }
`

const Header = styled.div<{ bigText: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${(props) => (props.bigText ? '1rem' : '0.5rem')};

  span {
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 100%;
    margin-bottom: 0.6rem;
    font-size: ${(props) => (props.bigText ? '2.2rem' : '1.6rem')};
    font-weight: bold;
    color: ${({ theme }) => theme.palette.black};
  }
`

export default PhotoHeader

import React from 'react'
import styled from 'styled-components'

import { photoInformationItemProps } from './photo_information_item.d'

const PhotoInformationItem: React.FC<photoInformationItemProps> = ({
  label,
  info,
}: photoInformationItemProps) => {
  return (
    <Container>
      <Label>{label}</Label>
      <span>{info}</span>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.palette.gray35};
  padding: 1.8rem 0;
`

const Label = styled.span`
  color: ${({ theme }) => theme.palette.gray};
  font-weight: bold;
`

export default PhotoInformationItem

import React from 'react'
import styled from 'styled-components'

import Icon from 'assets/heart.svg'
import { favoriteIconProps } from './favorite_icon.d'

const FavoriteIcon: React.FC<favoriteIconProps> = ({ favorited, onClick }: favoriteIconProps) => {
  return (
    <Container favorited={favorited}>
      <Icon onClick={onClick} />
    </Container>
  )
}

const Container = styled.div<{ favorited: boolean }>`
  svg {
    fill: none;
    stroke: ${({ theme }) => theme.palette.gray};
    stroke-width: 2.5rem;
    width: 2.2rem;
    cursor: pointer;
  }

  ${(props) =>
    props.favorited &&
    `
      svg {
        fill: ${props.theme.palette.red};
        stroke: ${props.theme.palette.red};
      }
      `}
`

export default FavoriteIcon

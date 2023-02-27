import { ReactNode } from 'react'

export type photoHeaderProps = {
  filename: string
  sizeInBytes: number
  bigText?: boolean
  children?: ReactNode
}

export type photoProps = {
  id: string
  url: string
  filename: string
  isSelected?: boolean
  onClick?: (id: string) => void
}

export interface TextFormatterState {
  text: string

  stats: {
    wordCount: number
    charCount: number
  }
  isBold: boolean
  fontSize: string
}

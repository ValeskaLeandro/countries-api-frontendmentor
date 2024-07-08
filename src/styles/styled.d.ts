import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string,
    colors: {
      backgroundColor: string,
      textColor: string,
      elementsColor: string,
      inputColor: string
    }
  }
}
import React from "react"

import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    background: slategray;
  }
`

// eslint-disable-next-line react/prop-types
export const wrapPageElement  = ({ element }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <>
    <GlobalStyle />
    {element}
  </>
)

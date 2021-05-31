import { createGlobalStyle } from "styled-components"

const GlobalStyling = createGlobalStyle`
    *, *::before, ::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Encode Sans Expanded', Sans-Serif;
    } 
`

export default GlobalStyling

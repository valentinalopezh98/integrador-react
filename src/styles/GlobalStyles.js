import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root{
    --primary-color: #00c1d1;
    --bg-color: #1a1b1f;
    --font-color: white;
    --font-grey: #959595;
    --secondary-color: #e5587d;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1rem;
    user-select: none
}

html{
    scroll-behavior: smooth;
}

body{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto Mono', monospace;
    background-color: var(--bg-color);
    color: var(--font-color);
    --webkit-tap-highlight-color: transparent;
}

li{
    list-style: none;
}

a{
    text-decoration: none;
    color: var(--font-color);
}

a:visited{
    color: var(--font-color);
}
`
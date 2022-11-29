import { createGlobalStyle } from 'styled-components';
import background from '../images/background.jpg';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-image: url(${background});
  }
`
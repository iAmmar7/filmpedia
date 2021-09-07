import * as React from 'react';
import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import App from './components/App';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap');

    body {
        font-family: Roboto, sans-serif;
        background-color: #2B193E;
        color: #CAC7D7;
        margin: 0px;
    }
`;

render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root')
);

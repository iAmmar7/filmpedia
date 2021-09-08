import * as React from 'react';
import { ApolloProvider } from '@apollo/client';
import styled from 'styled-components';

import Header from './Header';
import Cheffs from './Cheffs';
import graphQLClient from '../api/graphql';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 80rem;
  border: 1px solid red;
`;

function App() {
  return (
    <ApolloProvider client={graphQLClient}>
      <Header />
      <Wrapper>
        <h1>App</h1>
        <Cheffs />
      </Wrapper>
    </ApolloProvider>
  );
}

export default App;

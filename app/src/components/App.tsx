import * as React from 'react';
import { ApolloProvider } from '@apollo/client';
import styled from 'styled-components';

import Header from './Header';
import Cheffs from './Cheffs';
import graphQLClient from '../api/graphql';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 80rem;
`;

function App() {
  return (
    <ApolloProvider client={graphQLClient}>
      <Header />
      <Wrapper>
        <Cheffs />
      </Wrapper>
    </ApolloProvider>
  );
}

export default App;

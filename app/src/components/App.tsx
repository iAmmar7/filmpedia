import * as React from 'react';
import { ApolloProvider } from '@apollo/client';
import styled from 'styled-components';

import Header from './Header';
import Actors from './Actors';
import graphQLClient from '../api/graphql';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 80rem;
  font-size: 18px;
  padding: 1rem 1%;
`;

function App() {
  return (
    <ApolloProvider client={graphQLClient}>
      <Header />
      <Wrapper>
        <Actors />
      </Wrapper>
    </ApolloProvider>
  );
}

export default App;

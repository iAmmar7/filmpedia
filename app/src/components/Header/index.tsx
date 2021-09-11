import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  background-color: #0d050e;
  display: flex;
  justify-content: center;
`;

function Header() {
  return (
    <Container>
      <h2>Actors and Movies</h2>
    </Container>
  );
}

export default Header;

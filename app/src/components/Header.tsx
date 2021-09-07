import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  background-color: #0d050e;
  display: flex;
`;

function Header() {
  return (
    <Container>
      <h2>Cheffs and Restaurant</h2>
    </Container>
  );
}

export default Header;

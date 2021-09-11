import * as React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  text-align: center;
`;

function LoaderComponent() {
  return (
    <Wrapper>
      <Loader
        type="Puff"
        color="#00BFFF"
        height={500}
        width={500}
        timeout={1000} //1 secs
      />
    </Wrapper>
  );
}

export default LoaderComponent;

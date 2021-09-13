import styled from 'styled-components';

export const Container = styled.div`
  margin: 1rem 0rem;
`;

export const FieldWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid transparent;
  padding: 0.2rem 0.4rem;
  margin: 0rem 0.8rem;
  font-size: 18px;
  background-color: #0d050e;
  color: #fff;
  &:focus {
    border-bottom: 1px solid #fff;
  }
`;

export const Button = styled.button`
  padding: 0.2rem 0.8rem;
  cursor: pointer;
`;

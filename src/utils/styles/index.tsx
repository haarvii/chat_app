import styled from "styled-components";

export const InputField = styled.input`
  background: inherit;
  outline: none;
  border: none;
  color: white;
  font-size: 18px;
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 4px 0;
`;

export const InputContainer = styled.div`
  background-color: #131313;
  padding: 12px 16px;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
`;

export const InputLabel = styled.label`
  display: block;
  color: #8f8f8f;
  font-size: 14px;
  margin: 4px 0;
`;

export const Button = styled.button`
  width: 100%;
  background-color: #2b09ff;
  color: #fff;
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 25px;
  font-size: 16px;
  font-weight: 500;
  transition: 200ms background-color ease;
  transition: 200ms border ease;
  border: 2px solid #2b09ff;
  box-sizing: border-box;
  &:focus {
    background-color: #3415ff;
    border: 2px solid #ffffff;
  }
  &:hover {
    cursor: pointer;
    background-color: #3415ff;
  }
  &:active {
    background-color: #3a1cff;
  }
`;

export const Page = styled.div`
  height: 100%;
  background-color: #1a1a1a;
  display: flex;
  justify-content: center;
  align-items: center;
`;

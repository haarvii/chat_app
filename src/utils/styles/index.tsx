import styled from "styled-components";
import { PageProps } from "./styleTypes";

export const SIDEBAR_WIDTH = 400;

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

export const Page = styled.div<PageProps>`
  height: 100%;
  background-color: #1a1a1a;
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;

export const ConversationSidebarStyle = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #1a1a1a;
  width: ${SIDEBAR_WIDTH}px;
  border-right: 1px solid #5454543d;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ConversationSidebarHeader = styled.header`
  position: fixed;
  width: ${SIDEBAR_WIDTH}px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  box-sizing: border-box;
  background-color: #151515;
  height: 100px;
  border-bottom: 1px solid #5454543d;
  & h1 {
    font-weight: 500;
  }
`;

export const ConversationChannelPageStyle = styled.div`
  height: 100%;
  margin-left: ${SIDEBAR_WIDTH}px;
`;

export const ConversationSidebarContainer = styled.div``;

export const ConversationSidebarItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 12px 24px;
  box-sizing: border-box;
  border-bottom: 1px solid #5454543d;
  background-color: #151515;
`;

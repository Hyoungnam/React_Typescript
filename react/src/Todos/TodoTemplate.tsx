import * as React from "react";
import styled, { css } from "styled-components";


const TodoTemplate: React.FC = ({children}) => {
  return (
    <Div todoTemplate>
      <Div appTitle>일정 관리</Div>
      <Div content>{children}</Div>
    </Div>
  )
}

export default TodoTemplate;

interface IProps {
  todoTemplate?: boolean;
  appTitle?: boolean;
  content?: boolean;
}

const Div = styled.div<IProps>`
  ${(props) => props.todoTemplate && css`
      width: 512px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 6rem;
      border-radius: 4px;
      overflow: hidden;
  `};
  ${(props) => props.appTitle && css`
      background: #22b8cf;
      color: white;
      height: 4rem;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
  `};
  ${(props) => props.content && css`
      background: white;
  `};
`;
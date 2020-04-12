import * as React from 'react'
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline, MdCheck } from "react-icons/md";
import styled, { css } from "styled-components";
interface ITodo {
  id: number,
  text: string,
  checked: boolean,
}
interface ITodoListItem {
  key: number;
  todo: ITodo;
  onRemove: (id:number) => void;
  onToggle: (id:number) => void;
}

const TodoListItem: React.FC<ITodoListItem> = ({todo, onRemove, onToggle}) => {
  const { id, text, checked } = todo; 
  return (
    <Wrapper>

      <CheckBox isChecked={checked} onClick={()=> onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <Text>{text}</Text>
      </CheckBox>

      <Remove onClick={ () => onRemove(id)}>
        <MdRemoveCircleOutline />
      </Remove>
    </Wrapper>
      
  )
}

export default React.memo(TodoListItem);
// export default TodoListItem;

interface ICheckBox {
  isChecked?: boolean
}


const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  &:nth-child(even) {
    background: #f8f9fa;
  }
  & + & {
    border-top: 1px solid #dee2e6;
  }
`
const CheckBox = styled.div<ICheckBox>`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
  svg {
    font-size: 1.5rem;
  }
  ${(props) => props.isChecked && css`
    color: #adb5bd;
    text-decoration: line-through;
  `};
`
const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1;
`
const Remove = styled.div`
  display: flex;
  align-items: center;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
`
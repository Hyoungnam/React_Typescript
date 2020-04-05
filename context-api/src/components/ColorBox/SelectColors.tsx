import * as React from 'react';
import { ColorConsumer } from "../../contexts/color";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const SelectColors = () => {
  return (
    <div>
      <h2>색상을 선택하세요</h2>
      <ColorConsumer>
        {value => (
          <div style={{display: 'flex'}}>
            {colors.map(color => (
              <div 
                key={color}
                style={{background: color, width: "24px", height: "24px", cursor: "pointer"}}
                onClick={()=> value.actions.setColor(color)}
                // 마우스 오른쪽 버튼 클릭 시 메뉴가 뜨는 것을 무시함
                onContextMenu={ e => {
                  // 메뉴 뜨지 않음
                  e.preventDefault();
                  value.actions.setSubColor(color);
                }}
              ></div>
            ))}
          </div>
        )}
      </ColorConsumer>
    </div>
  )
}

export default SelectColors

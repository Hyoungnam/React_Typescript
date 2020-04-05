import * as React from "react";
import { useContext } from "react";
import ColorContext, { ColorConsumer }  from "../../contexts/color"

{/* 이러한 패턴을 Function as a child. 혹은 Render Props라고 한다.  */}
{/* 컴포넌트의 childrend이 있어야 할 자리에 일반 jsx 혹은 문자열이 아닌 함수를 전달하는 것 */}
const ColorBox: React.FC = () => {
  const { state } = useContext(ColorContext);
  return (
    // consumer에서는 value 이름을 자유롭게 마음대로 사용해도 괜찮다
    // <ColorConsumer>
      // {/* {value => (
      //   <>
      //     <div style={{width: "64px", height: "64px", background: value.state.color}}/>           
      //     <div style={{width: "64px", height: "64px", background: value.state.subColor}}/>           
      //   </>
      // )} */}
    // {/* </ColorConsumer> */}
      <>
        <div style={{width: "64px", height: "64px", background: state.color}}/>           
        <div style={{width: "64px", height: "64px", background: state.subColor}}/>           
      </>
  )
}
export default ColorBox;
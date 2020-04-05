import * as React from 'react'

interface IRenderProps {
  children: (num: number) => React.ReactNode
}
const RenderPropsSample: React.FC<IRenderProps> = ({children}) => {
  return (
    <div>결과: {children(5)}</div>
  )
}
export default RenderPropsSample;

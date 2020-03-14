import * as React from "react"
import {useState} from "react";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  },
]
// 방법 1로 하자 타입구체화 방법2의 장점도 있지만 범용적으로 사용할 것이 아니라면
interface TabContent {
  [index:number]: number;
  tab: string;
  content: string;
}
const useTab = (initialTab:number, allTabs:Array<TabContent>) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    return {
      currentItem: allTabs[currentIndex],
      changeItem: setCurrentIndex
    };
}
export const UseTab = () => {
  const {currentItem, changeItem} = useTab(0, content);
  return (
    <div>
      {content.map((section, index) => 
        (<button onClick={()=>changeItem(index)}>
          {section.tab}
        </button>))
      }
      {currentItem.content}
    </div>
  )
}

//// 방법 2-A SetStateAction 명시
//// http://www.typescriptlang.org/docs/handbook/advanced-types.html#index-types 참고

// const useTab = <T extends keyof K, K>(initialTab: T, allTabs: K) => {
//     const [currentIndex, setCurrentIndex] = useState(initialTab);
//     return {
//       currentItem: allTabs[currentIndex],
//       changeItem: setCurrentIndex
//     };
// }
// export const UseTab = () => {
//   const initialNum = 0
//   const {currentItem, changeItem} = useTab(initialNum, content);
//   return (
//     <div>
//       {content.map((section, index) => 
//         (<button onClick={()=>changeItem(index as React.SetStateAction<typeof initialNum>)}>
//           {section.tab}
//         </button>))
//       }
//       {currentItem.content}
//     </div>
//   )
// }
////// 방법 2-B any 사용
// export const UseTab = () => {
//   const {currentItem, changeItem} = useTab(0, content);
//   return (
//     <div>
//       {content.map((section, index) => 
//         (<button onClick={()=>changeItem(index as any)}>
//           {section.tab}
//         </button>))
//       }
//       {currentItem.content}
//     </div>
//   )
// }

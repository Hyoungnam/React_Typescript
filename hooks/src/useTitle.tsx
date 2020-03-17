import * as React from 'react'
import {useState, useEffect} from 'react';

const useTitle = (initialTitle:string) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    if(htmlTitle) 
      htmlTitle.innerText = title
  }
 useEffect(updateTitle, [title]);
 return setTitle;
}

export const UseTitle = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => { titleUpdater("Home");}, 2000);

  return (
    <div>
      <div>UseTitle</div>
    </div>
  )
}

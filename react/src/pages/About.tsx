import React from 'react'
import { RouteComponentProps, RouteChildrenProps } from 'react-router';
import queryString from 'query-string';


// const About: React.FC<RouteChildrenProps<{name: string}>> = ({location, match}) => {
const About: React.FC<RouteComponentProps<{name: string}>> = ({location, match}) => {

  console.log("match.params", match.params);
  console.log("match.params.name", match.params.name);
  const query = queryString.parse(location.search);
  console.log("query", query);
  return (
    <div>
      <h2>소개</h2>
       <p>
        안녕하세요, 저는 {match.params.name}입니다.
      </p>
      
    </div>
  )
}

export default About

import React from 'react'
import { RouteComponentProps } from 'react-router';

interface IUser {
  name: string,
  description: string
}
type IData = {
  // [key: string]: IUser | string | undefined;
  north: IUser;
  south: IUser;
}

const data = {
  north: {
    name: 'kim',
    description: '리액트를 좋아합니다',
  },
  south: {
    name: 'nam',
    description: '뷰를 좋아합니다'
  }
} 

// https://stackoverflow.com/questions/32968332/how-do-i-prevent-the-error-index-signature-of-object-type-implicitly-has-an-an
const Profile: React.FC<RouteComponentProps<{username: keyof IData}>> = ({match}) => {
  const { username } = match.params;
  const profile = data[username];
  if(!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
        <p>{profile.description}</p>
    </div>
  )
}

export default Profile

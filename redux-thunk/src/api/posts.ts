
const sleep = (n: number) => new Promise(resolve => setTimeout(resolve, n))

sleep(1000).then(()=> console.log("Hello World"));
export interface Ipost {
  id: number,
  title: string,
  body : string
}

const posts = [
  {
    id: 1,
    title: "리덕스 떵크 미들웨어",
    body: "리덕스 떵크 미들웨어 본문 본문 내용"
  },
  {
    id: 2,
    title: "리덕스 떵크 미들웨어222",
    body: "리덕스 떵크 미들웨어 본문 본문 내용222"
  },
  {
    id: 3,
    title: "리덕스 떵크 미들웨어333",
    body: "리덕스 떵크 미들웨어 본문 본문 내용333"
  }
]

export const getPosts = async () => {
  await sleep(500);
  return posts;
};
export const getPostById = async (id: number) => {
  await sleep(500);
  return posts.find(post => post.id === id);
};

// import axios from "axios";

// export const getPosts = async () => {
//   // const response = await axios.get("http://localhost:4000/posts");
//   const response = await axios.get("/posts");
//   return response;
// };
// export const getPostById = async (id: number) => {
//   // const response: ResponseType = await axios.get(`http://localhost:4000/post/${id}`);
//   const response: ResponseType = await axios.get(`/post/${id}`);
//   return response;
// };

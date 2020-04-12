import * as React from "react";
import axios from "axios";
import { Fragment, useState, useEffect,  SetStateAction } from "react";

interface LooseObject {
  [index: string]: any
}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface DataApiResponse  {
  response: {
    data: LooseObject;
    isLoading: boolean;
    isError: boolean;
  };
  setUrl: React.Dispatch<SetStateAction<string>>;
}

const useDataApi = (initialUrl:string, initialData: LooseObject) => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(url);
        setData(result.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);
  
  return {response: {data, isLoading, isError}, setUrl} as DataApiResponse;
};

const UseDataFetchTwo: React.FC = () => {
  const [query, setQuery] = useState('redux');
  const { response, setUrl } = useDataApi(
    "https://jsonplaceholder.typicode.com/todos",
      [{
        userId: 1,
        id: 1234,
        title: "test",
        completed: false
      }],
  );
  const {data, isError, isLoading} = response;
  return (
    <Fragment>
      <h2>UseAsync</h2>
      {isError  &&  <div>Something went wrong ...</div>}
      {isLoading ? (<div>Loading ...</div>) 
                 : (
                    <ul>
                      {data.map((item: Todo)=><li>{item.id}</li>)}
                    </ul>
                   )
      }
    </Fragment>
  );
}
export default UseDataFetchTwo;


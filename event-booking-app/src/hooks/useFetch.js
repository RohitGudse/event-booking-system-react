import { useEffect, useState } from "react";

export default function useFetch(apiFunc) {
  const [data, setData] = useState([]);

  useEffect(() => {
    apiFunc().then(setData);
  }, []);

  return data;
}
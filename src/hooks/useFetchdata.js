import  { useEffect, useState, useCallback } from "react";

const useFetchData = () => {
    const [status, setStatus] = useState('idle');
    const [data, setData]=useState([]);

  const fetchData = useCallback(() => {
    const url = "http://localhost:3001/food";
    fetch(url)
      .then((response) => response.json())
      .then((incomingData) => {
        console.log(incomingData)
        setData(incomingData);
        setStatus('fetched');
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { status, data };
};
export default useFetchData;
import React, { useEffect, useRef, useState } from "react";

const CACHE = new Map();
const CACHE_TIME = 2 * 60 * 1000;

function useFetch({ url }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState();

  useEffect(() => {
    const cached = CACHE.get(url);
    if (cached && Date.now() - cached?.timeStamp < CACHE_TIME) {
      setData(cached.data);
      return;
    } else {
      fetchData();
    }
  }, [url]);

  const fetchData = async () => {
    setLoading(true);
    try {
      let res = await fetch(url);
      res = await res?.json();
      CACHE.set(url, {
        data: res,
        timeStamp: Date.now(),
      });
      setData(res);
    } catch (error) {
      setError({ error });
    } finally {
      setLoading(false);
    }
  };

  return { loading, data, error };
}

export default useFetch;

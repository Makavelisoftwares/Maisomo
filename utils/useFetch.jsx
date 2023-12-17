"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

function useFetch( url ) {
  const [error, seterror] = useState({});
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setdata(response.data);
      } catch (error) {
        seterror(error);
        console.log(error)
      }
    };

    fetchData();
  }, []);

  return { data, error };
}

export default useFetch;

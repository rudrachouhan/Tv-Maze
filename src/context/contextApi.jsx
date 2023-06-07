import React, { createContext, useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchSelectedCategoryData();
  },[]);

  const fetchSelectedCategoryData = () =>{
    setLoading(true);
    fetchDataFromApi().then((contents) => {
        console.log(contents);
        setSearchResults(contents);
        setLoading(false);
    })
  }

  return (
    <Context.Provider
      value={{
        searchResults,
        setSearchResults,
        loading,
        setLoading,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

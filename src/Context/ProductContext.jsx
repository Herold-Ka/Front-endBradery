import { createContext, useState, useContext } from "react";

export const SearchContext = createContext();
export const SearchContextProvider = SearchContext.Provider;
export const useSearchContext = () => useContext(SearchContext);

// eslint-disable-next-line react/prop-types
export const SearchProvider = ({ children }) => {
  const [searchPosts, setSearchPosts] = useState([]);

  const addNewPost = (post) =>
    setSearchPosts((prevState) => [...prevState, post]);

  return (
    <SearchContextProvider
      value={{
        searchPosts,
        addNewPost
      }}
    >
      {children}
    </SearchContextProvider>
  );
};
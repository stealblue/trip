import React from 'react';
import { useLocation } from 'react-router-dom';
import SearchCntr from '../../containers/search/SearchCntr';
import SearchResultCntr from '../../containers/search/SearchResultCntr';

const SearchPage = () => {
  const location = useLocation();
  const keyword = location.state.keyword
  return (
    <div>
      <SearchCntr keyword={keyword} />
      <SearchResultCntr />
    </div>
  );
};

export default SearchPage;
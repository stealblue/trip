import React from 'react';
import { useLocation } from 'react-router-dom';
import SearchCntr from '../../containers/search/SearchCntr';

const SearchPage = () => {
  const location = useLocation();
  const keyword = location.state.keyword
  return (
    <div>
      <SearchCntr keyword={keyword} />
    </div>
  );
};

export default SearchPage;
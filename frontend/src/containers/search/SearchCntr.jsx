import React from 'react';
import SearchComp from '../../components/search/SearchComp'

const SearchCntr = ({ keyword }) => {
  return (
    <div>
      <SearchComp keyword={keyword} />
    </div>
  );
};

export default SearchCntr;
import React from 'react';
import { useLocation } from 'react-router-dom';
import SearchCntr from '../../containers/search/SearchCntr';
import SearchResultCntr from '../../containers/search/SearchResultCntr';


const SearchPage = () => {
  const location = useLocation();
  // if(location.state.keyword){
  // const keyword = location.state.keyword;
  // }
  return (
    <div>
      {/* <SearchCntr />
      {location.state.keyword ? <SearchResultCntr keyword={location.state.keyword} /> : <SearchResultCntr />} */}
      <SearchCntr />
      <SearchResultCntr />
    </div>
  );
};

export default SearchPage;
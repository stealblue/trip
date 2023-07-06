import React from 'react';

const SelectItem = ({ onClick, area }) => {
  // console.log('selectItem : ', area);
  return (
    <>
      <button onClick={onClick}>{area.name}</button>
    </>
  );
}

const AreaSelectComp = ({ onClick, areaCodes, areaCode }) => {
  console.log('codes : ', areaCodes);
  return (
    <div>
      {areaCodes.map((area) => (
        <SelectItem area={area} />
      ))}
    </div>
  );
};

export default AreaSelectComp;

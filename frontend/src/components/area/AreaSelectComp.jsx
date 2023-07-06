import React from 'react';

const SelectItem = ({ onClick, area }) => {
  console.log('selectItem : ', area);
  return (
    <>
      <button onClick={onClick} value={area.code}>{area.name}</button>
    </>
  );
}

const AreaSelectComp = ({ onClick, areas }) => {
  console.log('codes : ', areas);
  return (
    <div>
      {areas.map((area) => (
        <SelectItem area={area} key={area.code} onClick={onClick} />
      ))}
    </div>
  );
};

export default AreaSelectComp;

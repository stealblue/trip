import React from 'react';

const SelectArea = ({ onClick, area }) => {
  // console.log('selectItem : ', area);
  return (
    <>
      <button onClick={onClick} value={area.code}>{area.name}</button>
    </>
  );
}



const AreaSelectComp = ({ onClickArea, areas }) => {
  // console.log('codes : ', areas);
  return (
    <>
      <div>
        {areas.map((area) => (
          <SelectArea area={area} key={area.code} onClick={onClickArea} />
        ))}
      </div>
    </>
  );
};

export default React.memo(AreaSelectComp);

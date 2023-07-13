import React from 'react';

const SelectArea = ({ onClick, area }) => {
  return (
    <>
      <button onClick={onClick} value={area.code}>{area.name}</button>
    </>
  );
}

const SelectType = ({ onClick, type }) => {
  return (
    <>
      <button onClick={onClick} value={type.code}>{type.name}</button>
    </>
  );
}


const AreaSelectComp = ({ onClickArea, onClickType, areas, contentTypes }) => {
  return (
    <>
      <div>
        {areas.map((area) => (
          <SelectArea area={area} key={area.code} onClick={onClickArea} />
        ))}
      </div>
      <div>
        {contentTypes.map((type) => (
          <SelectType type={type} key={type.code} onClick={onClickType} />
        ))}
      </div>
    </>
  );
};

export default React.memo(AreaSelectComp);

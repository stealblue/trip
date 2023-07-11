import React from 'react';
import Swal from 'sweetalert2';

const SelectArea = ({ onClick, area }) => {
  // console.log('selectItem : ', area);
  return (
    <>
      <button onClick={onClick} value={area.code}>{area.name}</button>
    </>
  );
}

const SelectType = ({ onClick, type }) => {
  // console.log('selectItem : ', type);
  return (
    <>
      <button onClick={onClick} value={type.code}>{type.name}</button>
    </>
  );
}


const AreaSelectComp = ({ onClickArea, onClickType, areas, contentTypes }) => {
  // console.log('codes : ', areas);
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

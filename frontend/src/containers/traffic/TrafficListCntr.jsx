import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listTerminals, endTerminals, startTerminals } from "../../modules/traffic/busMod";
import { listStations, endStations, startStations } from "../../modules/traffic/trainMod";
import TrafficListComp from '../../components/traffic/TrafficListComp';


const TrafficListCntr = ({ target }) => {
  console.log('TrafficListCntr : ', target);

  return (
    <div>
      <TrafficListComp />
    </div>
  );
};

export default TrafficListCntr;
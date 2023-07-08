import React, { useEffect } from 'react';

const { kakao } = window;

const KakaoMapComp = ({ mapx, mapy }) => {
  useEffect(() => {
    const xdata = parseFloat(mapx || 37.5663);
    const ydata = parseFloat(mapy || 126.79581);
    const mapContainer = document.getElementById('map');
    const mapOptions = {
      center: new window.kakao.maps.LatLng(ydata, xdata),
      level: 3
    };
    const map = new kakao.maps.Map(mapContainer, mapOptions);
    const markerPosition = new kakao.maps.LatLng(ydata, xdata);
    const marker = new kakao.maps.Marker({
      position: markerPosition
    })
    marker.setMap(map);
  }, [mapx, mapy])

  return (
    <>
      <div id='map' style={{ width: '400px', height: '400px' }} />
    </>
  );
};

export default KakaoMapComp;



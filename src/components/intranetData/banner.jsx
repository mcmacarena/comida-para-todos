import React from 'react';
import banner from '../../img/Banners/intranet.jpg';
import './styles/bannerIntra.css';


function BannerIntra() {
  return (
    <div className='containerBannerIntranet'>
       <img src={banner} alt="banner" className='banner'/> 
    </div>
  );
}

export default BannerIntra;
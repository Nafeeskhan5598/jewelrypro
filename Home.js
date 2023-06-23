import React from 'react';
import Navbar from './Navbar';
import '../Style/Home.css';
import FrontRing from '../Component/FrontRing';
// import Logofor from '../logos/Logfor';
import Clouserimg from '../Component/Clouserimg';
import TrendingProduct from '../Component/TrendingProduct';






function Home() {
    return (
        <>
    
        <Navbar  / > 
        <FrontRing />  
        {/* <Logofor />  */}
        <Clouserimg />
        <TrendingProduct heading_first={'Popular Products'} heading_second={'Trending Now'}/> 
        <div className='second-card-area'>
         <TrendingProduct heading_first={'Shop'} heading_second={'Best Selling'}/>
        </div>
        </>
    )
}

export default Home;
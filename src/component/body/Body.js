import { useState, useEffect} from 'react'
import { ApiLink } from '../utils/constant';
import ResCard from '../resCard/ResCard';
import './Body.css'
import Shimmer from '../shimmer/Shimmer';
import { Link } from 'react-router-dom';
import useBody from '../utils/useBody';
import useOnlineStatus from '../utils/useOnlineStatus';
const Body=()=>{

    const [searchText,setSearchText]=useState('');

    const restListOfData= useBody();
    const filterRestData=restListOfData;
    
    function topRrestList() {
      const filteredList = restListOfData.filter(
        (res) => res.info.avgRating > 4.2
      );
      setFilterRestData(filteredList);  
      }
      const online=useOnlineStatus();
      if(online===false) return<h1>Lools like you are offline please check your internet connection</h1>
   return restListOfData===null?<Shimmer/>:
    (
        <div className='body-main'>
           <div className='filter'>
             <div className='search-bar'>
               <input className='search-input'
                value={searchText}
                onChange={(e)=>setSearchText(e.target.value)}
                />
               <button className='search-btn' 
                 onClick={()=>{
                  const filterList=restListOfData.filter((data)=>
                      data.info.name.toLowerCase().includes(searchText.toLowerCase())   
                  );
                  setFilterRestData(filterList)
                 } 
                  
                  }>Search
               </button>
             </div>

             <div className='top-rated-rest'>
             <button onClick={topRrestList}>TopRestaurants</button>
             </div>
           </div>
           <div className='res-container'>
           {
            filterRestData.map((data)=> <Link key={data.info.id} to={"/restaurants/"+data.info.id}><ResCard data={data}/></Link>)
           // filterRestData.map((data)=> <li key={data.info.id}><ResCard data={data}/></li>)

           }
           </div>
        </div>
    )
}

export default Body;
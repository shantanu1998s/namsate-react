import { useState, useEffect} from 'react'
import ResCard from '../resCard/ResCard';
import Shimmer from '../shimmer/Shimmer';
import { Link } from 'react-router-dom';
import useBody from '../utils/useBody';
import useOnlineStatus from '../utils/useOnlineStatus';
const Body=()=>{

    const [searchText,setSearchText]=useState('');

    const restListOfData= useBody();
    console.log(restListOfData);
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
        <div className=''>
           <div className=' flex my-4 px-4'>
             <div className='search-bar'>
               <input className='border-[2px] border-gray-400 rounded-sm'
                value={searchText}
                onChange={(e)=>setSearchText(e.target.value)}
                />
               <button className='ml-4 bg-gray-500 px-4 py-1 color text-white rounded-md' 
                 onClick={()=>{
                  const filterList=restListOfData.filter((data)=>
                      data.info.name.toLowerCase().includes(searchText.toLowerCase())   
                  );
                  setFilterRestData(filterList)
                 } 
                  
                  }>Search
               </button>
             </div>

             <div className='ml-4'>
             <button className='ml-4 bg-gray-500 px-4 py-1 color text-white rounded-md' onClick={topRrestList}>TopRestaurants</button>
             </div>
           </div>

           <div className='flex flex-wrap b-[100%] justify-center'>
           {
            filterRestData.map((data)=> <Link key={data.info.id} to={"/restaurants/"+data.info.id}><ResCard data={data}/></Link>)
           // filterRestData.map((data)=> <li key={data.info.id}><ResCard data={data}/></li>)

           }
           </div>
           
        </div>
    )
}

export default Body;
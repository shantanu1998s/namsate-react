import { useState, useEffect} from 'react'
import ResCard from '../resCard/ResCard';
import Shimmer from '../shimmer/Shimmer';
import { Link } from 'react-router-dom';
import { ApiLink } from '../utils/constant';
import useOnlineStatus from '../utils/useOnlineStatus';
import promoted from '../promoted/Promoted';
const Body=()=>{
    const [restListOfData,setRestListOfData]=useState(null);
    const [filterRestData,setFilterRestData]=useState(null);
    const [searchText,setSearchText]=useState('');
    const online=useOnlineStatus();

    const PromotedWith=promoted(ResCard);

    useEffect(()=>{
      fetchApi();
     },[])
  
      async function fetchApi(){
           const data= await fetch(ApiLink)
           const json= await data.json();
           setRestListOfData(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
           setFilterRestData(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      }
   console.log(restListOfData);
    
    function topRrestList() {
      const filteredList = restListOfData.filter(
        (res) => res.info.avgRating > 4.4
      );
      setFilterRestData(filteredList);  
      }
      
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
               <button className='ml-4 bg-gray-500 px-4 py-1 color text-white rounded-md' 
                 onClick={topRrestList}
                 >TopRestaurants
                 
              </button>
             </div>
           </div>

           <div className='flex flex-wrap b-[100%] justify-center'>
           {filterRestData.map((data) => (
             <Link key={data.info.id} to={"/restaurants/" + data.info.id}>
               {data.info.avgRating > 4.4 ? <PromotedWith data={data} />
                : <ResCard data={data} />
               }
             </Link>
           ))}
         </div>
         
           
        </div>
    )
}

export default Body;
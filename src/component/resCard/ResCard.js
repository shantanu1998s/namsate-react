import { imgID } from '../utils/constant';
const ResCard=(props)=>{

    const {data}=props;
    const {
        name,
        cuisines,
        costForTwo,
        avgRatingString,
        cloudinaryImageId
    }=data.info;


    return(
       <div className='border w-[180px] m-4 p-4 h-[250px] bg-gray-50 hover:bg-gray-200 rounded-md'>
                    <img className="w-[100%] rounded-sm" src={imgID+cloudinaryImageId} alt="not found"></img>
                     <div className='card-component'>
                     <h3 className='font-bold'>{name}</h3>
                     <p className='overflow-hidden'>{cuisines.join(",")}</p>
                     <h4>{costForTwo}</h4>
                     <h4>{avgRatingString}</h4>
                     </div>
       </div>
    )
}

export default ResCard;
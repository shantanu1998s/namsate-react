import { imgID } from '../utils/constant';
import './ResCard.css'
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
       <div className="card">
                    <img src={imgID+cloudinaryImageId} alt="not found" className='res-card-img'></img>
                     <div className='card-component'>
                     <h3>{name}</h3>
                     <p>{cuisines.join(",")}</p>
                     <h4>{costForTwo}</h4>
                     <h4>{avgRatingString}</h4>
                     </div>
       </div>
    )
}

export default ResCard;
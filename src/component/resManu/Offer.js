

const Offer=({data})=>{
     const{
        description,
        header,
        logoBottom
     }=data.info;
    //console.log(data)
    return(
        <>
          <div className="font-bold text-lg text-gray-800">{header}</div>
          <div className="font-bold text-lg text-gray-600">{description}</div>
        </>
    )
}

export default Offer;
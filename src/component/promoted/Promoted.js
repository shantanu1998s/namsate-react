
 const promoted=(ResCard)=>{
    return(data)=>{
        return(
            <div>
            <label className="absolute mx-4 shadow-lg rounded-sm p-[2px] border bg-gray-800 text-white">Promoted</label>
            <ResCard {...data}/>
            </div>
        )
    }
 }

 export default promoted;
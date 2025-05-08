

export default function Card({data}){
    function readMore(url){
        window.open(url,"_blank");

    }

     // Sort data by publishedAt in descending order (latest first)
  const sortedData = [...data].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
    return(
        <div className="cardContainer">
          
         { sortedData.map((curItem,index)=>{
           if(!curItem.urlToImage){
            return null;
           } 
           else{
            // Parse date
        const date = new Date(curItem.publishedAt);
        const formattedDate = date.toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
        const formattedTime = date.toLocaleTimeString(undefined, {
          hour: "2-digit",
          minute: "2-digit",
        });

            return(
                <div className="card" key={index}>
                    <img src={curItem.urlToImage} className="cardImg"/>
                    <p className="date">{formattedDate} | {formattedTime}</p>
                    <a href={curItem.url} target="_blank" rel="noopener noreferrer">{curItem.title}</a>
                    <p>{curItem.description} </p>
                    <div className="read-more-container">
                        <button onClick={() => readMore(curItem.url)} className="read-more-btn">Read More</button>
                    </div>
                   
                </div>
            )
           }
           
          })}
          
          
          
        </div>
    )
}
  
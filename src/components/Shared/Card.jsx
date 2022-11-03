function Card({data}){
    return (
        <div className="md:w-96 w-full bg-white shadow-2xl rounded-2xl p-4 md:p-8 md:min-h-[26rem] flex flex-col justify-between items-center gap-8 md:gap-0">
            <h3 className="text-2xl font-bold text-center">{data.title}</h3>  
            <p className="leading-6">{data.text}</p>    
            <img src={data.img} alt="" className="max-w-full h-36"/>      
        </div>
    );
}
export default Card;
function Card({data,hFixed}){
    return (
        <div className={`md:w-96 w-full bg-white shadow-2xl rounded-2xl p-4 md:p-8 ${hFixed && 'md:min-h-[26rem]'} flex flex-col justify-between items-center gap-8 ${hFixed ? 'md:gap-0' : 'md:gap-6'}`}>
            <div>
                <h3 className="text-2xl font-bold text-center">{data.title}</h3>  
                {
                    data.subTitle && <h4 className="text-gray-500 text-center">{data.subTitle}</h4>
                }
            </div>
            <p className="leading-6">{data.text}</p>    
            {
                data.img &&  <img src={data.img} alt="" className="max-w-full h-36"/>   
            }   
        </div>
    );
}
export default Card;
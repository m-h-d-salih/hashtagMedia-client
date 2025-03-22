interface IProps{
    title:string,
     description:string,
      img:string, 
      size:string | any,
       buttonText:string
}
const BlogCard = ({ title, description, img, size, buttonText }:IProps) => {
    return (
      <div className="bg-[#2C3B7C] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all duration-300">
        <div className="relative border-10 border-[#2C3B7C] hover:border-12 transition-all duration-300">
          <img src={img} alt={title} className="w-full h-48 object-fill" />
          {size && (
            <div className="absolute bottom-2 left-2 text-white text-xs px-2 py-1 rounded">
              {size}
            </div>
          )}
        </div>
        <div className="p-4 bg-[#2C3B7C] text-white">
          <h3 className="font-bold text-xl mb-2">{title}</h3>
          <p className="text-sm mb-4">{description}</p>
          <button className="text-sm font-semibold hover:underline">{buttonText}</button>
        </div>
      </div>
    );
  };
  
  export default BlogCard;
  
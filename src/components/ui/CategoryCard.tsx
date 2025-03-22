
interface IProps{
    title:string,
    img:string
}
const CategoryCard = ({ title, img }:IProps) => {
  return (
    <div className="relative w-full bg-[#D9D9D9]  sm:w-[45%] md:w-[30%] hover:rounded-lg hover:transition-all overflow-hidden shadow-md group cursor-pointer">
    <img 
        src={img} 
        alt={title} 
        className="w-full h-64 object-fit transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-[#2C3B7C] text-white py-3 px-4">
        <h3 className="font-medium text-lg">{title}</h3>
    </div>
</div>
  )
}

export default CategoryCard

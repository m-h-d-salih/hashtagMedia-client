import CategoryCard from './ui/CategoryCard';
import entertainment from '../assets/entertainment.png';
import Groceries from '../assets/groceries.png';
import Automotive from '../assets/automative.png';
import Electronics from '../assets/electrinics.png';
import household from '../assets/household2.png';

const Category = () => {
    const category = [
        { title: 'Entertainment', img: entertainment },
        { title: 'Automotive', img: Automotive },
        { title: 'Electronics', img: Electronics },
        { title: 'Groceries', img: Groceries },
        { title: 'Household', img: household }
    ];

    return (
        <div className="py-20 px-4 w-full text-center bg-gray-100">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-center mb-2">
                    <div className="h-px bg-gray-400 w-24"></div>
                    <h2 className="text-2xl font-bold mx-4">Top Category</h2>
                    <div className="h-px bg-gray-400 w-24"></div>
                </div>
                <p className="text-gray-600 text-sm mb-12">Top sale in this month</p>
                
                <div className="flex flex-wrap justify-center gap-8">
                {category.map((item, index) => (
                        <CategoryCard key={index} title={item.title} img={item.img} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Category;

// import { useState } from "react";            
import ItemList from "./ItemList";

const RestaurantCategory = ({ category, showList, toggleAccordion }) => {
  // const [showList, setShowList] = useState(false)
  const handleClick = () => {
    toggleAccordion()
  }
  return (
    <div className="w-full bg-slate-300 my-4 p-2 shadow-xl">
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold pb-6 text-lg">{category?.title}</span>
        <span>🔽</span>
      </div>
      {showList && <ItemList items={category?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;

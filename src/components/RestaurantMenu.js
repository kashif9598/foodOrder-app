import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines } = resInfo?.cards[0]?.card?.card?.info;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    // console.log('cate', categories)

  const toggleAccordion = (index) => {
    if (index === showIndex) {
      setShowIndex(null);
    } else {
      setShowIndex(index);
    }
  };

  return (
    <div className="menu mx-auto mt-2 w-6/12 bg-slate-100 p-3">
      <h1 className="text-3xl font-bold py-2">{name}</h1>
      <p className="text-xl">{cuisines.join(",")}</p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          category={category?.card?.card}
          showList={index === showIndex ? true : false}
          // setShowIndex={() => setShowIndex(index)}
          toggleAccordion={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;

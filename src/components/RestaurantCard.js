import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
    cloudinaryImageId,
  } = resData?.info;
  return (
    <div data-testid="resCard" className="res-card w-64 m-4 bg-orange-100 hover:bg-orange-200 h-80">
      <img
        className="img-container rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="food-pic"
      />
      <h3 className="font-bold">{name}</h3>
      <h4 className="overflow-hidden text-ellipsis whitespace-nowrap">{cuisines.toString()}</h4>
      <h5>{avgRating}</h5>
      <h5>{costForTwo}</h5>
      <h5>{sla.deliveryTime} MINS</h5>
    </div>
  );
};

export const withVegLabel = (RestaurantCard) => {
  return (props) => {
    return(
      <div>
        <label className="absolute ml-1 bg-green-500 rounded-full text-cyan-200 p-2">Veg</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;

import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../../store/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className="transition ease-in-out delay-150">
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="border-b-2 border-slate-500 flex justify-between items-center"
        >
          <div className="w-10/12">
            <span className="font-bold">{item?.card?.info?.name}</span>
            <p className="pb-2">₹{item?.card?.info?.price / 100}</p>
            <p className="text-gray-700 text-sm pb-4">
              {item?.card?.info?.description}
            </p>
          </div>
          {item?.card?.info?.imageId ? (
            <div>
              <img
                className="w-32 m-5"
                src={CDN_URL + item?.card?.info?.imageId}
                alt="Food Pic"
              />
              <button
                className="px-2 m-auto bg-gray-500 rounded-md relative bottom-[30px] left-[50px]"
                onClick={() => handleAdd(item)}
              >
                Add +
              </button>
            </div>
          ) : (
            <div>
              <button
                className="px-2 m-auto bg-gray-500 rounded-md"
                onClick={() => handleAdd(item)}
              >
                Add +
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ItemList;

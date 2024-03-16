import { CDN_URL } from "../utils/constants";


const ItemList= ({items}) => {

  console.log(items);
  return (
    <div>
      {items.map((item)=>(
        <div 
        key={item.card.info.id} 
        className="p-3 m-2 border-gray-200 border-b-2 text-left flex justify-between">
          <div className="w-9/12">
          <div className="py-2 ">
            <span >{item?.card?.info?.name}</span>
            <span>- ₹ 
              {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
          </div>
          <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4 relative " >
          <div className="absolute bottom-[-11px] right-[44.5px]">
          <button className="p-2 mx-6 rounded-lg bg-gray-800 text-white shadow-lg  w-full">Add +</button>
          </div>
          <img src={CDN_URL+item.card.info.imageId } className="w-full"/>
          
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
import { CDN_URL } from "../utils/constants";

const Restaurantcards = (props) => {
    const { details }= props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = details?.info;
  return (
    <div className="m-4 p-4 w-[220px] bg-gray-200 hover:bg-slate-300">
      <img className="" src= {CDN_URL+cloudinaryImageId}/>
      <h3 className="py-4 font-bold text-lg">{name}</h3>
      <h4 >{cuisines.join(", ")}</h4>
      <h4 >{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4 >{sla.deliveryTime} Mins</h4>
    </div>
  )
  }

  export default Restaurantcards;
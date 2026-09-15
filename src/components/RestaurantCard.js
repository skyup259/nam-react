const RestaurantCard = (props) => (
    <div className="restaurant-card">
        <img src="/assets/restaurant.jpg" alt="Restaurant" className="resturant-image"/>
        <h3>{props.restData.info?.name}</h3>
        <h3>{props.restData.info?.cuisines.join(", ")}</h3>
        <h3>{props.restData.info?.costForTwo}</h3>
        <h3> {props.restData.info?.avgRating}</h3>
    </div>
);
export default RestaurantCard;
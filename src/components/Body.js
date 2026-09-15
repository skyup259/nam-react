import {listOfRestaurants} from '../utils/mockData';
import RestaurantCard from './RestaurantCard';
const Body = () => (
    <div className="body">
        <div className="search-bar">
            <button>Top Rated Resturant</button>

        </div>
        <div className="links">
            <a href="/restaurants">Restaurants</a>  
            <a href="/food">Food</a>
            <a href="/grocery">Grocery</a>
        </div>
        <div className="restaurant-container">
            {/* {RestaurantCard({restaurantName:"resturant 1", description:"descriptin of rest 1"})} */}
            {/* <RestaurantCard resturantList={listOfRestaurants[0]} /> */}
            {listOfRestaurants.map((restaurant) =>(
                <RestaurantCard restData={restaurant} key={restaurant.info.id} />
            ))}
        </div>
    </div>
);

export default Body;
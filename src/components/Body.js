import {listOfRestaurants} from '../utils/mockData';
import RestaurantCard from './RestaurantCard';
import { useState } from 'react';

const Body = () => {
    let [restaurantsList, SetRestaurantsList ] = useState(listOfRestaurants);
    return (
    <div className="body">
        <div className="search-bar">
            <button onClick={() => {
                const filteredRes = listOfRestaurants.filter((res) => {
                    return res.info.avgRating>4;
                });
                SetRestaurantsList(filteredRes);
                console.log(filteredRes)
            }}>
                Top  Resturant
            </button>

        </div>
        <div className="links">
            <a href="/restaurants">Restaurants</a>  
            <a href="/food">Food</a>
            <a href="/grocery">Grocery</a>
        </div>
        <div className="restaurant-container">
            {/* {RestaurantCard({restaurantName:"resturant 1", description:"descriptin of rest 1"})} */}
            {/* <RestaurantCard resturantList={listOfRestaurants[0]} /> */}
            {restaurantsList.map((restaurant) =>(
                <RestaurantCard restData={restaurant} key={restaurant.info.id} />
            ))}
        </div>
    </div>
    )
};

export default Body;
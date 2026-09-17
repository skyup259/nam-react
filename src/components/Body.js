import {listOfRestaurants} from '../utils/mockData';
import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';

const Body = () => {
    let [restaurantsList, SetRestaurantsList ] = useState([]);
    const [filterResResult, SetFilterResResult] = useState([]);
    let [searchInput, SetSearchInput] = useState("");

    useEffect(()=> {
        fetchData();
    }, []);

    const fetchData = async () => {
        const resList = await fetch("https://namastedev.com/api/v1/listRestaurants");
        const data = await resList.json();
        SetRestaurantsList(data?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        SetFilterResResult(data?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    return (
    <div className="body">
        <div className="search-bar">
            <div className='search-box'>
                <input className='search-input' value={searchInput} onChange={(e)=> {
                    SetSearchInput(e.target.value);
                }}/>
                <button className='serach-button' onClick={() => {
                    const filteredSearch = restaurantsList.filter((res) => {
                        return res.info.name.toLowerCase().includes(searchInput.toLowerCase());
                    })
                    SetFilterResResult(filteredSearch);
                }}>Search</button>
            </div>
            <button onClick={() => {
                const filteredRes = restaurantsList.filter((res) => {
                    return res.info.avgRating>4.5;
                });
                SetFilterResResult(filteredRes);
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
            {filterResResult.map((restaurant) =>(
                <RestaurantCard restData={restaurant} key={restaurant.info.id} />
            ))}
        </div>
    </div>
    )
};

export default Body;
import FavoriteRestaurantDB from '../../data/favorite-restaurant-idb';
import { restaurantItemTemp } from '../templates/template-creator';

const favorite = {
  async render() {
    return `
        <div class="content">
            <h2 class="content-heading">Restaurant Yang Kamu Sukai</h2>
            <div id="restaurant" class="restaurant post">
            </div>
        </div>
        `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantDB.getAllRestaurants();
    const restaurantContainer = document.querySelector('#restaurant');

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += restaurantItemTemp(restaurant);
    });
  },
};

export default favorite;

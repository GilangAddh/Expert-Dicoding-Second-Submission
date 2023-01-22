import UrlParser from '../../routes/url-parser';
import restaurantSource from '../../data/data-restaurant-source';
import LikeButtonInitiator from '../../utils/likebutton-initiator';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

// import FavoriteRestaurantDB from "../../data/fav-restaurant";

const Detail = {
  async render() {
    return `
      <div id="restaurant"></div>
      <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await restaurantSource.detailRestaurants(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML += createRestaurantDetailTemplate(restaurant.restaurant);

    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        description: restaurant.restaurant.description,
        city: restaurant.restaurant.city,
        address: restaurant.restaurant.address,
        pictureId: restaurant.restaurant.pictureId,
        menus: restaurant.restaurant.menus,
        foods: restaurant.restaurant.foods,
        drinks: restaurant.restaurant.drinks,
        rating: restaurant.restaurant.rating,
      },

    });
  },
};

export default Detail;

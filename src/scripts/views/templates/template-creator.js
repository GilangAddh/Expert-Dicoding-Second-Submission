import CONFIG from '../../globals/config';

const restaurantItemTemp = (restaurant) => `
<div tabindex="0" class="card">
<a href="#/detail/${restaurant.id}" tabindex="0">  
  <div class="post-item-head">
  <img class="lazyload" src="${CONFIG.BASE_IMAGE_URL_M + restaurant.pictureId}" data-src="${CONFIG.BASE_IMAGE_URL_M}" alt="restoran ${restaurant.name}">
  </div>
</a>

  <div tabindex="0" class="post-item-content">
  <a href="#/detail/${restaurant.id}" tabindex="0">  
  <h3 class="post-item-title">${restaurant.name}</h3>
  </a>
    <p class"post-item-info">
      <i class="bi bi-house"></i> ${restaurant.city} - <i class="bi bi-star-half "></i> ${restaurant.rating}
    </p>
    <p class="post-item-desc cut-text">${restaurant.description}</p>
  </div>
</div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
    <h2 class="dtl-restaurant-title">${restaurant.name}</h2>
    <div>
        <img class="dtl-restaurant-img" alt="${restaurant.name}" src="${CONFIG.BASE_IMAGE_URL_M}${restaurant.pictureId}" crossorigin="anonymous"/>
    </div>
    <div class="dtl-restaurant-info">
        <h3 class="dtl-information">Information :</h3>
        <h4 class="dtl-subtitle">Deskripsi</h4>
            <p>${restaurant.description}</p>
        <h4 class="dtl-subtitle">Kota / Daerah</h4>
            <p>${restaurant.city}</p>
        <h4 class="dtl-subtitle">Rating</h4>
            <p>${restaurant.rating}</p>
        <h4 class="dtl-subtitle">Lokasi</h4>
            <p>${restaurant.address}</p>
        <h4 class="dtl-subtitle">Kategori</h4>
            <p>${restaurant.categories.map((kategori) => `${kategori.name}`).join(' ')}</p>
        <h4 class="dtl-subtitle">Makanan</h4>
            <p>${restaurant.menus.foods.map((food) => `${food.name}`)} </p>
        <h4 class="dtl-subtitle">Minuman</h4>
            <p>${restaurant.menus.drinks.map((drink) => `${drink.name}`)} </p>
        </div>
            <br>
    </div>
    <div class="dtl-restaurant-info">
      <h3 class="dtl-information">Customer Reviews</h3>
      <div class="post">
      ${restaurant.customerReviews.map((review) => `
      <div class="dtl-review">
        <b class="dtl-subtitle">${review.name}</b>
        <p>${review.date}</b>
        <p>${review.review}</b>
      </div>
      `).join('')}
      </div>
    </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  restaurantItemTemp,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};

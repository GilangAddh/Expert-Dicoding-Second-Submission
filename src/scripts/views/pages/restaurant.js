import RestaurantSource from '../../data/data-restaurant-source';
import { restaurantItemTemp } from '../templates/template-creator';

const restaurant = {
  async render() {
    return `
        <div class="hero">
    <div class="hero-text">
      <h1 class="hero-title">Selamat Datang Di Warung Wareug</h1>

      <p class="hero-subtitle">
        Bayar Secukupnya Makan Sewaregnya
      </p>
    </div>
  </div>
        <div class="content" id="main-content">
      <h2 class="post-title" >Restoran Wareug Kami</h2>
      <section class="post" id="posts">
        
      </section>
    </div>`;
  },
  async afterRender() {
    const restaurants = await RestaurantSource.restaurantSourceList();
    const restaurantContainer = document.querySelector('#posts');
    restaurants.forEach((resto) => {
      restaurantContainer.innerHTML += restaurantItemTemp(resto);
    });
  },
};

export default restaurant;

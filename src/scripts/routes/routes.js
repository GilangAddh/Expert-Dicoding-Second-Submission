import restaurant from '../views/pages/restaurant';
import detail from '../views/pages/detail';
import favorite from '../views/pages/favorite';

const routes = {
  '/': restaurant,
  '/restaurant': restaurant,
  '/detail/:id': detail,
  '/favorite': favorite,
};

export default routes;

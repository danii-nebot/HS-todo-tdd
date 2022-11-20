import MOVIES from '@/assets/movies.json';

function getMovies() {
  return MOVIES.slice();
}
export default {
  getMovies,
};
